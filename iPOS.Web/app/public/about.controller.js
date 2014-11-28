(function () {
    'use strict'

    var controllerId = 'about';
    angular
        .module('app')
        .controller(controllerId, ['pageElement', about]);

    function about(pageElement) {
        pageElement.setTitle('Home');
    }
})();