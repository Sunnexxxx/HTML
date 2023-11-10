const body = document.querySelector("body") //select
const list = [
    "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg",
    "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg",
    "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg"
]
body.addEventListener("click", (event) => {
    if (event.target == event.currentTarget) {
        return;
    }
    console.log(event.pageX);
    console.log(event.pageY);
    event.target.style = "border:11px solid black;"


})
const cursor = document.createElement("div")
cursor.classList.add("cursor")

body.append(cursor)
body.addEventListener("mousemove", (event) => {
    cursor.style = `top: ${event.pageY}px; left: ${event.pageX}px;`

})
for (let i = 0; i < list.length; i++) {
    const image = document.createElement("img") // create
    image.src = list[i]
    image.width = "200"
    body.append(image)

}