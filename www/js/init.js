(function($){

    // variable block
    var $main = $('#GS_Wrap');
    var $loader = $('#GS_Loader');



    var methods = {
      init : function(options){
        $main.GS_Field({
          size: [10,8]
        });
        setTimeout(function(){$('#GS_Loader').removeClass('loader__show')}, 500);
        setTimeout(function(){$('#GS_Loader').hide()}, 1500);
      }
    };
    

    $.fn.GS_Wrap = function(methodOrOptions) {
      if (methods[methodOrOptions]){
        return methods[methodOrOptions].apply(this, arguments);
      } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
        // Default to "init"
        return methods.init.apply(this, arguments);
      } else {
        $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
      }    
      
    };

})( jQuery );