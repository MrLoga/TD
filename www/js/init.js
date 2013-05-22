(function($){

    // variable block
    var $main = $('#GS_Wrap');
    var $loader = $('#GS_Loader');



    var methods = {
      init : function(options){
        $main.GS_Field({
          size: [10,8]
        });
        setTimeout(function(){$('#GS_Loader').removeClass('loader__show')}, 1000);
        setTimeout(function(){$('#GS_Loader').hide()}, 1500);
        $main.GS_Way({
          start: [5,1]
        });
        setTimeout(function(){
          $main.GS_Way('create', {
            start: [3,7],
            finish: [6,5]
          });
        }, 1000);
        setTimeout(function(){
          $main.GS_Way('create', {
            start: [6,5],
            finish: [2,1]
          });
        }, 1500);
        
      }
    };
    

    $.fn.GS_Wrap = function(methodOrOptions) {
      if (methods[methodOrOptions]){
        return methods[methodOrOptions].apply(this, arguments);
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
        return methods.init.apply(this, arguments);
      } else {
        $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
      }    
    };

})( jQuery );