function onWndLoad() {
   let e = new MobileDetect(window.navigator.userAgent);
   if ("iPhone" === e.mobile() || "iPad" === e.mobile() || "iPod" === e.mobile()) {
      let e = document.getElementById("w");
      e.style.position = "inherit", e.style.fontSize = "inherit", e.style.background = 'url("./img/opera.jpg") 50% 100% / cover rgba(66, 66, 66, 0.5)';
      let t = document.querySelectorAll(".i");
      for (let e = 0; e < t.length; ++e) t[e].remove()
   }

   function t(e) {
      (u = e).addEventListener("mousedown", n, !1), u.addEventListener("touchstart", n, !1)
   }

   function n(e) {
      l = e.touches ? e.touches[0].clientX : e.pageX, document.addEventListener("mousemove", o, !1), document.addEventListener("touchmove", o, !1), document.addEventListener("mouseup", r, !1), document.addEventListener("touchend", r, !1)
   }

   function o(e) {
      var n;
      n = e.touches ? e.touches[0].clientX : e.pageX, d = (i += n - l) / 30, c = -Math.abs(i / 15), u.style.transition = "none", u.style.webkitTransform = "translateX(" + i + "px) rotateZ(" + d + "deg) translateY(" + c + "px)", u.style.transform = "translateX(" + i + "px) rotateZ(" + d + "deg) translateY(" + c + "px)";
      for (var h = 1, f = s.length - 2; f >= 0; f--) s[f].style.webkitTransform = "translateX(" + i / (2 * h) + "px) rotateZ(" + d / (2 * h) + "deg) translateY(" + m * h + "px) translateZ(" + -y * h + "px)", s[f].style.transform = "translateX(" + i / (2 * h) + "px) rotateZ(" + d / (2 * h) + "deg) translateY(" + m * h + "px) translateZ(" + -y * h + "px)", s[f].style.transition = "none", h++;
      if (l = n, e.preventDefault(), Math.abs(i) >= u.offsetWidth - 30) return document.removeEventListener("mousemove", o, !1), document.removeEventListener("touchmove", o, !1), u.style.transition = "ease 0.5s", u.style.opacity = 0, p = u, t(s[s.length - 2]), r(), void setTimeout(function () {
         a.insertBefore(p, a.firstChild), p.style.transition = "none", p.style.opacity = "1", r()
      }, 201)
   }

   function r() {
      i = 0, d = 0, c = 0, u.style.transition = "cubic-bezier(0,1.95,.49,.73) " + h + "s", u.style.webkitTransform = "translateX(" + i + "px)rotateZ(" + d + "deg) translateY(" + c + "px)", u.style.transform = "translateX(" + i + "px)rotateZ(" + d + "deg) translateY(" + c + "px)";
      for (var e = 1, t = s.length - 2; t >= 0; t--) s[t].style.transition = "cubic-bezier(0,1.95,.49,.73) " + h / (e + .9) + "s", s[t].style.webkitTransform = "translateX(" + i + "px)rotateZ(" + d + "deg) translateY(" + m * e + "px) translateZ(" + -y * e + "px)", s[t].style.transform = "translateX(" + i + "px)rotateZ(" + d + "deg) translateY(" + m * e + "px) translateZ(" + -y * e + "px)", e++;
      document.removeEventListener("mousemove", o, !1), document.removeEventListener("touchmove", o, !1)
   }
   for (var a = document.querySelector(".slider"), s = a.children, l = null, i = 0, d = 0, c = 0, u = null, y = 50, m = 10, h = .4, f = document.querySelectorAll("img"), g = 0; g < f.length; g++) f[g].onmousemove = function (e) {
      e.preventDefault()
   }, f[g].ondragstart = function (e) {
      return !1
   };
   ! function () {
      for (var e = 0, n = 0, o = s.length - 1; o >= 0; o--) s[o].style.transform = "translateZ(" + e + "px) translateY(" + n + "px)", e -= y, n += m;
      t(s[s.length - 1])
   }();
   var p = null
}
$(function () {
   ($(window).height() - $(window).width() > 250 || $(window).width() - $(window).height() < 250) && $(".content").css("display", "none")
}), document.onkeydown = function (e) {
   return 123 != event.keyCode && (!e.ctrlKey || e.keyCode != "E".charCodeAt(0)) && (!e.ctrlKey || e.keyCode != "P".charCodeAt(0)) && (!e.ctrlKey || e.keyCode != "C".charCodeAt(0)) && (!e.ctrlKey || e.keyCode != "V".charCodeAt(0)) && (!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) && (!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) && (!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) && (!e.ctrlKey || e.keyCode != "S".charCodeAt(0)) && (!e.ctrlKey || e.keyCode != "H".charCodeAt(0)) && (!e.ctrlKey || e.keyCode != "A".charCodeAt(0)) && (!e.ctrlKey || e.keyCode != "F".charCodeAt(0)) && (!e.ctrlKey || e.keyCode != "E".charCodeAt(0)) && void 0
}, $(window).on("load", function () {
   $(".loading-screen").delay(1e3).fadeOut("slow")
});
var $page = $("html, body");

function toggle() {
   let e = document.getElementById("sec"),
      t = document.getElementById("navigation");
   e.classList.toggle("active"), t.classList.toggle("active")
}
$('a[href*="#"]').click(function () {
   return $page.animate({
      scrollTop: $($.attr(this, "href")).offset().top
   }, 800), !1
}), window.addEventListener("load", onWndLoad, !1), $("body").on("click", "#btn", function (e) {
   e.preventDefault(), $(this).hasClass("play") ? ($(this).removeClass("play"), $(this).addClass("pause"), $("#myAudio").trigger("play")) : ($(this).removeClass("pause"), $(this).addClass("play"), $("#myAudio").trigger("pause"), $("#myAudio").trigger("load"))
});

$("#sendMail").on("click", function () {

   let email = $("#email").val().trim();
   let name = $("#name").val().trim();
   let phone = $("#phone").val().trim();
   let message = $("#message").val().trim();

   let phoneReg = /[0-9 -()+]+$/;
   let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
   // let nameReg = /^[a-zA-Z]+$/;


   // if (!nameReg.test(name) || name.length < 3)
   if (name.length < 3) {
      $("#errorMess").text("The entered name is incorrect or does not exist");
      $("#name").addClass("error");
      return false;
   } else if ((!emailReg.test(email)) || (email === "")) {
      $("#errorMess").text("The entered email is incorrect or does not exist");
      $("#email").addClass("error");
      return false;
   } else if ((!phoneReg.test(phone)) || (phone.length < 6)) {
      $("#errorMess").text("The entered phone is incorrect or does not exist");
      $("#phone").addClass("error");
      return false;
   } else if (message.length < 5) {
      $("#errorMess").text("Enter a message not changed by 5 letters");
      $("#message").addClass("error");
      return false;
   }

   $('.contact-form-text').removeClass('error');
   $("#errorMess").text("")

   $.ajax({
      url: '../php/mail.php',
      type: 'POST',
      cache: false,
      data: {
         'name': name,
         'email': email,
         'phone': phone,
         'message': message
      },
      dataType: 'html',
      beforeSend: function () {
         $("#sendMail").prop("disabled", true);
         $('.contact-form').addClass('_sending');
      },
      success: function (data) {
         if (data === '1')
            $("#errorMess").text("There were errors, the message was not sent!");
         else
            $("#mailForm").trigger("reset");

         $("#errorMess").text("")

         $("#sendMail").prop("disabled", false);
         $('.contact-form').removeClass('_sending');
      }
   });
});