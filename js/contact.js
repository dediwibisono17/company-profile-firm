var baseURL = "company-profile-firm"

$.ajax({
    url: '/'+baseURL+'/js/contact.json',
    //url: "js/contact.json',
    method: 'GET',
    success: (response => {


        setTimeout(() => {
            var localS = (localStorage.getItem('lang'));
            var indonesia = localS == "id";
            var inggris = localS == "en";

            if (inggris) {
                 $(".row .loopingx .email, .row .loopingx .address,.subtitle,.subtitlex").html("");

        var data = (response[1].data);
        var a;
        // console.log(data);

        for (a = 0; a < data.length; a++) {
            var email = data[a].email;
            var address = data[a].address;
            var title = data[a].title;
            $(".subtitle, .subtitlex").html(title)
            $(".loopingx .email").html(`
                            <a href="${email}">${email}</a>
                            `)

            $(".loopingx .address").html(address)


        }
            } else if (indonesia) {
                 $(".row .loopingx .email, .row .loopingx .address,.subtitle,.subtitlex").html("");

        var data = (response[0].data);
        var a;
        // console.log(data);

        for (a = 0; a < data.length; a++) {
            var email = data[a].email;
            var address = data[a].address;
            var title = data[a].title;
            $(".subtitle, .subtitlex").html(title)
            $(".loopingx .email").html(`
                            <a href="${email}">${email}</a>
                            `)

            $(".loopingx .address").html(address)


        }
            } else {
                 $(".row .loopingx .email, .row .loopingx .address,.subtitle,.subtitlex").html("");

        var data = (response[1].data);
        var a;
        // console.log(data);

        for (a = 0; a < data.length; a++) {
            var email = data[a].email;
            var address = data[a].address;
            var title = data[a].title;
            $(".subtitle, .subtitlex").html(title)
            $(".loopingx .email").html(`
                            <a href="${email}">${email}</a>
                            `)

            $(".loopingx .address").html(address)


        }
            }
        
        },10)
    

        $(".click-flag").click(function () {
            var localS = (localStorage.getItem('lang'));
            var indonesia = localS == "id";
            var inggris = localS == "en";

            if (inggris) {
                var data = (response[1].data);
                var a;
                // console.log(data);

                for (a = 0; a < data.length; a++) {
                    var email = data[a].email;
                    var address = data[a].address;
                    var title = data[a].title;
                    $(".subtitle, .subtitlex").html(title)
                    $(".loopingx .email").html(`
                            <a href="${email}">${email}</a>
                            `)

                    $(".loopingx .address").html(address)


                }


            } else {
                var data = (response[0].data);
                var a;
                // console.log(data);

                for (a = 0; a < data.length; a++) {
                    var email = data[a].email;
                    var address = data[a].address;
                    var title = data[a].title;
                    $(".subtitle, .subtitlex").html(title)
                    $(".loopingx .email").html(`
                            <a href="${email}">${email}</a>
                            `)

                    $(".loopingx .address").html(address)


                }
            }

        })
    })
})