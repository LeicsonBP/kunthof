define(['text!templates/layouts/ktfColorSelector.ly.html','postbox'],function(html,POSTBOX){   

    return {
        
        viewModel: function(params){       

            let self = this;

            self.colors=params.colors;
            self.title=params.title;
            self.subtitle=params.subtitle;
            self.bgColor="bg-white";
            self.mainDivProps=`${self.bgColor}`;
            self.colorSelected=(colorClass) => {
                POSTBOX.notifySubscribers(colorClass,'primaryColor');
            };
        
        },
        template: html

    };

});