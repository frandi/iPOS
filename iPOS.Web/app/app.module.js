(function () {
    angular
        .module('app', [
            // angular modules
            'ngRoute',

            // custom modules
            'common'
        ])
        .run(['$rootScope', '$route', 'pageElement', route]);

    function route($rootScope, $route, pageElement) {
        $rootScope.$on('$routeChangeSuccess', function () {
            var title = pageElement.getTitle();
            if (title == '')
                title = 'iPOS';
            else
                title = title + ' | iPOS';

            $rootScope.pageTitle = title;
        })
    }
})();