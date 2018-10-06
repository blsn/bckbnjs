function Function2(){

    WebsiteModel = Backbone.Model.extend({
        initialize: function(){
            alert('Hello world');
        }
    });

    $(document).ready(function(){
        var page_2 = new WebsiteModel();
    });

}