 var tableOffset = $("#table-1").offset().top;
var $header = $("#table-1 > thead").clone();
var $fixedHeader = $("#header-fixed").append($header);
console.log("um ok")
$(window).bind("scroll", function() {
    var offset = $(this).scrollTop();
    
    if (offset >= tableOffset && $fixedHeader.is(":hidden")) {
        $fixedHeader.show();
    }
    else if (offset < tableOffset) {
        $fixedHeader.hide();
    }
});
 
 
 // Cache selectors outside callback for performance. 
   var $window = $(window),
       $stickyEl = $('#the-sticky-div'),
       elTop = $stickyEl.offset().top;

   $window.scroll(function() {
        $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
    });