import Cookie from 'js-cookie';

/**
 * 设置cookie
 * @param  {any} info
 * @return {void}
 */
export function setCookie(info) {
  const arr = Object.entries(info);
  for (let i = 0; i < arr.length; i += 1) {
    Cookie.set(arr[i][0], arr[i][1]);
  }
  return true;
}

/**
 * 获取用户的cookie信息
 * @return {void} cookie存储的信息
 */
export function getUserCookie() {
  return {
    username: Cookie.get('username'),
    appkey: Cookie.get('appkey'),
    role: Cookie.get('role'),
    email: Cookie.get('email'),
  };
}

/**
 * 移除cookie
 * @return
 */
export function removeUserCookie() {
  Cookie.remove('username');
  Cookie.remove('appkey');
  Cookie.remove('role');
  Cookie.remove('email');
  return true;
}
