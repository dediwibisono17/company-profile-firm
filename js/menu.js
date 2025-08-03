var baseURL = "company-profile-firm";

$.ajax({
    url: '/'+baseURL+'/js/menu.json',
    // url: "js/menu.json",
    method: 'GET',
    success: (response=>{
        console.log(response);
        // console.log(window.location.pathname);
        // var path = window.location.pathname;
        // var splitPath = path.slice(1,6);
        // console.log(splitPath);

        var menu = (response[1].data.menu);
        $(".menux").html("")
        $(".homey").html("")
        var a;
        // console.log(menu);
        for (a=0;a<menu.length;a++) {
            var h = "";
            var link = (menu[a].link);
            var name = menu[a].name;
            // console.log(link);
            var logo = `
            <li class="nav-item isdesktop">
                            <a href="/company-profile-firm">
                                <img class="logo" src="img/logo.png" alt="Forseti Law Office"
                                    title="Forseti Law Office">
                                <div class="namex" hidden>
                                    <div class="one">Forseti</div>
                                    <div class="two">Law Office</div>
                                </div>
                            </a>
                        </li>
            `
            $(".menux").append(`
                <li class="nav-item">
                    <a href="${link}" class="nav-link font-bold upper ">${name}</a>
                </li>
            `)

            // $(".menux").unshift(logo)
            
            
            
        }
        $(".homey").append(menu[0].name);
        
         $(".click-flag").click(function () {
                var localS = (localStorage.getItem('lang'));
                var indonesia = localS == "id";
                var inggris = localS == "en";
                                    $(".homey").html("")

                if (inggris) {
                    var menu = (response[1].data.menu);

                    $(".menux").html("")
                    var a;
                    // console.log(menu);
                    for (a=0;a<menu.length;a++) {
                        var h = "";
                        var link = (menu[a].link);
                        var name = menu[a].name;
                        // console.log(link);
                        
                        $(".menux").append(`
                                <li class="nav-item">
                                    <a href="${link}" class="nav-link font-bold upper">${name}</a>
                                </li>
                            `)
                      

                    
                   }
                    $(".homey").append(menu[0].name);


                } else {
                    var menu = (response[0].data.menu);
                    $(".menux").html("")

                    var a;
                    // console.log(menu);
                    for (a=0;a<menu.length;a++) {
                        var h = "";
                        var link = (menu[a].link);
                        var name = menu[a].name;
                        // console.log(link);
                        
                        $(".menux").append(`
                                <li class="nav-item">
                                    <a href="${link}" class="nav-link font-bold upper">${name}</a>
                                </li>
                            `)
                      

                    
                   }

                     $(".homey").append(menu[0].name);

                   
                }
                
            
        })
    })
})