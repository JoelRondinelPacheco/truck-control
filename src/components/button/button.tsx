import React from 'react'

function Button({ children }: { children: React.ReactNode}) {
  return (
    <div className='px-4 py-1.5 rounded-md bg-main'>
        {children}
    </div>
  )
}

export default Button