# API 设计文档

## 设计原则

- RESTful 风格
- 统一的错误处理
- 版本控制

## API 规范

### 基础信息

- **Base URL**: `https://api.example.com/v1`
- **认证方式**: Bearer Token
- **数据格式**: JSON

## API 列表

### 1. 用户管理

#### 1.1 用户登录

```
POST /api/v1/auth/login
```

**请求体**：
```json
{
  "username": "string",
  "password": "string"
}
```

**响应**：
```json
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
```

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
