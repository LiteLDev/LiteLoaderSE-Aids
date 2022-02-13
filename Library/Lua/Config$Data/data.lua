---data类
---@class data 
 data = {}

---创建 / 打开一个配置文件
---@param path string 配置文件所在路径，以BDS根目录为基准
如果配置文件路径中的目录尚不存在，接口会自动创建，不需要手动调用file.createDir
---@param format? string （可选参数）配置文件的格式，字符串形式。可选项有：json  或  ini
---@param default_cfg? string （可选参数）配置文件的默认内容。
如果初始化时目标文件不存在，引擎将新建一个配置文件并将此处的默认内容写入文件中。
如果不传入此参数，新建时的配置文件将为空
---@return Conf 打开 / 创建的配置文件对象，如果返回值为nil，则代表创建 / 打开失败
function data.openConfig(path,format,default_cfg)
end

---创建 / 打开数据库
---在使用数据库之前，你先需要给出一个数据库路径，LXL将打开/创建指定的数据库并返回一个数据库对象。
---一个leveldb数据库是由多个文件组成的，所以你需要传入一个文件夹的路径，数据库文件会被储存于这个文件夹当中。
---如果这个目录已含有一个数据库，LXL会将它打开，否则会新建一个。
---@param dir string 数据库的储存目录路径，以BDS根目录为基准
---@return DB 打开 / 创建的数据库对象，如果返回值为nil，则代表创建 / 打开失败
function data.openDB(dir)
end

---变量转换为Json字符串
---@param data any 要转换为Json字符串的变量。允许进行转换的数据类型有：
number Float string boolean {} Object 
其中，{} 和 Object 内部仅能嵌套上面出现的这些元素
---@param space? number （可选参数）如果要格式化输出的字符串，则传入此参数
代表每个缩进的空格数量，这样输出的Json串更适合人阅读
此参数默认为0，即不对输出字符串进行格式化
---@return string 转换成的Json字符串
function data.toJson(data,space)
end

---Json字符串解析为变量
---@param Json_str string 要转换为变量的Json字符串
---@return any 转换成的变量
function data.parseJson(Json_str)
end

---字符串转MD5
---@param string string 要转换为MD5的字符串
---@return string 转换的结果
function data.toMD5(string)
end

---字符串转SHA1
---@param string string 要转换为SHA1的字符串
---@return string 转换的结果
function data.toSHA1(string)
end

---根据玩家名查询Xuid
---@param name string 要查询的玩家名
---@return string 玩家的Xuid
---如果返回值为nil，则代表查询失败
function data.name2xuid(name)
end

---根据Xuid查询玩家名
---@param xuid string 要查询的玩家Xuid
---@return string 玩家名
---如果返回值为nil，则代表查询失败
function data.xuid2name(xuid)
end