(function () {
    'use strict';

    angular
        .module('app.core')        
    	.constant('toastr', toastr)
        .constant('moment', moment)
        .constant('_', UnderScore)
        .factory('API', ['$http', function ($http) {
            var CONTEXT = '/api/';
            var HEADERS = {
                'Content-Type': 'application/json',
                'Content-Cache': 'no-cache'
            };
            var URL = {
                    LOGIN: CONTEXT.concat('/myapp/login'),
                };
            return {
                LOCATION: function () {
                    return URL;
                }, DO_POST: function (url, payload, header, isCache) {
                    if (url) {

                        var params = payload || undefined;
                        var headers = header || HEADERS;
                        if (isCache) {
                            headers.cache = true;
                        }

                        return $http.post(url, params, headers);
                    } else {
                        throw Error('URL not instance of URL object');
                    }


                }, DO_GET: function (url, header, isCache) {
                    if (url) {
                        var headers = header || HEADERS;
                        if (isCache) {
                            headers.cache = true;
                        }

                        return $http.get(url, headers);
                    } else {
                        throw Error('URL not instance of URL object');
                    }

                }, DO_PUT: function (url, header, isCache) {
                    if (url) {
                        var headers = header || HEADERS;
                        if (isCache) {
                            headers.cache = true;
                        }

                        return $http.put(url, headers);
                    } else {
                        throw Error('URL not instance of URL object');
                    }

                }

            };
        }]);

    UnderScore.$inject = ['$window'];

    /* @ngInject */
    function UnderScore($window) {
        return $window._;
    }
})();
