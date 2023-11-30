import { getData } from "./getData"

const data = await getData("https://codember.dev/data/database_attacked.txt")

function reto5(database: string) {
  const invalidUsers = database.split("\n").filter((user) => {
    const [id, username, email, age, location] = user.split(",")

    const notAlfaNum = /[^a-zA-Z0-9]/g
    const emailReg = /\w+@\w+\.com/g
    const chars = /[a-zA-Z]/g

    if (
      (age && !Number(age)) ||
      (location && !chars.test(location)) ||
      notAlfaNum.test(id) ||
      notAlfaNum.test(username) ||
      !emailReg.test(email)
    )
      return true
  })

  console.log(invalidUsers)

  let message = ""

  invalidUsers.forEach((user) => (message += user.split(",")[1][0]))

  return message
}

const output = reto5(data)
console.log(output)
