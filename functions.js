window.onload = (event) => {

};

let imageBox1 = document.getElementById("imageBox");

function galleryFunction(smallImg) {
    imageBox1.src = smallImg.src;
}

// Get the modal image tag
var modal = document.getElementById("imgModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var modalImage = document.getElementById("modal-image");

// When the user clicks the big picture, set the image and open the modal
imageBox1.onclick = function (e) {
    var src = e.srcElement.src;
    modal.style.display = "block";
    modalImage.src = src;
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal || event.target == document.getElementsByClassName("modal-content")[0]) {
        modal.style.display = "none";
    }
};


// Nav items change active class on click, it adds .active class to clicked item and removes it from other one

document.addEventListener('DOMContentLoaded', function () {
    var navItems = document.querySelectorAll('.navitem');

    navItems.forEach(function (one) {
        one.addEventListener('click', function () {
            navItems.forEach(function (otherOne) {
                otherOne.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});



// Change main content 

var content = document.querySelector('#container');
var links = document.querySelectorAll('.navitem');
var dict = {} // html content of pages

// Welcome me Page
const welcomePage = `<span style="background-color: lime">Replacement HTML</span>`;

for (var i = 0; i < links.length; i++)
{
    dict[links[i].id] = "a"
}


function changeContent(clickedNavItem){
    content.innerHTML = dict[clickedNavItem.id];
}


const esnacksPage = `<div id="imgModal" class="modal">
<div class="modal-content">
    <span class="close">&times;</span>
    <img src="" id="modal-image" class="modal-image"/>
</div>
</div>
<section id="content-section" class="content-section">
<div class="content-image-div">
    <img src="static/eSnacks.png" id="imageBox" alt="eSnacks
        website image">
</div>
<div class="content-description-div">
    <h1 class="project-title">Welcome to my website!</h1>
    <div class="project-tags">#przykładowe #tagi #super #projekt</div>
    <div class="project-description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus quisquam, eius magni
            repellat voluptatem totam nostrum nulla quos
            consectetur, sint mollitia porro iusto minus aut
            modi explicabo fugiat, dolorem reprehenderit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Doloribus quisquam, eius magni repellat
            voluptatem totam nostrum nulla quos consectetur,
            sint mollitia porro iusto minus aut modi explicabo
            fugiat, dolorem reprehenderit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Doloribus quisquam, eius magni repellat
            voluptatem totam nostrum nulla quos consectetur,
            sint mollitia porro iusto minus aut modi explicabo
            fugiat, dolorem reprehenderit.</p>
        <p>Lorem ipsum dolor sit amet connulla quos consectetur,
            sint mollitia porro iusto minus aut modi orem
            reprehenderit.</p>
    </div>
    <div class="project-hexagons" style="display: none;">
        <ul class="hexagons-ul">
            <li class="hexagon">
                <div>
                    Hex 1
                </div>
            </li>
            <li class="hexagon">
                <div>
                    Hex 2
                </div>
            </li>
            <li class="hexagon">
                <div>
                    Hex 3
                </div>
            </li>
        </ul>
    </div>
</div>
</section>
<article id="boxes-article" class="boxes-article">
<ul class="boxes-ul">
    <li class="box">
        <h3>Technologia</h3>
        <div class="box-description">Opisowy opis</div>
        <hr class="hr-neon" style="margin-top:auto;">
        <div class="box-caption">Ver. 6.0.14</div>
    </li>
    <li class="box">
        <h3>Fajna technologia z kilkoma wyrazami</h3>
        <div class="box-description">Opisowy opis</div>
        <hr class="hr-neon" style="margin-top:auto;">
        <div class="box-caption">Ver. 6.0.14</div>
    </li>
    <li class="box">
        <h3>Technologia</h3>
        <div class="box-description">Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quidem modi optio
            commodi magni, ipsum molestiae dolorum possimus esse
            vero alias ullam nemo ea quas nulla quos soluta.</div>
        <hr class="hr-neon" style="margin-top:auto;">
        <div class="box-caption">Ver. 6.0.14</div>
    </li>
    <li class="box">
        <h3>Technologia</h3>
        <div class="box-description">Placeholder</div>
        <hr class="hr-neon" style="margin-top:auto;">
        <div class="box-caption">Ver. 6.0.14</div>
    </li>
</ul>
</article>`