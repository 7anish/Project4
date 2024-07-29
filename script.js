const addbtn = document.getElementById("add")
addbtn.addEventListener('click', async () => {
    const url = document.getElementById("url").value;
    const isvalidurl = await checkurl(url);
    if (isvalidurl) {
        const arr = JSON.parse(localStorage.getItem("collection")) ?? [];
        arr.push(url)
        localStorage.setItem("collection", JSON.stringify(arr))
        containerreset();
        alert("Image Added")
        document.getElementById("url").value = "";
    } else {
        alert("Invalid url")
        document.getElementById("url").value = "";
    }
})

// Refresh Image container whenever some change made
const containerreset = () => {
    let html = '';
    const arr = JSON.parse(localStorage.getItem("collection"))
    arr?.forEach((url, index) => {
        html += `<div class="image"> 
        <img  src="${url}" onerror="this.src='./image/error.webp';" alt="">
        <button class="edit" onclick="edititme(${index})">
        <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button onclick="deleteitem(${index})">
        <i class="fa-solid fa-trash"></i>
        </button> </div>`
    })
    document.querySelector(".image-container").innerHTML = html
}

// Loading the localstaorage whe page opens
const firstload = () => {
    containerreset()
}
firstload();


// Delete button
const deleteitem = (i) => {
    const arr = JSON.parse(localStorage.getItem("collection"))
    const trash = JSON.parse(localStorage.getItem("Trash")) ?? [];

    trash.push(arr[i])
    localStorage.setItem("Trash", JSON.stringify(trash));

    arr.splice(i, 1);
    localStorage.setItem("collection", JSON.stringify(arr))
    containerreset();
}


// Edit button
const edititme = async (i) => {
    const url = prompt("Enter new Url");
    const isvalidurl = await checkurl(url);
    if (isvalidurl) {
        const arr = JSON.parse(localStorage.getItem("collection"))
        arr.splice(i, 1, url);
        localStorage.setItem("collection", JSON.stringify(arr))
        containerreset();
    } else {
        alert("invalid url");
    }
}


// url checking function
// const checkurl = (url) => {
//     return (/(https?:\/\/.*\.(?:png|jpg|webp|jpeg))/i).test(url)
// }

// Checking by async and await function and width of img

const checkurl = async (url) => {
    if (url.trim() == "") {
        return false
    }
    try {
        const res = await fetch(url);
        console.log(res.status)
        const  img = new Image();
        console.log(img.src) 
        img.src = await url
        console.log(img.width)
        console.log(img.src) 
        console.log(img.width)
        if (res.status == 200 && !(img.width == 0)) {
            return true
        }
        else {
            return false
        }
    } catch (e) {
        console.log(e);
        return false
    }
}


// checking imag is valid or not by creating an image object

// const checkurl = (url)=>{
//     const img = new Image();
//     img.src = url;
//     console.log(img.src)
//     console.log(img.width)
//     if(img.width== 0){
//         console.log("false")
//         return false
//     }
//     else{
//         console.log("ture")
//         return true
//     }
// }


// scroll button
const down = document.querySelector(".down")
down.addEventListener('click', () => {
    window.scrollBy(0, window.innerHeight)
})


