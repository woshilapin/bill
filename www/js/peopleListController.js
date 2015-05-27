angular.module('BillApp', [])
  .controller('PeopleListController', function() {
		var peopleList = this;
		peopleList.peoples = [{name:'Jean'},{name:'Feng'},{name:'Lapin qui pue'},{name:'Caramel'},{name:'Zérisson'}];
		peopleList.addPeople = function() {
			peopleList.peoples.push({name: peopleList.peopleName});
			peopleList.peopleName = '';
		};
		peopleList.removePeople = function(index) {
			peopleList.peoples.splice(index, 1);
		};
  });