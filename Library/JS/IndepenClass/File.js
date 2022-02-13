/**
 * 文件对象
 */ 
class File {
  
/**
 * 当前文件路径
 * @type String
 */ 
 path;
/**
 * 当前文件大小
 * @type Integer
 */ 
 size;
  
  


/**
 * 从文件读取文本 / 二进制数据
 * @param {number} cnt 要读取的字符数 / 字节数
 * @returns {string|ByteBuffer} 读取的字符串内容 / 二进制数据
 */
 readSync(cnt)

/**
 * 从文件读取一行文本
 * @returns {string} 读取的字符串内容
如返回值为 null 则表示读取失败
 */
 readLineSync()

/**
 * 从文件读取所有内容
 * @returns {string|ByteBuffer} 读取的字符串内容 / 二进制数据
 */
 readAllSync()

/**
 * 写入文本 / 二进制数据到文件
 * @param {string|ByteBuffer} str 要写入的内容
 * @returns {boolean} 是否成功写入
 */
 writeSync(str)

/**
 * 写入一行文本到文件
 * @param {string} str 要写入的内容
 * @returns {boolean} 是否成功写入
 */
 writeLineSync(str)

/**
 * 移动文件指针
 * @param {number} pos 文件指针要移动到的位置
 * @param {boolean} isRelative 是否是相对当前文件指针位置移动
 * @returns {boolean} 是否移动成功
 */
 seekTo(pos,isRelative)

/**
 * 设定文件大小
 * @param {number} size 要设定的目标大小
 * @returns {boolean} 是否设定成功
 */
 setSize(size)

/**
 * 关闭文件
 * @returns {boolean} 是否成功关闭
 */
 close()

/**
 * 文件指针是否位于文件尾
 * @returns {boolean} 文件指针是否处于文件尾
 */
 isEOF()

/**
 * 刷新文件缓冲区
 * @returns {boolean} 是否成功刷新
 */
 flush()

/**
 * 获取错误码
 * @returns {number} 上一次IO操作产生的错误码
 */
 errorCode()

/**
 * 清除错误状态
 * @returns {boolean} 是否成功清除
 */
 clear()  



}
