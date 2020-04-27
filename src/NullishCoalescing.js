console.log(true ?? true) // true
console.log(true ?? false) // true
console.log(false ?? true) // false
console.log(undefined ?? true) // true
console.log(null ?? true) // true
console.log(0 ?? true) // true
console.log(1 ?? null) // 1
console.log("" ?? true) // ''

// Example

const eventResponse = {
  name: "Pool party",
  location: "New york",
}

console.log(eventResponse.price ?? "Preço não informado")
