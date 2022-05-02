import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { doubanRes, Movie } from '../typings'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import doubanReq from '../utils/douban'
import requests from '../utils/requests'
import Row from '../components/Row'
import axios from 'axios'
import DoubanRow from '../components/DoubanRow'
import useAuth from '../hooks/useAuth'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import Modal from '../components/Modal'

type Props = {
  trending: Movie[]
  topRated: Movie[]
  documentaries: Movie[]
  // top250: doubanRes
}

const Home = ({ trending, topRated, documentaries }: Props) => {
  // console.log('action movie:', actionMovie)
  // console.log('genres:', genres)
  // console.log('doubannres:', top250)
  const [showModal, setShowModal] = useRecoilState(modalState)
  const { loading } = useAuth()

  if (loading) return 'Loading...'

  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Netflix</title>
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
          {/* <DoubanRow title="Top 250" movies={top250.data} /> */}
        </section>
      </main>
      {/* modal */}
      {showModal && <Modal />}
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const [trending, topRated, documentaries] = await Promise.all([
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  // fetch douban
  // const fetchTop250 = await axios
  //   .get(doubanReq.fetchTop250)
  //   .then((res) => res.data)

  return {
    props: {
      // props for your component
      trending: trending.results,
      topRated: topRated.results,
      documentaries: documentaries.results,
      // using douban api
      // top250: fetchTop250,
    },
  }
}
