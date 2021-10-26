import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'

function Header() {
    const router = useRouter()
    const searchInputRef = useRef(null)


    const search = (e) => {
        e.preventDefault()

        const term = searchInputRef;

        if(!term) return;

        router.push(`/search?term=${term}`)
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image 
                src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
                height={40} 
                width={120} 
                className="cursor-pointer"
                onClick={()=>router.push('/')}
                />


                <form className="flex flex-grow px-6 py-3 mr-5 ml-10 items-center border border-gray-200 rounded-full shadow-lg max-w-3xl">
                    <input ref={searchInputRef} 
                    type="text"
                    className="flex-grow w-full focus:outline-none"
                    />
                    <XIcon 
                    onClick={()=>searchInputRef.current.value = ""}
                    className="h-7 sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-125"/>
                    <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"/>

                    <button hidden type="submit" onClick={search}>Search</button>
                </form>

                <Avatar className="ml-auto" url='https://whatsapp-mern-fullstack.web.app/static/media/my%20image3jpg.f2592b34.jpg'/>
            </div>
            <HeaderOptions/>
        </header>
    )
}

export default Header
