# CamLingo 多语言网站系统

## 概述

这是一个基于"单页面+JS动态切换"的现代化多语言网站系统，支持22种语言，包括：

- **英语**: 美式英语 (en-US)、英式英语 (en-GB)
- **中文**: 简体中文 (zh-CN)、繁体中文 (zh-TW)
- **西班牙语**: 西班牙语 (es-ES)、墨西哥语 (es-MX)
- **法语**: 法语 (fr-FR)、加拿大法语 (fr-CA)
- **葡萄牙语**: 葡萄牙语 (pt-PT)、巴西葡萄牙语 (pt-BR)
- **亚洲语言**: 日语 (ja)、韩语 (ko)
- **欧洲语言**: 德语 (de)、俄语 (ru)、意大利语 (it)、荷兰语 (nl)、波兰语 (pl)
- **其他语言**: 阿拉伯语 (ar)、印地语 (hi)、泰语 (th)、越南语 (vi)、土耳其语 (tr)

## 文件结构

```
website_en/
├── index.html          # 主页面（单页面应用）
├── i18n.js            # 多语言配置文件
├── styles.css         # 样式文件
├── script.js          # 主要脚本文件
├── test_languages.html # 多语言测试页面
└── README.md          # 说明文档
```

## 核心特性

### 1. 智能语言检测
- 默认使用英文 (en-US)
- 支持语言偏好记忆（localStorage）
- 智能回退机制

### 2. 无缝语言切换
- 无需刷新页面
- 实时更新所有文本内容
- 保持用户操作状态

### 3. 完整的国际化支持
- 导航栏文本
- 页面标题和描述
- 功能区域内容
- 价格和FAQ
- 页脚信息
- 动态链接支持（Support和Privacy页面）

## 使用方法

### 1. 启动本地服务器
```bash
python3 -m http.server 8000
```

### 2. 访问网站
- 主网站: http://localhost:8000
- 测试页面: http://localhost:8000/test_languages.html

### 3. 切换语言
- 使用页面右上角的语言选择器
- 选择会自动保存到浏览器

## 技术实现

### HTML结构
所有需要翻译的文本都使用 `data-i18n` 属性标记：

```html
<h1 data-i18n="intro.title">Learn Any Language from Pictures</h1>
<p data-i18n="intro.subtitle">Snap a photo, tap a word...</p>
```

### JavaScript配置
语言配置存储在 `i18n.js` 中，结构如下：

```javascript
const i18n = {
  'en-US': {
    nav: { features: 'Features', pricing: 'Pricing', ... },
    intro: { title: 'Learn Any Language...', ... },
    // ... 其他配置
  },
  'zh-CN': {
    nav: { features: '功能特色', pricing: '价格', ... },
    intro: { title: '从图片学习任何语言', ... },
    // ... 其他配置
  }
  // ... 其他语言
};
```

### 核心函数
- `changeLanguage(lang)`: 切换语言
- `updatePageText(lang)`: 更新页面文本
- `getNestedValue(obj, path)`: 获取嵌套对象值

## 添加新语言

### 1. 在HTML中添加语言选项
```html
<option value="new-lang">新语言名称</option>
```

### 2. 在i18n.js中添加语言配置
```javascript
'new-lang': {
  nav: { features: '翻译', pricing: '翻译', ... },
  intro: { title: '翻译', subtitle: '翻译', ... },
  footer: { privacy: '隐私政策', terms: '使用条款', contact: '联系支持' },
  links: { 
    support: 'https://mrvincent2025.github.io/camlingo-support/index-new-lang.html', 
    privacy: 'https://mrvincent2025.github.io/camlingo-support/privacy-new-lang.html' 
  }
  // ... 其他配置
}
```

## 维护建议

### 1. 翻译管理
- 使用Excel或Google表格管理翻译
- 建立翻译术语表保持一致性
- 定期更新和优化翻译内容

### 2. 性能优化
- 考虑按需加载语言包
- 压缩和优化JavaScript文件
- 使用CDN加速资源加载

### 3. SEO优化
- 为每种语言创建独立的URL结构
- 添加hreflang标签
- 优化多语言元数据

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 故障排除

### 1. 语言切换不生效
- 检查 `data-i18n` 属性是否正确
- 确认语言配置是否存在
- 查看浏览器控制台错误信息

### 2. 文本显示异常
- 检查字符编码设置
- 确认字体支持
- 验证HTML实体转义

### 3. 性能问题
- 检查语言包大小
- 优化DOM操作
- 使用事件委托

## 更新日志

### v1.1.0 (2025-01-XX)
- 添加动态链接支持
- Support和Privacy链接根据语言自动切换
- 集成GitHub Pages多语言支持页面

### v1.0.0 (2025-01-XX)
- 初始版本发布
- 支持22种语言
- 实现动态语言切换
- 默认使用英文，支持语言偏好记忆

## 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 许可证

© 2025 CamLingo. All rights reserved. 