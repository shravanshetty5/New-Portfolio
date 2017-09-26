(function() {
    'use strict';
	angular.module('myWeb').component('mainNavigation', {
        controllerAs: 'vm',
        controller: function() {
            var vm = this;
            vm.currentSelection = 'Home';

            vm.naviagtionItems = ['Home', 'Education', 'Work', 'Skills', 'Projects'];

            vm.currentSelector = function (item) {
                vm.currentSelection = item;
            }
        },
        templateUrl: 'my-web-app/components/main-navigation.component.html'
    });
}());