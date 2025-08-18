var baseURL = "company-profile-firm"

$.ajax({
    url: '/'+baseURL+'/js/homepage.json',
    // url: "js/homepage.json",
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
        // console.log(response);
        var localS = (localStorage.getItem('lang'));
        var indonesia = localS == "id";
        var inggris = localS == "en";
       

        if (inggris) {
            var data = response[1].banner;
            var a;
            $(".sliderx").html("");
            $(".all-data").html("")

            for (a = 0; a < data.length; a++) {
                var title = (data[a].title);
                var bumper = data[a].image;
                var subtitle = data[a].subtitle
                // console.log("slider", title);

                $(".sliderx").append(`
                    <div class="datax">
                     <div class="datax__image">
                         <img src="${bumper}" alt="${title}" title="${title}">
                     </div>
                     <div class="datax__desc">
                     
                         <h2 class="datax__title">
                             ${title}
                         </h2>
                         <p>${subtitle}</p>
                     </div>
                     </div>
                    `)

            }
            $('.sliderx').slick({
                autoplay: true,
                autoplaySpeed: 4000,
                arrows: false,
                fade: true
            });

            // console.log(kasus);
            $(".beberapa-kasus").html("")
            $(".pengalaman-kami").html("")
            var juduls = response[1].beberapa
            var ttg = response[1].pengalaman
            // console.log(juduls);

            $(".beberapa-kasus").append(juduls)
            $(".pengalaman-kami").append(ttg)

            // kasus
            var kasus = response[1].kasus;
            var x;
            for (x = 0; x < kasus.length; x++) {
                // console.log(kasus[x]);
                var title = kasus[x].parent;
                var desc = kasus[x].name;
                $(".all-data").append(`
              <div class="data">
                    <h3>${title}</h3>
                    <p>${desc}</p>
                </div>  
                `)

            }

        }
        else if (indonesia) {
            var data = response[0].banner;
            var a;
            $(".sliderx").html("");
            $(".all-data").html("")

            for (a = 0; a < data.length; a++) {
                var title = (data[a].title);
                var bumper = data[a].image;
                var subtitle = data[a].subtitle
                // console.log("slider", title);

                $(".sliderx").append(`
                    <div class="datax">
                     <div class="datax__image">
                         <img src="${bumper}" alt="${title}" title="${title}">
                     </div>
                     <div class="datax__desc">
                     
                         <h2 class="datax__title">
                             ${title}
                         </h2>
                         <p>${subtitle}</p>
                     </div>
                     </div>
                    `)

            }
            $('.sliderx').slick({
                autoplay: true,
                autoplaySpeed: 4000,
                arrows: false,
                fade: true
            });

            // console.log(kasus);
            $(".beberapa-kasus").html("")
            $(".pengalaman-kami").html("")
            var juduls = response[0].beberapa
            var ttg = response[0].pengalaman
            // console.log(juduls);

            $(".beberapa-kasus").append(juduls)
            $(".pengalaman-kami").append(ttg)

            // kasus
            var kasus = response[0].kasus;
            var x;
            for (x = 0; x < kasus.length; x++) {
                // console.log(kasus[x]);
                var title = kasus[x].parent;
                var desc = kasus[x].name;
                $(".all-data").append(`
              <div class="data">
                    <h3>${title}</h3>
                    <p>${desc}</p>
                </div>  
                `)

            }

        }
        else {
            var data = response[1].banner;
            var a;
            $(".sliderx").html("");
            $(".all-data").html("")

            for (a = 0; a < data.length; a++) {
                var title = (data[a].title);
                var bumper = data[a].image;
                var subtitle = data[a].subtitle
                // console.log("slider", title);

                $(".sliderx").append(`
                    <div class="datax">
                     <div class="datax__image">
                         <img src="${bumper}" alt="${title}" title="${title}">
                     </div>
                     <div class="datax__desc">
                     
                         <h2 class="datax__title">
                             ${title}
                         </h2>
                         <p>${subtitle}</p>
                     </div>
                     </div>
                    `)

            }
            $('.sliderx').slick({
                autoplay: true,
                autoplaySpeed: 4000,
                arrows: false,
                fade: true
            });

            // console.log(kasus);
            $(".beberapa-kasus").html("")
            $(".pengalaman-kami").html("")
            var juduls = response[1].beberapa
            var ttg = response[1].pengalaman
            // console.log(juduls);

            $(".beberapa-kasus").append(juduls)
            $(".pengalaman-kami").append(ttg)

            // kasus
            var kasus = response[1].kasus;
            var x;
            for (x = 0; x < kasus.length; x++) {
                // console.log(kasus[x]);
                var title = kasus[x].parent;
                var desc = kasus[x].name;
                $(".all-data").append(`
              <div class="data">
                    <h3>${title}</h3>
                    <p>${desc}</p>
                </div>  
                `)

            }

        }





        $(".click-flag").click(function () {
            var localS = (localStorage.getItem('lang'));
            var indonesia = localS == "id";
            var inggris = localS == "en";
            $(".homey").html("")

            $(".all-data").html("")


            if (inggris) {
                var data = response[1].banner;
                var a;
                $('.sliderx').html("")
                $('.sliderx').slick('unslick');

                for (a = 0; a < data.length; a++) {
                    var title = (data[a].title);
                    var bumper = data[a].image;
                    var subtitle = data[a].subtitle

                    // console.log("slider", title);
                    $(".sliderx").append(`
                    <div class="datax">
                     <div class="datax__image">
                         <img src="${bumper}" alt="${title}" title="${title}">
                     </div>
                     <div class="datax__desc">
                     
                         <h2 class="datax__title">
                             ${title}
                         </h2>
                         <p>${subtitle}</p>
                     </div>
                     </div>
                    `)

                }
                //   $('.slider').slick('slickAdd', $html);
                $('.sliderx').slick({
                    autoplay: true,
                    autoplaySpeed: 4000,
                    arrows: false,
                    fade: true
                });


                var kasus = response[1].kasus;
                var x;

                // console.log(kasus);
                $(".beberapa-kasus").html("")
                $(".pengalaman-kami").html("")
                var juduls = response[1].beberapa
                var ttg = response[1].pengalaman
                // console.log(juduls);

                $(".beberapa-kasus").append(juduls)
                $(".pengalaman-kami").append(ttg)

                for (x = 0; x < kasus.length; x++) {
                    // console.log(kasus[x]);
                    var title = kasus[x].parent;
                    var desc = kasus[x].name;

                    $(".all-data").append(`
                    <div class="data">
                            <h3>${title}</h3>
                            <p>${desc}</p>
                        </div>  
                        `)

                }
            } 
            if(indonesia) {

                var data = response[0].banner;
                var a;
                $('.sliderx').html("")
                $('.sliderx').slick('unslick');


                for (a = 0; a < data.length; a++) {
                    var title = (data[a].title);
                    var bumper = data[a].image;
                    var subtitle = data[a].subtitle;

                    // console.log("slider", title);

                    $(".sliderx").append(`
                    <div class="datax">
                     <div class="datax__image">
                         <img src="${bumper}" alt="${title}" title="${title}">
                     </div>
                     <div class="datax__desc">
                     
                         <h2 class="datax__title">
                             ${title}
                         </h2>
                         <p>${subtitle}</p>
                     </div>
                     </div>
                    `)

                }

               

                $('.sliderx').slick({
                    autoplay: true,
                    autoplaySpeed: 4000,
                    arrows: false,
                    fade: true
                });
                $(".beberapa-kasus").html("")
                $(".pengalaman-kami").html("")
                var juduls = response[0].beberapa
                var ttg = response[0].pengalaman
                // console.log(juduls);

                $(".beberapa-kasus").append(juduls)
                $(".pengalaman-kami").append(ttg)
                var kasus = response[0].kasus;
                var x;
                for (x = 0; x < kasus.length; x++) {
                    // console.log(kasus[x]);
                    var title = kasus[x].parent;
                    var desc = kasus[x].name;
                    $(".all-data").append(`
                    <div class="data">
                            <h3>${title}</h3>
                            <p>${desc}</p>
                        </div>  
                        `)

                }

            }

        })

    })
})


