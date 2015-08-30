(function(){
  var app = angular.module('couchForm', ['angular-loading-bar', 'ngRoute'])
  .config(['$interpolateProvider', '$httpProvider', '$routeProvider',
          'cfpLoadingBarProvider',
          function($interpolateProvider, $httpProvider, $routeProvider,
                   cfpLoadingBarProvider){
    // $interpolateProvider.startSymbol('[[')
    // $interpolateProvider.endSymbol(']]')

    $httpProvider.defaults.xsrfCookieName = 'CouchDB-CSRF'
    $httpProvider.defaults.xsrfHeaderName = 'X-CouchDB-CSRF'
    // $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest'
    
    $routeProvider.
      when('/', {
        templateUrl: 'main.html',
        controller: 'IndexController'
      }).
      when('/create', {
        templateUrl: 'create.html',
        controller: 'CreateController'
      }).
      otherwise({
        redirectTo: '/'
      })

      cfpLoadingBarProvider.includeSpinner = false
  }])

  function FormItem(tag, type, label, optional, readonly){
    this.tag = tag
    this.type = type
    this.label = label
    this.edit_label = false
    this.optional = optional || true
    this.readonly = readonly || true

    this.edit = function(){
      this.edit_label = true
    }
    this.edit_blur = function(){
      this.edit_label = false
    }
  }

  app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
      element.bind("keydown keypress", function (event) {
        if(event.which === 13) {
          scope.$apply(function (){
            scope.$eval(attrs.ngEnter);
          })

          event.preventDefault();
        }
      })
    }
  })

  app.controller('IndexController', ['$scope', '$http',
                 function($scope, $http){
  }])

  app.controller('CreateController', ['$scope', '$http',
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
            'input', 'text', 'Description text here'
          ))
        },
      },
      btn: function(){
        $scope.preview.list = []
      },
      save: function(){
        var fields = []
        var payload = {
          title: 'Test title',
          fields: fields,
        }

        $http.post('_update/save_form', payload).
          then(function(res){
            console.log(res.data)
            console.log(res.headers('X-Couch-Id'))
            console.log(res.headers('X-Couch-Update-Newrev'))
            console.log(res)
          },
          function(res){
            console.log(res.data)
          })
      }
    }

    $scope.list = function(){
    }
  }])
})()
