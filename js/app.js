var myApp = angular.module("myApp", []);
myApp.controller("myController", function($scope){

  $scope.users = [
    {username: "john", firstName: "John", lastName: "Craig", email: "johnCraig@gmail.com"},
    {username: "mcraig", firstName: "Mark", lastName: "Craig", email: "markCraig@gmail.com"},
    {username: "eblade", firstName: "Eric", lastName: "Blade", email: "ericBlade@gmail.com"}
  ];

  // Sorting column
  $scope.sortColumn = "users";
  $scope.reverseSort = false;
  $scope.sortData = function(column){
    $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
    $scope.sortColumn = column;
  };

  // Arrow Up and Down for sortColumn
  $scope.getSortClass = function(column){
    if($scope.sortColumn == column){
      return $scope.reverseSort ? "glyphicon glyphicon-arrow-down" : "glyphicon glyphicon-arrow-up"
    }
    return '';
  };


  // for message alert
  $scope.message = "";
  $scope.clearMessage = function(){
    $scope.message = "";
  };

  // For adding new user
  $scope.newUser = {};
  $scope.saveUser = function(){
    // console.log($scope.newUser);
    $scope.users.push($scope.newUser);
    $scope.newUser = {};
    $scope.message = "New user added successfully!";
  };

  // for editing user
  $scope.selectedUser = {};
  $scope.editUser = function(user){
    // console.log(user);
    $scope.selectedUser = user;
  };
  $scope.updateUser = function(){
    $scope.message = "User updated successfully!";
  };

  // Removing user
  $scope.deleteUser = function(){
    $scope.users.splice($scope.users.indexOf($scope.selectedUser), 1);
    $scope.message = "User deleted successfully!";
  };
});
