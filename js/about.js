var baseURL = "company-profile-firm"

$.ajax({
    url: '/'+baseURL+'/js/profile.json',
    // url: 'js/about.json',
    method: 'GET',
    success: (response=>{
        // console.log(response);
        $(".subtitle span,.subtitlex,.about-content,.quotes").html("");
        $(".click-flag").click(function () {
                var localS = (localStorage.getItem('lang'));
                var indonesia = localS == "id";
                var inggris = localS == "en";

                if (inggris) {
                    $(".about-content").html("")
                    $(".quotes").html("")
                    var data = (response[1].data);
                    var a;
                    for (a=0; a<data.length; a++) {
                        var desc =data[a].desc;
                        var quote = data[a].quote;
                        // console.log(desc);

                        var title = data[a].title;

                        $(".subtitle span,.subtitlex").html(title);
                        $(".about-content").append(desc)
                        $(".quotes").append(quote)

                        
                    }
                    
                } else {
                    $(".about-content").html("")
                    $(".quotes").html("")
                    // console.log(response[0].lang);
                     var data = (response[0].data);
                    var a;
                    for (a=0; a<data.length; a++) {
                        var desc =data[a].desc;
                        var quote = data[a].quote;
                        // console.log(desc);

                        var title = data[a].title;

                        $(".subtitle,.subtitlex").html(title);
                        $(".about-content").append(desc)
                        $(".quotes").append(quote)

                        
                    }
                    
                }

        })
        
    })
})