// window.onload = function () {
//   $(document).ready(function(){
//
//     $("#lets-start-button").on('click', function(event) {
//       event.preventDefault();
//       $('body').animate({
//         scrollTop: $("#Join").offset().top - 50
//       }, 900, function(){
//
//       });
//     });
//
//     $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
//       event.preventDefault();
//       var hash = this.hash;
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top - 50
//       }, 900, function(){
//         window.location.hash = hash;
//       });
//     });
//
//     $(window).scroll(function() {
//       $(".slideanim").each(function(){
//         var pos = $(this).offset().top;
//         var winTop = $(window).scrollTop();
//           if (pos < winTop + 300) {
//             $(this).addClass("slide");
//           }
//       });
//     });
//   })
// };
