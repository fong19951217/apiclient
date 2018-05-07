var myApp = angular.module('myApp', []).controller('CouchController', ['$scope', '$http', function ($scope, $http) {
$scope.entry={};
console.log('start');
function auth_hash(username,password){console.log('working');
 return 'Basic ' +btoa(username+':'+password);
}
var timestamp = Math.round(new Date().getTime()/1000);
var url = 'https:////apiclient-fong19951217.c9users.io/' + timestamp;
console.log(url);
$scope.submit = function() {   
console.log('submit');
$http({
        url: url,
        method: 'put',
        data: $scope.entry,
        withCredentials: true,  
        headers: {'Authorization': auth_hash("fong19951217","Fodo39u3fh")}
})
.success(function(data, status, headers, config) {
   console.log('OK');
   console.log(data);
})
.error(function(data, status, headers, config) {
   console.log('No');
    console.log(headers);
   console.log(config);
});	
}
}]);