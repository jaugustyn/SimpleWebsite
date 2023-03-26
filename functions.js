////// Image modal //////

let imageElem = document.querySelector("#imageBox");

if (imageElem != null) {

    // Get the modal image tag
    var modal = document.querySelector("#imgModal");

    // Get the element that closes the modal
    var close = document.querySelector(".close");

    var modalImage = document.getElementById("modal-image");

    // When the user clicks on the image, the model opens with an enlarged version of the image
    imageElem.onclick = function (elem) {
        var src = elem.target.src;
        modal.style.display = "block";
        modalImage.src = src;
    };

    // Closes the modal if the element was clicked
    close.onclick = function () {
        modal.style.display = "none";
    };

    // Closes the modal if someone clicks anywhere outside the modal
    window.onclick = function (event) {
        if (event.target == modal || event.target == document.getElementsByClassName("modal-content")[0]) {
            modal.style.display = "none";
        }
    };

}
