(function() {
    'use strict';
	angular.module('myWeb').component('mainNavigation', {
        controllerAs: 'vm',
        controller: function($location) {
            var vm = this;
            vm.$onInit = function () {
                let temp = $location.path();
                if(temp === "/") {
                    vm.currentSelection = "Home"
                } else {
                    vm.currentSelection = temp.charAt(1.).toUpperCase() + temp.substring(2);
                }
            }
            
            vm.naviagtionItems = ['Home','Skills', 'Experience', 'Education', 'Projects'];

            vm.currentSelector = function (item) {
                vm.currentSelection = item;
            }
        },
        templateUrl: 'my-web-app/components/main-navigation.component.html'
    });
}());