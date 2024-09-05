import { axios } from "axios";

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    // Authorization: "Bearer api_read_access_token",
    Authorization: "Bearer 2218e48bf59c52704334d796d79c406e",
  },
};

axios
  .get(url, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

//   Ключ API
// 2218e48bf59c52704334d796d79c406e
// Токен доступу для читання API
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjE4ZTQ4YmY1OWM1MjcwNDMzNGQ3OTZkNzljNDA2ZSIsIm5iZiI6MTcyNTU0NTU2Ni45NzgwMzQsInN1YiI6IjY2ZDliYTFmZDdjMTllYTg2NmI4ZDJmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vyEt0V0IujxaNXEqDmfd847z3XCoeAsDhgBK5wrYJIE
