$(function(){
    function buildHTML(message){
        var imageUrlcode = message.image
        var imageAppier = (message.image == null)  ?  '' : '<img class="lower-message__image" src= '+ imageUrlcode +' >';
        var html = `<div class="chatspace-post" data-message-id= ${message.id}>
                        <div class="chatspace-post__user">
                            ${message.name}
                        </div>
                        <div class = "chatspace-post__date">
                            ${message.created_at}
                        </div>
                        <div class = "chatspace-post__comment" >
                            ${message.content}
                        </div>
                        <div class = "lower-message__image">
                            ${imageAppier}
                        </div>
                    </div>`;
        return html;
    };

    function scrollBottom() {
        $('.chatspace').animate({scrollTop: $('.chatspace')[0].scrollHeight}, 'fast')
    };


    var reloadMessages = function() {
        if (window.location.href.match(/\/groups\/\d+\/messages/)) {
            var last_message_id = $(".chatspace-post:last").data("message-id");
            var $url = location.href.split("/");  
            var $group_id = $url[$url.length -2];  
            var autoLoad_url= "/groups/" + $group_id + "/api/messages";

            $.ajax({
            url: autoLoad_url,
            type: "GET",
            dataType: 'json',
            data: {id: last_message_id}
            })

            .done(function(data) {
                var insertHTML = '';
                data.forEach(function(message) {
                　　insertHTML = buildHTML(message);
                })
                $('.chatspace').append(insertHTML);
                scrollBottom()
            })

            .fail(function() {
                alert('自動更新が失敗しました')
            });
        };
    };

    $('#new_message').on('submit', function(e){
        e.preventDefault();
        var formData = new FormData(this);
        var url = $(this).attr('action');

        $.ajax({
            url: url,
            type: "POST",
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false
        })

        .done(function(data){
            var html = buildHTML(data);
            $('.chatspace').append(html);
            $('form').get(0).reset();
            scrollBottom();
        })

        .fail(function(){
            alert('メッセージが選択されていません');
        })

        .always(() => {
            $(".form__submit").removeAttr("disabled");
        });
    });
    setInterval(reloadMessages, 2000);
});
