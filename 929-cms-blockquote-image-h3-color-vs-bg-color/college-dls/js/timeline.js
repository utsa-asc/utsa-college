$(function(){$(".form-check-input").on("click",function(e){var e=e.currentTarget,o=0,t=($(".form-check-input").each(function(e){this.checked&&(o+=1)}),$(".default")),c=(0<o?(t.removeClass("show"),t.addClass("hide")):(t.addClass("show"),t.removeClass("hide")),$("#"+e.id).data("target"));setTimeout(function(){var e;e=c,console.log("computed offset: "+$(e).offset().top),$([document.documentElement,document.body]).animate({scrollTop:$(e).offset().top},800)},400)})});