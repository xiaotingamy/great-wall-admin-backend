/*
 * @Description: res 的数据模型
 * @version: 
 * @Author: guoxt
 * @Date: 2021-11-07 18:25:24
 * @LastEditors: guoxt
 * @LastEditTime: 2021-11-08 23:41:52
 */

class BaseModel {
  constructor({ errorCode, data, errorMsg, success }) {
    this.success = success
    if (errorCode) {
      this.errorCode = errorCode
    }
    if (data) {
      this.data = data
    }
    if (errorMsg) {
      this.errorMsg = errorMsg
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(data = {}) {
    super({
      data,
      success: true
    })
  }
}

class ErrorModel extends BaseModel {
  constructor({ errorCode = -1, errorMsg }) {
    super({
      errorCode,
      errorMsg,
      success: false
    })
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}
