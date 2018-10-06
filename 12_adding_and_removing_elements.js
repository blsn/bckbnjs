function Function12(){

    StudentModel = Backbone.Model.extend({
        defaults: {
            name: "unknown"
        }
    });

    StudentCollection = Backbone.Collection.extend({
        model: StudentModel
    });

    $(document).ready(function(){
        var jony = new StudentModel({name: "jony", id: 1});
        var vicky = new StudentModel({name: "vicky", id: 2});
        var pepe = new StudentModel({name: "pepe", id: 3});
        var lola = new StudentModel({name: "lola", id: 4});

        var class_12 = new StudentCollection([jony, vicky]);
        displayCollectionContents("Two elements:", class_12);
        
        class_12.add([pepe, lola]);
        displayCollectionContents("Four elements:", class_12);

        class_12.remove([vicky]);
        displayCollectionContents("Three elements:", class_12);

        console.log("The class_12 size is " + class_12.size());
    });

    function displayCollectionContents(string, collection){
        console.log(string + " " + JSON.stringify(collection.toJSON()));
    };

}
