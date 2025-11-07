import type {JSX} from 'react'

import { MaleSymbolIcon, FemaleSymbolIcon } from '../../assets/Icons'

const GenderRenderer = ({ genderRate }: { genderRate: number }): JSX.Element => {
    switch(genderRate) {
        case -1:
            return (
                <span className='text-[0.5rem] text-gray-2'>Genderless</span>
            );
        case 0:
            return (
                <MaleSymbolIcon width='1.5rem' height='1.5rem' />
            );
        case 1:
            return (
                <div className='flex flex-row justify-center items-center gap-x-1'>
                    <MaleSymbolIcon width='1.5rem' height='1.5rem' />
                    <FemaleSymbolIcon width='0.5rem' height='0.5rem' />
                </div>
            );
        case 2:
            return (
                <div className='flex flex-row justify-center items-center gap-x-1'>
                    <MaleSymbolIcon width='1.5rem' height='1.5rem' />
                    <FemaleSymbolIcon width='1rem' height='1rem' />
                </div>
            );
        case 4:
            return (
                <div className='flex flex-row justify-center items-center gap-x-1'>
                    <MaleSymbolIcon width='1.5rem' height='1.5rem' />
                    <FemaleSymbolIcon width='1.5rem' height='1.5rem' />
                </div>
            );
        case 6:
            return (
                <div className='flex flex-row justify-center items-center gap-x-1'>
                    <MaleSymbolIcon width='1rem' height='1rem' />
                    <FemaleSymbolIcon width='1.5rem' height='1.5rem' />
                </div>
            );
        case 8:
            return (
                <FemaleSymbolIcon width='1.5rem' height='1.5rem' />
            );
        default:
            return (
                <span className='text-[0.5rem] text-gray-2'>-</span>
            )
    }
}

export default GenderRenderer;