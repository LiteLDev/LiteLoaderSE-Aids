---👜 容器对象 API
在LXL中，使用「容器对象」来操作拥有格子、可以储存和放置物品的容器的相关信息。  
此处的 **容器** 是一种宽泛的概念，除了箱子、桶这些传统的容器之外，如玩家物品栏、羊驼携带的箱子等这些也统统可以作为「容器」处理，获取并使用容器对应的API
---@class Container 
---@field size Integer Integer
 Container = {}

---放入物品对象到容器中 
---@param item Item 待增加的物品对象
---@return boolean 是否成功增加
function Container:addItem(item)
end

---放入物品对象到容器的第一个空格子
---@param item Item 待增加的物品对象
---@return boolean 是否成功增加
function Container:addItemToFirstEmptySlot(item)
end

---检查容器中是否（有空间）可以放入此物品 
---@param item Item 待放入的物品对象
---@return boolean 是否可以放入
function Container:hasRoomFor(item)
end

---减少容器中的某个物品对象
---@param index number 减少的物品对象所在的格子序号
---@param count number 减少的数量。如果大于等于此格子物品堆叠的数量，则物品堆将被整个清除
---@return boolean 是否成功减少
function Container:removeItem(index,count)
end

---获取容器某个格子的物品对象
---@param index number 待获取的格子序号
---@return Item 格子位置的物品对象
function Container:getItem(index)
end

---获取容器所有格子的物品对象列表
---@return Item[] 容器中所有的物品对象
function Container:getAllItems()
end

---清空容器
---@return boolean 是否成功清空
function Container:removeAllItems()
end

---判断容器是否为空
---@return boolean 当前容器是否为空
function Container:isEmpty()
end