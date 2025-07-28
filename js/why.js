// alert(1)
$.ajax({
    // url: '/company-profile-firm/js/why.json',
    url: 'js/why.json',
    method: 'GET',
    success: (response => {
        console.log(response); 
        var a;
        for (a=0; a<response.length; a++) {
            var paragraph = response[a].desc;
            // var name = response[a].name;
            $(".whyus .paragraph").append(paragraph)    
        }
    })
})