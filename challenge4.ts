import { getData } from "./getData"

const data = await getData("https://codember.dev/data/files_quarantine.txt")

function reto4(text: string) {
  return text.split("\n").filter((file) => {
    const [string, checksum] = file.split("-")

    let chars: Set<string> = new Set()
    for (let char of string) {
      !chars.has(char) ? chars.add(char) : chars.delete(char)
    }

    let array: string[] = []

    for (const char of chars.values()) {
      array.push(char)
    }

    return array.join("") === checksum
  })
}

const output = reto4(data)
console.log(output)
console.log(output[31])
