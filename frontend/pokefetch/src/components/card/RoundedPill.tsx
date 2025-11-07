import type {JSX} from 'react'

import type { PokeTypesColorType } from '../../utils/types';
import { pokeTypeBgColors } from '../../utils/colors';

type RoundedPillProps = {
    text: string;
    color: PokeTypesColorType;
}

const RoundedPill = ({ text, color }: RoundedPillProps): JSX.Element => {
    return (
        <div className={`inline-block w-auto h-auto px-3 rounded-full ${pokeTypeBgColors[color]}`}>
            <span className='text-[0.7rem] m-0 font-semibold text'>{text}</span>
        </div>
    )
}

export default RoundedPill