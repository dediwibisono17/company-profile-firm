

// alert(1)
var baseURL = "company-profile-firm"
// console.log(window.location.pathname);





$.ajax({
    url: '/'+baseURL+'/js/why.json',
    //url: "js/why.json',
    method: 'GET',
    success: (response => {

        setTimeout(() => {
            var localS = (localStorage.getItem('lang'));
            var indonesia = localS == "id";
            var inggris = localS == "en";

            if (inggris) {
                var q;
                var titlex = (response[1].title);
                var parx = (response[1].desc);
                var prestasix = response[1].usp;
                // console.log(parx);

                $(".whyus .subtitle, .whyus .subtitlex").append(titlex)
                $(".whyus .paragraph").append(parx);
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
                var q;
                var titlex = (response[0].title);
                var parx = (response[0].desc);
                var prestasix = response[0].usp;
                // console.log(parx);

                $(".whyus .subtitle, .whyus .subtitlex").append(titlex)
                $(".whyus .paragraph").append(parx);
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
                var q;
                var titlex = (response[1].title);
                var parx = (response[1].desc);
                var prestasix = response[1].usp;
                // console.log(parx);

                $(".whyus .subtitle, .whyus .subtitlex").append(titlex)
                $(".whyus .paragraph").append(parx);
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

        }, 10)



        $(".click-flag").click(function () {
            var localS = (localStorage.getItem('lang'));
            var indonesia = localS == "id";
            var inggris = localS == "en";
            $(".whyus .subtitle, .whyus .subtitlex").html("");
            $(".whyus .paragraph").html("");
            $(".usp .container").html("");



            //condition
            if (inggris) {
                // console.log('ini inggris');
                var q;
                var titlex = (response[1].title);
                var parx = (response[1].desc);
                var prestasix = response[1].usp;
                // console.log(parx);

                $(".whyus .subtitle, .whyus .subtitlex").append(titlex)
                $(".whyus .paragraph").append(parx);
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
                // console.log('ini indo');
                var titlez = (response[0].title);
                var parz = (response[0].desc);
                $(".whyus .subtitle, .whyus .subtitlex").append(titlez)
                $(".whyus .paragraph").append(parz);
                var prestasiz = response[0].usp;
                var q;
                for (q = 0; q < prestasiz.length; q++) {
                    // console.log(prestasiz[q]);
                    var icon = prestasiz[q].icon;
                    var title = prestasiz[q].title;
                    var desc = prestasiz[q].desc;

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
        // console.log(localStorage.getItem('lang'))



    })
})