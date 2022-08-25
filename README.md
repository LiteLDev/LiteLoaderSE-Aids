# LiteLoaderSE-Aids

# Usage

# Features

- 傻瓜式的窗口化配置页面
- 自动从配置源拉取库并配置
- 自动配置引用(JS)
## TODO
- [ ] 支持内嵌文档阅读
- [ ] 支持更新检测
- [ ] 支持拉取 [Lua库](src\handler\LibraryHandler.ts)
- [ ] 支持QuickJS调试
- [ ] 更多可配置项
- [ ] [i18n](https://github.com/microsoft/vscode-extension-samples/tree/main/i18n-sample)

# Development

1. install extension `TODO Highlight`

2. follow TODO

# Library format
如果您想要自定义源或库，请按照以下格式

1. 创建一个清单文件，命名为` manifest.json`
```json
{
    "name": "MyLibrary",
    "version": "1.0.0",
    "description": "My Library",
    "author": "",
    "library":{
        "javascript": {
            "index": ".*/src/index.d.ts",
            "download_url": ""
        },
        "lua":{
            "src": "./api/",
            "download_url": ""
        }
    }
}
```
2.然后你可以上传到你的直连网站或者github，
在本扩展的配置页面填入`yourdomain.com/manifest.json`

- javascript下的index.d.ts为api索引文件
- lua下的src为[sumneko.lua](https://github.com/sumneko/lua-language-server)下的[Annotations](https://github.com/sumneko/lua-language-server/wiki/Annotations)

### 注意 

1. `download_url`是必须的，如果没有，则不会自动下载
2. `download_url` 应该指向一个zip格式的压缩文件 其不包含多余的子目录