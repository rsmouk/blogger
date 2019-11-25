
var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
var xx3 = dt.getSeconds();


$(function() {
    $.ajax({

        url: 'https://www.blogger.com/feeds/4400834619198895498/posts/default/-/مسجات نكت?start-index='+xx3+'&max-results=1&alt=json-in-script',
        type: 'get',
        dataType: 'jsonp',
        success: function(data) {
            var link, title, skeleton = '',
                contentx = data.feed.entry;

            if (contentx !== undefined) {
                for (var i = 0; i < contentx.length; i++) {
                    title = contentx[i].title.$t;
var xx = contentx[i].content.$t;

                    for (var j = 0; j < contentx[i].link.length; j++) {
                        if (contentx[i].link[j].rel == "alternate") {
                            link = contentx[i].link[j].href;
                            break;
                        }
                    }
                 
                }


  


                $('#nokta').html(xx);
            } else {
                $('#result').html('<span>No result!</span>');
            }
        },
        error: function() {
            $('#result').html('<strong>Error loading feed!</strong>');
        }
    });
});
