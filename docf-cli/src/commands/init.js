const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const templates = require('../templates');
const extendedTemplates = require('../templates/extended');

function initCommand(options) {
  const docsDir = path.join(process.cwd(), '.docs');
  // 决定使用基础模板还是扩展模板
  const useExtended = options.extended || false;
  const templateSet = useExtended ? { ...templates, ...extendedTemplates } : templates;
  
  const modeText = useExtended ? '（完整模式）' : '（基础模式）';
  console.log(chalk.blue(`\n🚀 初始化 DOC FIRST 文档目录${modeText}...\n`));

  // 检查目录是否存在
  if (fs.existsSync(docsDir)) {
    if (options.force) {
      console.log(chalk.yellow('⚠️  强制覆盖已存在的 .docs 目录...'));
      fs.removeSync(docsDir);
    } else {
      console.log(chalk.red('❌ .docs 目录已存在，请使用 -f 或 --force 强制覆盖'));
      return;
    }
  }

  try {
    // 创建目录结构
    console.log(chalk.cyan('📁 创建目录结构...'));
    // 定义中文目录映射（带序号）
    const dirMapping = {
      'requirements': '01-需求文档',
      'designs': '02-设计文档',
      'references': '03-参考资料',
      'plan': '04-规划文档',
      'development': '05-开发文档',
      'testing': '06-测试文档',
      'contexts': '07-上下文管理',
      'deployment': '08-部署文档',
      'operations': '09-运维文档'
    };
    
    // 创建基础目录（带序号）
    const baseDirs = ['01-需求文档', '02-设计文档', '03-参考资料'];
    if (useExtended) {
      baseDirs.push('04-规划文档', '05-开发文档', '06-测试文档', '07-上下文管理', '08-部署文档', '09-运维文档');
    }
    
    baseDirs.forEach(dir => {
      const dirPath = path.join(docsDir, dir);
      fs.ensureDirSync(dirPath);
      console.log(chalk.green(`   ✓ 创建 ${dir}/`));
    });

    // 创建模板文件
    console.log(chalk.cyan('\n📄 生成文档模板...'));
    
    // 路径映射函数：将英文路径转换为中文路径（带序号）
    const convertPath = (filePath) => {
      const pathMappings = {
        'requirements': '01-需求文档',
        'designs': '02-设计文档',
        'references': '03-参考资料',
        'plan': '04-规划文档',
        'development': '05-开发文档',
        'testing': '06-测试文档',
        'contexts': '07-上下文管理',
        'deployment': '08-部署文档',
        'operations': '09-运维文档',
        'adr': '架构决策记录',
        'sprints': '迭代计划',
        'tasks': '任务分解',
        'test-cases': '测试用例',
        'code-reviews': '代码审查'
      };
      
      // 文件名映射
      const fileMappings = {
        // 需求文档
        'user-stories.md': '用户故事.md',
        'functional-requirements.md': '功能需求.md',
        'non-functional-requirements.md': '非功能需求.md',
        'project-overview.md': '项目概览.md',
        'user-personas.md': '用户画像.md',
        'competitive-analysis.md': '竞品分析.md',
        'success-metrics.md': '成功指标.md',
        
        // 设计文档
        'architecture.md': '系统架构.md',
        'api-design.md': 'API设计.md',
        'database-design.md': '数据库设计.md',
        '0001-template.md': '示例模板.md',
        
        // 规划文档
        'roadmap.md': '产品路线图.md',
        'milestones.md': '里程碑.md',
        'sprint-template.md': '迭代计划模板.md',
        'task-template.md': '任务模板.md',
        
        // 开发文档
        'coding-standards.md': '编码规范.md',
        'git-workflow.md': 'Git工作流.md',
        'ai-interaction.md': 'AI交互记录.md',
        'review-template.md': '代码审查模板.md',
        
        // 测试文档
        'test-strategy.md': '测试策略.md',
        'test-plan.md': '测试计划.md',
        'bug-tracking.md': 'Bug跟踪.md',
        'unit-tests.md': '单元测试.md',
        'integration-tests.md': '集成测试.md',
        'e2e-tests.md': '端到端测试.md',
        
        // 上下文管理
        'project-index.md': '项目索引.md',
        'code-index.md': '代码索引.md',
        'domain-knowledge.md': '领域知识.md',
        'ai-prompt-library.md': 'AI提示词库.md',
        
        // 部署文档
        'environments.md': '环境配置.md',
        'ci-cd.md': 'CI-CD配置.md',
        'docker.md': '容器化配置.md',
        'monitoring.md': '监控方案.md',
        'security.md': '安全策略.md',
        
        // 运维文档
        'runbooks.md': '运行手册.md',
        'incident-response.md': '事故响应.md',
        'performance-tuning.md': '性能调优.md'
      };
      
      let newPath = filePath;
      
      // 第一步：转换目录名
      for (const [en, cn] of Object.entries(pathMappings)) {
        newPath = newPath.replace(new RegExp('^' + en + '/', 'g'), cn + '/');
        newPath = newPath.replace(new RegExp('/' + en + '/', 'g'), '/' + cn + '/');
      }
      
      // 第二步：转换文件名（保留 README.md 不变）
      if (!newPath.endsWith('README.md')) {
        for (const [en, cn] of Object.entries(fileMappings)) {
          if (newPath.endsWith('/' + en) || newPath === en) {
            newPath = newPath.replace(en, cn);
            break;
          }
        }
      }
      
      return newPath;
    };
    
    Object.entries(templateSet).forEach(([filePath, content]) => {
      const chinesePath = convertPath(filePath);
      const fullPath = path.join(docsDir, chinesePath);
      // 确保父目录存在
      fs.ensureDirSync(path.dirname(fullPath));
      fs.writeFileSync(fullPath, content);
      console.log(chalk.green(`   ✓ 创建 ${chinesePath}`));
    });

    console.log(chalk.green('\n✅ 文档目录初始化完成！\n'));
    console.log(chalk.white('📝 接下来你可以：'));
    console.log(chalk.gray('   1. 在 .docs/01-需求文档/ 中编写需求'));
    console.log(chalk.gray('   2. 在 .docs/02-设计文档/ 中编写设计'));
    if (useExtended) {
      console.log(chalk.gray('   3. 在 .docs/04-规划文档/ 中制定计划'));
      console.log(chalk.gray('   4. 在 .docs/07-上下文管理/ 中管理 AI 上下文'));
    }
    console.log(chalk.gray('   开始你的 vibe coding 之旅\n'));

  } catch (error) {
    console.log(chalk.red(`\n❌ 初始化失败: ${error.message}\n`));
    process.exit(1);
  }
}

module.exports = initCommand;

