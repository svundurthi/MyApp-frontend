(function () {
    'use strict';

    angular
        .module('app.login')
        .factory('LoginService', LoginService);

    LoginService.$inject = ['$rootScope', '$http', '$state', '$window', '$q', 'API',  'exception'];
    /* @ngInject */
    function LoginService($rootScope, $http, $state, $window, $q, API, exception) {

        var BACKEND = API.LOCATION();
        //Constant URL

        var location = {
            login: BACKEND.LOGIN,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            }
        };

        // service
        var service = {
            login: login,
            resetpassword:resetpassword
        };

        return service;

        function login(credential) {

            var params = {};
            var deferred = $q.defer();
            angular.copy(credential, params);
            $http.post(BACKEND.LOGIN, params, location.headers)
                .then(_success, _error)
                .catch(_fail);

            function _success(response) {
               
                    
                    //DelegateService.executeRoute();
                    $rootScope.nav.showNav = true;
                    deferred.resolve(response);
                
                return response;
            }

            function _error(response) {
                deferred.reject(response);
                return response;
            }

            function _fail(e) {
                // Todo Change this string to variables

                deferred.reject('System Service '.concat(e));
                return e;
            }

            return deferred.promise;
        }

       
        function resetpassword(resetuser){
            return $http.post(BACKEND.RESETPASSWORD,{'userkey':resetuser}).
                then(success).catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getPayment')(e);
            }
        }

		
    }
})();
