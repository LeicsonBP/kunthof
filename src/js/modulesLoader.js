requirejs.config({

    baseUrl: './js',

    paths: {
        'registerComponents': 'components/componentsRegister',
        'jquery': 'plugins/jquery.min',
        'bootstrap': 'plugins/bootstrap.bundle.min',
        'knockout': 'plugins/knockout.min',
        'layouts': 'components/layouts',
        'widgets': 'components/widgets',
        'templates': '../components',
        'text': 'plugins/text'
    },

    shim:{
        'bootstrap': {
            deps: ['jquery']
        },
        'knockout': {
            deps: ['jquery']
        }
    }

});

require(['registerComponents']);