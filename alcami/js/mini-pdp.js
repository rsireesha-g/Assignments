var pdpImagesSrc = [
    "./assets/svg/product.png",
    "./assets/svg/mini-img1.png",
    "./assets/svg/mini-img2.png",
    "./assets/svg/mini-img3.png",
    "./assets/svg/mini-img4.png",
    "./assets/svg/flavour2-1.png",
    "./assets/svg/flavour2-2.png",
    "./assets/svg/flavour3-1.png",
    "./assets/svg/flavour3-2.png"
];

var productPreviewIndex = 0;
function pdpImagesMapping() {
    var pdpMainImg = document.querySelector(".pdp-main-img");
    var miniImgGrid = document.querySelector(".mini-img-grid");
    pdpMainImg.innerHTML = "";
    miniImgGrid.innerHTML = "";

    var mainImg = document.createElement("img");
    mainImg.setAttribute("class", "main-img");
    // mainImg.src = pdpImagesSrc[productPreviewIndex];


    // var remainingImages = pdpImagesMapping?.filter((_, ind) => ind !== productPreviewIndex);
    pdpImagesSrc?.forEach((img, ind) => {
        var miniImg = document.createElement("img");
        miniImg.setAttribute("class", "mini-img");
        miniImg.addEventListener("click", function () {
            productPreviewIndex = ind;
            pdpImagesMapping()
        })
        if (ind !== productPreviewIndex) {
            miniImg.src = pdpImagesSrc[ind];
            miniImgGrid.append(miniImg)
        } else {
            mainImg.src = pdpImagesSrc[ind];
            pdpMainImg.append(mainImg);
        }
    })

}
function dotsMapping() {
    document.getElementsByClassName("pdp-dots-container")[0].innerText = "";
    for (let j = 0; j < 9; j++) {
        var dot = document.createElement("div");
        dot.addEventListener("click", function () {
            productPreviewIndex = j;
            dotsMapping();
            pdpImagesMapping();
        })
        dot.setAttribute("class", "dot")
        if (j === productPreviewIndex) {
            dot.style.background = "#333"
        } else {
            dot.style.background = "none"
        }
        document.getElementsByClassName("pdp-dots-container")[0].append(dot)
    }
}

var prevArrow = document.querySelector(".pdp-prev");
var nextArrow = document.querySelector(".pdp-next");

nextArrow.addEventListener("click", function () {
    productPreviewIndex < pdpImagesSrc?.length ? productPreviewIndex += 1 : productPreviewIndex;
    if (productPreviewIndex > pdpImagesSrc?.length - 1) {
        nextArrow.style.background = "none";
    } else {
        nextArrow.style.background = "#666";
    }
    prevArrow.style.background = "#666";
    dotsMapping();
    pdpImagesMapping();
})

prevArrow.addEventListener("click", function () {
    productPreviewIndex > 0 ? productPreviewIndex -= 1 : productPreviewIndex;
    if (productPreviewIndex === 0) {
        prevArrow.style.background = "none";
    } else {
        prevArrow.style.background = "#666";
    }
    nextArrow.style.background = "#666";
    dotsMapping();
    pdpImagesMapping();
})

dotsMapping();
pdpImagesMapping();