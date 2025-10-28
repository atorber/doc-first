#!/bin/bash

echo "🚀 正在安装 DOC FIRST CLI 工具..."
echo ""

# 检查是否已安装 Node.js
if ! command -v node &> /dev/null
then
    echo "❌ 错误: 未检测到 Node.js，请先安装 Node.js"
    exit 1
fi

echo "✓ Node.js 版本: $(node --version)"
echo "✓ npm 版本: $(npm --version)"
echo ""

# 安装依赖
echo "📦 正在安装依赖..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ 依赖安装失败"
    exit 1
fi

echo ""
echo "📎 正在链接 CLI 工具到全局..."
npm link

if [ $? -ne 0 ]; then
    echo "❌ 链接失败"
    exit 1
fi

echo ""
echo "✅ 安装完成！"
echo ""
echo "现在你可以在任何目录使用以下命令："
echo "  docf init          - 初始化文档目录"
echo "  docf init --force  - 强制覆盖已存在的目录"
echo ""
echo "开始你的 DOC FIRST 之旅 🎉"

