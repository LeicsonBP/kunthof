define(['text!templates/layouts/ktfForm.ly.html','postbox','knockout','jquery'],function(html,POSTBOX,ko,$){   
  
    return {
        
        viewModel: function(params){       

            let self = this;

            self.frmChangeTitle = ko.observable("Hello,World!");
            self.frmChangeSubtitle = ko.observable("An example of customizable site");
            
            self.frmChangeTitle.subscribe((val)=>{
                POSTBOX.notifySubscribers(val,'mainTitle');
            });

            self.frmChangeSubtitle.subscribe((val)=>{
                POSTBOX.notifySubscribers(val,'mainSubtitle');
            });

        },
        template: html

    };

});