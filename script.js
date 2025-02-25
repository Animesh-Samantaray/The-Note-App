let container = document.querySelector(".notes-container");
const create = document.querySelector(".addNew");
var inputBox = document.createElement("p");

create.addEventListener("click", () => {
    let boxNew = document.createElement("div");
    boxNew.className = "box opacity-0 scale-75 transition-all duration-500 flex flex-col mx-[30px] my-[30px] bg-yellow-400 h-auto relative ";

    let inputBox = document.createElement("p");
    inputBox.className = "input-box h-[130px] w-[300px] sm:h-[170px] sm:w-[340px] md:h-[300px] md:w-[600px] border-2 border-black bg-blue-200 hover:bg-blue-300 text-black  p-3 overflow-y-scroll ";
    inputBox.setAttribute("contenteditable", "true");

    container.appendChild(boxNew).appendChild(inputBox);
    setTimeout(() => {
        boxNew.classList.add("opacity-100", "scale-100");
    }, 10); 

    let deleteImg = document.createElement("img");
    deleteImg.src = "delun-removebg-preview.png";
    deleteImg.className = "md:h-[80px] md:w-[140px] absolute md:-bottom-2 md:-right-1 cursor-pointer w-[100px] h-[50px] -bottom-1 -right-1";

    boxNew.appendChild(deleteImg);
});

// Event listener for deleting notes
container.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        let box = e.target.parentElement;
        box.classList.remove("opacity-100", "scale-100");
        box.classList.add("opacity-0", "scale-75");

        setTimeout(() => {
            box.remove();
        }, 500);
    }
   
});


