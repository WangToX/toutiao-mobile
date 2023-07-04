/* localStorage 存储的格式是 key-value */
export function setStore (key, value) {
  // 如果value是对象，就把value转为JSON格式字符串再存储
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  return localStorage.setItem(key, value)
}

export function getStore (key) {
  const data = localStorage.getItem(key)
  // 把JSON.parse放到try-catch中，因为data可能不是JSON格式字符串
  try {
    // 将数据转换为 JavaScript 对象
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

export function removeStore (key) {
  return localStorage.removeItem(key)
}
