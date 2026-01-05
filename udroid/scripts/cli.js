#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');

const program = new Command();

// Fix: Point to the root directory for registry and source files
const PROJECT_ROOT = path.join(__dirname, '..');
const REGISTRY_PATH = path.join(PROJECT_ROOT, 'registry.json');
const CWD = process.cwd();

async function main() {
    try {
        const registry = await fs.readJSON(REGISTRY_PATH);

        program
            .name('udroid')
            .description('CLI to add Udroid components to your project')
            .version('1.0.0');

        program
            .command('add <component>')
            .description('Add a component to your project')
            .option('-p, --path <path>', 'Destination path for components', './src/components/udroid')
            .action(async (componentName, options) => {
                const spinner = ora(`Installing ${componentName}...`).start();

                try {
                    const component = registry.items.find(item => item.name === componentName);
                    if (!component) {
                        spinner.fail(`Component "${componentName}" not found in registry.`);
                        return;
                    }

                    // 1. Install Dependencies
                    if (component.dependencies && component.dependencies.length > 0) {
                        spinner.text = `Checking dependencies: ${component.dependencies.join(', ')}...`;
                    }

                    // 2. Resolve Paths
                    const targetBaseDir = path.resolve(CWD, options.path);
                    const componentTargetDir = path.join(targetBaseDir, componentName); // e.g. src/components/udroid/button

                    // 3. Pre-flight Check: Ensure no files will be overwritten
                    // For the component itself
                    for (const file of component.files) {
                        const fileName = path.basename(file.path);
                        const targetPath = path.join(componentTargetDir, fileName);
                        // Skip check if source and target are the same (testing locally) - though this is rare in real usage
                        const sourcePath = path.join(PROJECT_ROOT, file.path);
                        if (sourcePath === targetPath) continue;

                        if (await fs.pathExists(targetPath)) {
                            spinner.fail(chalk.red(`Error: Component file already exists: ${targetPath}`));
                            console.log(chalk.yellow('To overwrite, manually delete the existing file/folder first.'));
                            return;
                        }
                    }

                    // For registry dependencies (utils) - we typically don't fail hard on utils, but checking uses logic
                    // If util exists, we usually skip or overwrite. shadcn skips. Let's keep existing logic for utils or strictly better: skip if exists

                    // 4. Copy Utils (Registry Dependencies)
                    if (component.registryDependencies) {
                        for (const depName of component.registryDependencies) {
                            const dep = registry.items.find(d => d.name === depName);
                            if (dep) {
                                for (const file of dep.files) {
                                    // Source is relative to PROJECT_ROOT
                                    const sourcePath = path.join(PROJECT_ROOT, file.path);

                                    // Determine target relative path. e.g. src/utils/cn.ts -> utils/cn.ts
                                    // We assume standard Next.js src directory structure for the target
                                    // For utils, we stick to src/utils convention often, or map properly.
                                    // Assuming src/utils for now as per previous logic.
                                    const relPath = file.path.replace('src/', '');
                                    const targetPath = path.join(CWD, 'src', relPath);

                                    // Skip if source and target are the same
                                    if (sourcePath === targetPath) continue;

                                    if (await fs.pathExists(targetPath)) {
                                        // Silent skip or warn. Usually better to skip utils if they exist to preserve user changes.
                                        // spinner.info(`Skipping existing util: ${path.basename(targetPath)}`);
                                    } else {
                                        await fs.ensureDir(path.dirname(targetPath));
                                        if (await fs.pathExists(sourcePath)) {
                                            await fs.copy(sourcePath, targetPath);
                                        }
                                    }
                                }
                            }
                        }
                    }


                    // 5. Copy Component Files (Now safe to copy)
                    await fs.ensureDir(componentTargetDir);

                    for (const file of component.files) {
                        const sourcePath = path.join(PROJECT_ROOT, file.path);
                        const fileName = path.basename(file.path);
                        const targetPath = path.join(componentTargetDir, fileName);

                        if (sourcePath === targetPath) continue;

                        if (await fs.pathExists(sourcePath)) {
                            await fs.copy(sourcePath, targetPath);
                        } else {
                            spinner.fail(`Error: Source file not found: ${sourcePath}`);
                            return;
                        }
                    }

                    spinner.succeed(chalk.green(`Successfully added ${component.title} to ${componentTargetDir}`));

                    if (component.dependencies && component.dependencies.length > 0) {
                        console.log(chalk.yellow(`\nDon't forget to install dependencies:`));
                        console.log(chalk.cyan(`npm install ${component.dependencies.join(' ')}`));
                    }

                } catch (error) {
                    spinner.fail(`Failed to add component: ${error.message}`);
                }
            });

        // List command
        program
            .command('list')
            .description('List all available components')
            .action(() => {
                console.log(chalk.bold.blue('\nAvailable Components:'));
                registry.items.filter(i => i.type.startsWith('registry:ui')).forEach(item => {
                    console.log(`- ${chalk.cyan(item.name)}: ${item.description}`);
                });
                console.log('');
            });

        program.parse(process.argv);
    } catch (err) {
        console.error(chalk.red('Error reading registry.json. Make sure you are running this from the right directory.'));
        console.error(err);
    }
}

main();
