define(['jquery','knockout'],function($,ko){

    ko.components.register('ktfHeader',{

        require: '/components/layouts/ktfHeader.ly'

    });

    ko.applyBindings();

});