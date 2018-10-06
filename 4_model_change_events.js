function Function4(){

    SandwichModel = Backbone.Model.extend({
        defaults: {
            bread: "wheat"
        },
        initialize: function(){
            this.bindEvents();
        },
        bindEvents: function(){
            this.on("change:bread", function(model){
                var my_new_bread = model.get("bread");
                alert("The bread changed to " + my_new_bread);
            });
        }
    });

    $(document).ready(function(){
        var my_sandwich = new SandwichModel();
        alert("The bread is " + my_sandwich.get("bread"));
        
        my_sandwich.set({bread: "jalpeno"});
        my_sandwich.set({bread: "big weiner"});
    });

}