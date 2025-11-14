import { useState, startTransition, type JSX } from 'react'

import CreditsModal from './CreditsModal'

import PokeFetchLogoOriginal from '../assets/pokefetch-icon-original.png';

const Footer = (): JSX.Element => {
    const [openCreditsModal, setOpenCreditsModal] = useState<boolean>(false);

    return (
        <>
            <footer className='bg-black-background w-full h-auto px-3 py-2 pt-4 overflow-hidden'>
                <div className='w-full relative bg-transparant z-1'>
                    <h5 className='font-semibold!'>BY LITTLE THINKER</h5>

                    <div className='w-full flex flex-col sm:flex-row justify-start sm:justify-between items-start gap-2 [&>span,a]:text-xs [&>span,a]:text-gray-4'>
                        <span>@{new Date().getFullYear()}</span>
                        <a href="http://github.com/AnandhaSivam-00/" target='_blank' className='underline hover:text-black-accent-2'>github.com/AnandhaSivam-00</a>
                    </div>

                    <button 
                        className='text-[0.5rem] text-black-accent-1 underline hover:text-black-accent-2 mt-1 cursor-pointer'
                        onClick={() => {
                            startTransition(() => {
                                setOpenCreditsModal(true);
                            })
                        }}
                    >
                        About & Credits
                    </button>

                    <img
                        src={PokeFetchLogoOriginal}
                        alt='footer back logo'
                        className='w-auto h-full object-cover absolute right-0 bottom-0 z-0 opacity-20 transform translate-x-5 translate-y-5 -rotate-30 pointer-events-none'
                    />
                </div>
            </footer>

            <CreditsModal 
                isVisible={openCreditsModal} 
                setOpenCreditsModal={setOpenCreditsModal}
            />
        </>
    )
}

export default Footer