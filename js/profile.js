var baseURL = "company-profile-firm"

$.ajax({
    //url: '/'+baseURL+'/js/profile.json',
    url: "js/profile.json",
    method: 'GET',
    success: (response => {



        setTimeout(() => {
            var localS = (localStorage.getItem('lang'));
            var indonesia = localS == "id";
            var inggris = localS == "en";
            if (inggris) {
                $(".profil #accordion, .profil .subtitle, .profil .subtitlex").html("")

                $(".profil .subtitle, .profil .subtitlex").html(response[1].title)

                var a;
                // console.log('data', response[1].data);

                var datax = response[1].data;
                for (a = 0; a < datax.length; a++) {
                    var name = datax[a].name;
                    var idx = datax[a].id;
                    var title = datax[a].title;
                    var image = datax[a].image;
                    var exp = datax[a].exp;
                    var prestasi = datax[a].prestasi;
                    var h = ""
                    prestasi.map((a, i) => { h += `<li><p>${a}</p></li>` });

                    $(".profil #accordion").append(
                        `   <div class="card">
                        <div class="card-header" id="heading-${idx}">
                            <h5 class="mb-0">
                                <a role="button" data-toggle="collapse" href="#collapse-${idx}"
                                    aria-expanded="true" aria-controls="collapse-${idx}">
                                    ${name}
                                </a>
                            </h5>
                        </div>
                        <div id="collapse-${idx}" class="collapse" data-parent="#accordion" aria-labelledby="heading-${idx}">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="image">
                                            <img src="${image}" title="${name}" alt="${name}"
                                        </div>
                                        <div class="my-3 text-center">
                                            <div class="name">
                                                ${name}

                                            </div>
                                            <div class="jobs">${title}</div>
                                        </div>
                                    </div>
                                    </div>
                                     <div class="col-md-8">
                                        <div class="content">
                                            ${exp}
                                        </div>

                                        <ul class="prestasi">
                                            ${h}
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>

                `
                    )


                }
            }

            else if (indonesia) {
                $(".profil #accordion, .profil .subtitle, .profil .subtitlex").html("")

                $(".profil .subtitle, .profil .subtitlex").html(response[0].title)

                var a;
                // console.log('data', response[1].data);

                var datax = response[0].data;
                for (a = 0; a < datax.length; a++) {
                    var name = datax[a].name;
                    var idx = datax[a].id;
                    var title = datax[a].title;
                    var image = datax[a].image;
                    var exp = datax[a].exp;
                    var prestasi = datax[a].prestasi;
                    var h = ""
                    prestasi.map((a, i) => { h += `<li><p>${a}</p></li>` });

                    $(".profil #accordion").append(
                        `   <div class="card">
                        <div class="card-header" id="heading-${idx}">
                            <h5 class="mb-0">
                                <a role="button" data-toggle="collapse" href="#collapse-${idx}"
                                    aria-expanded="true" aria-controls="collapse-${idx}">
                                    ${name}
                                </a>
                            </h5>
                        </div>
                        <div id="collapse-${idx}" class="collapse" data-parent="#accordion" aria-labelledby="heading-${idx}">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="image">
                                            <img src="${image}" title="${name}" alt="${name}"
                                        </div>
                                        <div class="my-3 text-center">
                                            <div class="name">
                                                ${name}

                                            </div>
                                            <div class="jobs">${title}</div>
                                        </div>
                                    </div>
                                    </div>
                                     <div class="col-md-8">
                                        <div class="content">
                                            ${exp}
                                        </div>

                                        <ul class="prestasi">
                                            ${h}
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>

                `
                    )


                }
            } else {
                $(".profil #accordion, .profil .subtitle, .profil .subtitlex").html("")

                $(".profil .subtitle, .profil .subtitlex").html(response[1].title)

                var a;
                // console.log('data', response[1].data);

                var datax = response[1].data;
                for (a = 0; a < datax.length; a++) {
                    var name = datax[a].name;
                    var idx = datax[a].id;
                    var title = datax[a].title;
                    var image = datax[a].image;
                    var exp = datax[a].exp;
                    var prestasi = datax[a].prestasi;
                    var h = ""
                    prestasi.map((a, i) => { h += `<li><p>${a}</p></li>` });

                    $(".profil #accordion").append(
                        `   <div class="card">
                        <div class="card-header" id="heading-${idx}">
                            <h5 class="mb-0">
                                <a role="button" data-toggle="collapse" href="#collapse-${idx}"
                                    aria-expanded="true" aria-controls="collapse-${idx}">
                                    ${name}
                                </a>
                            </h5>
                        </div>
                        <div id="collapse-${idx}" class="collapse" data-parent="#accordion" aria-labelledby="heading-${idx}">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="image">
                                            <img src="${image}" title="${name}" alt="${name}"
                                        </div>
                                        <div class="my-3 text-center">
                                            <div class="name">
                                                ${name}

                                            </div>
                                            <div class="jobs">${title}</div>
                                        </div>
                                    </div>
                                    </div>
                                     <div class="col-md-8">
                                        <div class="content">
                                            ${exp}
                                        </div>

                                        <ul class="prestasi">
                                            ${h}
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>

                `
                    )


                }
            }

        }, 10)


        $(".click-flag").click(function () {
            var localS = (localStorage.getItem('lang'));
            var indonesia = localS == "id";
            var inggris = localS == "en";
            // $(".whyus .subtitle, .whyus .subtitlex").html("");
            // $(".whyus .paragraph").html("");
            // $(".usp .container").html("");
            // console.log(response[1].data.length);
            $(".profil #accordion").html("")
            if (inggris) {
                var a;
                // console.log('data', response[1].data);
                $(".profil .subtitle, .profil .subtitlex").html(response[1].title)

                var datax = response[1].data;
                for (a = 0; a < datax.length; a++) {
                    var name = datax[a].name;
                    var idx = datax[a].id;
                    var title = datax[a].title;
                    var image = datax[a].image;
                    var exp = datax[a].exp;
                    var prestasi = datax[a].prestasi;
                    var h = ""
                    prestasi.map((a, i) => { h += `<li><p>${a}</p></li>` });

                    $(".profil #accordion").append(
                        `   <div class="card">
                        <div class="card-header" id="heading-${idx}">
                            <h5 class="mb-0">
                                <a role="button" data-toggle="collapse" href="#collapse-${idx}"
                                    aria-expanded="true" aria-controls="collapse-${idx}">
                                    ${name}
                                </a>
                            </h5>
                        </div>
                        <div id="collapse-${idx}" class="collapse" data-parent="#accordion" aria-labelledby="heading-${idx}">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="image">
                                            <img src="${image}" title="${name}" alt="${name}"
                                        </div>
                                        <div class="my-3 text-center">
                                            <div class="name">
                                                ${name}

                                            </div>
                                            <div class="jobs">${title}</div>
                                        </div>
                                    </div>
                                    </div>
                                     <div class="col-md-8">
                                        <div class="content">
                                            ${exp}
                                        </div>

                                        <ul class="prestasi">
                                            ${h}
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>

                `
                    )


                }


                // prestasi.map((a, i) => { h += `<li><p>${a}</p></li>` });
                // console.log(name);



            } else {
                var dataz = response[0].data;
                $(".profil .subtitle, .profil .subtitlex").html(response[0].title)
                console.log(dataz);

                for (a = 0; a < dataz.length; a++) {
                    var name = dataz[a].name;
                    var idx = dataz[a].id;
                    var title = dataz[a].title;
                    var image = dataz[a].image;
                    var exp = dataz[a].exp;
                    var prestasi = dataz[a].prestasi;
                    var h = ""
                    prestasi.map((a, i) => { h += `<li><p>${a}</p></li>` });

                    $(".profil #accordion").append(
                        `   <div class="card">
                        <div class="card-header" id="heading-${idx}">
                            <h5 class="mb-0">
                                <a role="button" data-toggle="collapse" href="#collapse-${idx}"
                                    aria-expanded="true" aria-controls="collapse-${idx}">
                                    ${name}
                                </a>
                            </h5>
                        </div>
                        <div id="collapse-${idx}" class="collapse" data-parent="#accordion" aria-labelledby="heading-${idx}">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="image">
                                            <img src="${image}" title="${name}" alt="${name}"
                                        </div>
                                        <div class="my-3 text-center">
                                            <div class="name">
                                                ${name}

                                            </div>
                                            <div class="jobs">${title}</div>
                                        </div>
                                    </div>
                                    </div>
                                     <div class="col-md-8">
                                        <div class="content">
                                            ${exp}
                                        </div>

                                        <ul class="prestasi">
                                            ${h}
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>

                `
                    )


                }

            }

        })

        // // var x;
        // // for (x = 0; x < response.length; x++) {
        // //     var idx = response[x].id;
        // //     var name = response[x].name;
        // //     var exp = response[x].exp;
        // //     var title = response[x].title;
        // //     // console.log(desc);
        // //     var image = response[x].image;
        // //     var prestasi = response[x].prestasi;
        // //     var h = ""
        // //     prestasi.map((a, i) => { h += `<li><p>${a}</p></li>` });

        // //     $(".profil #accordion").append(
        // //         `   <div class="card">
        // //                 <div class="card-header" id="heading-${idx}">
        // //                     <h5 class="mb-0">
        // //                         <a role="button" data-toggle="collapse" href="#collapse-${idx}"
        // //                             aria-expanded="true" aria-controls="collapse-${idx}">
        // //                             ${name}
        // //                         </a>
        // //                     </h5>
        // //                 </div>
        // //                 <div id="collapse-${idx}" class="collapse" data-parent="#accordion" aria-labelledby="heading-${idx}">
        // //                     <div class="card-body">
        // //                         <div class="row">
        // //                             <div class="col-md-4">
        // //                                 <div class="image">
        // //                                     <img src="${image}" title="${name}" alt="${name}"
        // //                                 </div>
        // //                                 <div class="my-3 text-center">
        // //                                     <div class="name">
        // //                                         ${name}

        // //                                     </div>
        // //                                     <div class="jobs">${title}</div>
        // //                                 </div>
        // //                             </div>
        // //                             </div>
        // //                              <div class="col-md-8">
        // //                                 <div class="content">
        // //                                     ${exp}
        // //                                 </div>

        // //                                 <ul class="prestasi">
        // //                                     ${h}
        // //                                 </ul>
        // //                             </div>
        // //                     </div>
        // //                 </div>
        // //             </div>

        // //         `
        // //     )

        // }
    })
})