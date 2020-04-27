define(['text!templates/layouts/ktfCards.ly.html','postbox','knockout','jquery'],function(html,POSTBOX,ko,$){   
  
    return {
        
        viewModel: function(params){       

            let self = this;

            self.cardElement = params.cardElement;

        },
        template: html

    };

});