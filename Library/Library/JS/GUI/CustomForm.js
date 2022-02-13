/**
 * 自定义表单类型
 */ 
class CustomForm {
  
  
  


/**
 * 设置表单的标题
 * @param {string} text 标题
 * @returns {CustomForm} 处理完毕的表单对象（便于连锁进行其他操作）
 */
 setTitle(text)

/**
 * 向表单内增加一行文本
 * @param {string} text 一行文本
 * @returns {CustomForm} 处理完毕的表单对象（便于连锁进行其他操作）
 */
 addLabel(text)

/**
 * 向表单内增加一行输入框
 * @param {string} title 输入框描述文本
 * @param {string} placeholder? （可选参数）输入框内的提示字符
 * @param {string} defaultext? （可选参数）输入框中默认存在的内容
 * @returns {CustomForm} 处理完毕的表单对象（便于连锁进行其他操作）
 */
 addInput(title,placeholder,defaultext)

/**
 * 向表单内增加一行开关选项
 * @param {string} title 开关选项描述文本
 * @param {boolean} Default? （可选参数）开关的默认状态 开 / 关
 * @returns {CustomForm} 处理完毕的表单对象（便于连锁进行其他操作）
 */
 addSwitch(title,Default)

/**
 * 向表单内增加一行下拉菜单
 * @param {string} title 下拉菜单描述文本
 * @param {string[]} items 下拉菜单中的选项文本列表
 * @param {number} Default? 可选参数）下拉菜单默认选中的列表项序号。
 * @returns {CustomForm} 处理完毕的表单对象（便于连锁进行其他操作）
 */
 addDropdown(title,items,Default)

/**
 * 向表单内增加一行游标滑块
 * @param {string} title 游标滑块描述文本
 * @param {number} min 游标滑块最小值
 * @param {number} max 游标滑块最大值
 * @param {number} step? （可选参数）游标滑块调整的最小分度值，默认为1
 * @param {number} Default? （可选参数）游标滑块默认初始格数，数值必须在最小和最大格数之间。
 * @returns {CustomForm} 处理完毕的表单对象（便于连锁进行其他操作）
 */
 addSlider(title,min,max,step,Default)

/**
 * 向表单内增加一行步进滑块
 * @param {string} title 步进滑块描述文本
 * @param {string[]} items 步进滑块的选项文本列表
 * @param {number} Default? （可选参数）步进滑块默认初始选项。序号从0开始编号
 * @returns {CustomForm} 处理完毕的表单对象（便于连锁进行其他操作）
 */
 addStepSlider(title,items,Default)  



}
