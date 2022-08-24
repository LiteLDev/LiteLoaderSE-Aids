
// 空判断
export function isNotEmpty(obj: any): boolean {
  return (obj !== null && obj !== '' && obj !== undefined && obj !== 'undefined' && obj !== 'null');
}