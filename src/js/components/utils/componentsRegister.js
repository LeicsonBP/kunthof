define(['knockout'],function(ko){

    ko.components.register('ktf-header',{

        require: 'components/layouts/ktfHeader.ly'

    });

    ko.components.register('ktf-jumbotron',{

        require: 'components/layouts/ktfJumbotron.ly'

    });

    ko.applyBindings();

});