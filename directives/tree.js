
phonecatApp.directive('tree', function() {
  return {
    restrict: 'E', // tells Angular to apply this to only html tag that is <tree>
    replace: true, // tells Angular to replace <tree> by the whole template
    scope: {
      t: '=src', 
      fun: '&',
      store: '@',
      bleeddata : '='
    },    
    
    template: '<ul ><branch ng-repeat="c in t.children" src="c" fun="fun()" store="{{store}}" bleeddata = "bleeddata" ></branch><br></ul> '  , 
    link: function(scope, element, attrs) {
    	
     }
  };
})
phonecatApp.directive('branch', function($compile) {
  return {
    restrict: 'E', // tells Angular to apply this to only html tag that is <branch>
    replace: true, // tells Angular to replace <branch> by the whole template
   
    scope: {
      b: '=src', 
      fun: '&',
      store: '@',
      bleeddata: '='
    }, 
    
    //template: '<li><a href="{{b.hyperlink}}">{{ b.name }}</a></li>',
    template: ' <li ng-click="fun()(b);  $event.stopPropagation();"> <a ng-if="b.finaltier" style="font-weight: bold" >{{b.title}} </a><a ng-if="!b.finaltier">{{b.title}} </a>  <div style="display: inline-block;float: right;   width: 3vw; text-align: center;"  > {{b.stores[store].totals.device.mycart}} </div> <div style="display: inline-block;float: right;   width: 3vw; text-align: center;" > {{b.stores[store].totals.device.mydesired}} </div> <div style="display: inline-block;float: right;   width: 3vw; text-align: center;" > {{b.stores[store].totals.device.stock}} </div> </li>',
    link: function(scope, element, attrs) {
    	
    	
    	/*
    	scope.findStuffForGroup = function (){
    	 for(var skus in b['products']){
    	 	b['products'][skus]['totals'] = {};
    	 	b['products'][skus]['totals']['mydesired'] =  0;
    	 	b['products'][skus]['totals']['mycart'] =  0;
    	 	b['products'][skus]['totals']['stock'] =  0;
    	 	
    	 }
    	}*/
    	
    	
    	
    	
      //// Check if there are any children, otherwise we'll have infinite execution
     
      var has_children = angular.isArray(scope.b.children);
      
      //// Manipulate HTML in DOM
      if (has_children) {        
        element.append('<tree src="b" fun="fun()" store="{{store}}"  bleeddata="bleeddata"></tree>');
        
        // recompile Angular because of manual appending
        $compile(element.contents())(scope); 
      }else{
        
        
        // recompile Angular because of manual appending
        $compile(element.contents())(scope); 
      }
      
      //// Bind events
      element.on('click', function(event) {
          event.stopPropagation();          
        
          if (has_children) {
            //element.toggleClass('collapsed');
          }
      });
      
    }
   
  };
})

