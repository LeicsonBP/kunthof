requirejs.config({

    baseUrl: './js',

    paths: {
        'text': 'plugins/text',
        'jquery': 'plugins/jquery.min',
        'bootstrap': 'plugins/bootstrap.bundle.min',
        'knockout': 'plugins/knockout.min',
        'postbox': 'plugins/postbox',
       
        'templates': '../components',

        'variables': 'global/variablesRegister',

        'documentReady': 'utils/documentReady',

        'registerComponents': 'components/utils/componentsRegister',
        'layouts': 'components/layouts'
    },

    shim:{
        'bootstrap': {
            deps: ['jquery']
        },
        'knockout': {
            deps: ['jquery']
        },
        'postbox': {
            deps: ['knockout']
        },
        'variables': {
            deps: ['jquery']
        },
        'documentReady':{
            deps: ['variables','text']
        },
        'registerComponents':{
            deps: ['documentReady','postbox']
        }
    }

});

require(['registerComponents']);