export const serializeArray = (name, valueArr) => {
  const newName = `${name}=`
  const res = []
  for (let i = 0; i < valueArr.length; i++) {
    if (valueArr[i] !== "") {
      res.push(newName + encodeURIComponent(valueArr[i]))
    }
  }
  return res.join("&")
}

export const serializeQuery = param => {
  const p = []
  Object.keys(param).forEach(k => {
    const v = param[k]
    if (v !== "") {
      p.push(
        v instanceof Array
          ? serializeArray(k, v)
          : `${k}=${encodeURIComponent(v)}`
      )
    }
  })
  return p.join("&")
}
