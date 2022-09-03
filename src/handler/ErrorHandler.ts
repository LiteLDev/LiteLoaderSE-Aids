class ErrorHandler {
  static bdsRuntimeError: string = "BDS启动错误 Error:";
  static handleBdsRuntimeError(stdout: string): string {
    if (stdout.indexOf("Network port occupied") >= 0) {
      return this.bdsRuntimeError + "端口占用";
    } else {
      return this.bdsRuntimeError + "Unknown Error";
    }
  }
}
