$(function(){
      $("#getting-started")
      .countdown("2017/10/06", function(event) {
        $(this).text(
          event.strftime('%D dias %H:%M:%S')
        );
      });
});