# 使用示例

## 基础使用

### 初始化文档目录

\`\`\`bash
# 在当前目录初始化
docf init
\`\`\`

输出：
\`\`\`
🚀 初始化 DOC FIRST 文档目录...

📁 创建目录结构...
   ✓ 创建 requirements/
   ✓ 创建 designs/
   ✓ 创建 references/

📄 生成文档模板...
   ✓ 创建 requirements/README.md
   ✓ 创建 requirements/user-stories.md
   ✓ 创建 requirements/functional-requirements.md
   ✓ 创建 requirements/non-functional-requirements.md
   ✓ 创建 designs/README.md
   ✓ 创建 designs/architecture.md
   ✓ 创建 designs/api-design.md
   ✓ 创建 designs/database-design.md
   ✓ 创建 designs/adr/README.md
   ✓ 创建 designs/adr/0001-template.md
   ✓ 创建 references/README.md

✅ 文档目录初始化完成！

📝 接下来你可以：
   1. 在 .docs/requirements/ 中编写需求文档
   2. 在 .docs/designs/ 中编写设计文档
   3. 开始你的 vibe coding 之旅
\`\`\`

## 目录已存在

如果目录已存在，会提示错误：

\`\`\`bash
docf init
\`\`\`

输出：
\`\`\`
🚀 初始化 DOC FIRST 文档目录...

❌ .docs 目录已存在，请使用 -f 或 --force 强制覆盖
\`\`\`

## 强制覆盖

使用 `--force` 或 `-f` 参数强制覆盖已存在的目录：

\`\`\`bash
docf init --force
\`\`\`

或

\`\`\`bash
docf init -f
\`\`\`

输出：
\`\`\`
🚀 初始化 DOC FIRST 文档目录...

⚠️  强制覆盖已存在的 .docs 目录...
📁 创建目录结构...
...
\`\`\`

## 在现有项目中集成

### 1. 安装 CLI 工具

\`\`\`bash
cd your-project
cd docf-cli
./setup.sh
cd ..
\`\`\`

### 2. 初始化文档结构

\`\`\`bash
docf init
\`\`\`

### 3. 开始编写文档

按照生成的模板填写需求文档和设计文档，然后开始开发。

### 4. 添加到版本控制

\`\`\`bash
git add .docs/
git commit -m "docs: 初始化项目文档结构"
\`\`\`

## 与 AI IDE 配合使用

1. 使用 `docf init` 初始化文档结构
2. 在文档中编写需求和设计
3. 在 AI IDE（如 Cursor）中打开项目
4. 让 AI 根据文档生成代码
5. 迭代完善文档和代码

## 最佳实践

- 每个功能模块都从编写需求文档开始
- 在 ADR 中记录重要的架构决策
- 使用 Mermaid 图表增强文档可读性
- 定期更新文档保持与代码同步

