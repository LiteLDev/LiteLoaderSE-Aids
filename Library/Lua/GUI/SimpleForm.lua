---简单表单类型
---@class SimpleForm 
 SimpleForm = {}

---设置表单的标题
---@param text string 标题
---@return SimpleForm 处理完毕的表单对象（便于连锁进行其他操作）
function SimpleForm:setTitle(text)
end

---设置表单的内容
---@param content string 表单的文本内容
---@return SimpleForm 处理完毕的表单对象（便于连锁进行其他操作）
function SimpleForm:setContent(content)
end

---向表单内增加一行按钮
---@param text string 按钮文本的字符串
---@param image? string （可选参数）按钮图片所在路径
图片路径参数 image 使用材质包路径或者URL来标识按钮对应的图标。
对于表单上的每个按钮，如下设置对应的图标
 1.如果使用材质包路径，图片路径应该形如 textures/items/apple
 2.如果使用URL路径，那么在这里放入完整的URL即可，形如 https://www.baidu.com/img/flexible/logo/pc/result.png
 3.如果这个按钮你不需要显示图片，那不传入此参数即可
---@return SimpleForm 处理完毕的表单对象（便于连锁进行其他操作）
function SimpleForm:addButton(text,image)
end