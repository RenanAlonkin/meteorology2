angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('dao', function($http, $scope) {
  $scope.states = [];

$scope.selectedState;
$scope.selectedCity;

$http.get("https://api.mlab.com/api/1/databases/meteorology/collections/states?apiKey=IrT3Fki-OabEsU9MMNBLA_hS1PJzQc4w")
.success(function(response){
  angular.forEach(response, function(response){
    $scope.states.push(response);
  });
});
/*
$scope.stateTest = {
name : "Santa Catarina",
shortname: "SC",
cities: [
{
id: "1",
name: "Lages"
},
{
id: "2",
name: "São Joaquim"
}
]
};
*/
})



.controller('teste', function($scope) {
  $scope.colors = ['#000000', '#FF0000', '#ff8e72'];

  $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  $scope.data = [
    [65, -59, 80, 81, -56, 55, -40],
    [28, 48, -40, 19, 86, 27, 90]
  ];
  $scope.datasetOverride = [
    {
      label: "Bar chart",
      borderWidth: 1,
      type: 'bar'
    },
    {
      label: "Line chart",
      borderWidth: 3,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      type: 'line'
    }
  ];
})
