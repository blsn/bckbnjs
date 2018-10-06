function Function8(){

    TheView = Backbone.View.extend({
        //<span class="prettyCake" id="span8"></span>
        tagName: "span",
        className: "prettyCake",
        id: "span8",

        initialize: function(){
            $("#unique8").append(this.el); // element created
        }
    });

    $(document).ready(function(){
        var aView = new TheView();
    });

}
