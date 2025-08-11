var baseURL = "company-profile-firm";

$.ajax({
    url: '/'+baseURL+'/js/menu.json',
    //url: "js/menu.json",
    method: 'GET',
    beforeSend: function(){
            $("#loading").show();
            // $('.thumbs').hide();
        },
        complete: function(){
            $("#loading").hide();
            // $('.thumbs').show();
        },
    success: (response => {
        // //console.log(response);
        // //console.log(window.location.pathname);
        // var path = window.location.pathname;
        // var splitPath = path.slice(1,6);
        // //console.log(splitPath);



        setTimeout(() => {
            var localS = (localStorage.getItem('lang'));
            var indonesia = localS == "id";
            var inggris = localS == "en";
            $(".menux").html("")
            $(".homey").html("")

            if (inggris) {
                //console.log("inggris", inggris);
                var menu = (response[1].data.menu);
                $(".menux").html("");

                var footer = response[1].data.footer.kontak.whatsapp;
                var x;
                //console.log(footer);
                $(".whatsappx").html("")
                $(".footer-whatsapp").html("")
                //whatsapp header
                for (x = 0; x < footer.length; x++) {
                    var no = footer[x].no;
                    var text = footer[x].text;
                    // //console.log('cekwa',cekwa);
                    var z;

                    $(".whatsappx").append(`
                        <li>
                            <a
                                href="${text}&phone=${no}">
                                <i class="fab fa-whatsapp"></i>
                                <small>Admin ${x + 1}</small>
                            </a>
                        </li>
                      
                      
                        
                        `)

                        $(".footer-whatsapp").append(`
                            <a href="${text}&phone=${no}">${no}</a>
                        `)


                }

                var a;
                // //console.log(menu);
                //menu
                for (a = 0; a < menu.length; a++) {
                    var h = "";
                    var link = (menu[a].link);
                    var name = menu[a].name;

                    // //console.log(link);

                    $(".menux").append(`
                                <li class="nav-item">
                                    <a href="${link}" class="nav-link font-bold upper">${name}</a>
                                </li>
                            `)



                }

                //footer
                $(".alamatx").html("");
                $(".kontakx").html("");
                $(".lokasikamix").html("")

                $(".alamatx").append(response[1].data.footer.name1)
                $(".kontakx").append(response[1].data.footer.name2)
                $(".lokasikamix").append(response[1].data.footer.name3)





                $(".homey").append(menu[0].name);

            }
            else if (indonesia) {
                // //console.log("indonesia", indonesia);
                var menu = (response[0].data.menu);
                $(".menux").html("");

                var footer = response[0].data.footer.kontak.whatsapp;
                var x;
                // //console.log(footer);
                $(".whatsappx").html("")
                $(".footer-whatsapp").html("")
                //whatsapp header
                for (x = 0; x < footer.length; x++) {
                    var no = footer[x].no;
                    var text = footer[x].text;
                    // //console.log('cekwa',cekwa);
                    var z;

                    $(".whatsappx").append(`
                        <li>
                            <a
                                href="${text}&phone=${no}">
                                <i class="fab fa-whatsapp"></i>
                                <small>Admin ${x + 1}</small>
                            </a>
                        </li>
                      
                      
                        
                        `)

                        $(".footer-whatsapp").append(`
                            <a href="${text}&phone=${no}">${no}</a>
                        `)


                }

                var a;
                // //console.log(menu);
                for (a = 0; a < menu.length; a++) {
                    var h = "";
                    var link = (menu[a].link);
                    var name = menu[a].name;
                    // //console.log(link);

                    $(".menux").append(`
                                <li class="nav-item">
                                    <a href="${link}" class="nav-link font-bold upper">${name}</a>
                                </li>
                            `)



                }

                $(".alamatx").html("");
                $(".kontakx").html("");
                $(".lokasikamix").html("")

                $(".alamatx").append(response[0].data.footer.name1)
                $(".kontakx").append(response[0].data.footer.name2)
                $(".lokasikamix").append(response[0].data.footer.name3)

                $(".homey").append(menu[0].name);
            } else {
                var menu = (response[1].data.menu);

                var footer = response[1].data.footer.kontak.whatsapp;
                var x;
                //console.log(footer);
               $(".whatsappx").html("")
                $(".footer-whatsapp").html("")
                //whatsapp header
                for (x = 0; x < footer.length; x++) {
                    var no = footer[x].no;
                    var text = footer[x].text;
                    // //console.log('cekwa',cekwa);
                    var z;

                    $(".whatsappx").append(`
                        <li>
                            <a
                                href="${text}&phone=${no}">
                                <i class="fab fa-whatsapp"></i>
                                <small>Admin ${x + 1}</small>
                            </a>
                        </li>
                      
                      
                        
                        `)

                        $(".footer-whatsapp").append(`
                            <a href="${text}&phone=${no}">${no}</a>
                        `)


                }

                var a;
                // //console.log(menu);
                for (a = 0; a < menu.length; a++) {
                    var h = "";
                    var link = (menu[a].link);
                    var name = menu[a].name;
                    //console.log(link);
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

                $(".alamatx").html("");
                $(".kontakx").html("");
                $(".lokasikamix").html("")

                $(".alamatx").append(response[1].data.footer.name1)
                $(".kontakx").append(response[1].data.footer.name2)
                $(".lokasikamix").append(response[1].data.footer.name3)
                $(".homey").append(menu[1].name);
            }

        }, 10)





        $(".click-flag").click(function () {
            var localS = (localStorage.getItem('lang'));
            var indonesia = localS == "id";
            var inggris = localS == "en";
            $(".homey").html("")

            if (inggris) {
                var footer = response[1].data.footer;
                var x;
                for (x = 0; x < footer.length; x++) {
                    var cekwa = footer[x].whatsapp;
                    //console.log('cekwa', cekwa);

                }

                var menu = (response[1].data.menu);
                var footer = response[1].data.footer.kontak.whatsapp;
                var x;
                //console.log(footer);
                $(".whatsappx").html("")
                $(".footer-whatsapp").html("")
                //whatsapp header
                for (x = 0; x < footer.length; x++) {
                    var no = footer[x].no;
                    var text = footer[x].text;
                    // //console.log('cekwa',cekwa);
                    var z;

                    $(".whatsappx").append(`
                        <li>
                            <a
                                href="${text}&phone=${no}">
                                <i class="fab fa-whatsapp"></i>
                                <small>Admin ${x + 1}</small>
                            </a>
                        </li>
                      
                      
                        
                        `)

                        $(".footer-whatsapp").append(`
                            <a href="${text}&phone=${no}">${no}</a>
                        `)


                }

                $(".menux").html("")
                var a;
                // //console.log(menu);
                for (a = 0; a < menu.length; a++) {
                    var h = "";
                    var link = (menu[a].link);
                    var name = menu[a].name;
                    // //console.log(link);

                    $(".menux").append(`
                                <li class="nav-item">
                                    <a href="${link}" class="nav-link font-bold upper">${name}</a>
                                </li>
                            `)



                }

                $(".alamatx").html("");
                $(".kontakx").html("");
                $(".lokasikamix").html("")

                $(".alamatx").append(response[1].data.footer.name1)
                $(".kontakx").append(response[1].data.footer.name2)
                $(".lokasikamix").append(response[1].data.footer.name3)
                $(".homey").append(menu[0].name);


            } else {
                var menu = (response[0].data.menu);
                $(".menux").html("")
                var footer = response[0].data.footer.kontak.whatsapp;
                var x;
                //console.log(footer);
                 $(".whatsappx").html("")
                $(".footer-whatsapp").html("")
                //whatsapp header
                for (x = 0; x < footer.length; x++) {
                    var no = footer[x].no;
                    var text = footer[x].text;
                    // //console.log('cekwa',cekwa);
                    var z;

                    $(".whatsappx").append(`
                        <li>
                            <a
                                href="${text}&phone=${no}">
                                <i class="fab fa-whatsapp"></i>
                                <small>Admin ${x + 1}</small>
                            </a>
                        </li>
                      
                      
                        
                        `)

                        $(".footer-whatsapp").append(`
                            <a href="${text}&phone=${no}">${no}</a>
                        `)


                }

                var a;
                // //console.log(menu);
                for (a = 0; a < menu.length; a++) {
                    var h = "";
                    var link = (menu[a].link);
                    var name = menu[a].name;
                    // //console.log(link);

                    $(".menux").append(`
                                <li class="nav-item">
                                    <a href="${link}" class="nav-link font-bold upper">${name}</a>
                                </li>
                            `)



                }

                $(".alamatx").html("");
                $(".kontakx").html("");
                $(".lokasikamix").html("")

                $(".alamatx").append(response[0].data.footer.name1)
                $(".kontakx").append(response[0].data.footer.name2)
                $(".lokasikamix").append(response[0].data.footer.name3)

                $(".homey").append(menu[0].name);


            }


        })
    })
})