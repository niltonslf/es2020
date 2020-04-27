const houseFurnitures = {
  kitchen: ["stove", "refrigerator", "cupboard"],
  livingRoom: ["sofa"],
}

console.log(houseFurnitures.bedroom?.[2]) // undefined
console.log(houseFurnitures.getbedroomFornitures?.()) // undefined

const houseFurnitures2 = {
  kitchen: ["stove", "refrigerator", "cupboard"],
  livingRoom: ["sofa"],
  bedroom: ["bed", "desk", "wardrobe"],
  getbedroomFornitures() {
    return this.bedroom
  },
}

console.log(houseFurnitures2.bedroom?.[2]) // wardrobe
console.log(houseFurnitures2.getbedroomFornitures?.()) // [ 'bed', 'desk', 'wardrobe' ]
