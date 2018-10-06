function Function9(){

    TheView = Backbone.View.extend({
        initialize: function(){
            this.render();
        },
        render: function(){
            var template = _.template($("#ourTemplate9").html(), {});
            this.$el.html(template);
        }
    });

    $(document).ready(function(){
        var aView = new TheView({el: $("#unique9")});
    });

}
