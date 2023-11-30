import { getData } from "./getData"

const data = await getData("https://codember.dev/data/database_attacked.txt")

const reto5 = (database: string) => {
  const invalidUsers: string[] = database.split("\n").filter((user) => {
    const [id, username, email, age, location] = user.split(",")

    if (
      !id?.match(/[a-zA-z0-9]/g) ||
      !username?.match(/[a-zA-z0-9]/g) ||
      !email?.match(/\w+\@\w+\.com/g) ||
      (age && !age.match(/\d/g)) ||
      (location && !location.match(/[a-zA-z0-9]/g))
    )
      return true

    return false
  })

  console.log(invalidUsers)

  let message = ""

  for (const invalidUser of invalidUsers) {
    message += `${invalidUser.split(",")[1][0]}`
  }

  return message
}

const output = reto5(data)
console.log(output)
