(function () {
    'use strict'

    var controllerId = 'home';
    angular
        .module('app')
        .controller(controllerId, ['common', 'pageElement', home]);

    function home(common, pageElement) {
        start();

        pageElement.setTitle('Home');

        end();

        function start() {
            var promises = [];
            common.controllerStart(promises, controllerId);
        }

        function end() {
            var promises = [];
            common.controllerEnd(promises, controllerId);
        }
    }
})();