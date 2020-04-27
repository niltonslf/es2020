function canIuse(method) {
  return typeof globalThis[method] === "function"
}

console.log(canIuse("XMLHttpRequest"))
// expected output (in a browser): true
