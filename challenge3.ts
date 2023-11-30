import { getData } from "./getData"

const data = (
  await getData("https://codember.dev/data/encryption_policies.txt")
).split("\n")

const reto3 = (keys: string[]) => {
  const filteredArray = keys.filter((key) => {
    const [times, letter, policy] = key.split(" ")
    const occurrences = policy.split(letter[0]).length - 1
    const [min, max] = [Number(times[0]), Number(times[2])]

    return occurrences < min || occurrences > max
  })
  return filteredArray
}

const output = reto3(data)
console.log(output[40].split(" ")[2])
