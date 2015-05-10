/**
 * Created by domenicovacchiano on 10/05/15.
 */

var ngTestModule=angular.module('ngTestModule',[]);

ngTestModule.directive('ngTest',function($compile){

    return{
        restrict:'EA',
        replace:false,
        scope:{
            myText:'@'
        },
        link:function(scope,element,attrs){
            //creates a span element with myText
            element.append($compile('<span>' + scope.myText + '</span>')(scope));
        }
    };
});
