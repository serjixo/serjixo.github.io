document.addEventListener("DOMContentLoaded", function () {
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