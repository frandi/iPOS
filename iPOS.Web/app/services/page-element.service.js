(function () {
    'use strict'

    angular
        .module('app')
        .factory('pageElement', ['$document', pageElement]);

    function pageElement($document) {
        var services = {
            getTitle: getTitle,
            setTitle: setTitle
        };

        return services;

        function getTitle()
        {
            return $document[0].title;
        }

        function setTitle(value) {
            $document[0].title = value;
        }
    }
})();