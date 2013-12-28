'use strict';

angular.module('dMakr').
  factory('dataProvider', function ($http) { 
  	return {
  		loadDomains: function () {
		    return $http.get('TLDs.json'); 
  		}
  	};
});
