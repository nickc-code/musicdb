var display = function(searched_database){
    // console.log(searched_database["Name"])
    $("#add").empty()

    var rowh = $("<div class = 'row bottom_row_padding'>")
    var columnh = $("<div class = 'col-md-3 bold'>")
    var column1h = $("<div class = 'col-md-3 bold'>")
    var column2h = $("<div class = 'col-md-3 bold'>")
    var column3h = $("<div class = 'col-md-3 bold'>")
    $(columnh).append("Player")
    $(column1h).append("Team")
    $(column2h).append("Age")
    $(column3h).append("Rating")
    $(rowh).append(columnh)
    $(rowh).append(column1h)
    $(rowh).append(column2h)
    $(rowh).append(column3h)
    $("#add").append(rowh)

    function get_name(value, x){
        return function(){
            // console.log(x+1)
            // console.log(value[x]["id"])
            var identify=(value[x]["id"])
            var hold=((value[x]["Name"]))
            console.log(hold)
            console.log(identify)
            var data_to_save = {"x":identify}
            $.ajax({
                type: "POST",
                url: "info",                
                dataType : "json",
                contentType: "application/json; charset=utf-8",
                data : JSON.stringify(data_to_save),
                success: function(result){
                    // console.log(result[0])
                    // console.log(hold)
                    window.location.href = 'Item/'+hold;
                },
                error: function(request, status, error){
                    console.log("Error");
                    console.log(request)
                    console.log(status)
                    console.log(error)
                }
            });
            // console.log(hold)

        }
    }
    $.each(searched_database, function(i, value){
        var x=0;
        while(x<(value.length)){
            var row = $("<div class = 'row bottom_row_padding' >")
            var column = $("<div class = 'col-md-3 player"+x+"'>")
            var column1 = $("<div class = 'col-md-3'>")
            var column2 = $("<div class = 'col-md-3'>")
            var column3 = $("<div class = 'col-md-3'>")

            $(column).append(value[x]["Name"])
            $(column1).append(value[x]["Team"])
            $(column2).append(value[x]["Age"])
            $(column3).append(value[x]["Rating"])

            $(row).append(column)
            $(row).append(column1)
            $(row).append(column2)
            $(row).append(column3)

            $(row).hover(function(){
            $(this).css("background-color", "lightyellow");
            }, function(){
                $(this).css("background-color", "white");
            });
            $(row).click(get_name(value,  x))
            $("#add").append(row)

            x=x+1;
        }
    })

}


var search_Lookup = function(Lookup){ 
    var data_to_save = {"Lookup":Lookup}
    $.ajax({
        type: "POST",
        url: "match",                
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(data_to_save),
        success: function(result){
            // console.log(result)
            display(result)

        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}


var search_input = function ()
{
    var Lookup = $("#Search").val()
    $("#Search").attr("placeholder", "Search...").val("")
    // console.log(Lookup)
    search_Lookup(Lookup)
    
}


$(document).ready(function(){
    //when the page loads, display all the names
    $(".add_link").click(function(){  
        window.location.href="/Add_item"
    })
    $("#Button").click(function(){
        console.log("TRIGGGG")
        search_input()
    })
   
})
