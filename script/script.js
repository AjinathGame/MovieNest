
let searchInput = document.getElementById("search-input")
let searchButton = document.getElementById("search-button")
let dotSpinner = document.querySelector(".dot-spinner")



const loadMovie = async (movie) => {
    try {
        let responce = await fetch(`https://www.omdbapi.com/?apikey=bc101634&t=${movie}`)
        let data = await responce.json()
        console.log(data)
        return data

    } catch (error) {
        console.log(error)
        return {}
    }
}

searchButton.addEventListener("click", async () => {
    if (!searchInput.value) {
        return
    }
    else {
        dotSpinner.style.display = "flex"

        let data = await loadMovie(searchInput.value)
        console.log(data)
        if (data.Response === "False") {
            setTimeout(() => {
                dotSpinner.style.display = "none"
            }, 2000);

        } else {
            dotSpinner.style.display = "none"
            await localStorage.setItem("movie", JSON.stringify(data))
            window.location.href = "./src/result.html"
            document.title = `MovieNest | ${data.Title || "Result"}`

        }
    }

})