//usp
$.ajax({
    url: '/'+baseURL+'/js/why.json',
    // url: "js/why.json",
    method: "GET",
    beforeSend: function(){
            $("#loading").show();
            // $('.thumbs').hide();
        },
        complete: function(){
            $("#loading").hide();
            // $('.thumbs').show();
        },
    success: (response => {
        // console.log(response);
         var localS = (localStorage.getItem('lang'));
            var indonesia = localS == "id";
            var inggris = localS == "en";
            $(".usp .container").html("");

            if (inggris) {
                var prestasix = response[1].usp;
        for (q = 0; q < prestasix.length; q++) {
            // console.log(prestasix[q]);
            var icon = prestasix[q].icon;
            var title = prestasix[q].title;
            var desc = prestasix[q].desc;

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
            else if (indonesia) {
                var prestasix = response[0].usp;
        for (q = 0; q < prestasix.length; q++) {
            // console.log(prestasix[q]);
            var icon = prestasix[q].icon;
            var title = prestasix[q].title;
            var desc = prestasix[q].desc;

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

            } else {
var prestasix = response[1].usp;
        for (q = 0; q < prestasix.length; q++) {
            // console.log(prestasix[q]);
            var icon = prestasix[q].icon;
            var title = prestasix[q].title;
            var desc = prestasix[q].desc;

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
        

        $(".click-flag").click(function () {
            var localS = (localStorage.getItem('lang'));
            var indonesia = localS == "id";
            var inggris = localS == "en";
            $(".usp .container").html("");

            if (inggris) {
                var prestasix = response[1].usp;
                for (q = 0; q < prestasix.length; q++) {
                    // console.log(prestasix[q]);
                    var icon = prestasix[q].icon;
                    var title = prestasix[q].title;
                    var desc = prestasix[q].desc;

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
            } else {
                var prestasix = response[0].usp;
                for (q = 0; q < prestasix.length; q++) {
                    // console.log(prestasix[q]);
                    var icon = prestasix[q].icon;
                    var title = prestasix[q].title;
                    var desc = prestasix[q].desc;

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
})

//about 
$.ajax({
    url: '/'+baseURL+'/js/about.json',
    // url: "js/about.json",
    method: "GET",
    beforeSend: function(){
            $("#loading").show();
            // $('.thumbs').hide();
        },
        complete: function(){
            $("#loading").hide();
            // $('.thumbs').show();
        },
    success: (response => {
        var localS = (localStorage.getItem('lang'));
        var indonesia = localS == "id";
        var inggris = localS == "en";
        $(".about-para,.green2").html("")
        $("span.aboutus").html("")

        if (inggris) {
            $(".about-para,.green2").html("")
            $("span.aboutus").html("")
            var data = (response[1].data);
            // var beberapakasus = response[1].judul;
            // console.log(aboutus);

            var a;
            for (a = 0; a < data.length; a++) {
                var aboutus = data[a].subtitle;
                var desc = data[a].desc;
                var visi = data[a].visi;
                var misi = data[a].misi;
                var visi_title = data[a].visi_title;
                var misi_title = data[a].misi_title;
                console.log(aboutus);


                $(".aboutus").html(aboutus)
                $(".about-para").append(desc)
                $(".green2").append(`
                <li>
                    <div class="abcontent">
                        <div class="text">
                            <h3>${visi_title}</h3>
                            <p>
                               ${visi}
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="abcontent">
                        <div class="text">
                            <h3>${misi_title}</h3>
                            <ul>
                                ${misi}
                            </ul>

                        </div>
                    </div>
                </li>
                `)

            }
        } else if (indonesia) {
            $(".about-para,.green2").html("")
            $("span.aboutus").html("")
            var data = (response[0].data);
            // var beberapakasus = response[1].judul;
            // console.log(aboutus);

            var a;
            for (a = 0; a < data.length; a++) {
                var aboutus = data[a].subtitle;
                var desc = data[a].desc;
                var visi = data[a].visi;
                var misi = data[a].misi;
                // console.log(aboutus);


                $(".aboutus").html(aboutus)
                $(".about-para").append(desc)
                $(".green2").append(`
                <li>
                    <div class="abcontent">
                        <div class="text">
                            <h3>Visi</h3>
                            <p>
                               ${visi}
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="abcontent">
                        <div class="text">
                            <h3>Misi</h3>
                            <ul>
                                ${misi}
                            </ul>

                        </div>
                    </div>
                </li>
                `)

            }

        } else {
            $(".about-para,.green2").html("")
            $("span.aboutus").html("")
            var data = (response[1].data);


            var a;
            for (a = 0; a < data.length; a++) {
                var aboutus = data[a].subtitle;
                var desc = data[a].desc;
                var visi = data[a].visi;
                var misi = data[a].misi;
                // console.log(aboutus);


                $(".aboutus").html(aboutus)
                $(".about-para").append(desc)
                $(".green2").append(`
                <li>
                    <div class="abcontent">
                        <div class="text">
                            <h3>Visi</h3>
                            <p>
                               ${visi}
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="abcontent">
                        <div class="text">
                            <h3>Misi</h3>
                            <ul>
                                ${misi}
                            </ul>

                        </div>
                    </div>
                </li>
                `)

            }
        }








        $(".click-flag").click(function () {
            var localS = (localStorage.getItem('lang'));
            var indonesia = localS == "id";
            var inggris = localS == "en";


            if (inggris) {
                $(".about-para,.green2").html("")
                $("span.aboutus").html("")
                var data = (response[1].data);
                var a;
                for (a = 0; a < data.length; a++) {
                    var aboutus = data[a].subtitle;
                    var desc = data[a].desc;
                    var visi = data[a].visi;
                    var misi = data[a].misi;

                    // console.log(aboutus, 'ing');

                    // console.log(aboutus);


                    $(".aboutus").html(aboutus)
                    $(".about-para").append(desc)
                    $(".green2").append(`
                <li>
                    <div class="abcontent">
                        <div class="text">
                            <h3>Visi</h3>
                            <p>
                               ${visi}
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="abcontent">
                        <div class="text">
                            <h3>Misi</h3>
                            <ul>
                                ${misi}
                            </ul>

                        </div>
                    </div>
                </li>
                `)

                }
            } else {


                $(".about-para,.green2").html("")
                $("span.aboutus").html("")
                var data = (response[0].data);


                var a;
                for (a = 0; a < data.length; a++) {
                    var aboutus = data[a].subtitle;
                    var desc = data[a].desc;
                    var visi = data[a].visi;
                    var misi = data[a].misi;
                    // console.log(aboutus, 'id');



                    $(".aboutus").html(aboutus)
                    $(".about-para").append(desc)
                    $(".green2").append(`
                <li>
                    <div class="abcontent">
                        <div class="text">
                            <h3>Visi</h3>
                            <p>
                               ${visi}
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="abcontent">
                        <div class="text">
                            <h3>Misi</h3>
                            <ul>
                                ${misi}
                            </ul>

                        </div>
                    </div>
                </li>
                `)

                }
            }
        })
    })
})


//profile
$.ajax({
    url: '/'+baseURL+'/js/profile.json',
    // url: "js/profile.json",
    method: "GET",
    beforeSend: function(){
            $("#loading").show();
            // $('.thumbs').hide();
        },
        complete: function(){
            $("#loading").hide();
            // $('.thumbs').show();
        },
    success: (response => {

        var localS = (localStorage.getItem('lang'));
        var indonesia = localS == "id";
        var inggris = localS == "en";
        // $(".about-para").html("")

        if (inggris) {

            $(".left-side,.right-side").html("");
            var judul = response[1].title;
            var profiles = (response[1].data[0]);
            // console.log(profiles);
            var nama = profiles.name;
            var title = profiles.title;
            var image = profiles.image;
            var exp = profiles.exp;
            $(".left-side").append(`
            <h4 class="color-primary">
                <i class="fas fa-user"></i>
                <span>${judul}</span>
            </h4>
            <div class="profile__image">
                <img src="${image}" alt="${nama}" title="${nama}">
            </div>
            <div class="text-center">
                <div class="name">
                    ${nama}
                </div>
                <div class="jobs">
                    ${title}
                </div>
            </div>
            `);

            $('.right-side').append(`
            <h3>${judul}</h3>
                            <p>${exp}</p>
                            <a href="profile.html" class="color-primary">
                                <b>${response[1].selengkap}</b>
                                <i class="fas fa-chevron-right"></i>
                            </a>
            `)

        } else if (indonesia) {
            $(".left-side,.right-side").html("");
            var judul = response[0].title;
            var profiles = (response[0].data[0]);
            // console.log(profiles);
            var nama = profiles.name;
            var title = profiles.title;
            var image = profiles.image;
            var exp = profiles.exp;
            $(".left-side").append(`
            <h4 class="color-primary">
                <i class="fas fa-user"></i>
                <span>${judul}</span>
            </h4>
            <div class="profile__image">
                <img src="${image}" alt="${nama}" title="${nama}">
            </div>
            <div class="text-center">
                <div class="name">
                    ${nama}
                </div>
                <div class="jobs">
                    ${title}
                </div>
            </div>
            `);

            $('.right-side').append(`
            <h3>${judul}</h3>
                            <p>${exp}</p>
                            <a href="profile.html" class="color-primary">
                                <b>${response[0].selengkap}</b>
                                <i class="fas fa-chevron-right"></i>
                            </a>
            `)


        } else {
            $(".left-side,.right-side").html("");
            var judul = response[1].title;
            var profiles = (response[1].data[0]);
            // console.log(profiles);
            var nama = profiles.name;
            var title = profiles.title;
            var image = profiles.image;
            var exp = profiles.exp;
            
            $(".left-side").append(`
            <h4 class="color-primary">
                <i class="fas fa-user"></i>
                <span>${judul}</span>
            </h4>
            <div class="profile__image">
                <img src="${image}" alt="${nama}" title="${nama}">
            </div>
            <div class="text-center">
                <div class="name">
                    ${nama}
                </div>
                <div class="jobs">
                    ${title}
                </div>
            </div>
            `);
            $(".right-side b").html("")
            $('.right-side').append(`
            <h3>${judul}</h3>
                            <p>${exp}</p>
                            <a href="profile.html" class="color-primary">
                                <b>${response[1].selengkap}</b>
                                <i class="fas fa-chevron-right"></i>
                            </a>
            `)
        }





        $(".click-flag").click(function () {
            var localS = (localStorage.getItem('lang'));
            var indonesia = localS == "id";
            var inggris = localS == "en";
            // $(".about-para").html("")

            if (inggris) {
                $(".left-side,.right-side").html("");
                var judul = response[1].title;
                // console.log(judul);

                var profiles = (response[1].data[0]);
                // console.log(profiles);
                var nama = profiles.name;
                var title = profiles.title;
                var image = profiles.image;
                var exp = profiles.exp;
                $(".left-side").append(`
            <h4 class="color-primary">
                <i class="fas fa-user"></i>
                <span>${judul}</span>
            </h4>
            <div class="profile__image">
                <img src="${image}" alt="${nama}" title="${nama}">
            </div>
            <div class="text-center">
                <div class="name">
                    ${nama}
                </div>
                <div class="jobs">
                    ${title}
                </div>
            </div>
            `);

                $('.right-side').append(`
            <h3>${judul}</h3>
                            <p>${exp}</p>
                            <a href="profile.html" class="color-primary">
                                <b>${response[1].selengkap}</b>
                                <i class="fas fa-chevron-right"></i>
                            </a>
            `)
            } else {
                $(".left-side,.right-side").html("");
                var judul = response[0].title;
                // console.log(judul);

                var profiles = (response[0].data[0]);
                // console.log(profiles);
                var nama = profiles.name;
                var title = profiles.title;
                var image = profiles.image;
                var exp = profiles.exp;
                $(".left-side").append(`
            <h4 class="color-primary">
                <i class="fas fa-user"></i>
                <span>${judul}</span>
            </h4>
            <div class="profile__image">
                <img src="${image}" alt="${nama}" title="${nama}">
            </div>
            <div class="text-center">
                <div class="name">
                    ${nama}
                </div>
                <div class="jobs">
                    ${title}
                </div>
            </div>
            `);

                $('.right-side').append(`
            <h3>${judul}</h3>
                            <p>${exp}</p>
                            <a href="profile.html" class="color-primary">
                                <b>${response[0].selengkap}</b>
                                <i class="fas fa-chevron-right"></i>
                            </a>
            `)
            }


        })


    })
})