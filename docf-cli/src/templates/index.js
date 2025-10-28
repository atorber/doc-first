const path = require('path');

// 完整的产品研发全生命周期文档模板
module.exports = {
  // 需求文档
  'requirements/README.md': `# 需求文档

本目录包含项目需求文档，包括用户故事、功能需求和非功能需求。

## 📋 文档结构

- \`project-overview.md\` - 项目概览
- \`user-stories.md\` - 用户故事
- \`user-personas.md\` - 用户画像
- \`functional-requirements.md\` - 功能需求
- \`non-functional-requirements.md\` - 非功能需求
- \`competitive-analysis.md\` - 竞品分析
- \`success-metrics.md\` - 成功指标

## 🎯 编写规范

遵循「文档即代码」原则，所有文档使用 Markdown 格式。

`,

  'requirements/user-stories.md': `# 用户故事

## 格式说明

用户故事采用"作为...我希望...以便..."的格式：

\`\`\`
作为 [角色]，我希望 [功能]，以便 [价值]
\`\`\`

---

## 用户故事列表

### 示例

- 作为用户，我希望能够快速搜索产品，以便找到我需要的商品
- 作为管理员，我希望能够管理用户权限，以便控制系统访问

---

在这里添加你的用户故事...
`,

  'requirements/functional-requirements.md': `# 功能需求

## 功能模块

### 1. [功能模块名称]

**描述**：简要描述该功能模块

**优先级**：高/中/低

**输入**：
- 输入项1
- 输入项2

**处理**：
- 处理逻辑1
- 处理逻辑2

**输出**：
- 输出项1
- 输出项2

**验收标准**：
- [ ] 标准1
- [ ] 标准2

---

在这里添加你的功能需求...
`,

  'requirements/non-functional-requirements.md': `# 非功能需求

## 性能要求

- **响应时间**：
- **并发用户数**：
- **吞吐量**：

## 安全要求

- **数据加密**：
- **认证授权**：
- **安全审计**：

## 可用性要求

- **正常运行时间**：
- **故障恢复时间**：
- **数据备份策略**：

## 兼容性要求

- **浏览器支持**：
- **操作系统**：
- **设备适配**：

## 可维护性要求

- **代码规范**：
- **文档完整性**：
- **测试覆盖率**：
`,

  // 设计文档
  'designs/README.md': `# 设计文档

本目录包含项目的技术设计文档，包括架构设计、API设计和数据库设计。

## 📋 文档结构

- \`architecture.md\` - 系统架构设计
- \`api-design.md\` - API 设计文档
- \`database-design.md\` - 数据库设计
- \`adr/\` - 架构决策记录（ADR）

## 🎯 编写规范

设计文档需要包含决策记录（ADR）和架构图例，推荐使用 Mermaid 绘制架构图。

`,

  'designs/architecture.md': `# 系统架构设计

## 整体架构

使用 Mermaid 绘制架构图：

\`\`\`mermaid
graph TB
    A[前端应用] --> B[API Gateway]
    B --> C[业务服务层]
    C --> D[数据访问层]
    D --> E[数据库]
    C --> F[缓存层]
\`\`\`

## 技术栈

### 前端
- 框架：React + TypeScript
- UI组件：Ant Design Pro
- 状态管理：
- 路由：

### 后端
- 语言：Python / Node.js
- 框架：
- 数据库：
- 缓存：

### 基础设施
- 容器化：Docker
- 编排：Kubernetes
- CI/CD：

## 模块划分

### 核心模块
- \`module1\` - 描述
- \`module2\` - 描述

### 依赖关系

\`\`\`mermaid
graph LR
    A[模块A] --> B[模块B]
    B --> C[模块C]
\`\`\`

## 扩展点

列出系统的可扩展点和插件机制。
`,

  'designs/api-design.md': `# API 设计文档

## 设计原则

- RESTful 风格
- 统一的错误处理
- 版本控制

## API 规范

### 基础信息

- **Base URL**: \`https://api.example.com/v1\`
- **认证方式**: Bearer Token
- **数据格式**: JSON

## API 列表

### 1. 用户管理

#### 1.1 用户登录

\`\`\`
POST /api/v1/auth/login
\`\`\`

**请求体**：
\`\`\`json
{
  "username": "string",
  "password": "string"
}
\`\`\`

**响应**：
\`\`\`json
{
  "code": 200,
  "message": "success",
  "data": {
    "token": "string",
    "user": {
      "id": "string",
      "username": "string"
    }
  }
}
\`\`\`

---

在这里添加你的 API 设计...

## 错误码规范

| 错误码 | 说明 |
|--------|------|
| 200    | 成功 |
| 400    | 请求参数错误 |
| 401    | 未授权 |
| 403    | 禁止访问 |
| 404    | 资源不存在 |
| 500    | 服务器内部错误 |
`,

  'designs/database-design.md': `# 数据库设计

## 数据库选择

- **类型**: 关系型数据库（如 PostgreSQL / MySQL）
- **版本**: 
- **字符集**: UTF-8

## ER 图

使用 Mermaid 绘制 ER 图：

\`\`\`mermaid
erDiagram
    USERS ||--o{ ORDERS : places
    ORDERS ||--|{ ORDER_ITEMS : contains
    PRODUCTS ||--o{ ORDER_ITEMS : "ordered in"
    
    USERS {
        string id PK
        string username
        string email
        datetime created_at
    }
    
    ORDERS {
        string id PK
        string user_id FK
        datetime created_at
    }
\`\`\`

## 表结构设计

### users 用户表

| 字段名 | 类型 | 约束 | 说明 |
|--------|------|------|------|
| id | VARCHAR(36) | PK | 用户ID |
| username | VARCHAR(50) | UNIQUE, NOT NULL | 用户名 |
| email | VARCHAR(100) | UNIQUE, NOT NULL | 邮箱 |
| password_hash | VARCHAR(255) | NOT NULL | 密码哈希 |
| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 创建时间 |
| updated_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | 更新时间 |

**索引**：
- \`idx_username\` ON (username)
- \`idx_email\` ON (email)

---

在这里添加你的表设计...

## 数据迁移策略

- 版本控制
- 回滚机制
- 数据备份
`,

  'designs/adr/README.md': `# 架构决策记录 (ADR)

## 什么是 ADR？

架构决策记录（Architecture Decision Records）是记录项目中重要架构决策的文档。

## ADR 模板

### ADR-001: [决策标题]

**状态**: 已采纳 / 已弃用 / 待定

**上下文**：
描述需要做决策的上下文和场景。

**决策**：
记录所做的架构决策。

**结果**：
说明决策的后果和影响。

**替代方案**：
列出考虑过的其他方案及为什么没有选择它们。

---

## ADR 列表

1. [ADR-001: 决策标题](\`0001-decision-title.md\`)

在这里添加你的架构决策记录...
`,

  'designs/adr/0001-template.md': `# ADR-001: [决策标题]

**状态**: 待定

**日期**: 2024-01-01

**参与者**: 团队成员

## 上下文

描述需要做这个架构决策的背景和原因。

## 决策

我们决定...

## 结果

### 积极影响
- 影响1
- 影响2

### 负面影响
- 影响1
- 影响2

### 技术债务
- 技术债务1

## 替代方案

### 方案 A
- 优点
- 缺点
- 未选择的原因

### 方案 B
- 优点
- 缺点
- 未选择的原因
`,

  // 参考资料
  'references/README.md': `# 参考资料

本目录存放第三方 API 文档、技术参考资料和学习资源。

## 📚 目录说明

- **api-docs/** - 第三方服务 API 文档
- **articles/** - 技术文章和最佳实践
- **tutorials/** - 教程和学习资源

## 🔗 快速链接

- [官方文档]()
- [API 文档]()
- [设计资源]()
`
};

