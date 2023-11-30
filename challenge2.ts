import { getData } from "./getData"

const data = await getData("https://codember.dev/data/message_02.txt")

const reto2 = (text: string): string => {
  let output = ""
  let number = 0

  for (let i = 0; i < text.length; i++) {
    switch (text[i]) {
      case "#":
        number += 1
      case "@":
        number -= 1
      case "*":
        number *= number
      case "&":
        output += String(number)
      default:
        throw new Error("Invalid character")
    }
  }

  return output
}

console.log(reto2(data))
