(function () {
    'use strict';

    angular.module('courseViewer').component('courseDiscussionItem', {
        bindings: {
            saveComment: '&',
            cancelComment: '&'
        },
        controllerAs: 'vm',
        controller: function () {
            var vm = this;

            vm.commentText = '';

            vm.submit = function (commentText) {
                if (commentText != '') {
                    if (vm.saveComment != null) {
                        vm.saveComment()(commentText);
                        vm.commentText = '';
                    }
                }
                else {
                    vm.cancel();
                }
            };
            vm.cancel = function() {
                vm.cancelComment()();
            }

        },
        templateUrl: 'course-viewer/course/course-discussion-item.component.html'
    });
})();