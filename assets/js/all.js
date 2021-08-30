"use strict";

var mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2000
  }
});
$(document).ready(function () {
  // index feedback
  $("#preBtn").on("click", function (e) {
    e.preventDefault();
    var status = $("#feedback2").attr("data-isOpened");

    if (status === "true") {
      $("#feedback2").addClass("d-none").attr("data-isOpened", "false");
      $("#feedback1").removeClass("d-none").attr("data-isOpened", "true");
      $(this).toggleClass("text-primary").toggleClass("text-secondary").toggleClass("pe-none");
      $("#nextBtn").toggleClass("text-primary").toggleClass("text-secondary").toggleClass("pe-none");
    }
  });
  $("#nextBtn").on("click", function (e) {
    e.preventDefault();
    var status = $("#feedback1").attr("data-isOpened");

    if (status === "true") {
      $("#feedback1").addClass("d-none").attr("data-isOpened", "false");
      $("#feedback2").removeClass("d-none").attr("data-isOpened", "true");
      $(this).toggleClass("text-primary").toggleClass("text-secondary").toggleClass("pe-none");
      $("#preBtn").toggleClass("text-primary").toggleClass("text-secondary").toggleClass("pe-none");
    }
  }); // appointment

  $(".selectBtn").on("click", function (e) {
    event.preventDefault();

    if (e.target.nodeName === "A") {
      var unselectedDiv = $(this).parent().parent().siblings().children();
      var unselectedIcon = $(this).parent().parent().siblings().children().find(".far");
      var selectedDiv = $(this).parent();
      var selectedIcon = $(this).siblings().children(".fa-check-circle");
      var courseClass = $(this).attr("data-class");
      selectedIcon.removeClass("opacity-5");
      selectedDiv.addClass("border-white");
      unselectedDiv.removeClass("border-white").addClass("border-transparent");
      unselectedIcon.addClass("opacity-5");
      $(".classOutput").text(courseClass);
    }
  });
});
//# sourceMappingURL=all.js.map
