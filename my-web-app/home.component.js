(function() {
    'use strict';
	angular.module('myWeb').component('home', {
        controllerAs: 'vm',
        controller: function () {
            var vm = this;

            vm.welcomeText = ['Hi there and Welcome to my page.','I am Shravan Shetty and I am a FullStack Developer!!'];
        },
        templateUrl: 'my-web-app/home.component.html'
    });
}());