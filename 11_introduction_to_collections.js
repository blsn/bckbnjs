function Function11(){

    StudentModel = Backbone.Model.extend({
        defaults: {
            name: "unknown"
        }
    });

    StudentCollection = Backbone.Collection.extend({
        model: StudentModel
    });

    $(document).ready(function(){
        var jony    = new StudentModel();
        var vicky   = new StudentModel();
        var class_11 = new StudentCollection([jony, vicky]);
        console.log("The class_11 size is " + class_11.size());
    });

}
