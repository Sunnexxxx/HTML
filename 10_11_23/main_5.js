////let body = document.querySelector("body")
////
////for (let i = 0; i < 101; i++){
////    let input = document.createElement("input");
////    input.placeholder = `input - ${i}`;
////    input.type = "number";
////    body.append(input)
////    body.prepend(input)
////    body.before(input)
////    body.after()
////    input.setAttribute("itstep")
////    input.getAttribute("itstep")
//
////const body = document.querySelector("body") //select
////const list = [
////    "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg",
////    "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg",
////    "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg"
////]
////const list_2 = ["https://i1.sndcdn.com/artworks-AEgCHj6ZZuqF-0-t500x500.jpg"]
////for (let i = 0; i < list.length; i++) {
////    const image = document.createElement("img") // create
////    image.src = list[i]
////    image.width="200"
////    body.append(image)
////    if(image.src = list[i]){
////        image.addEventListener("click", (event)=>{
////        image.src = list_2
////        }
////}
////}
//
////const body = document.querySelector("body") //select
////const list = [
////    "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg",
////    "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg",
////    "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg"
////]
////body.addEventListener("click", (event) => {
////    if (event.target == event.currentTarget) {
////        return;
////    }
////    console.log(event.pageX);
////    console.log(event.pageY);
////    event.target.style = "border:11px solid black;"
////
////})
////const cursor = document.createElement("div")
////body.append(cursor)
////body.addEventListener("mousemove", (event) => {
////    console.log(event.pageX);
////    console.log(event.pageY);
////})
////for (let i = 0; i < list.length; i++) {
////    const image = document.createElement("img") // create
////    image.src = list[i]
////    image.width = "200"
////    body.append(image)
////}
//
//const body = document.querySelector("body") //select
//const list = [
//    "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg",
//    "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg",
//    "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg"
//]
//body.addEventListener("click", (event) => {
//    if (event.target == event.currentTarget) {
//        return;
//    }
//    console.log(event.pageX);
//    console.log(event.pageY);
//    event.target.style = "border:11px solid black;"
//
//
//})
//const cursor = document.createElement("div")
//cursor.style = `
//                position: absolute;
//                top: 0;
//                left: 0;
//                width: 10px;
//                height: 10px;
//                background-color: red;
//                border-radius: 100%;
//                `
//
//body.append(cursor)
//body.addEventListener("mousemove", (event) => {
//    cursor.style = `
//                position: absolute;
//                top: ${event.pageY}px;
//                left: ${event.pageX}px;
//                width: 10px;
//                height: 10px;
//                background-color: red;
//                border-radius: 100%;
//                `
//
//})
//for (let i = 0; i < list.length; i++) {
//    const image = document.createElement("img") // create
//    image.src = list[i]
//    image.width = "200"
//    body.append(image)
//
//}

let h = document.querySelector("h1")
let p = document.querySelector("p")

h.addEventListener("mouseenter", (event) => {
    if (event.target == h){
        h.style = `color: red`}

})
h.addEventListener("mouseleave", (event) => {
    if (event.target == h){
        h.style = `color: black`}

})
p.addEventListener("mouseenter", (event) => {
    if (event.target == p){
        p.style = `color: blue`}
})
p.addEventListener("mouseleave", (event) => {
    if (event.target == p){
        p.style = `color: black`}
})


