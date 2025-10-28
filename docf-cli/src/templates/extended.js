// 扩展模板 - 基于 Vibe Coding 研究添加的完整生命周期文档模板

module.exports = {
  // 需求文档扩展
  'requirements/project-overview.md': `# 项目概览

## 项目简介

**项目名称**：

**项目背景**：

**核心目标**：

## 目标用户

## 市场定位

## 关键指标

## 时间计划

`,
  
  'requirements/user-personas.md': `# 用户画像

## 用户画像模板

### 用户角色1：角色名称

**基本信息**：
- 年龄：
- 职业：
- 收入水平：

**使用场景**：
- 场景1
- 场景2

**需求痛点**：
- 痛点1
- 痛点2

**期望功能**：
- 功能1
- 功能2

`,
  
  'requirements/competitive-analysis.md': `# 竞品分析

## 竞品列表

### 竞品1：产品名称

**产品定位**：

**核心功能**：

**优势**：
- 优势1
- 优势2

**劣势**：
- 劣势1
- 劣势2

**我们的差异化**：

---
`,
  
  'requirements/success-metrics.md': `# 成功指标

## 关键指标（KPI）

### 用户指标
- DAU（日活用户）：
- MAU（月活用户）：
- 用户留存率：

### 业务指标
- 转化率：
- 收入目标：
- 订单量：

### 技术指标
- 系统可用性：
- 响应时间：
- 错误率：

`,
  
  // 规划文档
  'plan/README.md': `# 规划文档

本目录详情项目规划和迭代计划。

## 文档结构

- \`roadmap.md\` - 产品路线图
- \`milestones.md\` - 里程碑定义
- \`sprints/\` - 迭代计划
- \`tasks/\` - 任务分解

`,
  
  'plan/roadmap.md': `# 产品路线图

## Q1 2024

### 核心功能
- 功能1
- 功能2

### 目标
- 目标1
- 目标2

## Q2 2024

### 核心功能
- 功能1
- 功能2

`,
  
  'plan/milestones.md': `# 里程碑定义

## Milestone 1.0 - MVP

**目标日期**：

**关键功能**：
- [ ] 功能1
- [ ] 功能2
- [ ] 功能3

**验收标准**：

是要达成的条件，例如：
- 基本功能可用
- 通过核心测试用例

## Milestone 2.0

`,

  'plan/sprints/sprint-template.md': `# Sprint 名称

## 目标

## 时间范围
- 开始日期：
- 结束日期：

## 任务列表
- [ ] 任务1
- [ ] 任务2
- [ ] 任务3

## 风险与障碍

## 回顾总结
`,
  
  'plan/tasks/task-template.md': `# 任务名称

## 任务描述

## 任务分解
1. 子任务1
2. 子任务2

## 负责人

## 预计工时

## 依赖项

## 验收标准
`,
  
  // 开发文档
  'development/README.md': `# 开发文档

本目录包含开发规范和协作流程文档。

## 文档结构

- \`coding-standards.md\` - 编码规范
- \`git-workflow.md\` - Git 工作流
- \`ai-interaction.md\` - AI 交互记录
- \`code-reviews/\` - 代码审查记录

`,
  
  'development/coding-standards.md': `# 编码规范

## 命名规范

### 变量命名
- 使用驼峰命名：\`userName\`
- 布尔值使用 is/has 前缀：\`isActive\`

### 函数命名
- 使用动词开头：\`getUserInfo()\`

## 代码风格

### 缩进
- 使用 2 空格缩进

### 注释
- 函数必须有 JSDoc 注释
- 复杂逻辑必须有行内注释

## 提交规范

遵循 [Conventional Commits](https://www.conventionalcommits.org/)

- \`feat:\` 新功能
- \`fix:\` Bug 修复
- \`docs:\` 文档更新
- \`refactor:\` 重构
- \`test:\` 测试相关

`,
  
  'development/git-workflow.md': `# Git 工作流

## 分支策略

### 主分支
- \`main\` - 生产环境分支
- \`develop\` - 开发分支

### 功能分支
- \`feature/功能名称\` - 新功能
- \`bugfix/问题描述\` - Bug 修复
- \`hotfix/紧急修复\` - 紧急修复

## 工作流程

1. 从 \`develop\` 创建功能分支
2. 在功能分支上开发和提交
3. 完成开发后创建 Pull Request
4. Code Review 通过后合并到 \`develop\`
5. 测试通过后合并到 \`main\`

`,
  
  'development/ai-interaction.md': `# AI 交互记录

遵循 ICCM（迭代式对话协作）模式，记录与 AI 的交互过程。

## 交互记录模板

### 任务1：功能名称

**需求描述**：
简要描述需要实现的功能

**AI Prompt**：
\`\`\`
你对 AI 发出的提示词
\`\`\`

**AI 响应**：
AI 返回的内容摘要

**人工审查**：
- ✅ 通过
- ❌ 需要修改

**修改意见**：
如果有修改，记录修改内容

**最终结果**：
记录最终采用的方案

---
`,
  
  'development/code-reviews/review-template.md': `# 代码审查 - PR #123

## 审查信息
- 审查人：
- 审查日期：
- PR 链接：

## 审查结果
- [ ] 通过
- [ ] 需要修改

## 审查要点

### 功能完整性
- [ ] 功能按需求实现
- [ ] ACM覆盖

### 代码质量
- [ ] 符合编码规范
- [ ] 无重复代码
- [ ] 有适当的注释

### 测试
- [ ] 有单元测试
- [ ] 测试通过

### 安全
- [ ] 无安全隐患
- [ ] 敏感信息已处理

## 修改建议

## 批准人签名
`,
  
  // 测试文档
  'testing/README.md': `# 测试文档

遵循 TDM（测试驱动模式），先写测试再开发。

## 文档结构

- \`test-strategy.md\` - 测试策略
- \`test-plan.md\` - 测试计划
- \`test-cases/\` - 测试用例
- \`bug-tracking.md\` - Bug 跟踪

`,
  
  'testing/test-strategy.md': `# 测试策略

## 测试金字塔

\`\`\`
        /\\
       /  \\
      /集成\\
     / 测试 \\
    /----------\\
   /   单元测试   \\
  /--------------\\
\`\`\`

## 测试层次

### 单元测试
- 覆盖率目标：80%
- 工具：Jest / pytest
- 负责人员：开发工程师

### 集成测试
- 覆盖率目标：60%
- 工具：Jest / pytest
- 负责人员：测试工程师

### E2E 测试
- 覆盖率目标：核心流程
- 工具：Playwright / Cypress
- 负责人员：QA

`,
  
  'testing/test-plan.md': `# 测试计划

## 测试范围

### 功能测试
- [ ] 功能1
- [ ] 功能2

### 性能测试
- [ ] 响应时间
- [ ] 并发处理

### 安全测试
- [ ] 权限验证
- [ ] 数据加密

## 测试环境
- 开发环境
- 测试环境
- 预发布环境

`,
  
  'testing/test-cases/unit-tests.md': `# 单元测试用例

## 模块名称：模块A

### 测试用例 1：函数名_输入_预期输出

**描述**：

**输入**：

**预期输出**：

**测试代码**：
\`\`\`javascript
describe('函数名', () => {
  it('应该返回正确结果', () => {
    expect(funcName(input)).toBe(expectedOutput);
  });
});
\`\`\`

---
`,
  
  'testing/test-cases/integration-tests.md': `# 集成测试用例

## 接口测试

### API 1：用户登录

**请求**：
\`\`\`
POST /api/v1/auth/login
{
  "username": "test",
  "password": "123456"
}
\`\`\`

**预期响应**：
\`\`\`json
{
  "code": 200,
  "data": {
    "token": "..."
  }
}
\`\`\`

**测试步骤**：
1. 准备Authentication data
2. 发送请求
3. 验证响应

---
`,
  
  'testing/test-cases/e2e-tests.md': `# E2E 测试用例

## 场景：用户登录流程

**步骤**：
1. 打开登录页面
2. 输入用户名和密码
3. 点击登录按钮
4. 验证跳转到首页

**测试代码**：
\`\`\`javascript
test('用户登录', async ({ page }) => {
  await page.goto('/login');
  await page.fill('#username', 'test');
  await page.fill('#password', '123456');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('/home');
});
\`\`\`

---
`,
  
  'testing/bug-tracking.md': `# Bug 跟踪

## Bug 模板

### Bug #001

**标题**：

**严重程度**：高/中/低

**优先级**：高/中/低

**发现日期**：

**发现人**：

**描述**：
详细描述 Bug 的现象

**复现步骤**：
1. 步骤1
2. 步骤2
3. 步骤3

**预期行为**：

**实际行为**：

**环境信息**：
- 浏览器：
- 操作系统：

**状态**：待修复 / 修复中 / 已修复

---
`,
  
  // 上下文管理（CEM 支持）
  'contexts/README.md': `# 上下文管理

支持上下文增强（CEM）模式，管理项目知识供 AI 使用。

## 文档结构

- \`project-index.md\` - 项目索引
- \`code-index.md\` - 代码库索引
- \`domain-knowledge.md\` - 领域知识
- \`ai-prompt-library.md\` - AI 提示词库

`,
  
  'contexts/project-index.md': `# 项目索引

为 AI 提供项目快速概览，支持括上下文检索。

## 项目摘要

**项目类型**：
**技术栈**：
**主要功能**：

## 核心目录

### 前端 (frontend/)
- 主要框架：
- 核心组件：
- 状态管理：

### 后端 (backend/)
- 主要技术：
- 核心服务：
- 数据库：

## 快速链接

- 架构设计：[../designs/architecture.md](../designs/architecture.md)
- API 文档：[../designs/api-design.md](../designs/api-design.md)
- 部署指南：[../deployment/README.md](../deployment/README.md)

`,
  
  'contexts/code-index.md': `# 代码库索引

索引代码库结构和常用代码模式。

## 代码结构

\`\`\`
src/
├── components/       # React 组件
├── services/        # API 服务
├── utils/           # 工具函数
└── stores/          # 状态管理
\`\`\`

## 常用模式

### 模式1：API 调用
\`\`\`typescript
// 位置：src/services/api.ts
export async function fetchData(url: string) {
  const response = await fetch(url);
  return response.json();
}
\`\`\`

### 模式2：组件定义
\`\`\`tsx
// 位置：src/components/Example.tsx
export const Example: React.FC = () => {
  return <div>...</div>;
};
\`\`\`

## 命名规范

参考：[../development/coding-standards.md](../development/coding-standards.md)

`,
  
  'contexts/domain-knowledge.md': `# 领域知识

记录业务领域知识和术语表。

## 核心概念

### 概念1
**定义**：

**业务规则**：

## 术语表

| 术语 | 定义 |
|------|------|
| 术语1 | 定义 |
| 术语2 | 定义 |

`,
  
  'contexts/ai-prompt-library.md': `# AI 提示词库

收集项目中常用的 AI 提示词模板。

## 代码生成类

### 生成 API 服务
\`\`\`
参考 api-design.md 中的API定义，生成对应的 TypeScript API 服务代码
要求：
- 使用 fetch API
- 添加错误处理
- 返回类型定义
\`\`\`

### 生成 React 组件
\`\`\`
根据 user-stories.md 中的需求，生成 React 组件
要求：
- 使用 TypeScript
- 遵循项目编码规范
- 包含 props 旁注
\`\`\`

## 调试类

### 定位 Bug
\`\`\`
描述遇到的问题和错误信息，让 AI 帮助分析可能的原因
提供：错误日志、相关代码、复现步骤
\`\`\`

## 重构类

### 代码优化
\`\`\`
分析给定代码的性能问题，提出优化建议
关注：时间复杂度、内存使用、代码可读性
\`\`\`

`,
  
  // 部署文档
  'deployment/README.md': `# 部署文档

## 文档结构

- \`environments.md\` - 环境配置
- \`ci-cd.md\` - CI/CD 配置
- \`docker.md\` - 容器化配置
- \`monitoring.md\` - 监控方案
- \`security.md\` - 安全策略

`,
  
  'deployment/environments.md': `# 环境配置

## 环境列表

### 开发环境
- URL：
- 数据库：
- 用途：本地开发测试

### 测试环境
- URL：
- 数据库：
- 用途：QA 测试

### 预发布环境
- URL：
- 数据库：
- 用途：发布前验证

### 生产环境
- URL：
- 数据库：
- 用途：线上服务

`,
  
  'deployment/ci-cd.md': `# CI/CD 配置

## 持续集成流程

### 触发条件
- Push 到 main 分支
- 创建 Tag
- 手动触发

### 构建步骤
1. 安装依赖
2. 运行测试
3. 构建产物
4. 部署到环境

## 配置文件

### GitHub Actions
\`.github/workflows/deploy.yml\`

### Jenkins Pipeline
\`Jenkinsfile\`

`,
  
  'deployment/docker.md': `# 容器化配置

## Docker 配置

### Dockerfile
\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

### Docker Compose
\`docker-compose.yml\`

### 镜像管理
- 镜像仓库：
- 镜像标签策略：

`,
  
  'deployment/monitoring.md': `# 监控方案

## 监控指标

### 应用指标
- 请求量
- 响应时间
- 错误率
- 成功率

### 系统指标
- CPU 使用率
- 内存使用率
- 磁盘I/O
- 网络流量

## 监控工具

- APM：New Relic / DataDog
- 日志：ELK Stack
- 告警：PagerDuty

`,
  
  'deployment/security.md': `# 安全策略

## 安全防护

### 认证授权
- JWT Token
- OAuth 2.0

### 数据加密
- 传输加密：HTTPS
- 数据加密：AES-256

### 访问控制
- API 限流
- IP 白名单

## 安全扫描

- 依赖漏洞扫描：npm audit
- 代码安全扫描：SonarQube
- 容器安全扫描：Trivy

`,
  
  // 运维文档
  'operations/README.md': `# 运维文档

## 文档结构

- \`runbooks.md\` - 运行手册
- \`incident-response.md\` - 事故响应
- \`performance-tuning.md\` - 性能调优

`,
  
  'operations/runbooks.md': `# 运行手册

## 日常运维

### 服务启动
\`\`\`bash
docker-compose up -d
\`\`\`

### 服务停止
\`\`\`bash
docker-compose down
\`\`\`

### 查看日志
\`\`\`bash
docker-compose logs -f
\`\`\`

### 健康检查
\`\`\`bash
curl http://localhost:3000/health
\`\`\`

## 常见问题

### 问题1：服务无法启动
**解决方案**：
1. 检查端口占用
2. 检查配置文件

---
`,
  
  'operations/incident-response.md': `# 事故响应流程

## 事故分级

### P0 - 紧急
- 影响：服务完全不可用
- 响应时间：15分钟
- 处理时间：1小时

### P1 - 高优先级
- 影响：核心功能受影响
- 响应时间：1小时
- 处理时间：4小时

### P2 - 中优先级
- 影响：非核心功能受影响
- 响应时间：4小时
- 处理时间：24小时

## 处理流程

1. 确认事故
2. 通知相关人员
3. 隔离故障
4. 修复问题
5. 事后总结

`,
  
  'operations/performance-tuning.md': `# 性能调优

## 性能目标

- 首屏加载时间：< 2秒
- API 响应时间：< 200ms
- 数据库查询时间：< 100ms

## 优化策略

### 前端优化
- 代码分割
- 懒加载
- CDN 加速

### 后端优化
- 缓存策略
- 数据库索引
- 连接池优化

## 性能监控

定期检查性能指标，识别瓶颈。

`
};

