/* Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers" */
    
    const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1.filtering for Sci-Fi Movies 
let movie=movies.filter((ele)=>ele.genre=="Sci-Fi")
console.log(movie)
//2. map to return Inception 8.8
movies.map(movie => {
    if (movie.title === "Inception") {
    console.log(`${movie.title} (${movie.rating})`);
  }
});
//3. avg of movie ratings 
let average = movies.reduce((sum, movie) => sum + movie.rating,0) / movies.length;
console.log(average);
//4. find() movie "Joker"
let find=movies.find(ele=>ele.title="Joker");
console.log(find)
//5.find index of avenger
let index=movies.findIndex(ele=>ele.title=="Avengers");
console.log(index)