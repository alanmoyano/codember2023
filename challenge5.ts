import { getData } from "./getData"

const data = await getData("https://codember.dev/data/database_attacked.txt")

function reto5(database: string) {
  const invalidUsers = database.split("\n").filter((user) => {
    const [id, username, email, age, location] = user.split(",")

    const alfaNum = new RegExp("[^a-zA-Z0-9]")
    const emailReg = /[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.com/g

    if (!id || !username || !email) return true
    if (age && !Number(age)) return true
    if (location && !/[a-zA-Z]/g.test(location)) return true
    if (alfaNum.test(id) || alfaNum.test(username) || !emailReg.test(email))
      return true
  })

  console.log(invalidUsers)

  let message = ""

  invalidUsers.forEach((user) => (message += user.split(",")[1][0]))

  return message
}

const output = reto5(data)
console.log(output)
