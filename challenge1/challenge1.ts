// llaveS casa CASA casa llaves -> llaves2casa3
// taza ta za taza -> taza2ta1za1
// casas casa casasas -> casas1casa1casas1

const reto1 = (texts: string[]) => {
  const textsLower = texts.map((text) => text.toLowerCase())

  const set = new Set(textsLower)

  // Creando el contador
  const values = {}
  const keys = set.keys()

  for (let key of keys) {
    values[key] = 0
  }

  // Contando

  for (let text of textsLower) {
    values[text] += 1
  }

  let output = ""

  for (let value in values) {
    output += `${value}${values[value]}`
  }

  return output
}
