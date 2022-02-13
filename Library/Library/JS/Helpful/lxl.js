/**
 * 💡 插件加载相关 API
 */ 
class lxl {
  
  
  


/**
 * 获取LiteXLoader加载器版本
 * @returns {ObjectVersion} 加载器版本对象
 */
 static version()

/**
 * 检查LiteXLoader加载器版本
 * @param {number} major 检查当前已安装LXL的主版本号是否 >= 此值
 * @param {number} minor? 检查当前已安装LXL的次版本号是否 >= 此值
 * @param {number} revision? 检查当前已安装LXL的修订版本号是否 >= 此值
 * @returns {boolean} 检查结果
如果检测发现当前安装的LXL版本低于传入的数值，将返回false。
你可以选择根据结果判断并报错，提醒用户升级自己的LXL版本
 */
 static requireVersion(major,minor,revision)

/**
 * 列出所有已加载的插件
 * @returns {string[]} 已加载的所有的插件名字列表
 */
 static listPlugins()

/**
 * 导出函数
 * @param {()any} func 要导出的函数
 * @param {string} name 函数的导出名称。其他插件根据导出名称来调用这个函数
 * @returns {boolean} 是否成功导出
 */
 static export(func,name)

/**
 * 导入函数
 * @param {string} name 要导入的函数使用的导出名称
 * @returns {()any} 导入的函数
 */
 static import(name)

/**
 * 设置插件依赖库
 * @param {string} path 依赖库文件名（如addplugin.js)
 * @param {string} remotePath? （可选参数）查找并装载依赖库的路径
 * @returns {boolean} 是否加载依赖库成功
 */
 static require(path,remotePath)

/**
 * 将字符串作为脚本代码执行
 * @param {string} str 要作为脚本代码执行的字符串
 * @returns {any} 执行结果
 */
 static eval(str)  



}
