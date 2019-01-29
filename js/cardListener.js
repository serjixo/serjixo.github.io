document.addEventListener("DOMContentLoaded", function () {
    var card1Button = document.getElementById("listen__card1")
    card1Button.addEventListener("click", function () {
        var popup = document.getElementById("listen1")
        popup.style.display = "block"
        var background = document.getElementById("blur_popup")
        background.style.display = "block"
    })

    var closepopUp1 = document.getElementById("close__popup1");
    closepopUp1.addEventListener("click", function () {
        var popup = document.getElementById("listen1")
        popup.style.display = "none"
        var iframeElement = document.getElementById("player")
        var widget1         = SC.Widget(iframeElement);
        widget1.pause();
        var background = document.getElementById("blur_popup")
        background.style.display = "none"
    })
    

})
