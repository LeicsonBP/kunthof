define(['text!templates/layouts/ktfJumbotron.ly.html'],function(html){   

    return {
        
        viewModel: function(params){       

            let self = this;

            self.jumBgColor = params.jumBgColor;
            self.jumText = params.jumText;
            self.jumDescription = params.jumDescription;
            self.jumbotronDisplay = params.jumbotronDisplay;
            self.seed = params.seed ? params.seed: 3;
            self.imageBackground = `url(https://picsum.photos/seed/${self.seed}/4000/3000/)`;
        
        },
        template: html

    };

});