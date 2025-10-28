# 快速使用指南

## 🚀 快速开始

### 1. 安装 CLI 工具

\`\`\`bash
cd docf-cli
./setup.sh
\`\`\`

### 2. 初始化文档目录

在任何项目中运行：

\`\`\`bash
docf init
\`\`\`

这将创建 \`.docs\` 目录，包含：
- 📋 需求文档模板
- 🏗️ 设计文档模板
- 📚 参考资料目录

## 📁 生成的结构

\`\`\`
.docs/
├── requirements/          # 需求文档
│   ├── README.md
│   ├── user-stories.md
│   ├── functional-requirements.md
│   └── non-functional-requirements.md
├── designs/               # 设计文档
│   ├── README.md
│   ├── architecture.md
│   ├── api-design.md
│   ├── database-design.md
│   └── adr/              # 架构决策记录
│       ├── README.md
│       └── 0001-template.md
└── references/            # 参考资料
    └── README.md
\`\`\`

## 📝 使用流程

### 第一步：编写需求文档

编辑 \`.docs/requirements/\` 下的文档：

1. \`user-stories.md\` - 描述用户故事
2. \`functional-requirements.md\` - 定义功能需求
3. \`non-functional-requirements.md\` - 说明非功能需求

### 第二步：编写设计文档

在 \`.docs/designs/\` 中：

1. \`architecture.md\` - 系统架构设计（包含 Mermaid 图表）
2. \`api-design.md\` - API 接口设计
3. \`database-design.md\` - 数据库设计
4. \`adr/\` - 记录重要架构决策

### 第三步：开始开发

使用 AI IDE（如 Cursor）根据文档生成代码：

1. 打开项目
2. 将需求文档和设计文档提供给 AI
3. 让 AI 生成对应的代码
4. 迭代完善

### 第四步：维护文档

- 代码变更时同步更新文档
- 在 ADR 中记录重要决策
- 保持文档与代码版本一致

## 🎯 最佳实践

### 文档编写

- ✅ 使用 Markdown 格式
- ✅ 添加 Mermaid 图表增强可读性
- ✅ 保持文档简洁清晰
- ✅ 使用列表和表格组织信息

### 版本控制

- ✅ 将文档纳入 Git 管理
- ✅ 使用有意义的 commit 消息
- ✅ 文档变更与代码变更一起提交

### 团队协作

- ✅ 定期进行文档评审
- ✅ 使用 ADR 记录重要决策
- ✅ 保持文档与代码同步

## 🔧 常用命令

\`\`\`bash
# 初始化（首次）
docf init

# 强制重新初始化
docf init --force

# 查看帮助
docf --help
\`\`\`

## 📚 更多资源

- [完整文档](README.md) - 了解完整的开发流程
- [CLI 文档](docf-cli/README.md) - CLI 工具详细说明
- [使用示例](docf-cli/EXAMPLES.md) - 更多使用示例

