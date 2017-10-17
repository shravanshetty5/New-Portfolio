(function() {
    'use strict';
	angular.module('myWeb').component('school', {
        controllerAs: 'vm',
        controller: function () {
            var vm = this;
            vm.moreInfo = false;
            
            vm.toggleMoreInfo = function() {
                vm.moreInfo = !vm.moreInfo;
            }
        },
        bindings: {
            school: '<',
        },
        templateUrl: 'my-web-app/components/education/school.component.html'
    })
}());