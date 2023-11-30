export async function getData(url: string) {
  return await fetch(url).then((res) => res.text())
}
