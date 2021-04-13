//STEP 1
// let favMovie = ["The Big Lebowski", "Waiting", "Tron", "Se7en", "Scream"];
// console.log(favMovie[1]);
//STEP 2
// let movies = new Array(5);
// movies[0] = favMovie[4];
// movies[1] = favMovie[1];
// movies[2] = favMovie[0];
// movies[3] = favMovie[3];
// movies[4] = favMovie[2];
// console.log(movies[0]);
//STEP 3
// let movies = new Array(5);
// movies[0] = favMovie[4];
// movies[1] = favMovie[1];
// movies[2] = favMovie[0];
// movies[3] = favMovie[3];
// movies[4] = favMovie[2];
// movies.push("Rear Window");
// console.log(movies.length);
//STEP 4
// let movies = ["The Big Lebowski", "Waiting", "Tron", "Se7en", "Scream"];
// delete movies[0];
// console.log(movies);
//STEP 5
// let movies = ["The Big Lebowski", "Waiting", "Tron", "Se7en", "Scream", "Heat","The Knights of Bassassdom"];
// for (let i in movies) {
//     console.log(movies[i]);
// };
//STEP 6
// let movies = ["The Big Lebowski", "Waiting", "Tron", "Se7en", "Scream", "Heat","The Knights of Bassassdom"];
// for (let movie of movies) {
//     console.log(movie);
// };
//STEP 7
// let movies = ["The Big Lebowski", "Waiting", "Tron", "Se7en", "Scream", "Heat","The Knights of Bassassdom"];
// movies.sort();
// console.log(movies);
//STEP 8
// let movies = ["The Big Lebowski", "Waiting", "Tron", "Se7en", "Scream", "Heat","The Knights of Bassassdom"];
// let leastFavMovies = ["Home Alone 3", "Indiana Jones and the Crystal Skull", "Police Academy 7"];

// console.log('Movies I like:')
// for (let i in movies) {
//     console.log(movies[i], Number(i)+1);
// }

// console.log('Movies I regret watching:')
// for (let i in leastFavMovies) {
//     console.log(leastFavMovies[i], Number(i)+1);
// };
//STEP 9
// let movies = ["The Big Lebowski", "Waiting", "Tron", "Se7en", "Scream", "Heat","The Knights of Bassassdom"];
// let leastFavMovies = ["Home Alone 3", "Indiana Jones and the Crystal Skull", "Police Academy 7"];
// movies = movies.concat(leastFavMovies);
// console.log(movies.sort().reverse());
//STEP 10
// let movies = ["The Big Lebowski", "Waiting", "Tron", "Se7en", "Scream", "Heat","The Knights of Bassassdom"];
// let leastFavMovies = ["Home Alone 3", "Indiana Jones and the Crystal Skull", "Police Academy 7"];
// movies = movies.concat(leastFavMovies);
// console.log(movies[movies.length - 1]);
//STEP 11
// let movies = ["The Big Lebowski", "Waiting", "Tron", "Se7en", "Scream", "Heat","The Knights of Bassassdom"];
// let leastFavMovies = ["Home Alone 3", "Indiana Jones and the Crystal Skull", "Police Academy 7"];
// movies = movies.concat(leastFavMovies);
// console.log(movies[0]);
//STEP 12
// let movies = ["The Big Lebowski", "Waiting", "Tron", "Se7en", "Scream", "Heat","The Knights of Bassassdom"];
// let leastFavMovies = ["Home Alone 3", "Indiana Jones and the Crystal Skull", "Police Academy 7"];
// for (let i in leastFavMovies) {
//     leastFavMovies[i] = movies[i]
// };

// console.log(leastFavMovies);

//STEP 13
// let movies = [['The Big Lebowski', 1],['Se7en', 2],['Waiting', 3],['Scream', 4],['Heat', 5]];
// movies.forEach((item) => {
//     let moviesName = item.filter((name) => {
//         return typeof name === "string";   
//     });
//     console.log(moviesName);
// });
//STEP 14
// let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
// let showEmployee = function(list) {
//     let i = 1;
//     list.forEach(employee => {
//         console.log(`${employee}`);
//         i++;
//     }); 
// };
// console.log("Employees:");
// showEmployee(employees);
//STEP 15
// function filterValues(arr) {
//     function isEligible(value) {
//         if (value !== false || value !== null || value !== 0 || value !== "") {
//             return value;
//         }
//     };
//     arr = arr.filter(isEligible);
//     return arr;
// };
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
//STEP 16
// function randomItem(items) {
//     return items[Math.floor(Math.random()*items.length)];
// };
// console.log(randomItem([123, 23, 56, 78]));
//STEP 17
function largestNum(arr) {
    return Math.max.apply(null, arr);
};
console.log(largestNum([23, 66, 98, 54, 199]));