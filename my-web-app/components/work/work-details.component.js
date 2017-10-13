(function() {
    'use strict';
	angular.module('myWeb').component('workDetails', {
        controllerAs: 'vm',
        controller: function () {
            var vm = this;
        },
        bindings: {
            works: '<',
            workId: '<'
        },
        templateUrl: 'my-web-app/components/work/work-details.component.html'
    });
}());