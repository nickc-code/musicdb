


var add_input = function(data_entry){
    console.log(data_entry)
    // alert(data_entry)
    var data_to_save = data_entry
    $.ajax({
      type: "POST",
      url: "userfollowuser",
      dataType : "json",
      contentType: "application/json; charset=utf-8",
      data : JSON.stringify(data_to_save),
      success: function(result){
        // console.log("results\n" + result)
        // display(result)
        // alert('g')


        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
            alert('bad')
        }

    });
   // $.ajax({
   //      type: "GET",
   //      url: "get_details?artist_id=" + artist_id,
   //      success: function(result){
   //          console.log("results\n" + result)
   //          display(result)

   //      },
   //      error: function(request, status, error){
   //          console.log("Error");
   //          console.log(request)
   //          console.log(status)
   //          console.log(error)
   //      }
   //  });
}


var get_input = function ()
{
    var song = $("#Song").val()
    var playlist = $("#Playlist").val()
    var song_id=parseInt(song)
    var playlist_id=parseInt(playlist)
    $("#Song").attr("placeholder", "song").val("")
    $("#Playlist").attr("placeholder", "playlist").val("")
    var data_entry = {
        "song_id": song_id,
        "playlist_id": playlist_id
    }
    add_input(data_entry)

}


$(document).ready(function(){
    //when the page loads, display all the names

    $("#Button").click(function(){
        console.log("TRIG")
        get_input()
    })

})
