define(['text!templates/layouts/ktfHeader.ly.html'],function(html){

    return {
        
        viewModel: params => {
            this.bgColor = params.bgColor;
            this.logo = params.logo;
            this.jumbotronDisplay = params.jumbotromDisplay;
        },
        template: html

    };

});