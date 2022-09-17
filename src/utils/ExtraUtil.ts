/*
 * @Author: DevMoxi moxiout@gmail.com
 * @Date: 2022-09-16 14:22:45
 * @LastEditTime: 2022-09-17 11:19:34
 */
export function createIterator(items: Array<any>) {
	var i = 0;
	return {
		next: function () {
			var done = i >= items.length;
			var value = !done ? items[i++] : undefined;
			return {
				done: done,
				value: value,
				length: i,
			};
		},
	};
}

export function includesInArray(
	items: Array<string>,
	key: string,
	cb: () => void
) {
	items.forEach((it) => {
		if (key.includes(it)) {
			cb();
			return;
		}
	});
}
