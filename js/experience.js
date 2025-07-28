// alert(1)
$.ajax({
    // url: '/company-profile-firm/js/experience.json',
    url: 'js/experience.json',
    method: 'GET',
    success: (response => {
        // console.log(response); 
        var a;
        for (a=0; a<response.length; a++) {
            var name = response[a].name;
            $(".wrap-3-col").append(`
                    <div class="cardc">
                        <h4>${name}</h4>
                    </div>
                `)    
        }
    })
})