/**
 * data类
 */ 
class data {
  
  
  


/**
 * 创建 / 打开一个配置文件
 * @param {string} path 配置文件所在路径，以BDS根目录为基准
如果配置文件路径中的目录尚不存在，接口会自动创建，不需要手动调用file.createDir
 * @param {string} format? （可选参数）配置文件的格式，字符串形式。可选项有：json  或  ini
 * @param {string} default_cfg? （可选参数）配置文件的默认内容。
如果初始化时目标文件不存在，引擎将新建一个配置文件并将此处的默认内容写入文件中。
如果不传入此参数，新建时的配置文件将为空
 * @returns {Conf} 打开 / 创建的配置文件对象，如果返回值为null，则代表创建 / 打开失败
 */
 static openConfig(path,format,default_cfg)

/**
 * 创建 / 打开数据库
在使用数据库之前，你先需要给出一个数据库路径，LXL将打开/创建指定的数据库并返回一个数据库对象。
一个leveldb数据库是由多个文件组成的，所以你需要传入一个文件夹的路径，数据库文件会被储存于这个文件夹当中。
如果这个目录已含有一个数据库，LXL会将它打开，否则会新建一个。
 * @param {string} dir 数据库的储存目录路径，以BDS根目录为基准
 * @returns {DB} 打开 / 创建的数据库对象，如果返回值为null，则代表创建 / 打开失败
 */
 static openDB(dir)

/**
 * 变量转换为Json字符串
 * @param {any} data 要转换为Json字符串的变量。允许进行转换的数据类型有：
number Float string boolean Array Object 
其中，Array 和 Object 内部仅能嵌套上面出现的这些元素
 * @param {number} space? （可选参数）如果要格式化输出的字符串，则传入此参数
代表每个缩进的空格数量，这样输出的Json串更适合人阅读
此参数默认为0，即不对输出字符串进行格式化
 * @returns {string} 转换成的Json字符串
 */
 static toJson(data,space)

/**
 * Json字符串解析为变量
 * @param {string} Json_str 要转换为变量的Json字符串
 * @returns {any} 转换成的变量
 */
 static parseJson(Json_str)

/**
 * 字符串转MD5
 * @param {string} string 要转换为MD5的字符串
 * @returns {string} 转换的结果
 */
 static toMD5(string)

/**
 * 字符串转SHA1
 * @param {string} string 要转换为SHA1的字符串
 * @returns {string} 转换的结果
 */
 static toSHA1(string)

/**
 * 根据玩家名查询Xuid
 * @param {string} name 要查询的玩家名
 * @returns {string} 玩家的Xuid
如果返回值为null，则代表查询失败
 */
 static name2xuid(name)

/**
 * 根据Xuid查询玩家名
 * @param {string} xuid 要查询的玩家Xuid
 * @returns {string} 玩家名
如果返回值为null，则代表查询失败
 */
 static xuid2name(xuid)  



}
