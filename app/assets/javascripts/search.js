$(function(){

    function buildHTML(user){
        var html = `<div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">${user.name}</p>
                    <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</div>
                    </div>`
        return html;
    };

$('#user-search-field').keyup(function(){
    var input = $("#user-search-field").val();

    $.ajax({
        url: '/users',
        type: "GET",
        data: {searchWord: input},
        dataType: 'json',
    })

    .done(function(data){
        // var html = buildHTML(data)
            Array.from(data).forEach(function(idvdata){
            var html = buildHTML(idvdata)
            $('#chat-group-users').append(html);
            console.log(html)
            console.log(data)
          });
    })

    .fail(function(){
        alert('失敗');
    })
});

})