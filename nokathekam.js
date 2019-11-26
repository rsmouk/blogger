$(function() {
    $.ajax({

        url: 'https://www.blogger.com/feeds/4400834619198895498/posts/default/-/'+cat+'?start-index='+xx3+'&max-results=1&alt=json-in-script',
        type: 'get',
        dataType: 'jsonp',
        success: function(data) {
            var link, title, skeleton = '',
                contentx = data.feed.entry;

            if (contentx !== undefined) {
                for (var i = 0; i < contentx.length; i++) {
var xx = contentx[i].content.$t;

                   
                }


  


                $('#nokta').html(xx);
            } 
        },
       
    });
});
