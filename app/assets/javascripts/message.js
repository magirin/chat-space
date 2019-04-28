$(function(){
    function buildHTML(message){
        var imageurl = '';
        if (message.image) {
          imageurl = `<img class="lower-message__image" src="#{message.image}"></img>`;
        }

        

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
                            ${message.image}
                        </div>
                    </div>`;
        return html;
    };

    function scrollBottom(){
        var target = $('.chatspace-post__comment').last();
        console.log(target)
        var position = target.offset().top + $('.chatspace-post__comment').scrollTop();
        $('.chatspace-post__comment').animate({
          scrollTop: position
        }, 300, 'swing');
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
            $('#message_content').val('');
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