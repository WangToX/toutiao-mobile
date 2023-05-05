/* localStorage 存储的格式是 key-value */
export function setStore (key, value) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  return localStorage.setItem(key, value)
}

export function getStore (key) {
  const data = localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

export function removeStore (key) {
  return localStorage.removeItem(key)
}
