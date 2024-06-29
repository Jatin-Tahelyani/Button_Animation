
let btn = document.querySelector(".main")
let outline = document.querySelector(".outline")
let count = true

btn.addEventListener("click", () => {
    if (count) {
        btn.style.transform = "translateX(200px)"
        outline.style.background = "url(thunder.gif)"
        btn.style.transition = "2s all"
        outline.style.transition = "2s all"
        count = false
    } else {
        btn.style.transform = "translateX(0px)"
        btn.style.transition = "2s all"
        outline.style.background = "url(thunder2.gif)"
        outline.style.transition = "2s all"
        count = true
    }


})