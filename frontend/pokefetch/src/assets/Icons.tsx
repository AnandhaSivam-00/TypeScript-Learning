import type {JSX} from 'react'

type IconProps = {
  width: string;
  height: string;
}

export const SearchIcon = (props: IconProps): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m17 17l4 4m-2-10a8 8 0 1 0-16 0a8 8 0 0 0 16 0"/></svg>
  )
}