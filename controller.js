var myApp = angular.module('myApp', []).controller('controller_1', ['$scope', '$http', function ($scope, $http) {

$scope.pa = {
   'id' : ''
}

$scope.search = function() {
 console.log('$scope.pa.id=', $scope.pa.id);
 $scope.url = 'https://restfulapi-fong19951217.c9users.io/pictureinfo?id=' + $scope.pa.id;
 console.log('$scope.url=', $scope.url);
}

}]);