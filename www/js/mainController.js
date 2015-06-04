angular.module('BillApp', [])
  .controller('MainController', ['$scope', function($scope) {
		$scope.peoples = [
			{name:'Jean'},
			{name:'Feng'},
			{name:'Lapin qui pue'},
			{name:'Caramel'},
			{name:'Zérisson'}
		];
		$scope.addPeople = function() {
			$scope.peoples.push({name: $scope.peoples._newPeopleName});
			$scope.peoples._newPeopleName = '';
		};
		$scope.removePeople = function(index) {
			$scope.peoples.splice(index, 1);
		};
		$scope.purchases = [
			{
				name:'resto Sola',
				payers: [
					{people: 0, price: 0.0},
					{people: 1, price: 58.8}
					]
			},
			{
				name:'tickets métro',
				payers: [
					{people: 0, price: 12.6}
					]
			},
			{
				name:'bar du bout du monde',
				payers:[
					{people: 0, price: 10.00},
					{people: 1, price: 6.30},
					{people: 4, price: 0.0}
					]
			}
		];
		$scope.addPurchase = function() {
			$scope.purchases.push({name: $scope.purchases._newPurchaseName, payers: []});
			$scope.purchases._newPurchaseName = '';
		};
		$scope.removePurchase = function(index) {
			$scope.purchases.splice(index, 1);
		};
		$scope.addPayer = function(purchaseindex, newpeopleindex) {
			$scope.purchases[purchaseindex].payers.push({people: newpeopleindex, price: 0.0});
		}
  }]);