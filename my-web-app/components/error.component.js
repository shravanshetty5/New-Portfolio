(function() {
    'use strict';
	angular.module('myWeb').component('error', {
        controllerAs: 'vm',
        controller: function () {
            var vm = this;
        },
        templateUrl: 'my-web-app/components/error.component.html'
    });
}());