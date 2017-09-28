(function() {
    'use strict';
	angular.module('myWeb').component('projects', {
        controllerAs: 'vm',
        controller: function () {
            var vm = this;
        },
        templateUrl: 'my-web-app/components/projects.component.html'
    });
}());