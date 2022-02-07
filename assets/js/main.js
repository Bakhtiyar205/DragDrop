// this cannot use arrow functions, the difference between e.target and this

// let form = document.getElementById("form");
// let inputPass = document.querySelector(".password");
// let inputEmail = document.querySelector(".email");
// let errorMessage = document.getElementById("error-meesage");

/*
inputEmail.addEventListener("keyup", function(){error(inputEmail)
})

inputPass.addEventListener("keyup", function(){
    error(inputPass)
})

// Function for spacing
function error(e) {
    if(e.value.trim() == "" ){
        console.log("hello")
        errorMessage.classList.remove ("d-none");
        e.parentNode.lastElementChild.classList.add("disabled");
    }else {
        errorMessage.classList.add("d-none");
        e.parentNode.lastElementChild.classList.remove("disabled");
    }
}
*/

// inputEmail.addEventListener("change" ,function(e){
//     console.log("changed")
// })

// let cities = document.getElementById("cities");

// cities[0].addEventListener("click", function(){
//     cities.parentNode.lastElementChild.classList.add("disabled");
// })
// cities[1].addEventListener("click", function(){
//     cities.parentNode.lastElementChild.classList.remove("disabled");
// })

// cities.addEventListener("change", function(e){

//       console.log(this.value)
//     })

// form.addEventListener("submit", function(e){
//     e.preventDefault()

//     // console.log(this);
//     // console.log(e.target);
//     // console.log(e);
//     // console.log("ok");
//     // if(inputEmail.value.trim() == "" || inputPass.value.trim() == ""){
//     //     errorMessage.classList.remove ("d-none");
//     // }else {
//     //     errorMessage.classList.add("d-none");
//     // }

// })

// let dragElems = document.querySelectorAll(".item");
// let dropArea = document.querySelector("#drop-area");

// dragElems.forEach(elem => {
//     elem.ondragstart = (e) => {
//         e.dataTransfer.setData("id", e.target.id)
//     }
// });

// dragElem.ondragstart = (e) => {
//    e.dataTransfer.setData("id", e.target.id)
// }

// dragElem.ondragend = (e) => {
//     e.target.style.backgroundColor = "teal";
// }

// dragElem.ondrag = (e) => {
//     e.target.style.backgroundColor = "red";
// }

// dropArea.ondragover = (e) => {
//     e.preventDefault();
// }

// dropArea.ondragleave = (e) => {
//     console.log("leave");
// }

// dropArea.ondrop = (e) => {
//     let id = e.dataTransfer.getData("id");
//     e.target.append(document.getElementById(id))
// }

let upload = document.getElementById("upload");
let table = document.getElementById("table");
let dropPlace = document.querySelector(".upload-area");

upload.addEventListener("click", function (e) {
  this.nextElementSibling.click();
});

upload.nextElementSibling.onchange = function (e) {
  uploadImages(e.target.files);
};

// reader.readAsDataURL

dropPlace.ondragover = (e) => {
  e.preventDefault();
};

dropPlace.ondrop = (e) => {
  e.preventDefault();
  uploadImages(e.dataTransfer.files);
};

function uploadImages(files) {
  for (const file of files) {
    let reader = new FileReader();
    reader.onloadend = function (ev) {
      table.lastElementChild.innerHTML += `
            <tr>
                <td><img src="${
                  ev.target.result
                }" style="height:100px" alt=""></td>
                <td>${file.name}</td>
                <td>${file.type}</td>
                <td>${file.size / 1024}</td>
            </tr>
            `;
    };
    reader.readAsDataURL(file);
  }
}
