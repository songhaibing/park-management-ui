'use strict';
let util = {};
/**
 * 判断用户是否使用的是PC
 *
 * @returns {boolean} true为PC端，false为手机端
 */
util.isPC = function() {
  let userAgentInfo = navigator.userAgent;
  let Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"];
  let flag = true;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

export default util
