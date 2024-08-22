import React from 'react'

function Button({children,...props}) {
  return (
    <div 
    {...props}
    className= ' w-auto flex items-center justify-between rounded-md  bg-white px-2 py-4 h-1/2 border border-gray-400 text-l mx-3 cursor-pointer hover:border-blue-950'>
      {children}
    </div>
  )
}

export default Button
