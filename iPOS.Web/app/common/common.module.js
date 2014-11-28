(function () {
    'use strict'

    angular
        .module('common', [])
        .provider('commonConfig', commonConfig)
        .factory('common', ['$q', '$rootScope', '$timeout', 'commonConfig', common]);

    function commonConfig() {
        this.config = {
            controllerStartSuccessEvent: '',
            controllerEndSuccessEvent: ''
        };

        this.$get = function () {
            return {
                config: this.config
            };
        };
    }

    function common($q, $rootScope, $timeout, commonConfig) {
        var services = {
            // common angular dependency
            $broadcast: $broadcast,
            $q: $q,
            $timeout: $timeout,

            // generic
            controllerBegin: controllerBegin,
            controllerEnd: controllerEnd
        }

        return services;

        function controllerBegin(promises, controllerId) {
            return $q.all(promises).then(function (eventArgs) {
                var data = { controllerId: controllerId };
                $broadcast(commonConfig.config.controllerStartSuccessEvent, data);
            });
        }

        function controllerEnd(promises, controllerId) {
            return $q.all(promises).then(function (eventArgs) {
                var data = { controllerId: controllerId };
                $broadcast(commonConfig.config.controllerEndSuccessEvent, data);
            });
        }

        function $broadcast() {
            return $rootScope.$broadcast.apply($rootScope, arguments);
        }
    }
})();