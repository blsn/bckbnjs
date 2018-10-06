function Function6(){

    TheView = Backbone.View.extend({
        defaults: {},
        initialize: function(){
            alert("I'm exist now");
        }
    });

    $(document).ready(function(){
        var aView = new TheView();
    });

}