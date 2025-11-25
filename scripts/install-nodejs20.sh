#!/bin/bash

# Node.js 20 一键安装脚本 (macOS)
# 使用方法: ./install-nodejs20.sh

set -e  # 遇到错误立即退出

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 打印带颜色的消息
print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# 检查是否为 macOS
check_macos() {
    if [[ "$(uname)" != "Darwin" ]]; then
        print_error "此脚本仅支持 macOS 系统"
        exit 1
    fi
    print_success "检测到 macOS 系统"
}

# 检查是否已安装 Node.js
check_nodejs() {
    if command -v node &> /dev/null; then
        NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
        if [ "$NODE_VERSION" -eq 20 ]; then
            print_success "Node.js 20 已安装: $(node -v)"
            print_info "npm 版本: $(npm -v)"
            return 0
        else
            print_warning "检测到 Node.js $(node -v)，需要安装 Node.js 20"
            return 1
        fi
    else
        print_warning "未检测到 Node.js"
        return 1
    fi
}

# 检查是否安装了 Homebrew
check_homebrew() {
    if command -v brew &> /dev/null; then
        print_success "检测到 Homebrew: $(brew -v | head -n1)"
        return 0
    else
        print_warning "未检测到 Homebrew，正在安装..."
        return 1
    fi
}

# 安装 Homebrew
install_homebrew() {
    print_info "正在安装 Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    
    # 添加 Homebrew 到 PATH（如果是 Apple Silicon Mac）
    if [[ -f "/opt/homebrew/bin/brew" ]]; then
        echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
        eval "$(/opt/homebrew/bin/brew shellenv)"
    fi
    
    print_success "Homebrew 安装完成"
}

# 使用 Homebrew 安装 Node.js 20
install_nodejs_with_brew() {
    print_info "正在使用 Homebrew 安装 Node.js 20..."
    
    # 添加 Node.js 官方 tap（如果需要特定版本）
    brew tap homebrew/cask-versions 2>/dev/null || true
    
    # 安装 Node.js 20
    brew install node@20
    
    # 链接 Node.js 20
    brew link --overwrite node@20
    
    print_success "Node.js 20 安装完成"
}

# 使用 nvm 安装 Node.js 20（备选方案）
install_nodejs_with_nvm() {
    print_info "正在使用 nvm 安装 Node.js 20..."
    
    # 检查是否安装了 nvm
    if [ ! -d "$HOME/.nvm" ]; then
        print_info "正在安装 nvm..."
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
        
        # 加载 nvm
        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    else
        # 加载 nvm
        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    fi
    
    # 安装 Node.js 20
    nvm install 20
    nvm use 20
    nvm alias default 20
    
    print_success "Node.js 20 安装完成"
}

# 验证安装
verify_installation() {
    print_info "验证安装..."
    
    if command -v node &> /dev/null; then
        NODE_VERSION=$(node -v)
        NODE_MAJOR=$(echo $NODE_VERSION | cut -d'v' -f2 | cut -d'.' -f1)
        
        if [ "$NODE_MAJOR" -eq 20 ]; then
            print_success "Node.js 安装成功: $NODE_VERSION"
            print_success "npm 版本: $(npm -v)"
            print_success "安装路径: $(which node)"
            return 0
        else
            print_error "Node.js 版本不正确: $NODE_VERSION"
            return 1
        fi
    else
        print_error "Node.js 安装失败"
        return 1
    fi
}

# 主函数
main() {
    echo ""
    echo "=========================================="
    echo "  Node.js 20 一键安装脚本 (macOS)"
    echo "=========================================="
    echo ""
    
    # 检查系统
    check_macos
    
    # 检查是否已安装 Node.js 20
    if check_nodejs; then
        print_info "无需安装，Node.js 20 已就绪"
        exit 0
    fi
    
    # 检查并安装 Homebrew
    if ! check_homebrew; then
        read -p "是否安装 Homebrew？(y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            install_homebrew
        else
            print_error "需要 Homebrew 或 nvm 来安装 Node.js"
            exit 1
        fi
    fi
    
    # 选择安装方式
    echo ""
    print_info "请选择安装方式："
    echo "1) 使用 Homebrew 安装（推荐）"
    echo "2) 使用 nvm 安装（Node 版本管理工具）"
    read -p "请输入选项 (1/2): " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[1]$ ]]; then
        install_nodejs_with_brew
    elif [[ $REPLY =~ ^[2]$ ]]; then
        install_nodejs_with_nvm
    else
        print_error "无效选项，使用默认方式（Homebrew）"
        install_nodejs_with_brew
    fi
    
    # 验证安装
    if verify_installation; then
        echo ""
        print_success "=========================================="
        print_success "  Node.js 20 安装完成！"
        print_success "=========================================="
        echo ""
        print_info "运行以下命令验证："
        echo "  node -v"
        echo "  npm -v"
        echo ""
    else
        print_error "安装验证失败，请检查错误信息"
        exit 1
    fi
}

# 运行主函数
main

