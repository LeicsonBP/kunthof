define(['text!templates/layouts/ktfHeader.ly.html'],function(html){   

    return {
        
        viewModel: function(params){       

            let self = this;

            self.navBgColor = params.navBgColor;
            self.logo = params.logo;
            self.jumbotronDisplay = params.jumbotronDisplay;
            self.headerHeight = self.jumbotronDisplay ? "vh-100" : "";
        
        },
        template: html

    };

});