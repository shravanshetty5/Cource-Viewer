(function() {
    'use strict';
	angular.module('courseViewer').factory('authorService', function(apiBase, $http) {
        var self = this;

        self.getAllAuthors = function () {
            return $http.get(apiBase + 'authors')
                .then(function (response) {
                    return response.data;
                });
        };

        self.getAuthor = function (authorId) {
            return $http.get(apiBase + 'author/' + authorId)
                .then(function (result) {
                    return result.data;
                });
        };

        return this;
    });
}());