(function() {
    'use strict';
	angular.module('myWeb').component('myWebApp', {
        controllerAs: 'vm',
        controller: function() {
            var vm = this;
        },
        templateUrl: 'my-web-app/my-web-app.component.html'
    });
}());