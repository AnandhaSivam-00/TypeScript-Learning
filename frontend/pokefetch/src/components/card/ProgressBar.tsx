import type {JSX} from 'react'

import { backdropColors } from '../../utils/colors'
import type { BackdropColorsType } from '../../utils/types'

type ProgressBarProps = {
    mark: number;
    color: string;
}

const ProgressBar = ({mark, color}: ProgressBarProps): JSX.Element => {
    return (
        <div className="w-full h-[0.2rem] md:h-1.5 bg-gray-5 relative rounded-full">
            <div 
                className="h-full rounded-full absolute inset-0"
                style={{
                    width: `${mark}%`,
                    backgroundColor: `${backdropColors[color as BackdropColorsType]}`
                }}
            >
            </div>
        </div>
    )
}

export default ProgressBar