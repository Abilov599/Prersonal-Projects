$("#subBtn").click(() => {
  $("#subscribe-modal").toggle("show");
});

$("#close-modal").click(() => {
  $("#subscribe-modal").toggle("hide");
});

$("#subscribe-form").submit((e) => {
  e.preventDefault();
  $("#subscribe-modal").css("display", "none");
});

let subImg = document.querySelectorAll(".img-opacity");

subImg.forEach((img) => {
  img.addEventListener("click", (e) => {
    $(".main-image").attr("src", e.target.src);
    $("#img-txt").text(e.target.name);
    subImg.forEach((img) => {
      if (document.querySelector(".main-image").src === img.children[0].src) {
        img.style.opacity = "1";
      } else {
        img.style.opacity = "0.7";
      }
    });
  });
});

subImg.forEach((img) => {
  if (document.querySelector(".main-image").src === img.children[0].src) {
    img.style.opacity = "1";
  } else {
    img.style.opacity = "0.7";
  }
});

$(".fa-bars").click(() => {
  $(".fa-bars").css("display", "none");
  $(".left").toggle("show");
  $(".left").css("left", "0");
  $(".left").css("z-index", "1");
  $(".right").css("background-color", "rgba(0, 0, 0, 0.4)");
});

$("#close-nav").click(() => {
  $(".fa-bars").css("display", "block");
  $(".left").toggle("hide");
  $(".right").css("background-color", "white");
});
