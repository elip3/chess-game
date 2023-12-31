(function(){

'use strict';

angular.module('chess')
.config(RouteConfig);

RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RouteConfig($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/login');

	$stateProvider
		.state('classical', {
			url: '/classical',
			templateUrl: 'src/chess/routes/templates/classical.html'
			})
		.state('chess960', {
			url: '/960', 
			templateUrl: 'src/chess/routes/templates/chess960.html'
			})
		.state('blitz', {
			url: '/blitz',
			templateUrl: 'src/chess/routes/templates/blitz.html'
		})
		.state('crazyhouse', { 
			url: '/crazyhouse',
			templateUrl: 'src/chess/routes/templates/crazyhouse.html'
		})
	
		.state('login', {
			url: '/login',
			templateUrl: 'src/chess/routes/templates/login.html'
		})
		.state('signup', {
			url: '/signup',
			templateUrl: 'src/chess/routes/templates/signup.html'
		})
		.state('user-profile', {
			url: '/profile',
			templateUrl: 'src/chess/routes/templates/profile.html'
		})
		.state('user-games', {
			url: '/games',
			templateUrl: 'src/chess/routes/templates/games.html'
		})
};

})(); //IIFE