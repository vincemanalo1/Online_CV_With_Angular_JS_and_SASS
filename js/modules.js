
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
        "CSS 3",
        "PHP",
        "MySQL",
    ]

    $scope.page_title = "Online CV Using Angular JS and SASS"
});
