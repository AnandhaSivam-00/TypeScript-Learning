import {startTransition, type JSX} from 'react'

type CreditsModalProps = {
    isVisible: boolean,
    setOpenCreditsModal: (value: boolean) => void;
}

const CreditsModal = ({ isVisible, setOpenCreditsModal }: CreditsModalProps): JSX.Element => {
  return (
    <section className={`absolute inset-0 w-full min-h-screen bg-transparent p-3 flex flex-col justify-center items-center backdrop-blur-xl ${isVisible ? 'block' : 'hidden'}`}>
        <div className='bg-black w-full sm:max-w-[30rem] h-auto p-3 flex flex-col justify-center items-center rounded-lg drop-shadow-2xl drop-shadow-gray-3 border-2 border-gray-2'>
            <button 
                className='self-end px-2 pb-2 cursor-pointer hover:text-primary-accent-1'
                onClick={() => {
                    startTransition(() => {
                        setOpenCreditsModal(false);
                    })
                }}
            >
                X
            </button>
            <div className='w-full flex flex-col justify-center items-start gap-y-3 [&>h3]:mb-0! px-2 md:px-5'>
                <h3>About</h3>
                <p className='text-justify'>Pokéfetch is a chill React + TypeScript app that taps into the PokéAPI to pull in Pokémon info on the fly. Just search for a Pokémon, and boom — you get a clean, minimal card showing the essentials. No clutter, no chaos, just straight vibes and Pokédex energy.</p>

                <h3 className='mt-4!'>Credits</h3>
                <div className='w-full grid grid-cols-2 gap-x-3 pb-2 px-1'>
                    <p>Theme Inspiration</p>
                    <a href='https://www.claude.ai' target='_blank' className='inline text-[0.6rem] md:text-[0.8rem] text-black-accent-1 underline hover:text-black-accent-2 text-right'>claude.ai</a>
                    <p>RESTful API Interface</p>
                    <a href='https://pokeapi.co' target='_blank' className='inline text-[0.6rem] md:text-[0.8rem] text-black-accent-1 underline hover:text-black-accent-2 text-right'>pokéapi</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CreditsModal