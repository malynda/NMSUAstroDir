(function(){
  var app = angular.module('directory', []);

  var deptMembers = [{name: "Jon Holtzmann", title: "Department Head", office:"Astr 102", email: "holtz"},{name: "Kurt Anderson", title: "Professor Emeritus", office:"Astr 221B", email: "kurt"}]

  app.controller('DeptListController', function(){
    this.deptMembers = deptMembers;
  });

  app.controller('TabController', function(){
  	this.tab = 1;
    this.setTab = function(tab){
    	this.tab = tab;
    };
    this.isSet = function(tab){
    	return this.tab == tab;
    };
  });



})();
