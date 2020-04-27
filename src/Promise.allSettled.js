const promiseResolved = Promise.resolve("ok")
const promiseError = Promise.reject(new Error("Deu pau!"))
const promiseData = Promise.resolve([1, 2, 3, 4])

const promises = [promiseResolved, promiseError, promiseData]

// Retorna um erro pois uma das promises deu errada
Promise.all(promises)
  .then((res) => console.log({ res }))
  .catch((err) => console.log("Erro no promise.all", err))

/**  NEW */

// Resolve todas as promises, mesmo aquela que retorna um erro
Promise.allSettled(promises)
  .then((res) => console.log(res))
  .catch((err) => console.log("erro no promise.allSettled"))
