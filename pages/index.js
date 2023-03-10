import Head from "next/head";
import Avatar from "../components/Avatar";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { useRef } from "react";
import {useRouter} from "next/router"
export default function Home() {
  const router= useRouter()
  const searchInputRef = useRef(null);

  function search(e) {
    e.preventDefault();
    const term = searchInputRef.current.value
    if (!term) return
    //redirect to either 404 or the right page
    router.push(`/search?term=${term}`)
  }
  return (
    <div className="flex flex-col items-center h-screen">
      <Head>
        <title>Google-clone</title>
        <link rel="icon" href="./goo.png" />
      </Head>
      <header className="flex  w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">store </p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">images</p>
          <ViewGridIcon className="h-10 w-10 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="/akpevwe.jpeg" />
        </div>
      </header>
      <form className="flex flex-col items-center mt-44 flex-grow  w-4/5">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
        />
        <div className="flex w-full mt-5 hover:shadow-lg  focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 ml-3 text-gray-500" />
          <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none"  defaultValue={router.query.term}/>
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 ">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I'm feeling lucky
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
