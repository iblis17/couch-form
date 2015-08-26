(function(){
	var app = angular.module('couchForm', [])
	.config(['$interpolateProvider', '$httpProvider',
	function($interpolateProvider, $httpProvider) {
		// $interpolateProvider.startSymbol('[[')
		// $interpolateProvider.endSymbol(']]')

		// for django request
		// $httpProvider.defaults.xsrfCookieName = 'csrftoken'
		// $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken'
		// $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest'
	}])

	app.controller('IndexController', ['$scope', '$http',
	function($scope, $http) {
		var self = this

		$scope.preview = {
			list: []
		}

		$scope.create = {
			new: {
				text: function(){
					$scope.preview.list.push({
						tag: 'input',
						type: 'text',
						placeholder: 'Some text here',
					})
				},
			},
			btn: function(){
				$scope.preview.list = []
				$scope.content_url = 'create.html'
			},
		}

		$scope.list = function(){
		}
	}])
})()
