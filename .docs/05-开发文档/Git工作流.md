# Git 工作流

## 分支策略

### 主分支
- `main` - 生产环境分支
- `develop` - 开发分支

### 功能分支
- `feature/功能名称` - 新功能
- `bugfix/问题描述` - Bug 修复
- `hotfix/紧急修复` - 紧急修复

## 工作流程

1. 从 `develop` 创建功能分支
2. 在功能分支上开发和提交
3. 完成开发后创建 Pull Request
4. Code Review 通过后合并到 `develop`
5. 测试通过后合并到 `main`

