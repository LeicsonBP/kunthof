define(['text!templates/layouts/ktfHeader.ly.html'],function(html){   

    return {
        
        viewModel: function(params){       

            let self = this;

            self.navBgColor = params.navBgColor;
            self.navText = params.navText;
            self.navProps = `${self.navBgColor} ${self.navText}`;
            self.logo = params.logo;
            self.jumbotronDisplay = params.jumbotronDisplay;
            self.headerHeight = self.jumbotronDisplay ? "vh-100" : "";
        
        },
        template: html

    };

});