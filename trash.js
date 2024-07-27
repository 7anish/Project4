const containerreset = () => {
    let html = '';
    const arr = JSON.parse(localStorage.getItem("Trash"));
    console.log(arr?.length)
    if (arr?.length == undefined) {
        console.log("heloo")
        document.querySelector(".image-container").innerHTML = `<div class="empty">
                <img style="align-self: center;" src="./image/empty.png" alt="">
            </div>`
    }
    else {
        arr?.forEach((url, index) => {
            html += `<div class="image"> 
        <img  src="${url}" onerror="this.src='./image/error.webp';" alt=""></div>`
        })
        document.querySelector(".image-container").innerHTML = html
    }
}


const firstload = () => {
    containerreset()
}
firstload();


const clear = document.querySelector(".clear-button")

clear.addEventListener('click', () => {
    localStorage.removeItem("Trash")
    containerreset()
})