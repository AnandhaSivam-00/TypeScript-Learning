import type {JSX} from 'react'

import type { PokeTypesColorType } from '../utils/types';

type RoundedPillProps = {
    text: string,
    color: string
}


const RoundedPill = ({ text, color }: RoundedPillProps): JSX.Element => {
    return (
        <div 
            className="inline-block w-auto h-auto px-3 rounded-full shadow-sm"
            style={{backgroundColor: `var(--color-${color})`}}
        >
            <span className='text-[0.7rem] m-0 font-bold'>{text}</span>
        </div>
    )
}

export default RoundedPill