define(['text!templates/layouts/ktfJumbotron.ly.html','postbox','knockout'],function(html,POSTBOX,ko){   

    return {
        
        viewModel: function(params){       

            let self = this;

            self.jumBgColor = ko.observable(params.jumBgColor);
            self.jumText = params.jumText;
            self.jumDescription = params.jumDescription;
            self.jumbotronDisplay = params.jumbotronDisplay;
            self.seed = params.seed ? params.seed: 3;
            self.imageBackground = `url(https://picsum.photos/seed/${self.seed}/4000/3000/)`;
        
            POSTBOX.subscribe(colorClass => { 

                self.jumBgColor(colorClass);                
    
            },self,'primaryColor');

        },
        template: html

    };

});