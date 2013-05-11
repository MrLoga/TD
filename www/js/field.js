(function($){

  var methods = {
    init : function(options){
      console.log(options);
    },
    field : function(){
      console.log('field 123');
      console.log(arguments);
    },
    create : function(){
      console.log('create');
      console.log(arguments);
    },
    update : function(content){}
  };

  $.fn.GS_Field = function(methodOrOptions) {
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