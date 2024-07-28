const containerreset = () => {
    let html = '';
    const arr = JSON.parse(localStorage.getItem("Trash"));
    console.log(arr?.length)
        arr?.forEach((url, index) => {
            html += `<div class="image"> 
        <img  src="${url}" onerror="this.src='./image/error.webp';" alt="">
        <button class="edit" onclick="restore(${index})">
        <i class="fa fa-refresh" aria-hidden="true"></i>
        </button>
        <button onclick="deleteitem(${index})">
        <i class="fa-solid fa-trash"></i>
        </button> </div>`
        })
        document.querySelector(".image-container").innerHTML = html
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


const deleteitem = (i) => {
    const arr = JSON.parse(localStorage.getItem("Trash"))
    arr.splice(i, 1);
    localStorage.setItem("Trash", JSON.stringify(arr))
    containerreset();
}


const restore = (i)=>{
    const arr = JSON.parse(localStorage.getItem("Trash"))
    const collection = JSON.parse(localStorage.getItem("collection")) ?? [];

    collection.push(arr[i])
    localStorage.setItem("collection", JSON.stringify(collection));

    arr.splice(i, 1);
    localStorage.setItem("Trash", JSON.stringify(arr))
    containerreset();
}