(function() {
    'use strict';
	angular.module('myWeb').component('school', {
        controllerAs: 'vm',
        controller: function () {
            var vm = this;
        },
        bindings: {
            school: '<',
        },
        templateUrl: 'my-web-app/components/education/school.component.html'
    })
}());