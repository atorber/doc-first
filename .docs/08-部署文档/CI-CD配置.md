# CI/CD 配置

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
`.github/workflows/deploy.yml`

### Jenkins Pipeline
`Jenkinsfile`

