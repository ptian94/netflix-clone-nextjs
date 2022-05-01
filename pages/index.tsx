import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { doubanRes, Movie } from '../typings'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import doubanReq from '../utils/douban'
import requests from '../utils/requests'
import Row from '../components/Row'

type Props = {
  trending: Movie[]
  netflixOriginals: Movie[]
  topRated: Movie[]
  actionMovie: Movie[]
  comedyMovie: Movie[]
  horrorMovie: Movie[]
  romanceMovie: Movie[]
  documentaries: Movie[]
}

const Home = ({
  trending,
  netflixOriginals,
  topRated,
  actionMovie,
  comedyMovie,
  horrorMovie,
  romanceMovie,
  documentaries,
}: Props) => {
  console.log('action movie:', actionMovie)
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="relative p-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner trending={trending} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trending} />
          <Row title="Top Rated" movies={topRated} />
          {/* <Row title="Action Thrillers" movies={actionMovie} /> */}
          {/* My List */}
          {/* {list.length > 0 && <Row title="My List" movies={list} />} */}

          {/* <Row title="Comedies" movies={comedyMovie} /> */}
          {/* <Row title="Scary Movies" movies={horrorMovie} /> */}
          {/* <Row title="Romance Movies" movies={romanceMovie} /> */}
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {/* modal */}
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const [
    netflixOrigin,
    trending,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
    // movie,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
    // fetch(requests.fetchMovieById).then((res) => res.json()),
  ])

  // fetch douban
  const fetchTop250 = await fetch(doubanReq.fetchTop250).then((res) =>
    res.json()
  )

  return {
    props: {
      // props for your component
      // movie: movie,
      netflixOrigin: netflixOrigin.results,
      trending: trending.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,

      // using douban api
      // fetchTop250,
    },
  }
}
