let inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const resetBtn = document.getElementById("reset-btn")
const list = document.querySelector(".list-group");
const alrt = document.querySelector(".alert")

resetBtn.style.display = "none"

btn.onclick = function () {

    if(inp.value.length >= 3) {
        const list_item = document.createElement("li");
        list_item.classList.add("list-group-item", "d-flex", "justify-content-between");

        const span = document.createElement("span");
        span.innerHTML = inp.value;

        list_item.append(span)

        const div = document.createElement("div")

        const checkBtn = document.createElement("button")
        checkBtn.classList.add("btn", "btn-light", "btn-sm")
        checkBtn.innerHTML = `<i class="fa-solid fa-check text-success"></i>`

        checkBtn.addEventListener("click", function () {
            this.parentElement.previousSibling.style.textDecoration = "line-through"

            this.parentElement.parentElement.classList.add("bg-success")
            checkBtn.style.display = "none"
        })

        const trashBtn = document.createElement("button")
        trashBtn.classList.add("btn", "btn-light", "btn-sm")
        trashBtn.innerHTML = `<i class="fa-solid fa-trash text-danger"></i>`

        // trashBtn.addEventListener("click" , () => {
        //     this.parentElement.parentElement.remove();
        // })
        trashBtn.onclick = function () {
            this.parentElement.parentElement.remove();
        }

        div.append(checkBtn, trashBtn)

        list_item.append(div)

        list.append(list_item)

        inp.value = ""
        resetBtn.style.display = "block"
        alrt.style.display = "none"
    }

    else {
        alert("Yazı daxil edin (Simvol sayı 3-dən çox olmalıdır)")
    }

}

resetBtn.onclick = () => {

    inp.value = ""


}