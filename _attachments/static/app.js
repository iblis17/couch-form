(function(){
  var app = angular.module('couchForm', [])
  .config(['$interpolateProvider', '$httpProvider',
          function($interpolateProvider, $httpProvider){
    // $interpolateProvider.startSymbol('[[')
    // $interpolateProvider.endSymbol(']]')

    // for django request
    // $httpProvider.defaults.xsrfCookieName = 'csrftoken'
    // $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken'
    // $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest'
  }])

  function FormItem(tag, type, placeholder, optional){
    this.tag = tag
    this.type = type
    this.placeholder = placeholder
    this.label = null  // For the display text
    this.optional = optional || true
  }

  app.controller('IndexController', ['$scope', '$http',
                 function($scope, $http){
    var self = this

    $scope.preview = {
      list: [],
      remove: function(index){
        this.list.splice(index, 1);
      }
    }

    $scope.create = {
      new: {
        text: function(){
          $scope.preview.list.push(new FormItem(
            'input', 'text', 'Some text here'
          ))
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
