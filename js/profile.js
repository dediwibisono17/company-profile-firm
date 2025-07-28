$.ajax({
    url: 'js/profile.json',
    method: 'GET',
    success: (response => {
        //console.log(response);
        // $(".profil .content").append(desc)
        // $(".profil .prestasi").append(h);
        // console.log(image);
        // $(".profil .image").append(
        //     `
        //     <img src= "${image}" title="${name}" alt="${name}" />
        //     `
        // )

        var x;
        for (x = 0; x < response.length; x++) {
            var idx = response[x].id;
            var name = response[x].name;
            var exp = response[x].exp;
            var title = response[x].title;
            // console.log(desc);
            var image = response[x].image;
            var prestasi = response[x].prestasi;
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
    })
})