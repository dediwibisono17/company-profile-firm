// alert(1)
var baseURL = "company-profile-firm"
$.ajax({
    url: '/'+baseURL+'/js/why.json',
    // url: 'js/why.json',
    method: 'GET',
    success: (response => {
        // console.log(response[0].usp); 
        var a;
        for (a=0; a<response.length; a++) {
            var paragraph = response[a].desc;

            // var h = ""
            // prestasi.map((a, i) => { h += `<li><p>${a}</p></li>` });
            // var name = response[a].name;
            // console.log(prestasi);
            
            $(".whyus .paragraph").append(paragraph);
            
            var prestasi = response[a].usp;
            var x;
           // console.log(prestasi);
            
            for(x=0; x<prestasi.length; x++) {
                var icon = prestasi[x].icon;
                                var title = prestasi[x].title;
                                                var desc = prestasi[x].desc;
                //console.log(icon);

                
                $(".usp .container").append(`
                        <div class="rectanglex">
                            <div class="d-block">
                                <div class="rectanglex__icon">
                                    ${icon}
                                </div>
                                <div class="rectanglex__right">
                                    <h3>${title}</h3>
                                    <p>
                                      ${desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    `)
            }
        }
    })
})