import type {JSX, ReactNode} from 'react'

const CardTail = ({ children }: { children: ReactNode }): JSX.Element => {
    return (
        <div className='w-auto min-h-[4rem] flex flex-col justify-center items-center gap-y-1 px-3 py-1 bg-gray-1 hover:bg-gray-5 border border-gray-2/40 hover:border-gray-3 rounded-md cursor-pointer transition-colors duration-500 ease-in-out [&>h6]:text-sm! [&>h6]:mb-0! [&>p]:mb-0! [&>p]:text-xl!'>
            {children}
        </div>
    )
}

export default CardTail;