import Head from 'next/head'
import Avatar from '../components/Avatar'
import Image from 'next/image'

import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'
import { SearchIcon} from '@heroicons/react/outline'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'


export default function Home() {

  const router = useRouter();
  const searchInputRef = useRef(null)

  const search = (e) => {
    e.preventDefault()
    const term = searchInputRef.current.value

    if(!term) return;

    router.push(`/search?term=${term}`)
  }


  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*HEader*/ }

      <header className="flex w-full p-5 -mb-20 justify-between text-sm text-gray-700">

        
        {/*left*/}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/*right*/}

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url='https://whatsapp-mern-fullstack.web.app/static/media/my%20image3jpg.f2592b34.jpg'/>

        </div>


      </header>

      {/*Body*/ }
      <form className="flex flex-col items-center justify-center content-center w-4/5 mt-44 mb-20">
        <Image 
        loading="lazy"
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        height={100}
        width={300}
        />

        <div className="flex w-full items-center mt-70 hover:shadow-lg focus-within:shadow-lg 
        max-w-md rounded-full border-gray-200 px-5 py-3 sm:max-w-xl lg:max-w-2xl">
         
          <SearchIcon className="h-5 mr-3 text-gray-500"/>
          <input ref={searchInputRef} className="flex-grow focus:outline-none"/>
          <MicrophoneIcon className="h-5"/>
        
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">Google Search</button>
          <button onClick={search} className="btn">I'm Feeling Lucky</button>
        </div>


      </form>
      
      {/*Footer*/ }
      <Footer/>

    </div>
  )
}
