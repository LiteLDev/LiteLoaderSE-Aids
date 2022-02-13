/**
 * 👜 容器对象 API
在LXL中，使用「容器对象」来操作拥有格子、可以储存和放置物品的容器的相关信息。  
此处的 **容器** 是一种宽泛的概念，除了箱子、桶这些传统的容器之外，如玩家物品栏、羊驼携带的箱子等这些也统统可以作为「容器」处理，获取并使用容器对应的API
 */ 
class Container {
  
/**
 * 容器拥有的格子总数
 * @type Integer
 */ 
 size;
  
  


/**
 * 放入物品对象到容器中 
 * @param {Item} item 待增加的物品对象
 * @returns {boolean} 是否成功增加
 */
 addItem(item)

/**
 * 放入物品对象到容器的第一个空格子
 * @param {Item} item 待增加的物品对象
 * @returns {boolean} 是否成功增加
 */
 addItemToFirstEmptySlot(item)

/**
 * 检查容器中是否（有空间）可以放入此物品 
 * @param {Item} item 待放入的物品对象
 * @returns {boolean} 是否可以放入
 */
 hasRoomFor(item)

/**
 * 减少容器中的某个物品对象
 * @param {number} index 减少的物品对象所在的格子序号
 * @param {number} count 减少的数量。如果大于等于此格子物品堆叠的数量，则物品堆将被整个清除
 * @returns {boolean} 是否成功减少
 */
 removeItem(index,count)

/**
 * 获取容器某个格子的物品对象
 * @param {number} index 待获取的格子序号
 * @returns {Item} 格子位置的物品对象
 */
 getItem(index)

/**
 * 获取容器所有格子的物品对象列表
 * @returns {Item[]} 容器中所有的物品对象
 */
 getAllItems()

/**
 * 清空容器
 * @returns {boolean} 是否成功清空
 */
 removeAllItems()

/**
 * 判断容器是否为空
 * @returns {boolean} 当前容器是否为空
 */
 isEmpty()  



}
