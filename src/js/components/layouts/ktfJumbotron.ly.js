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
            self.jumText = ko.observable("Hello,World!");
            self.jumDescription = ko.observable("An example of customizable site");
            self.jumbotronDisplay = params.jumbotronDisplay;
            self.seed = ko.observable();
            self.windowWidth = ko.observable($window.width());
            self.windowHeight = ko.observable($window.height());           
            self.imageBackground = ko.computed(() => {                 
                return `url(https://picsum.photos/seed/${self.seed()}/${self.windowWidth()}/${self.windowHeight()}/)`;
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

            POSTBOX.subscribe(val => { 

                self.seed(val);                
    
            },self,'mainImage');

        },
        template: html

    };

});