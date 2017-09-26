(function () {
    'use strict';

    angular.module('courseViewer').component('courseDiscussion', {
        bindings: {
            course: '<',
            loggedIn: '<'
        },
        controllerAs: 'vm',
        controller: function (authenticationService, courseService) {
            var vm = this;

            vm.authenticationService = authenticationService;
            vm.courseDiscussion = null;
            vm.commentEntryVisible = false;

            vm.showCommentEntry = function () {
                vm.commentEntryVisible = true;
            };

            vm.saveCommentEntry = function (commentText) {
                if (authenticationService.loggedIn) {
                    courseService.addCourseDiscussionItem(authenticationService.userName, vm.course.CourseId, commentText).then(function (discussionItem) {
                        vm.courseDiscussion.push(discussionItem);
                        vm.commentEntryVisible = false;
                    });
                }
            };

            vm.cancelCommentEntry = function () {
                vm.commentEntryVisible = false;
            };

            vm.$onChanges = function (changes) {
                if (changes.loggedIn.currentValue !=null || changes.course.currentValue != null) {
                    if(authenticationService.loggedIn && vm.course != null) {
                        courseService.getCourseDiscussion(vm.course.CourseId).then(function (courseDiscussion) {
                            vm.courseDiscussion = courseDiscussion;
                        });
                    }
                }
            };
        },
        templateUrl: 'course-viewer/course/course-discussion.component.html'
    });
})();
