(function() {
    'use strict';
	angular.module('myWeb').component('schoolDetails', {
        controllerAs: 'vm',
        controller: function () {
            var vm = this;

            vm.school = null;
            
                        function filterSchool(school) {
                            return parseInt(school.id) === parseInt(vm.schoolId);
                        }
                        vm.$onInit = function() {
                            if(vm.schools) {
                                vm.school = vm.schools.filter(filterSchool)[0];
                            }
                        }
        },
        bindings: {
            schools: '<',
            schoolId: '<'
        },
        templateUrl: 'my-web-app/components/education/school-details.component.html'
    });
}());