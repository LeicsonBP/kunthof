define(['text!templates/layouts/ktfHeader.ly.html','postbox','knockout'],function(html,POSTBOX,ko){   

    return {
        
        viewModel: function(params){       

            let self = this;

            self.navBgColor = ko.observable(params.navBgColor);
            self.navText = params.navText;
            self.navProps = ko.computed(function() {
                return `${self.navBgColor()} ${self.navText}`;
            },self);
            self.logo = params.logo;
            self.jumbotronDisplay = params.jumbotronDisplay;
            self.headerHeight = self.jumbotronDisplay ? "vh-100" : "";
        
        },
        template: html

    };

});