function Function7(){

    TheView = Backbone.View.extend({
        defaults: {},
        initialize: function(){
            console.log(this.el);
            console.log(this.$el);
            this.$el.append("7. Hello world");
        }
    });

    $(document).ready(function(){
        var aView = new TheView({el: $("#unique7")});
    });

}


//var myel = this.el; // the html element, 
//var my$el = this.$el; // ythe element but with all of the functions that jQuery provides