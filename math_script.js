var app = angular.module('ken_homepage', []);

var content_url = [
    "2014-12-21.html",
    "2014-12-20.html"
];

app.controller('math_content_ctrl', function ($scope) {
    $scope.content = content_url;
});
