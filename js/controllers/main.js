'use strict';

angular.module('dMakr').
    controller('MainCtrl', function ($scope, $http, dataProvider, domainhackBuilder) {
        $scope.domainhacks = [];
        $scope.domains = [];

        dataProvider.loadDomains().
            success(function (data, status, headers, config) {
                $scope.domains = data;
            });

        $scope.$watch('search', function (input) {
            var domainhacks = [];

            angular.forEach($scope.domains, function (domain){
                var match = input.toLowerCase().match(domain['tld']);
                if(match){
                    var domainhack = domainhackBuilder.make(input, domain);
                    domainhacks.push(domainhack);
                }
            });

            $scope.domainhacks = domainhacks;
    });
});
