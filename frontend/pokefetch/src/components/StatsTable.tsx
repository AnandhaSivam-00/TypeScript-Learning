import React, { useState, useEffect, type JSX } from 'react'

import ProgressBar from './ProgressBar';

import { getRoundedValue } from '../utils/helperFunctions';

import type { PokemonStatsType } from '../utils/types';

const StatsTable = ({statsData, color}: { statsData: PokemonStatsType, color: string }): JSX.Element => {
    const [marks, setMarks] = useState<number[]>([]);

    useEffect(() => {
        const statsValues: number[] = [];

        for(const value of Object.values(statsData)) {
            statsValues.push(value);
            // console.log(value);
        }
        setMarks(statsValues);

        // console.log(statsValues);
    }, []);

  return (
    <>
        {marks.length > 0 && (
            <div className='w-full h-auto flex flex-col justify-start items-center gap-x-3 gap-y-2'>
                {["HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed"].map((statName, index) => {
                    return (
                        <div key={index} className='w-full grid grid-cols-12'>
                            <div className='col-span-3 text-right me-6 text-gray-4/60!'>
                                <p className='mb-0!'>{statName}</p>
                            </div>
                            <div className='col-span-1 my-auto'>
                                <p className='mb-0!'>{marks[index]}</p>
                            </div>
                            <div className='col-span-8 my-auto'>
                                <ProgressBar 
                                    mark={getRoundedValue(marks[index])}
                                    color={color}
                                />
                            </div>
                        </div>
                    )}
                )}
            </div>
        )}
    </>
  )
}

export default StatsTable