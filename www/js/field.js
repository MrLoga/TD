(function($){

  var
    $main = $('#GS_Wrap'),
    $field = $('<div>').prop({id: '#GS_Field'}),
    $fieldItem = $('<div>').addClass('fieldItem'),
    fieldItem__width = 50,
    fieldItem__height = 50,
    fieldSize = [];


  var methods = {
    init : function(options){
      fieldSize = options.size;
      $main.append($field);
      $field.GS_Field('create');
    },
    create : function(){
      var fieldItems__total = fieldSize[0] * fieldSize[1];
      for (i = 1; fieldItems__total+1 > i; i++) {
        var lineX = (i/10).toFixed(0) - 1;
        var lineY = i%10;
        var item = $fieldItem.clone().addClass('i'+i).data({i: i, X: lineX, Y: lineY});
        $field.append(item);
      }
      //console.log($('.i68').data());
      //$('.i67').css('background', '#fff');
    }
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