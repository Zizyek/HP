/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

   
  
})(jQuery); // End of use strict

var
cursor = $(".cursor"),
follower = $(".follower"),
cWidth = 8, //カーソルの大きさ
fWidth = 40, //フォロワーの大きさ
delay = 10, //数字を大きくするとフォロワーがより遅れて来る
mouseX = 0, //マウスのX座標
mouseY = 0, //マウスのY座標
posX = 0, //フォロワーのX座標
posY = 0; //フォロワーのX座標

//カーソルの遅延アニメーション
//ほんの少ーーーしだけ遅延させる 0.001秒
TweenMax.to({}, .001, {
    repeat: -1,
    onRepeat: function() {
        posX += (mouseX - posX) / delay;
        posY += (mouseY - posY) / delay;

        TweenMax.set(follower, {
            css: {    
                left: posX - (fWidth / 2),
                top: posY - (fWidth / 2)
            }
        });

        TweenMax.set(cursor, {
            css: {    
                left: mouseX - (cWidth / 2),
                top: mouseY - (cWidth / 2)
            }
        });
    }
});

//マウス座標を取得
$(document).on("mousemove", function(e) {
mouseX = e.pageX;
mouseY = e.pageY;
});

$("a").on({
"mouseenter": function() {
cursor.addClass("is-active");
follower.addClass("is-active");
},
"mouseleave": function() {
cursor.removeClass("is-active");
follower.removeClass("is-active");
}
});

function showElementAnimation() {
                    
    var element = document.getElementsByClassName('js-fadein');
    if(!element) return; // 要素がなかったら処理をキャンセル
                        
    var showTiming = window.innerHeight > 1000 ? 400 : 200; // 要素が出てくるタイミングはここで調整
    var scrollY = window.pageYOffset; //スクロール量を取得
    var windowH = window.innerHeight; //ブラウザウィンドウのビューポート(viewport)の高さを取得
                      
    for(var i=0;i<element.length;i++) { 
      var elemClientRect = element[i].getBoundingClientRect(); 
      var elemY = scrollY + elemClientRect.top; 
      if(scrollY + windowH - showTiming > elemY) {
        element[i].classList.add('is-show');
      } else if(scrollY + windowH < elemY) {
      // 上にスクロールして再度非表示にする場合はこちらを記述
        element[i].classList.remove('is-show');
      }
    }
  }
  showElementAnimation();
  window.addEventListener('scroll', showElementAnimation);

  