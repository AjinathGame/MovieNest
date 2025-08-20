

const loadData =  () => {
    try {
        let data = JSON.parse(localStorage.getItem("movie"))
        return data
    } catch (error) {
        console.log(error)
       
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let data = loadData()
    console.log(data) 
    let name = document.getElementById("name")
    let poster = document.getElementById("img")
    let rating = document.getElementById("rating")
    let released = document.getElementById("released")
    let actor = document.getElementById("actor")
    let director = document.getElementById("director")
    let writer = document.getElementById("wirter")
    let awards = document.getElementById("awards")
    let country = document.getElementById("country")
    let year = document.getElementById("year")
    let plot = document.getElementById("plot")

    poster.src = data.Poster
    name.innerText = data.Title
    rating.innerText = data.imdbRating + " ⭐"
    actor.innerText = `Actor : ${data.Actors}`
    director.innerText = `Director : ${data.Director}`
    released.innerText = `Released : ${data.Released}`
    writer.innerText = `Writer : ${data.Writer}`
    country.innerText = `Country : ${data.Country}`
    awards.innerText = `Awards : ${data.Awards}`
    year.innerText = `Year : ${data.Year}`
    plot.innerText = data.Plot

    
})