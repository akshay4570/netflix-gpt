export const NETFLIX_BACKGROUND =
  "https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg";
export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const NETFLIX_USER_ICON =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACXCAMAAAAvQTlLAAAAY1BMVEUNfoD///8Ae30AeHoAdXf7/f0AcnT2+/vZ5eaXvr8cg4XY6env9va51tbh7e2QvL290tJSmpucxMVdnp/C29wxiourzc1+sbJjo6VDkZNspaY8iYulxcZpqaoug4UfiozN4OF+6vfoAAACrUlEQVR4nO3Y25qbIBQFYNkgJnggKkq0TuL7P2U1k0yUOeKQaft1/Xe5YGeJiLijCAAAAAAAAAAAAAAA/i3ERaS4IApfms+lheCbxpZVwRgzutk0/ANExzZjLDFW+ZeW+4Q9K44icKz2VnrsfIORYXc25IyRSu+Vk6Nfaa4XsVhWBwxG7bJ00fgsX+qS5WCWhstFfbwqnfvk4nu21gV7KGW+rpz98hltnFxDsKUvY6f0k8e9OGXO4DzUjaSzm2vvcckPzNV9J9fyUQ6cK3JzaY9c62d5YsOtr8IpXXo8Utw6g1Ww51FU68rpyWc0javBVcA3UbOeMOt1xVQuN9b0HPBMsb4Xxnd0fb+s1Otd8Slh79ecR76leXfdW+Nqw2nk49L1dZVkesPhjoSyh0N7jEIfv+YTp9KHw1BuOxhOyaSU4VPdSosHHIQBAAAAAP4DRI/oKn+bUH3fhG3e3hDnG79M5o+iIo6zoM3bG97tq35LsukrUF+/nEM2b68un87xWHLPVcJ5V7202Nrguah5bmYleUlfL04i6vNF+yNYb+3FvZuemZp/adJonqp01Zsbwudatq2LoVby42hcqlqvO1iM7cL11m6oXP1DsmvLaULe2JPmfYqTqg9p4qRiJlwL/k4O7t8kY2vrJpJSCjFtIVwIISWpstcHt2d7WZjdJ1O8Ve92rqfnM8mKnWm1fZpYXbW7osjcbu8l1Ty9D0k17RSRdhu5X1RUj5qrC+LNhmTxaE++m553MhEdzevb+b5kHLqNLTlP06ak31jWb9pVZfRzLTniMtJ58WobWMnS3Crx031CEtTUtn1vsZnBlid69KJ6Lxufdq5zrfdtbsbdzJh22Nty2tHEH8q0CHd5Vyp1Oik1b/bTz7/xWAoAAAAAAAAAAAAAAAAAAAAQ/QYWehljGF7miQAAAABJRU5ErkJggg==";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2QyMGIyZjMxYzMyY2FiYjQyNzA3YzViZDMzOTM4YyIsInN1YiI6IjY0ZWI3YWM5NDU4MTk5MDEzYTdlZDM5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wbQYuDwThkoGs9-4j8lMsEnzxfzgP-dreTnL_YQpDxI",
  },
};

export const GET_MOVIE_LIST =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const MOVIE_IMAGE = "https://api.themoviedb.org/3/movie/";

export const MOVIE_IMAGE_CDN = "https://image.tmdb.org/t/p/w500/";

export const MOVIE_VIDEO_CDN = "https://api.themoviedb.org/3/movie/";
export const YOUTUBE_URL = "https://www.youtube.com/embed/";

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
