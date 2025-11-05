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

export const MaleSymbolIcon = (props: IconProps): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 9A6 6 0 1 1 9 9a6 6 0 0 1 12 0M3 15v2c0 1.886 0 2.828.586 3.414S5.114 21 7 21h2m-5-1l6.5-6.5"/></svg>
  )
}

export const FemaleSymbolIcon = (props: IconProps): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0 0v8m-3-3h6"/></svg>
  )
}
