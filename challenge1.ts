import { getData } from "./getData"

const data: string[] = (
  await getData("https://codember.dev/data/message_01.txt")
)
  .slice(0, -1)
  .split(" ")

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

console.log(reto1(data))
