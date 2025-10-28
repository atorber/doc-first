# 目录结构中文化说明

## 🎯 变更概述

为了更好适配中文用户的使用习惯，DOC FIRST 现已将所有文档目录名称改为中文。

## 📁 目录映射关系

### 基础目录映射（带序号）

| 旧目录名（英文） | 新目录名（中文） | 序号 |
|----------------|----------------|------|
| `requirements/` | `01-需求文档/` | 01 |
| `designs/` | `02-设计文档/` | 02 |
| `references/` | `03-参考资料/` | 03 |

### 扩展目录映射（带序号）

| 旧目录名（英文） | 新目录名（中文） | 序号 |
|----------------|----------------|------|
| `plan/` | `04-规划文档/` | 04 |
| `development/` | `05-开发文档/` | 05 |
| `testing/` | `06-测试文档/` | 06 |
| `contexts/` | `07-上下文管理/` | 07 |
| `deployment/` | `08-部署文档/` | 08 |
| `operations/` | `09-运维文档/` | 09 |

### 子目录映射

| 旧子目录名（英文） | 新子目录名（中文） |
|------------------|------------------|
| `adr/` | `架构决策记录/` |
| `sprints/` | `迭代计划/` |
| `tasks/` | `任务分解/` |
| `code-reviews/` | `代码审查/` |
| `test-cases/` | `测试用例/` |

## 📂 完整中文目录结构

```
.docs/
├── 01-需求文档/                     # 需求文档
│   ├── README.md
│   ├── project-overview.md       # 项目概览
│   ├── user-stories.md           # 用户故事
│   ├── user-personas.md          # 用户画像
│   ├── functional-requirements.md # 功能需求
│   ├── non-functional-requirements.md # 非功能需求
│   ├── competitive-analysis.md   # 竞品分析
│   └── success-metrics.md        # 成功指标
│
├── 02-设计文档/                     # 设计文档
│   ├── README.md
│   ├── architecture.md           # 系统架构
│   ├── api-design.md             # API 设计
│   ├── database-design.md        # 数据库设计
│   └── 架构决策记录/             # ADR
│       ├── README.md
│       └── 0001-template.md
│
├── 03-参考资料/                     # 参考资料
│   └── README.md
│
├── 04-规划文档/                     # 规划文档
│   ├── README.md
│   ├── roadmap.md                # 产品路线图
│   ├── milestones.md             # 里程碑
│   ├── 迭代计划/                 # Sprints
│   │   └── sprint-template.md
│   └── 任务分解/                 # Tasks
│       └── task-template.md
│
├── 05-开发文档/                     # 开发文档
│   ├── README.md
│   ├── coding-standards.md       # 编码规范
│   ├── git-workflow.md           # Git 工作流
│   ├── ai-interaction.md         # AI 交互记录
│   └── 代码审查/                 # Code Reviews
│       └── review-template.md
│
├── 06-测试文档/                     # 测试文档
│   ├── README.md
│   ├── test-strategy.md          # 测试策略
│   ├── test-plan.md              # 测试计划
│   ├── bug-tracking.md           # Bug 跟踪
│   └── 测试用例/                 # Test Cases
│       ├── unit-tests.md
│       ├── integration-tests.md
│       └── e2e-tests.md
│
├── 07-上下文管理/                   # 上下文管理
│   ├── README.md
│   ├── project-index.md          # 项目索引
│   ├── code-index.md             # 代码索引
│   ├── domain-knowledge.md       # 领域知识
│   └── ai-prompt-library.md      # AI 提示词库
│
├── 08-部署文档/                     # 部署文档
│   ├── README.md
│   ├── environments.md           # 环境配置
│   ├── ci-cd.md                  # CI/CD
│   ├── docker.md                 # Docker
│   ├── monitoring.md             # 监控方案
│   └── security.md               # 安全策略
│
└── 09-运维文档/                     # 运维文档
    ├── README.md
    ├── runbooks.md               # 运行手册
    ├── incident-response.md      # 事故响应
    └── performance-tuning.md     # 性能调优
```

## 🚀 使用方法

### 使用中文目录

运行 CLI 工具生成文档：

```bash
# 基础模式
docf init

# 完整模式
docf init --extended
```

### 优势

✅ **更直观**：中文目录名一目了然  
✅ **易理解**：符合中文使用习惯  
✅ **易维护**：团队成员更容易理解和定位  
✅ **好记忆**：不需要翻译对应关系  

## 📝 注意事项

1. **文件链接**：如果文档中有内部链接，确保使用中文路径
2. **脚本引用**：在 CI/CD 脚本中引用文档路径时需要使用中文路径
3. **IDE 支持**：所有主流 IDE 和编辑器都完全支持中文路径

## 🔄 兼容性

- ✅ Windows、macOS、Linux 全平台支持
- ✅ Git 版本控制完全支持
- ✅ 所有主流 IDE（VS Code、WebStorm 等）支持
- ✅ 命令行工具（tree、ls 等）支持

---

*更新时间：2024年*

