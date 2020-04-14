define(['text!templates/layouts/ktfHeader.ly.html'],function(html){   

    return {
        
        viewModel: function(params){       
            this.navBgColor = params.navBgColor;
            this.jumBgColor = params.jumBgColor;
            this.logo = params.logo;
            this.jumText = params.jumText;
            this.jumDescription = params.jumDescription;
            this.jumbotronDisplay = params.jumbotronDisplay;
            this.headerHeight = this.jumbotronDisplay ? "vh-100" : "";
        },
        template: html

    };

});