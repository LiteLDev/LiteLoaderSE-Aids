/**
 * Conf类
 */ 
class Conf {
  
  
  


/**
 * 读取布尔项(ini)
 * @param {string} section 配置项键名
 * @param {string} name 配置项名字
 * @param {boolean} default_cfg? （可选参数）当读取失败时返回的默认值
 * @returns {boolean} 指定配置项的数据
 */
 getBool(section,name,default_cfg)

/**
 * 读取浮点数项(ini)
 * @param {string} section 配置项键名
 * @param {string} name 配置项名字
 * @param {Float} default_cfg? （可选参数）当读取失败时返回的默认值
 * @returns {Float} 指定配置项的数据
 */
 getFloat(section,name,default_cfg)

/**
 * 读取字符串项(ini)
 * @param {string} section 配置项键名
 * @param {string} name 配置项名字
 * @param {string} default_cfg? （可选参数）当读取失败时返回的默认值
 * @returns {string} 指定配置项的数据
 */
 getStr(section,name,default_cfg)

/**
 * 读取整数项(ini)
 * @param {string} section 配置项键名
 * @param {string} name 配置项名字
 * @param {number} default_cfg? （可选参数）当读取失败时返回的默认值
 * @returns {number} 指定配置项的数据
 */
 getInt(section,name,default_cfg)

/**
 * 写入配置项(ini)
 * @param {string} section 配置项键名
 * @param {string} name 配置项名字
 * @param {any} data 要写入的配置数据。允许的数据类型有：number Float string boolean
 * @returns {boolean} 是否写入成功
 */
 set(section,name,data)

/**
 * 删除配置项(json)
 * @param {string} name 配置项名字
 * @returns {boolean} 是否删除成功
 */
 delete(name)

/**
 * 读取配置项(json)
 * @param {string} name 配置项名字
 * @param {any} default_cfg? 可选参数）当读取失败时返回的默认值
 * @returns {any} 指定配置项的数据
 */
 get(name,default_cfg)

/**
 * 写入配置项(json)
 * @param {string} name 配置项名字
 * @param {any} data 配置项名字
 * @returns {boolean} 是否写入成功
 */
 set(name,data)

/**
 * 删除配置项(ini)
 * @param {string} section 配置项键名
 * @param {string} name 配置项名字
 * @returns {boolean} 是否删除成功
 */
 delete(section,name)

/**
 * 重新加载文件中的配置项
 * @returns {boolean} 是否成功加载
 */
 reload()

/**
 * 关闭配置文件
配置文件关闭之后，请勿继续使用！
 * @returns {boolean} 是否成功关闭
 */
 close()

/**
 * 获取配置文件路径
 * @returns {string} 当前配置文件的文件路径
 */
 getPath()

/**
 * 读取整个配置文件的内容
 * @returns {string} 当前配置文件的所有内容
 */
 read()

/**
 * 写入整个配置文件的内容
 * @param {string} content 写入的内容
 * @returns {boolean} 是否写入成功
 */
 write(content)  



}
