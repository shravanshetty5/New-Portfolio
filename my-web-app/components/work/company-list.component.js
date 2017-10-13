(function() {
    'use strict';
	angular.module('myWeb').component('companyList', {
        controllerAs: 'vm',
        controller: function () {
            var vm = this;
        },
        bindings: {
            works: '<'
        },
        templateUrl: 'my-web-app/components/work/company-list.component.html'
    });
}());