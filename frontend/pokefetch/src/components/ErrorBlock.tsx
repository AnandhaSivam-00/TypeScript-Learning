import React, { type JSX } from 'react'

const ErrorBlock = ({message}: {message: string}): JSX.Element => {
  return (
    <div className='max-w-md inline-block text-center text-wrap bg-error border-2 border-error-border rounded-md shadow-lg px-3 py-2'>
        <p className='mb-0!'>{message}</p>
    </div>
  )
}

export default ErrorBlock