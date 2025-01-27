async function tapsyrma() {
  try {
    let responce = await fetch(
      'https://api.jsonbin.io/v3/b/67965b2ee41b4d34e47efbb7'
    )
    let data = await responce.json()

    let list = document.querySelector('.list')
    let div = document.createElement('div')
    let num = 0

    list.textContent = ''

    num = Math.floor(Math.random() * data.record.tasks.length)

    div.innerHTML = `
    <h2>${data.record.tasks[num].title}</h2>`

    list.appendChild(div)

    if (list.textContent == '') {
      console.log()
    }
  } catch (err) {
    console.error(err.message)
  }
}
