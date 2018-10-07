function Function14(){

    StudentModel = Backbone.Model.extend({
        defaults: {
            name: "unknown"
        }
    });

    StudentCollection = Backbone.Collection.extend({
        model: StudentModel,
        initialize: function(){
            this.bindEvents();
        },
        bindEvents: function(){
            this.on("change:name", function(model){
                alert("The name changed to " + model.get("name"));
            });
            this.on("add", function(model){
                alert("Added a new student " + model.get("name"));
            });
            this.on("remove", function(model){
                alert("Removed student " + model.get("name"));
            });
        }
    });

    $(document).ready(function(){
        var jony = new StudentModel({name: "jony", id: 1});
        var vicky = new StudentModel({name: "vicky", id: 2});
        var student_group = new StudentCollection([jony]);

        student_group.add([vicky]);
        student_group.remove([vicky]);
        jony.set({name:"jakob"});

        displayCollectionContents("After:", student_group); 
    });

    function displayCollectionContents(string, collection){
        console.log(string + " " + JSON.stringify(collection.toJSON()));
    };

}
