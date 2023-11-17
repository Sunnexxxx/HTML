const btn = document.createElement("button");
const body = document.querySelector("body");
body.append(btn);
btn.innerHTML = "Send";
btn.style = "width: 100px; height: 50px; border: 1px solid black; border-radius: 8px; background-color: bisque; font-size: 20px; font-family: system-ui; font-weight: 700;"
function writeCharacters(array) {

    for (const iterator of array) {
        const div = document.createElement("div")
        const image = document.createElement("img")
        const p = document.createElement("p")

        div.classList.add("item")
        image.classList.add("item__image")
        p.classList.add("item__text")

        p.innerHTML = iterator.name
        image.src = iterator.image
        div.append(image)
        div.append(p)
        document.querySelector(".root").append(div)
    }
}

async function getAll(event) {
    let url = "https://rickandmortyapi.com/api/character"
    if (event.target.value) {
        url = event.target.value
    }
    const res = await fetch(url)
    if (res.status < 300) {
        const data = await res.json()
        event.target.value = data.info.next
        writeCharacters(data.results)
    }

}
btn.addEventListener("click", getAll)



function submit(event) {
    event.preventDefault()
    console.log(event.target.fullName.value);
}
body.addEventListener("click", clickBody, { capture: true, once: true })

