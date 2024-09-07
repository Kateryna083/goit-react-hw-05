import axios from "axios";

const accessKey = "2218e48bf59c52704334d796d79c406e";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export async function getTrendingMovie() {
  const response = await axios.get("/trending/movie/day", {
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjE4ZTQ4YmY1OWM1MjcwNDMzNGQ3OTZkNzljNDA2ZSIsIm5iZiI6MTcyNTU0NTU2Ni45NzgwMzQsInN1YiI6IjY2ZDliYTFmZDdjMTllYTg2NmI4ZDJmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vyEt0V0IujxaNXEqDmfd847z3XCoeAsDhgBK5wrYJIE",
    },
  });
  return response.data;
}

export function searchMovie(query) {
  return axios.get("/search/movie", {
    params: { language: "en-US", query },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjE4ZTQ4YmY1OWM1MjcwNDMzNGQ3OTZkNzljNDA2ZSIsIm5iZiI6MTcyNTU0NTU2Ni45NzgwMzQsInN1YiI6IjY2ZDliYTFmZDdjMTllYTg2NmI4ZDJmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vyEt0V0IujxaNXEqDmfd847z3XCoeAsDhgBK5wrYJIE",
    },
  });
}

export async function getMovieDetail(movieId) {
  const response = await axios.get(`/movie/${movieId}`, {
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjE4ZTQ4YmY1OWM1MjcwNDMzNGQ3OTZkNzljNDA2ZSIsIm5iZiI6MTcyNTU0NTU2Ni45NzgwMzQsInN1YiI6IjY2ZDliYTFmZDdjMTllYTg2NmI4ZDJmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vyEt0V0IujxaNXEqDmfd847z3XCoeAsDhgBK5wrYJIE",
    },
  });
  return response.data;
}

export async function getMovieCast(movieId) {
  return await axios.get(`/movie/${movieId}/credits`, {
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjE4ZTQ4YmY1OWM1MjcwNDMzNGQ3OTZkNzljNDA2ZSIsIm5iZiI6MTcyNTU0NTU2Ni45NzgwMzQsInN1YiI6IjY2ZDliYTFmZDdjMTllYTg2NmI4ZDJmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vyEt0V0IujxaNXEqDmfd847z3XCoeAsDhgBK5wrYJIE",
    },
  });
}

export async function getReviews(movieId) {
  return await axios.get(`/movie/${movieId}/reviews`, {
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjE4ZTQ4YmY1OWM1MjcwNDMzNGQ3OTZkNzljNDA2ZSIsIm5iZiI6MTcyNTU0NTU2Ni45NzgwMzQsInN1YiI6IjY2ZDliYTFmZDdjMTllYTg2NmI4ZDJmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vyEt0V0IujxaNXEqDmfd847z3XCoeAsDhgBK5wrYJIE",
    },
  });
}

//   Ключ API
// 2218e48bf59c52704334d796d79c406e
// Токен доступу для читання API
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjE4ZTQ4YmY1OWM1MjcwNDMzNGQ3OTZkNzljNDA2ZSIsIm5iZiI6MTcyNTU0NTU2Ni45NzgwMzQsInN1YiI6IjY2ZDliYTFmZDdjMTllYTg2NmI4ZDJmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vyEt0V0IujxaNXEqDmfd847z3XCoeAsDhgBK5wrYJIE
