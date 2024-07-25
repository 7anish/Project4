const addbtn = document.getElementById("add")



addbtn.addEventListener('click', () => {
    const url = document.getElementById("url").value;

    if (checkurl(url)) {

        const arr = JSON.parse(localStorage.getItem("collection")) ?? [];
        arr.push(url)
        localStorage.setItem("collection", JSON.stringify(arr))


        containerreset();
        document.getElementById("url").value = "";
    }
    else {
        alert("Invalid url")
        document.getElementById("url").value = "";
    }
})


const containerreset = () => {
    let html = '';
    const arr = JSON.parse(localStorage.getItem("collection"))
    arr.forEach((url, index) => {
        html += `<div class="image"> <img src="${url}" alt=""> 
        <button class="edit" onclick="edititme(${index})"><i class="fa-solid fa-pen-to-square"></i></button> 
        <button onclick="deleteitem(${index})">
        <i class="fa-solid fa-trash"></i></button> </div>`
    })
    document.querySelector(".image-container").innerHTML = html
}

const firstload = ()=>{
    containerreset()
}
firstload();

const deleteitem = (i) => {
    const arr = JSON.parse(localStorage.getItem("collection"))
    arr.splice(i, 1);
    localStorage.setItem("collection", JSON.stringify(arr))
    containerreset();
}

const edititme = (i) => {
    const url = prompt("Enter new Url");

    if (checkurl(url)) {
        const arr = JSON.parse(localStorage.getItem("collection"))
        arr.splice(i, 1,url);
        localStorage.setItem("collection", JSON.stringify(arr))
        containerreset();
    }
    else {
        alert("invalid url");
    }
}

const checkurl = (url) => {
    return (/(https?:\/\/.*\.(?:png|jpg|webp|jpeg))/i).test(url)
}


const down = document.querySelector(".down")

down.addEventListener('click',()=>{
    window.scrollBy(0,window.innerHeight)
})