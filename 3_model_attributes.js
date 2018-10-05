function Function3(){

    WebsiteModel = Backbone.Model.extend({
        defaults: {
            name: "Best Default Website Ever",
            barcode: 3
        },
        initialize: function(){
        }
    });

    $(document).ready(function(){
        var page_3 = new WebsiteModel({name: "Best Website Ever"});
        alert("Page's 3 title is " + page_3.get("name"));
        
        var page_3 = new WebsiteModel({name: "Best Website Ever", barcode: 1});
        alert("Page's 3 title is " + page_3.get("name") + " and it's barcode is " + page_3.get("barcode"));

        var page_3 = new WebsiteModel();
        page_3.set({name: "Best Website Ever"});
        page_3.set({barcode: 2});
        alert("Page's 3 title is " + page_3.get("name") + " and it's barcode is " + page_3.get("barcode"));

        var page_3 = new WebsiteModel();
        alert("Page's 3 title is " + page_3.get("name") + " and it's barcode is " + page_3.get("barcode"));
    });

}