/* eslint-disable @typescript-eslint/naming-convention */
/*
 * @Author: DevMoxi moxiout@gmail.com
 * @Date: 2022-09-15 07:58:04
 * @LastEditTime: 2022-09-17 08:11:43
 */
interface LibraryInfo {
	type: "js" | "lua" | "py";
	name: string;
	language: string;
	version: string;
	index: string;
	download_url: string;
	recent_index: string;
}

interface SourceInfo {
	name: string;
	source: string;
	library: LibraryInfo[];
}
