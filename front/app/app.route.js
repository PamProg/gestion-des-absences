export function route ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/', {
        template: '<menu-component></menu-component>' + '<accueil-component></accueil-component>'
    })
    .when('/absence', {
        template: '<menu-component></menu-component>' + '<visualisation-absence-component></<visualisation-absence-component>'
     })
    .when('/absence/demande',{
        template: '<menu-component></menu-component>' + '<demande-absence-component></demande-absence-component>'
    })
    .when('/absence/modification', {
		template: '<menu-component></menu-component>' + '<modif-absence-component></modif-absence-component>'
	})
    .when('/absence/validation', {
		template: '<menu-component></menu-component>' + '<validation-absence-component></validation-absence-component>'
	})
    .when('/rapport/histogramme', {
		template: '<menu-component></menu-component>' + '<histogramme-component></histogramme-component>'
	})
    .when('/connexion', {
		template: '<connexion-component></connexion-component>'
	})
    .otherwise({
        redirectTo: '/connexion'
    });

}
