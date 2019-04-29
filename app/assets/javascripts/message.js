$(function(){
    function buildHTML(message){
        var imageUrlcode = message.image
        var imageAppier = (message.image == null)  ?  '' : '<img class="lower-message__image" src= '+ imageUrlcode +' >';
        var html = `<div class="chatspace-post">
                        <div class="chatspace-post__user">
                            ${message.name}
                        </div>
                        <div class = "chatspace-post__date">
                            ${message.created_at}
                        </div>
                        <div class = "chatspace-post__comment">
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
    }


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
            alert('メッセージが選択されてないですよ');
        })

        .always(() => {
            $(".form__submit").removeAttr("disabled");
        });
    })
})
