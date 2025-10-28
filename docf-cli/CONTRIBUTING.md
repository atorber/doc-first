# 贡献指南

感谢你对 DOC FIRST CLI 项目的关注！我们欢迎任何形式的贡献。

## 如何贡献

### 报告问题

如果你发现了一个 bug 或想要提出新功能，请：

1. 检查 [Issues](https://github.com/your-repo/issues) 确认问题未被提出
2. 创建一个新的 Issue，详细描述问题或功能需求
3. 提供复现步骤（如果是 bug）

### 提交代码

1. Fork 这个仓库
2. 创建特性分支：\`git checkout -b feature/amazing-feature\`
3. 提交更改：\`git commit -m 'Add some amazing feature'\`
4. 推送到分支：\`git push origin feature/amazing-feature\`
5. 开启 Pull Request

### 代码规范

- 使用 ESLint 检查代码
- 遵循现有的代码风格
- 添加必要的注释
- 更新相关文档

## 开发环境设置

\`\`\`bash
# 克隆仓库
git clone https://github.com/your-repo/doc-first.git
cd doc-first/docf-cli

# 安装依赖
npm install

# 链接到全局
npm link

# 测试
docf init --force
\`\`\`

## 项目结构

\`\`\`
docf-cli/
├── src/
│   ├── cli.js              # CLI 入口
│   ├── index.js            # 模块导出
│   ├── commands/           # 命令实现
│   │   └── init.js         # init 命令
│   └── templates/          # 文档模板
│       └── index.js        # 模板定义
├── package.json            # 项目配置
├── README.md               # 使用说明
├── EXAMPLES.md             # 使用示例
└── setup.sh                # 安装脚本
\`\`\`

## 添加新命令

如果你想添加新命令：

1. 在 \`src/commands/\` 下创建命令文件
2. 在 \`src/cli.js\` 中注册命令
3. 更新 README.md 添加命令说明
4. 在 EXAMPLES.md 中添加使用示例

## 许可证

通过贡献代码，你同意你的贡献在 MIT 许可证下发布。

