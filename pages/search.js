import Head from 'next/head'
import { Header } from '../components/Header'
import { useRouter } from 'next/router'
import { SearchResults   } from '../components/SearchResults'
import Response from '../Response'
const Search = ({results}) => {
  // console.log("ffff", results)
  const router=useRouter()
  return (
      <div>
          <Head>
        <title>{router.query.term} - Google search</title>
                  <link rel="icon" href="./goo.png" />
          </Head>
      <Header />
      <SearchResults results={results} /> 
    </div> 
  )
}
export default Search 
const API_KEY = process.env.API_KEY
const CONTEXT_KEY = process.env.CONTEXT_KEY
export async function getServerSideProps(context) {
  const useDummyData = false; //initially true during the work
  const startIndex= context.query.start || "0"
  const data = useDummyData ? Response  : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex }`).then(res=>res.json())
  // console.log("ffjfk", data)

  //after the server side render,pass the result to the client
  return {
    props: {
      results: data

    }
  }
}