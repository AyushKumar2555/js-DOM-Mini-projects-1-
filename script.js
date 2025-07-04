var a = document.getElementById("add")
var str = document.querySelector("h5")
var count = 0;

a.addEventListener("click", function () {
    if (count == 0) {
        str.innerHTML = "Friends"
        str.style.color = "green"
        a.innerHTML = "Remove"
        count = 1;
    }
    else {
         str.innerHTML = "Stranger"
        str.style.color = "red"
        a.innerHTML = "Add Friend"
        count = 0;
    }
})
