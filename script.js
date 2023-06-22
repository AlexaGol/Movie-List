//top button function 
function showfields(e) {
    document.querySelector("#top-card").style.display = "flex"
}

//create table element to insert items to, so it would appear 
//as a proper table
const moviesTable = document.querySelector("#table")

//movie title object 
class Movies {
    constructor(movieTitle, movieImage, movieRating){
        this.movieTitle = movieTitle
        this.movieImage = movieImage
        this.movieRating = movieRating
    }

    getHtml(){
       moviesTable.innerHTML += `
        <tr class="movie-list">
              <td scope="row" class="col1" id="mov-img">
                  <img 
                  height="150"
                  style="border: 2px solid rgb(255, 252, 252); padding:2px"
                  src="${this.movieImage}" alt="">
              </td>
              <td class="col2" id="mov-title">${this.movieTitle}</td>
              <td class="col3" id="mov-ratin"><p>${this.movieRating}</p>
              </td>
              <td>
              <span id="rUp" onclick="rateUp(event)"><i class="fa-regular fa-hand-point-up fa-2xl"></i></span>
              <span><i class="fa-regular fa-hand-point-down fa-2xl"></i></span>
                </td>
              <td class="col4">
                 <button class="btn-bottom" onclick="removeMovie(this)">
                <i class="fa-regular fa-circle-xmark fa-2xl">
                </i>
                </button>
              </td>
            </tr>
        `
    }
    
}

//add movie function
function addMovie() {
    //take input from user and put it in a variable
    const movieTEL = document.querySelector("#mov-title")
    const movieEEL = document.querySelector("#mov-img")
    const movieREL = document.querySelector("#mov-ratin")
    //create a new object for movies
    const movie = new Movies(movieTEL.value, movieEEL.value, movieREL.value)
    movieTEL.value=""
    movieEEL.value=""
    movieREL.value=""
    //use gethtml method to write into the table
    movie.getHtml()
    document.querySelector("#table").style.display = "table"
}

//rating up\down
// function rateUp(id) {
//     console.log(document.querySelectorAll(".col3"))
//     let movRateUp = Number(document.querySelectorAll("#ratin").innerText)
//     movRateUp++
//     document.querySelector("#ratin").innerText = movRateUp
    
// }
// function rateDown(id) {
//     let movRateDown = Number(document.querySelector("#ratin").innerText)
//     movRateDown--
//     document.querySelector("#ratin").innerText = movRateDown
    
// }


//remove from table
function removeMovie(r) {
    let i = r.parentNode.parentNode.rowIndex;
    document.querySelector("#table").deleteRow(i);
}
