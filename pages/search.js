import Head from 'next/head'
import { Header } from '../components/Header'
import { API_KEY, CONTEXT_KEY } from './keys'

const Search = ({results}) => {
    console.log("ffff",results)
  return (
      <div>
          <Head>
              <title>Search results</title>
                  <link rel="icon" href="./goo.png" />
          </Head>
         <Header/>
    </div> 
  )
}
export default Search 

export async function getServerSideProps(context) {
  const useDummyData = false
  const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`)
  console.log("ffjfk", data)

  //after the server side render,pass the result to the client
  return {
    props: {
      results: JSON.parse(JSON.stringify(data))

    }
  }
}