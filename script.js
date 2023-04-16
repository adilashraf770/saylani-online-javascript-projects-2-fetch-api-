const findMoives = async () => {
    event.preventDefault()
    const response = await fetch("./moives.json");
    const moivesData = await response.json();
    // console.log(moivesData)
    const genreElm = document.getElementById("genere").value
    const languageElm = document.getElementById("language").value
    const ratingElm = document.getElementById("rating").value
    const bodyElm = document.getElementById("row")

    if (!languageElm) {
        alert("Please Enter Language Correctly!")
    }
    if (!ratingElm) {
        alert("Please Enter Rating Correctly!")
    }
    const display = (data) => {
        data.forEach(moive => {
            bodyElm.innerHTML += `<tr>
                <td> ${moive.id}</td>
                <td><div class="data">
                    <div class="img-fluid">
                        <img src='${moive.poster_path}'>
                    </div>
                    <div class="text">
                        <h><a href="${moive.homepage}">${moive.title}</a></h>
                        <span>${moive.certification}</span>
                        <span>${moive.genres}</span>
                        <span>${moive.vote_average}</span>
                    </div>
                </div>  </td>
                <td> ${moive.tagline} </td>
                <td> ${moive.vote_average} </td>
                <td> ${moive.release_date} </td>
                </tr>`
            console.log(moive.id)
        });
    }

    const data = moivesData.filter((moive) => {
        return (moive.genres.includes(genreElm) || moive.original_language.toLowerCase().includes(languageElm) || moive.vote_average === ratingElm)
    })

    display(data)
}


































