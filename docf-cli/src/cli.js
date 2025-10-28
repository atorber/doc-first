#!/usr/bin/env node

const { program } = require('commander');
const initCommand = require('./commands/init');
const chalk = require('chalk');

program
  .name('docf')
  .description('DOC FIRST - Document-Driven Development CLI')
  .version('1.0.0');

program
  .command('init')
  .description('初始化文档目录结构')
  .option('-f, --force', '强制覆盖已存在的目录')
  .option('-e, --extended', '使用完整生命周期模板（包含规划、测试、部署等）')
  .action((options) => {
    initCommand(options);
  });

program.parse(process.argv);

