import Link from 'next/link'
import { ChevronRightIcon, MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'



import { useRouter } from "next/router"
import { ChevronLeftIcon } from '@heroicons/react/outline';

function PaginationButtons() {

    const router = useRouter()
    const startIndex = Number(router.query.start) || 0;

    return (
        <div className="flex max-w-lg justify-between text-blue-700 mb-10">
            {startIndex >= 10 && (
              <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                <div className="flex flex-grow items-center flex-col cursor-pointer hover:underline">
                    <ChevronLeftIcon className="h-5"/>
                    <p>Previous</p>
                </div>
              </Link>  
            )}

            <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
                <div className="flex flex-grow items-center flex-col cursor-pointer hover:underline">
                    <ChevronRightIcon className="h-5"/>
                    <p>Next</p>
                </div>
            </Link>

        </div>
    )
}

export default PaginationButtons
