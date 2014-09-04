(function(){
  var app = angular.module('directory', []);

  var deptMembers = [{professors: [{name: "Jon Holtzmann", title: "Department Head", office:"Astr 102", email: "holtz"},
  {name: "Kurt Anderson", title: "Professor Emeritus", office:"Astr 221B", email: "kurt"}]},
  {students: [{name:"Nikki Nielsen", title:"Graduate Assistant", office:"Astr 218", email:"nmnielsen"},
  {name:"Teresa Ross", title:"Graduate Assistant",office:"Astr 105", email:"rosst"}]}];

  app.controller('DeptListController', function(){
    this.deptMembers = deptMembers.professors;
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
