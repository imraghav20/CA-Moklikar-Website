document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
      document.querySelector("#websitebody").style.display = "none";
      document.querySelector("#preloader").style.display = "block";
      
  }
  else {
    document.querySelector("#websitebody").style.display = "block";
    document.querySelector("#preloader").style.display = "none";
}
}

var topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight() + 15,

    menuItems = topMenu.find("a"),

    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

$(window).scroll(function () {

    var fromTop = $(this).scrollTop() + topMenuHeight;

    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });

    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    menuItems
        .parent().removeClass("active")
        .end().filter("[href='#" + id + "']").parent().addClass("active");
})

function closeMenu() {
    $(".navbar-collapse").removeClass("show");
    $(".navbar-toggler").attr("aria-expanded", "false");
    $(".navbar-toggler").addClass("collapsed");
}
