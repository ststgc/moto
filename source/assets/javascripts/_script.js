var root = document.documentElement;
var letterCloseButton = document.querySelectorAll(".js-letter-close")[0];
var mLetter = localStorage.getItem("hide-letter");
"true" == mLetter && d.classList.add("hide-letter");

letterCloseButton.addEventListener("click", function(){
    root.classList.contains("hide-letter") ? (root.classList.remove("hide-letter"),
        localStorage.setItem("hide-letter", "false")) : (root.classList.add("hide-letter"), localStorage.setItem("hide-letter", "true"))
});

"true" == mLetter && root.classList.add("hide-letter");
