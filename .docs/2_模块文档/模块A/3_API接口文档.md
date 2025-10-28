# 3. API接口文档 (模块A)

## 3.1 接口列表

### 接口1: [接口名称]

**请求**
```
POST /api/v1/endpoint
Content-Type: application/json

{
  "param1": "value1",
  "param2": "value2"
}
```

**响应**
```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": "string",
    "name": "string"
  }
}
```

**错误码**
| 错误码 | 说明 |
| --- | --- |
| 400 | 参数错误 |
| 404 | 资源不存在 |

## 3.2 接口依赖

- 依赖其他模块: [模块名]
- 调用第三方API: [API名称]
