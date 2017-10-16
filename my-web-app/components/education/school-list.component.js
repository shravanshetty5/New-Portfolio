(function() {
    'use strict';
	angular.module('myWeb').component('schoolList', {
        controllerAs: 'vm',
        controller: function () {
            var vm = this;
        },
        bindings: {
            schools: '<'
        },
        templateUrl: 'my-web-app/components/education/school-list.component.html'
    });
}());