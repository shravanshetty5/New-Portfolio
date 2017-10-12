(function() {
    'use strict';
	angular.module('myWeb').component('education', {
        controllerAs: 'vm',
        controller: function () {
            var vm = this;
            vm.educationData = [
                {
                    "school": "Texas A&M University - Mays Business School",
                    "degree": "Master of Science (MS)",
                    "field": "Management Information Systems",
                    "grade": "3.6",
                    "startYear": "2015",
                    "endYear": "2017",
                    "description": "",
                    "relevantCources": "",
                    "imageUrl": "",
                },
                {
                    "school": "NMAMIT, Nitte",
                    "degree": "Bachelor of Engineering (B.E.)",
                    "field": "Electronics and Communication Engineering",
                    "grade": "3.63",
                    "startYear": "2008",
                    "endYear": "2012",
                    "description": "",
                    "relevantCources": "",
                    "imageUrl": "",
                }
            ]
        },
        templateUrl: 'my-web-app/components/education/education.component.html'
    })
}());