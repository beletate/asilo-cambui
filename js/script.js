start()

function start(){

    fetch('https://news-api-node.herokuapp.com/api/v1/news/ea30897c-67fe-4f79-896a-369366a914bb')
    .then(results => results.json())
    .then(console.log)
    

    var poster = { 
        post: 'GET'
     };

    fetch('https://news-api-node.herokuapp.com/api/v1/news/ea30897c-67fe-4f79-896a-369366a914bb', 
    { 
        method: 'post',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'}, 
        body: JSON.stringify(poster)})

        .then(results => results.json())
        .then(console.log)
    }