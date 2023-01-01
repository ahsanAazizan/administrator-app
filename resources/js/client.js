const port = 3000


$("#add-user").submit(function(e) {
    alert("Added a new user")
})

$("#edit-user").submit(function(e) {
    e.preventDefault()

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    console.log(data)
    var request = {
        "url" : `http://localhost:${port}/api/users/${data.id}`,
        "method" : "put",
        "data" : data
    }

    $.ajax(request)
    alert('User edited successfully')
})


if(window.location.pathname == "/"){
    $ondelete = $("table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:${port}/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Delete this record?")){
            $.ajax(request).done(function(response){
                alert("Deleted Successfully");
                location.reload();
            })
        }

    })
}
