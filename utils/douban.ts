const doubanReq = {
  fetchMovieById: (id: string) => `https://api.wmdb.tv/movie/api?id=${id}`,
  fetchTop250: `https://api.wmdb.tv/api/v1/top?type=Douban&skip=0&limit=50&lang=Cn`,
}

export default doubanReq
