// Soal No. 1
// Lakukan pengambilan data yang berasal dari API berikut "https://api.github.com/users/<github_username>"
// Gunakan promise untuk mendapatkan data
// Tampilkan data menggunakan DOM minimal nama, gambar profile, followers, followings
// Tampilkan serapi mungkin menggunakan CSS

// Jawaban
const getDataAPI = () => {
    const API = "https://api.github.com/users/Rodhiyahdv";
    const option = {
        method: "GET"
    }

    fetch(API,option)
    .then(response => response.json())
    .then(result => {
        console.log(result)
            let getDataUsers = `<div class="column-list"><img src="${result.avatar_url}">
            <p>Nama : ${result.name}</p>
            <p>Followers : ${result.followers}</p>
            <p>Following : ${result.following}</p></div>`
            document.getElementById("data-github").innerHTML = getDataUsers
    })
    .catch(error => console.log(error, "ERROR"))
}
getDataAPI();

// Soal No. 2
// Ambillah data dari API berikut "https://restcountries.eu/rest/v2/all"
// Gunakan sync await
// Tampilkan seluruh bendera negara dan nama negaranya ke dalam DOM

// Jawaban
const getDataAPIwithAsync = async () => {
    const API1 = "https://restcountries.eu/rest/v2/all";
    const option1 = {
        method: "GET"
    }

    let response1 = await fetch(API1,option1)
    response1 = await response1.json()
    console.log(response1);

    response1.forEach(element => {
        let listCountry = `<div class="column-list"><img src="${element.flag}">
        <p>${element.name}</p></div>`
        document.getElementById("list-country").innerHTML += listCountry
    });
}
getDataAPIwithAsync();