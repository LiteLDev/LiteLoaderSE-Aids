/* eslint-disable @typescript-eslint/naming-convention */
/*
 * @Author: DevMoxi moxiout@gmail.com
 * @Date: 2022-09-15 07:58:04
 * @LastEditTime: 2022-09-15 13:08:06
 */
interface LibraryInfo {
	type: "js" | "lua" | "py";
	name: string;
	language: string;
	version: string;
	index: string;
	download_url: string;
}

interface SourceInfo {
	name: string;
	source: string;
	library: LibraryInfo[];
}
