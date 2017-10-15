(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('ActionFactory', ActionFactory);

    ActionFactory.$inject = [];
    /* @ngInject */
    function ActionFactory() {
        var action = {};
        var state = {};
        var hmeDirect;
        return {
            setAction: function (obj) {
                action = obj;
            },
            getAction: function () {
                return action;
            },
            removeAction: function () {
                action = null;
            },
            setState: function (obj) {
                state = obj;
            },
            fromState: function (obj) {
                state = obj;
            },
            getState: function () {
                return state;
            },
            removeState: function (obj) {
                state = null;
            },
            setHomeRedirect: function(obj) {
                hmeDirect = obj;
            },
            getHomeRedirect: function() {
                return hmeDirect;
            },
            removeHomeRedirect: function() {
                hmeDirect = null;
            },
            resetAction: function() {
                action = {};
                state = {};
                hmeDirect = null;
            }
        };
    }
})();
