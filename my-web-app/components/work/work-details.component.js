(function() {
    'use strict';
	angular.module('myWeb').component('workDetails', {
        controllerAs: 'vm',
        controller: function () {
            var vm = this;

            vm.work = null;

            function filterWork(work) {
                return parseInt(work.id) === parseInt(vm.workId);
            }
            vm.$onInit = function() {
                if(vm.works) {
                    vm.work = vm.works.filter(filterWork)[0];
                }
            }
        },
        bindings: {
            works: '<',
            workId: '<'
        },
        templateUrl: 'my-web-app/components/work/work-details.component.html'
    });
}());