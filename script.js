let searchInput = document.querySelector(".header__search-input")
let searchButton = document.querySelector(".header__search-button")

let blockOne = document.getElementById("blockOne").outerHTML
let blockTwo = document.getElementById("blockTwo").outerHTML
let blockThree = document.getElementById("blockThree").outerHTML
let blockFour = document.getElementById("blockFour").outerHTML
let blockFive = document.getElementById("blockFive").outerHTML


let blockOneTxt = "bonuse 1"
let blockTwoTxt = "video"
let blockThreeTxt = "bonuse 2"
let blockFourTxt = "free"
let blockFiveTxt = "buy"


let searchArray = [blockOneTxt,blockTwoTxt,blockThreeTxt,blockFourTxt,blockFiveTxt]


searchButton.addEventListener("click", function() {
        handleSearch();
    });
searchInput.addEventListener("keydown", function() {
        if (event.key === "Enter") {
            handleSearch();
        }
    });

    
function handleSearch() {
    let searchInputValue = searchInput.value
    for(let word of searchArray){
        if(word === searchInputValue){
            switch(searchInputValue){

                    case "bonuse 1":
                        this.sessionStorage.setItem("Result", blockOne)
                break;
                    case "video":
                        this.sessionStorage.setItem("Result", blockTwo)
                break;
                    case "bonuse 2":
                        this.sessionStorage.setItem("Result", blockThree)
                break;
                    case "free":
                        this.sessionStorage.setItem("Result", blockFour)
                break;
                    case "buy":
                        this.sessionStorage.setItem("Result", blockFive)
                break;
            }

            this.window.location.href="search.html";
            return
        }
    }
    this.alert("!!@@ Please enter correct !!@!!")
}






let modalInput = document.querySelector(".header__searchList")

searchInput.addEventListener("input", function(){
    if(searchInput.value.length >= 0){
        modalInput.classList.add("new")
    }
    else{
        modalInput.classList.remove("new")
    }
})

