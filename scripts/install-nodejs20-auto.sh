#!/bin/bash

# Node.js 20 一键自动安装脚本 (macOS) - 无需交互
# 使用方法: ./install-nodejs20-auto.sh

set -e

# 颜色定义
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# 检查是否为 macOS
if [[ "$(uname)" != "Darwin" ]]; then
    echo "❌ 此脚本仅支持 macOS 系统"
    exit 1
fi

# 检查是否已安装 Node.js 20
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -eq 20 ]; then
        print_success "Node.js 20 已安装: $(node -v)"
        exit 0
    fi
fi

echo ""
echo "=========================================="
echo "  Node.js 20 自动安装脚本"
echo "=========================================="
echo ""

# 安装 Homebrew（如果未安装）
if ! command -v brew &> /dev/null; then
    print_info "正在安装 Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    
    # 添加 Homebrew 到 PATH
    if [[ -f "/opt/homebrew/bin/brew" ]]; then
        echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
        eval "$(/opt/homebrew/bin/brew shellenv)"
    fi
    print_success "Homebrew 安装完成"
fi

# 安装 Node.js 20
print_info "正在安装 Node.js 20..."
brew install node@20
brew link --overwrite node@20

# 验证安装
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    NODE_MAJOR=$(echo $NODE_VERSION | cut -d'v' -f2 | cut -d'.' -f1)
    
    if [ "$NODE_MAJOR" -eq 20 ]; then
        print_success "=========================================="
        print_success "  Node.js 20 安装成功！"
        print_success "=========================================="
        echo ""
        print_success "Node.js 版本: $(node -v)"
        print_success "npm 版本: $(npm -v)"
        echo ""
    else
        echo "❌ 安装失败：版本不正确"
        exit 1
    fi
else
    echo "❌ 安装失败"
    exit 1
fi

