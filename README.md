<!--
 * @Author: moxi moxiout@gmail.com
 * @Date: 2022-08-24 10:09:31
 * @LastEditTime: 2022-08-26 16:54:32
-->

# LiteLoaderSE-Aids

适用于 Visual Studio Code 的 [LiteLoaderSE](https://github.com/LiteLDev/LiteLoaderBDS) 开发辅助工具

# Installation

- 在扩展商店中搜索扩展 `LiteLodaerSE-Aids`
- 在 vsc 中使用快捷键 `Ctrl+Shift+P` 然后输入 `ext install moxicat.LLScriptHelper`

# Usage

1. 导入补全库

   初次进入会自动打开一个配置页面，按照提示配置即可

2. 使用补全

- JavaScript

  创建以 `llse.js ll.js lxl.js` 结尾的文件可自动引入

  使用 代码片段 `llse lxl` 可自动引入

- Lua

  暂无

3. 内嵌文档

   输入指令 LLLScriptHelper.show

   或在对应类型文件上点击 Tab 旁按钮

4. 调试器 TODO

# Features

- 傻瓜式的窗口化配置页面
- 自动从配置源拉取库并配置
- 自动配置引用(JS)

## TODO

- [ ] 支持内嵌文档阅读
- [ ] 支持更新检测
- [ ] 支持拉取 [Lua 库](src\handler\LibraryHandler.ts)
- [ ] 支持 QuickJS 调试
- [ ] 更多可配置项
- [ ] [i18n](https://github.com/microsoft/vscode-extension-samples/tree/main/i18n-sample)

# Library

[自带&官方库](https://github.com/LiteLScript-Dev/HelperLib/)

如果您想要自定义源或库，请按照以下格式

1. 创建一个清单文件，类型为 `json`

```json
{
  "name": "MyLibrary",
  "source": "",
  "library": {
    "javascript": {
      "version": "1.0.0",
      "index": ".*/src/index.d.ts",
      "download_url": ""
    },
    "lua": {
      "version": "0.0.1",
      "src": "./api/",
      "download_url": ""
    }
  }
}
```

2.然后你可以上传到你的直连网站或者 github，
在本扩展的配置页面填入`yourdomain.com/manifest.json`

- javascript 下的 index.d.ts 为 api 索引文件
- lua 下的 src 为[sumneko.lua](https://github.com/sumneko/lua-language-server)的[Annotations](https://github.com/sumneko/lua-language-server/wiki/Annotations)

### 注意

1. `download_url`是必须的，如果没有，则不会自动下载
2. `download_url` 应该指向一个 zip 格式的压缩文件

# Development

1. install extension `TODO Highlight`

2. follow TODO
