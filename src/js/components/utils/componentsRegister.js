define(['knockout','bootstrap'],function(ko){

    ko.components.register('ktf-header',{

        require: 'components/layouts/ktfHeader.ly'

    });

    ko.components.register('ktf-jumbotron',{

        require: 'components/layouts/ktfJumbotron.ly'

    });

    ko.components.register('ktf-main',{

        require: 'components/layouts/ktfMain.ly'

    });

    ko.components.register('ktf-color-selector',{

        require: 'components/layouts/ktfColorSelector.ly'

    });

    ko.applyBindings();

});