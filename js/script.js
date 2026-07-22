/*Name this external file gallery.js*/

function upDate(previewPic) {
// 1. Get the source and alt text from the hovered image
var picSource = previewPic.getAttribute("src");
var picAlt = previewPic.getAttribute("alt");
// 2. Update the background image and text of the #image div
document.getElementById("image").style.backgroundImage = "url('" + picSource + "')";
document.getElementById("image").innerHTML = picAlt;
}

function unDo() {
// Reset the #image div back to its original state
document.getElementById("image").style.backgroundImage = "url('')";
document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
