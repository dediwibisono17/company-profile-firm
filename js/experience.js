// alert(1)
var baseURL = "company-profile-firm"
$.ajax({
    url: '/'+baseURL+'/js/experience.json',
    // url: 'js/experience.json',
    // url: 'js/experience.json',
    method: 'GET',
    success: (response => {
        // console.log(response); 
        // var data = (response[0].data);

        $(".click-flag").click(function () {
            var localS = (localStorage.getItem('lang'));
            var indonesia = localS == "id";
            var inggris = localS == "en";
            $(".wrap-3-col").html("")
            if (inggris) {
                var data = response[1].data;
                var a;
                // console.log(data);
                
                for (a = 0; a < data.length; a++) {
                    var name = data[a].name;
                    $(".wrap-3-col").append(`
                    <div class="cardc">
                        <h4>${name}</h4>
                    </div>
                `)
                }
            } else {
                var data = response[0].data;
                var a;
                // console.log(data);
                
                for (a = 0; a < data.length; a++) {
                    var name = data[a].name;
                    $(".wrap-3-col").append(`
                    <div class="cardc">
                        <h4>${name}</h4>
                    </div>
                `)
                }
            }

        })
        var a;
        // for (a=0; a<response.length; a++) {
        //     var name = response[a].name;
        //     $(".wrap-3-col").append(`
        //             <div class="cardc">
        //                 <h4>${name}</h4>
        //             </div>
        //         `)    
        // }
    })
})