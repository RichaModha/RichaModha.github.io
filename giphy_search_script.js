$(document).ready(function()
{
    $('#search_gif_button').click(function()
    {
        var api_key='vJbiERZmS3Fj7suP6NLxYAeL15wNWIDo';
        var limit=9;
        var search_text=$('#search_gif_text').val().toLowerCase();
        var api='https://api.giphy.com/v1/gifs/search?offset=0&rating=g&lang=en&limit='+limit+'&api_key='+api_key+'&q='+search_text;

        $.get(
                api,
                function(data) 
                {
                    var x=0;
                    for(x=0;x<limit;x++)
                    {
                        var gif_url=data.data[x].images.downsized.url;
                        var title=data.data[x].title;

                        $('.container').append(
                            '<div class="col-md-4"><div class="card"><div class="card-header"><h3 class="card-title"><i class="fas fa-text-width"></i>A Paragraph'+title+'</h3></div><div class="card-body"><img id="gif_'+x+1+'" src="'+gif_url+'"></div><div class="card-footer"><span class="star no" id="1";>&starf;</span><span class="star no" id="2">&starf;</span><span class="star no" id="3">&starf;</span><span class="star no" id="4">&starf;</span><span class="star no" id="5";>&starf;</span></div></div></div>'
                         );
                    }
                    
                    /*$.each(data, function(key, value) 
                    {
                        alert(key);
                        if(key=="data")
                        {
                            $.each(key, function(index, gifs)
                            {
                                $.each(gifs, function(key_1, details)
                                {
                                    if(key_1=="images")
                                    {
                                        $.each(key_1, function(key_2, description)
                                        {
                                            if(key_2=="downsized")
                                            {
                                                alert(key_2.url);
                                            }
                                        });
                                    }
                                });
                            });
                        }
                    });*/
                }
            );
    })

    $('.star').on('mouseenter',function ()
    {
        var hover_id=$(this).attr('id');

        $(".card-footer").children('.star').each(function()
        {
           if($(this).attr("id")<=hover_id)
                $(this).css("color","yellow"); 
        });
    });
    
    $('.star').on('mouseleave',function ()
    {
        $('.yes').css("color","green");
        $('.no').css("color","black");
    });

    $('.star').on('click',function ()
    {
        var click_id=$(this).attr('id');

        $(".card-footer").children('.star').each(function()
        {
           if($(this).attr("id")<=click_id)
           {
                $(this).removeClass("no");
                $(this).addClass("yes");
           }

           else
           {
                $(this).removeClass("yes");
                $(this).addClass("no");
           }
        });
    });
});