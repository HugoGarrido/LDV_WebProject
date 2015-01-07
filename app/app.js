var app = angular.module('voodooApp', ['ngResource','ngRoute']);


//WorkListCtrl

app.controller('WorkListCtrl', function($scope, $http){
	$http.get("jsonProjects.php").success(function(data){
		$scope.works = data.projets;
	});
});



//workCtrl

app.controller('workCtrl', function($scope, $http, $route){
	var param = $route.current.params.workId;
	var i;
	$http.get("jsonProjects.php").success(function(data){
		$scope.works = data.projets;
		i=0
		//Récupérer l'indice dans le tableau du projet courant
		while(i < data.projets.length-1){
			if($scope.works[i].clee == param){
		
				break
			}else{
				i++
			}	
			
		}
		$scope.projet = $scope.works[i];
		$scope.miniatures = $scope.works[i].miniatures;
		console.log($scope.miniatures);
	});
});

//contactCtrl

app.controller('contactCtrl', function($scope, $http){
	$scope.doApply = function(){
		var bundle = $scope.apply;
		
		console.log(bundle);
		$scope.sent = false;

		$http.post('mailer.php', bundle)
		.success(function(bundle, status, headers, config){
			$scope.sent = true;
		})
		.error(function(bundle, status, headers, config){
			console.log("error");
		})
	}
});



function RouteConfig ($routeProvider){

	$routeProvider.when('/', {
		templateUrl : 'yoh.html',
	});

	$routeProvider.when('/works', {
		templateUrl : 'works.html',
		controller : 'WorkListCtrl'
	});

	$routeProvider.when('/works/:workId', {
		templateUrl : 'work.html',
		controller : 'workCtrl',
		

	});

	$routeProvider.when('/contact', {
		templateUrl : 'contact.html',
		controller : 'contactCtrl'
	});

	$routeProvider.when('/about', {
		templateUrl : 'about.html'
	});

	$routeProvider.otherwise ('/');
}

angular.module('voodooApp').config(RouteConfig);