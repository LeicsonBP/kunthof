requirejs.config({

    baseUrl: '../src/js',

    paths: {
        'registerComponents': 'components/componentsRegister',
        'jquery': 'plugins/jquery.min',
        'bootstrap': 'plugins/bootstrap.bundle.min',
        'knockout': 'plugins/knockout.min',
        'layouts': 'components/layouts',
        'widgets': 'components/widgets',
        'templates': '../components'
    },

    shim:{
        'bootstrap': {
            deps: ['jquery']
        }
    }

});

require(['registerComponents']);