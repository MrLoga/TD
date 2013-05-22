(function($){

  var
    $main = $('#GS_Wrap'),
    $way = $('<div>').prop({id: 'GS_Way'}),
    $NPC = [],
    NPC__position = {},
    fieldItem__size = 50,
    correct = 50/2-10;
    

  var methods = {
    init : function(opions){
      // init vars
      $NPC = $('<div>').prop({id: 'npc'});  
      $main.append($way);
      NPC__position.start = opions.start;
      NPC__position.finish = opions.finish;
      $way.prepend($NPC);
      // $way.GS_Way('create');
    },
    create : function(){
      console.log(arguments[1]);
      NPC__position.start = arguments[1].start;
      NPC__position.finish = arguments[1].finish;
      $NPC.css('top', fieldItem__size * NPC__position.start[0] + correct + 'px');
      $NPC.css('left', fieldItem__size * NPC__position.start[1] + correct + 'px');
      
      $NPC.animate({
        top: fieldItem__size * NPC__position.finish[0] + correct,
        left: fieldItem__size * NPC__position.finish[1] + correct,
      }, 1000, 'linear');
    }
  };





  $.fn.GS_Way = function(methodOrOptions) {
    
    if (methods[methodOrOptions]){
      return methods[methodOrOptions].apply(this, arguments);
    } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
      return methods.init.apply(this, arguments);
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }    
    
  };

})( jQuery );