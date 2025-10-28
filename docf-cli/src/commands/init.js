const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const templates = require('../templates');

function initCommand(options) {
  const docsDir = path.join(process.cwd(), '.docs');
  
  console.log(chalk.blue(`
🚀 初始化 DOC FIRST 模块化文档目录...
`));

  // 检查目录是否存在
  if (fs.existsSync(docsDir)) {
    if (options.force) {
      console.log(chalk.yellow('⚠️  强制覆盖已存在的 .docs 目录...'));
      fs.removeSync(docsDir);
    } else {
      console.log(chalk.red('❌ .docs 目录已存在，请使用 -f 或 --force 强制覆盖。'));
      return;
    }
  }

  try {
    console.log(chalk.cyan('📁 创建目录结构并生成模板...'));

    Object.entries(templates).forEach(([filePath, content]) => {
      const fullPath = path.join(docsDir, filePath);
      // 确保父目录存在
      fs.ensureDirSync(path.dirname(fullPath));
      fs.writeFileSync(fullPath, content);
      console.log(chalk.green(`   ✓ 创建 ${filePath}`));
    });

    console.log(chalk.green(`
✅ 文档目录初始化完成！
`));
    console.log(chalk.white('📝 接下来你可以：'));
    console.log(chalk.gray('   1. 在 .docs/1_全局文档/ 中定义项目通用规范。'));
    console.log(chalk.gray('   2. 在 .docs/2_模块文档/ 中开启你的第一个功能模块。'));
    console.log(chalk.gray('   3. 在 .docs/4_AI上下文/ 中管理和优化你的AI提示词。'));
    console.log(chalk.gray(`   开始你的 vibe coding 之旅！
`));

  } catch (error) {
    console.log(chalk.red(`
❌ 初始化失败: ${error.message}
`));
    process.exit(1);
  }
}

module.exports = initCommand;
