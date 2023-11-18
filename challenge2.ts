const reto2 = (text: string): string => {
  let output = ""
  let number = 0

  for (let i = 0; i < text.length; i++) {
    const actual = text[i]
    if (actual === "#") number += 1
    else if (actual === "@") number -= 1
    else if (actual === "*") number *= number
    else if (actual === "&") output += String(number)
  }

  return output
}

console.log(
  reto2(
    "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&"
  )
)
