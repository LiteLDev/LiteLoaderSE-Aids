/**
 * 📝 简单文件读写 API
 */ 
class file {
  
/**
 * 准备读取文件内容
 * @type Any
 */ 
 static readMode;
/**
 * 准备写入文件。如果文件已存在，会被清空
 * @type Any
 */ 
 static writeMode;
/**
 * 准备写入文件。之后写入的任何内容都将会被追加到文件最后
 * @type Any
 */ 
 static appendMode;
  
  


/**
 * 读入文件的所有内容
 * @param {string} path 目标文件的路径，相对路径以BDS根目录为基准
 * @returns {string} 文件的所有数据
如返回值为 null 则表示读取失败
 */
 static readFrom(path)

/**
 * 向指定文件写入内容
 * @param {string} path 目标文件的路径，相对路径以BDS根目录为基准
 * @param {string} text 要写入的内容
 * @returns {boolean} 是否写入成功
 */
 static writeTo(path,text)

/**
 * 向指定文件追加一行
 * @param {string} path 目标文件的路径，相对路径以BDS根目录为基准
 * @param {string} text 要写入的内容
 * @returns {boolean} 是否写入成功
 */
 static writeLine(path,text)

/**
 * 获取一个文件对象
 * @param {string} path 想要打开的文件路径
 * @param {any} mode 文件的打开模式
 * @param {boolean} isBinary （可选参数）是否以二进制模式打开文件，默认为false
 * @returns {File} 打开的文件对象
如返回值为 null 则表示打开失败
 */
 static open(path,mode,isBinary)

/**
 * 创建文件夹
 * @param {string} dir 目标文件夹的路径。可以直接创建多层，不需要逐层创建
 * @returns {boolean} 是否成功创建
 */
 static createDir(dir)

/**
 * 创建文件夹
 * @param {string} dir 目标文件夹的路径。可以直接创建多层，不需要逐层创建
 * @returns {boolean} 是否成功创建
 */
 static mkdir(dir)

/**
 * 判断文件 / 文件夹是否存在
 * @param {string} path 目标文件 / 文件夹的路径
 * @returns {boolean} 目标是否存在
 */
 static exists(path)

/**
 * 复制文件 / 文件夹到指定位置
 * @param {string} from 源文件 / 文件夹的路径
 * @param {string} to 目标文件 / 文件夹的位置
 * @returns {boolean} 是否复制成功
 */
 static copy(from,to)

/**
 * 移动文件 / 文件夹到指定位置
 * @param {string} from 源文件 / 文件夹的路径
 * @param {string} to 目标文件 / 文件夹的位置
 * @returns {boolean} 是否复制成功
 */
 static move(from,to)

/**
 * 重命名指定文件 / 文件夹
 * @param {string} oldFile 文件 / 文件夹的旧名字
 * @param {string} newFile 新名字
 * @returns {boolean} 是否复制成功
 */
 static rename(oldFile,newFile)

/**
 * 获取指定文件的大小
 * @param {string} path 所操作的文件路径
 * @returns {number} 文件的大小（字节）
 */
 static getFileSize(path)

/**
 * 判断指定路径是否是文件夹
 * @param {string} path 所判断的路径
 * @returns {boolean} 目标路径是否是文件夹
 */
 static checkIsDir(path)

/**
 * 列出指定文件夹下的所有文件 / 文件夹
 * @param {string} dir 文件夹路径
 * @returns {string[]} 文件名、文件夹名数组
 */
 static getFilesList(dir)

/**
 * 删除文件 / 文件夹
 * @param {string} path 目标文件 / 文件夹的路径
 * @returns {boolean} 是否成功删除
 */
 static delete(path)  



}
