define(['jquery','knockout','text','bootstrap'],function($,ko){
    
    ko.components.register('ktf-header',{

        require: 'components/layouts/ktfHeader.ly'

    });

    ko.applyBindings();

});