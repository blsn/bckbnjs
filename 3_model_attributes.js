function Function3(){

    WebsiteModel = Backbone.Model.extend({
        initialize: function(){
            alert('Hello world');
        }
    });

    $(document).ready(function(){
        //alert('Hello world');
        var page_2 = new WebsiteModel();
    });

}