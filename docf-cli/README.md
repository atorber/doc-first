# @doc-first/cli

DOC FIRST 文档驱动开发 CLI 工具

## 📦 安装

### 快速安装（推荐）

使用一键安装脚本：

\`\`\`bash
cd docf-cli
./setup.sh
\`\`\`

### 手动安装

#### 从源码安装

\`\`\`bash
cd docf-cli
npm install
npm link
\`\`\`

#### 全局安装（发布后）

\`\`\`bash
npm install -g @doc-first/cli
\`\`\`

#### 本地安装

\`\`\`bash
npm install @doc-first/cli --save-dev
\`\`\`

## 🚀 使用

### 初始化文档目录

在当前目录初始化文档目录结构：

\`\`\`bash
docf init
\`\`\`

如果目录已存在，使用 \`--force\` 或 \`-f\` 强制覆盖：

\`\`\`bash
docf init --force
\`\`\`

### 目录结构

运行 \`docf init\` 后，会在当前目录生成以下结构：

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

## 📝 命令

### \`docf init\`

初始化文档目录结构

**选项**:
- \`-f, --force\` - 强制覆盖已存在的目录

**示例**:
\`\`\`bash
docf init
docf init --force
\`\`\`

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 License

MIT
`,

