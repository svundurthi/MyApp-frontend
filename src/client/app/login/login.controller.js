(function() {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$q', '$scope','$state', '$rootScope', 'LoginService', '$http', 'ActionFactory',];

    /* @ngInject */
    function LoginController($q, $scope,$state, $rootScope, LoginService, $http, ActionFactory) {
        
       // $rootScope.nav.showNav = false;
        ActionFactory.removeHomeRedirect();
        ActionFactory.removeAction();
        var vm = this;
        vm.password = '';
       vm.user = '';
        vm.errorMsg = '';
        vm.login = login;
        vm.disableBtn = true;
       // $rootScope.nav.showNav = false;
        $scope.form = {};
        function login(user, password) {
            if (vm.disableBtn) {
                vm.errorMsg = null;
                if (password.trim() === '') {
                    vm.errorMsg = 'Password may not be Empty';
                } else {
                    var credential = {
                        username: user,
                        password: password
                    };
                    // Call Login Service
                    vm.disableBtn = false;
                    LoginService.login(credential).then(function (response) {
                        
                        ActionFactory.setHomeRedirect('dashboard');                        
                            $rootScope.$broadcast('login-successful');
                            /*DropdownFactory.setusername(vm.user);*/
                            $state.go('dashboard');
                            $rootScope.nav.showNav = true;
                       
                    });                    
                }
            }

        }
        vm.reset = function(event) {
            vm.password = '';
            vm.user = '';
            $scope.form.login.$setPristine();
        }
    }
})();
