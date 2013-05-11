(function($){

    // variable block
    var x = '2';
    var $this = $('#GS_Wrap');
    var $loader = $('#GS_Loader');



    var methods = {
      init : function(options){

        setTimeout(function(){$('#GS_Loader').removeClass('loader__show')}, 2000);
        console.log($($loader));
        $this.GS_Field({field: 2});
        $this.GS_Field('field', {field: 2});
      },
      show : function(options){
        console.log('show');
        console.log(arguments);
        // this.GS_Wrap('init', {f: 1});
      },
      hide : function(){
        console.log('hide');
        console.log(arguments);
      },
      update : function(content){}
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