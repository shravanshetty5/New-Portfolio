(function() {
    'use strict';
	angular.module('myWeb').component('companyMini', {
        controllerAs: 'vm',
        controller: function () {
            var vm = this;
            vm.moreInfo = false;

            vm.toggleMoreInfo = function() {
                vm.moreInfo = !vm.moreInfo;
            }
        },
        bindings: {
            work: '<'
        },
        templateUrl: 'my-web-app/components/work/company-mini.component.html'
    })
}());