// arquivo não vai rodar. Somente um exemplo

import("./moduleExample.js")
  .then((moduleExample) => {
    moduleExample("do something")
  })
  .catch((err) => {
    console.log("erro ao importar lib", err)
  })

// Carregamento sob demanda

document.querySelector(".element").addEventListener("click", async () => {
  const moduleExample = await import("./moduleExample.js")
  moduleExample("do something")
})
