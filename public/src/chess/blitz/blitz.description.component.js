(function(){

'use strict';

angular.module('chess')
.component('blitzDescription', {
	templateUrl: 'src/chess/blitz/templates/blitz.description.html',
	controller: 'DescriptionController',
	bindings: {
		arrow: '<'
	}
})

})();//IIFE