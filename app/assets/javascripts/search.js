$(function(){

    function addUser(user){
        var html = `<div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">${user.name}</p>
                    <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</div>
                    </div>`
        return html;
    };

    function deleteUser(name, id){
        var html = `<div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">${name}</p>
                    <div class="user-search-delete chat-group-user__btn chat-group-user__btn--delete" data-user-id=${id} data-user-name=${name}>削除</div>
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
                Array.from(data).forEach(function(idvdata){
                var html = addUser(idvdata)
                $('#user_search_result').append(html);
            });
        })

        .fail(function(){
            alert('失敗');
        })
    });

    $(function(){
        $(document).on("click", ".user-search-add", function(){
            var name = $(this).attr("data-user-name");
            var id = $(this).attr("data-user-id");
            var html = deleteUser(name, id)
            $(this).parent().remove();
            $('#chat-group-users').append(html);
        });
        $(document).on("click", '.user-search-delete', function() {
            $(this).parent().remove();
          });
    })

    $(function(){
        $('chat-group-form__action-btn').on('submit', function(){
            var user_id= $('data-user-id')

        })
    })
})