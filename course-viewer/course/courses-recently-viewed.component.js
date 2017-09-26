(function() {
    'use strict';
	angular.module('courseViewer').component('coursesRecentlyViewed', {
        bindings: {
            loggedIn: '<'
        },
        controllerAs: 'vm',
        controller: function (courseService, authenticationService) {
            var vm = this;

            vm.clearRecentCourses = function() {
                courseService.clearRecentlyViewedCourses(authenticationService.userName);
            }

            vm.$onChanges = function (changes) {
                if (changes.loggedIn.currentValue != null) {
                    courseService.getRecentlyViewedCourses(authenticationService.userName).then(function (courses) {
                        vm.recentCourses = courses;
                    });
                }
            };
        },
        templateUrl: 'course-viewer/course/courses-recently-viewed.component.html'

    });
}());