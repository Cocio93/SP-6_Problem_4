var app = angular.module('angular', []).
        controller('controller', function ($scope, $http) {
            $http.get('http://localhost:8084/AngularJquery/api/member/get').
                    then(function (response) {
                        $scope.data = response.data;
                    });
        });
