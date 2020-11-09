
function enviar() {

    var comment = document.getElementById("texto").value

    console.log(comment)


    var poster = {
        post: `${comment}`
    };


    fetch('https://news-api-node.herokuapp.com/api/v1/news/ea30897c-67fe-4f79-896a-369366a914bb',
        {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(poster)
        })

        .then(results => results.json())
        .then(console.log)

    fetch('https://news-api-node.herokuapp.com/api/v1/news/ea30897c-67fe-4f79-896a-369366a914bb/')
        .then(function (response) {
            response.json()
            
            .then(function (result) {
                document.getElementById("valores").innerHTML = JSON.stringify(result[1])
                    console.log(result);
                })
        })

}