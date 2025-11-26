// jQuery v1 (carousel + highlight)
j1(function () {

  let slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];
  let index = 0;

  function nextSlide() {
    j1("#carousel").fadeOut(300, function () {
      index = (index + 1) % slides.length;
      j1(this).text(slides[index]).fadeIn(300);
    });
  }

  setInterval(nextSlide, 3000);

  j1("#widget1").click(function () {
    j1(".widget").removeClass("active");
    j1(this).addClass("active");
  });

});


// jQuery v2 (modal + tooltip)
j2(function () {

  j2("#modalBox").click(function () {

    let modal = j2(`
      <div style="
        position: fixed; top: 30%; left: 30%;
        background: #fff; padding: 20px;
        border: 1px solid black;">
        This is a modal (jQuery v2)
        <br><br>
        <button id='closeBtn'>Close</button>
      </div>
    `);

    j2("body").append(modal);

    j2("#closeBtn").click(function () {
      modal.remove();
    });
  });

  j2(".widget").hover(
    function () {
      let tip = j2("<div class='tooltip'>Tooltip</div>").css({
        position: "absolute",
        left: j2(this).offset().left + 150,
        top: j2(this).offset().top,
        background: "lightgrey",
        padding: "5px"
      });
      j2("body").append(tip);
      j2(this).data("tip", tip);
    },
    function () {
      j2(this).data("tip").remove();
    }
  );

});
