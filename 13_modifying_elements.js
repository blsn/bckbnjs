function Function13(){

    StudentModel = Backbone.Model.extend({
        defaults: {
            name: "unknown"
        }
    });

    StudentCollection = Backbone.Collection.extend({
        model: StudentModel,
        initialize: function(){
        }
    });

    $(document).ready(function(){
        var jony = new StudentModel({name: "jony", id: 1});
        var vicky = new StudentModel({name: "vicky", id: 2});
        var student_group = new StudentCollection([jony, vicky]);        
        displayCollectionContents("Before:", student_group); 
        
        var student = student_group.get(1);
        student.set({name: "lopez"});
        displayCollectionContents("After:", student_group); 
    });

    function displayCollectionContents(string, collection){
        console.log(string + " " + JSON.stringify(collection.toJSON()));
    };

}
