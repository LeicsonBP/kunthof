define(['text!templates/layouts/ktfHeader.ly.html'],function(html){   

    return {
        
        viewModel: function(params){       

            let self = this;

            self.navBgColor = params.navBgColor;
            self.jumBgColor = params.jumBgColor;
            self.logo = params.logo;
            self.jumText = params.jumText;
            self.jumDescription = params.jumDescription;
            self.jumbotronDisplay = params.jumbotronDisplay;
            self.headerHeight = self.jumbotronDisplay ? "vh-100" : "";
            self.seed = params.seed ? params.seed: 3;
            self.imageBackground = `url(https://picsum.photos/seed/${self.seed}/4000/3000/)`;
        
        },
        template: html

    };

});