var baseURL = "company-profile-firm"

$.ajax({
    url: '/'+baseURL+'/js/about.json',
    //url: "js/about.json',
    method: 'GET',
    success: (response=>{
        // console.log(response);
        $(".subtitle .dedix,.subtitlex,.about-para,.quotes").html("");
        setTimeout(() => {
            var localS = (localStorage.getItem('lang'));
            var indonesia = localS == "id";
            var inggris = localS == "en";
        
        },10)
           $(".about-para").html("")
                    $(".quotes").html("")
                    var data = (response[1].data);
                    var a;
                    for (a=0; a<data.length; a++) {
                        var desc =data[a].desc;
                        var quote = data[a].quote;
                        // console.log(desc);

                        var title = data[a].title;

                        $(".subtitle .dedix,.subtitlex").html(title);
                        $(".about-para").append(desc)
                        $(".quotes").append(quote)

                        
                    }
        $(".click-flag").click(function () {
                var localS = (localStorage.getItem('lang'));
                var indonesia = localS == "id";
                var inggris = localS == "en";

                if (inggris) {
                    $(".about-para").html("")
                    $(".quotes").html("")
                    var data = (response[1].data);
                    var a;
                    for (a=0; a<data.length; a++) {
                        var desc =data[a].desc;
                        var quote = data[a].quote;
                        // console.log(desc);

                        var title = data[a].title;

                        $(".subtitle .dedix,.subtitlex").html(title);
                        $(".about-para").append(desc)
                        $(".quotes").append(quote)

                        
                    }
                    
                } else {
                    $(".about-para").html("")
                    $(".quotes").html("")
                    // console.log(response[0].lang);
                     var data = (response[0].data);
                    var a;
                    for (a=0; a<data.length; a++) {
                        var desc =data[a].desc;
                        var quote = data[a].quote;
                        // console.log(desc);

                        var title = data[a].title;

                        $(".subtitle .dedix,.subtitlex").html(title);
                        $(".about-para").append(desc)
                        $(".quotes").append(quote)

                        
                    }
                    
                }

        })
        
    })
})