define(['text!templates/layouts/ktfForm.ly.html','postbox','knockout','jquery'],function(html,POSTBOX,ko,$){   
  
    return {
        
        viewModel: function(params){       

            let self = this;

            self.frmChangeTitle = ko.observable("Hello,World!");
            self.frmChangeSubtitle = ko.observable("An example of customizable site");
            self.frmChangeImageSelected = ko.observable();
            self.frmImageArray = params.frmImages;
            
            self.frmChangeTitle.subscribe((val)=>{
                POSTBOX.notifySubscribers(val,'mainTitle');
            });

            self.frmChangeSubtitle.subscribe((val)=>{
                POSTBOX.notifySubscribers(val,'mainSubtitle');
            });

            self.frmChangeImageSelected.subscribe((val)=>{                              
                POSTBOX.notifySubscribers(val.value,'mainImage');
            });

        },
        template: html

    };

});