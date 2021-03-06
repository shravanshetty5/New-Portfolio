(function() {
    'use strict';
	angular.module('myWeb').component('work', {
        controllerAs: 'vm',
        controller: function () {
            var vm = this;
            vm.works = [
                {
                    id: 0,
                    title: "Software Engineer II",
                    company: "Cisco",
                    location: "Dallas",
                    startDate: "June-2017",
                    endDate: "Present",
                    description: `As a full stack developer at Cisco, I am currently working on a Toolkit project which provides a set of reusable, well-tested, and accessible UI components based on the Symphony Design System for AngularJS, ReactJS and Angular frameworks.
                    Technologies Used: AngularJS 1.6, ReactJS, Angular, TypeScript, NodeJS, Jasmin, Karma, Webpack, SASS, HTML5, Git.
                    
                    The previous projects I have worked on Include:
                    * Developing e2e scripts that provide full coverage to Spark call, Cisco's 1 stop shop for enterprise collaboration tools.
                    * Refactoring AngularJS code to new AngularJS 1.6 component designs and type script classes.
                    * Test Driven development of Atals and Cisco Spark, applications which are designed to bring enterprise collaboration tools to the 21st century. 
                    
                    Technologies Used:  AngularJS, javaScript ES6, Protractor,Jasmin, Sauce Labs, NodeJS, Webpack, REST API's, Cassandra, Yarn, Karma.
                    
                    `,
                    imgUrl: "",

                },
                {
                    id: 1,
                    title: "Research Analyst",
                    company: "Texas A&M University",
                    location: "College Station",
                    startDate: "September-2015",
                    endDate: "May-2017",
                    description: `Full stack developer working on Atlas and Cisco Spark, Cisco's Corporate Infrastructure tools.
                    
                    Skills: JavaScript, AngularJS, CSS3, HTML5, Docker, Git, Java, Cassandra, JavaScript Promises.
                    
                    My internship with Cisco has helped me gain valuable technical and functional knowledge used in today’s fast paced industry. In terms of understanding Cisco’s business, I now have a good understanding of products like Atlas and Cisco Spark and its inner workings. Having worked with multiple teams, I now have an understanding of different layers of implementation and its interdependencies.
                    
                    A few things I have achieved during this period are 
                    
                    •	Improved UX by Redesigned PSTN order workflow for partner login in Atlas
                    •	Deployed server side sort to eliminate error caused by pagination when dealing with bulk data
                    •	Worked with a global team to implement order status feature in Cisco Spark, Helpdesk.
                    •	 Eliminated external Docker (Cassandra cluster) dependencies by implementing CasandraUnit.
                    `,
                    imgUrl: "",

                },
                {
                    id: 2,
                    title: "Software Intern",
                    company: "Cisco",
                    location: "Dallas",
                    startDate: "June-2016",
                    endDate: "August-2016",
                    description: `My role as a Graduate Research Assistant involves designing the System architecture for a Systems Safety Data Network and developing its the front end. My responsibilities include designing and maintaining the ACE lab website. I have authored and presented papers at the ISERC, CESUN and CSERC conferences about my research.`,
                    imgUrl: "",
                },
                {
                    id: 3,
                    title: "Software Engineer",
                    company: "Accenture",
                    location: "Hyderabad",
                    startDate: "January-2013",
                    endDate: "April-2015",
                    description: `As a PeopleSoft Techno-Functional  consultant at Accenture, I was in charge of managing the online order capture module of an advertising company based in Texas. The skills i developed here are Requirement analysis, PeopleSoft API, PeopleCode,JAVA, Database Analysis, PL/SQL scripting and XML.`,
                    imgUrl: "",
                }
            ]
        },
        templateUrl: 'my-web-app/components/work/work.component.html'
    });
}());