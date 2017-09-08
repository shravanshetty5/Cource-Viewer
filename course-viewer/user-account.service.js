(function() {
    'use strict';
	angular.module('courseViewer').factory('userAccountService', function ($http, apiBase) {
        var self = this;

        self.getUser = function(userName) {
            return $http.get(apiBase + 'user/' + encodeURIComponent(userName) + '/get')
                .then(function (result) {
                    return result.data;
                });
        };

        self.addUser = function(usermModel) {
            return $http.post(apiBase + 'user/add', usermModel)
            .then(function (result) {
                return result.data;
            });
        };

        return this;
    });
}());