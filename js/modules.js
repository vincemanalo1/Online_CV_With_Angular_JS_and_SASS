
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.expList = [{expText:'Senior Web Developer', done:false}];

    $scope.addExp = function() {
        $scope.expList.push({expText:$scope.expInput, done:false});
        $scope.expInput = "";
    };

    $scope.remove = function() {
        var oldList = $scope.expList;
        $scope.expList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.expList.push(x);
        });
    };



    $scope.skills = [
        "HTML 5",
        "CSS3/SCSS",
        "PHP",
        "MySQL",
        "Javascript/ Jquery",
        "XML",
        "AJAX",
        "JSON",
        "Angular.js"
    ]

    $scope.highlights = [
      "Seasoned IT professional with more than 10 years of experience in Web Development",
      "Supervised Web Developers that resulted in successful and early releases of projects",
      "Created hundreds of websites and landing pages with Wordpress, PHP, HTML5, CSS3/SCSS, Jquery, Javascript, MySQL, Angular.js",
      "Initiated and created a local CMS called Translation Management System, a software that helps web managers to translate web contents in different languages.",
      "Studied at British Columbia Institute of Technology in Vancouver",
      "Mentored students at BCIT",
      "Had lead roles experiences"
    ]
});
