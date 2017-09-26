(function() {
    'use strict';
	angular.module('myWeb').component('home', {
        controllerAs: 'vm',
        controller: function () {
            var vm = this;

            vm.welcomeText = ['Hi There, and Welcome to my page.','This is Shravan Shetty and I am a FullStack Developer!!'];
        },
        templateUrl: 'my-web-app/components/home.component.html'
    });
}());