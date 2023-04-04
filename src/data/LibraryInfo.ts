/* eslint-disable @typescript-eslint/naming-convention */
/*
 * @Author: DevMoxi moxiout@gmail.com
 * @Date: 2022-09-15 07:58:04
 * @LastEditTime: 2022-09-17 10:58:19
 */
interface LibraryInfo {
	type: "dts" | "lua" | "py";
	name: string;
	language: string;
	version: string;
	index: string;
	download_url: string;
	recent_index: string;
	// for advanced setup
	cmd:string;
	tip:string;
}

interface SourceInfo {
	name: string;
	source: string;
	wiki: string;
	library: LibraryInfo[];
}
