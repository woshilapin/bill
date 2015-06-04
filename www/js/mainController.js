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
				name:'Resto Sola',
				payers: [
					{people: 0, price: 0.0},
					{people: 1, price: 58.8}
					]
			},
			{
				name:'Tickets métro',
				payers: [
					{people: 0, price: 12.6}
					]
			},
			{
				name:'Bar du bout du monde',
				payers: [
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
		$scope.pricePurchase = function(purchaseindex) {
			var total = 0.0;
			for(var payer of $scope.purchases[purchaseindex].payers) {
				var price = parseFloat(payer.price);
				if(!isNaN(price)) {
					total += price;
				}
			}
			return total;
		}
		$scope.addPayer = function(purchaseindex) {
			$scope.purchases[purchaseindex].payers.push({people: $scope.purchases[purchaseindex].payers._newPayerIndex, price: 0.0});
		}
		$scope.removePayer = function(purchaseindex, payerindex) {
			$scope.purchases[purchaseindex].payers.splice(payerindex, 1);
		}
  }]);