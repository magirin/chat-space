$('').on('keyup', function()
    var input = 
    $.ajax({
        url: '/users',
        type: "GET",
        data: {keyword: input},
        dataType: 'json',
        processData: false,
        contentType: false
    })

    .done(function(){

    })

    .fail(function(){
        alert('失敗');
    })
)
