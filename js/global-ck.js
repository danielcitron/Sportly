$(document).ready(function(){var e=1,t=0;window.setInterval(function(){$("#ticker").mouseenter(function(){t=1});$("#ticker").mouseout(function(){t=0});if(t==1)return;$("#ticker").each(function(){ticker_top=e*-18+18;$("#ticker-container").css("top",ticker_top);e++;e==6&&(e=1)})},1500);$(".view-more-right").click(function(){$(".menu-dropdown").animate({scrollLeft:"+=250"},500)});$(".view-more-left").click(function(){$(".menu-dropdown").animate({scrollLeft:"-=250"},500)});$('a[href^="#"]').on("click",function(e){e.preventDefault();var t=this.hash,n=$(t);$("html, body").stop().animate({scrollTop:n.offset().top},400,"swing",function(){window.location.hash=t})})});