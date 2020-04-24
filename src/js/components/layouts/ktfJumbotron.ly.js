define(['text!templates/layouts/ktfJumbotron.ly.html','postbox','knockout','jquery'],function(html,POSTBOX,ko,$){   
  
    return {
        
        viewModel: function(params){       

            const $window = $(window);
            $window.resize(() => {
                self.windowWidth($window.width());
                self.windowHeight($window.height());
            });

            let self = this;

            self.jumBgColor = ko.observable(params.jumBgColor);
            self.jumText = ko.observable(params.jumText);
            self.jumDescription = ko.observable(params.jumDescription);
            self.jumbotronDisplay = params.jumbotronDisplay;
            self.seed = params.seed ? params.seed: 3;
            self.windowWidth = ko.observable($window.width());
            self.windowHeight = ko.observable($window.height());           
            self.imageBackground = ko.computed(() => {
                return `url(https://picsum.photos/seed/${self.seed}/${self.windowWidth()}/${self.windowHeight()}/)`;
            });
        
            POSTBOX.subscribe(colorClass => { 

                self.jumBgColor(colorClass);                
    
            },self,'primaryColor');

            POSTBOX.subscribe(val => { 

                self.jumText(val);                
    
            },self,'mainTitle');

            POSTBOX.subscribe(val => { 

                self.jumDescription(val);                
    
            },self,'mainSubtitle');

        },
        template: html

    };

});