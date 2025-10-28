# 3. CI/CD 配置

## 3.1 CI 流程

### GitHub Actions 示例
```yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: npm test
      - name: Build
        run: npm run build
```

## 3.2 CD 流程

1. **自动构建**: Push 到 main 分支触发
2. **运行测试**: 自动化测试套件
3. **构建镜像**: Docker 镜像构建
4. **部署**: 自动部署到测试环境
5. **手动审批**: 生产环境需要手动审批
