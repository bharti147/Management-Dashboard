import React from 'react'


function Widget({widgetName,widgetDesc}) {
  return (
    <div className='border border-slate-300 shadow-md mx-4 my-4 h-52 bg-white flex flex-col p-4 rounded-xl'>
    
       <h1 className='bg-inherit font-bold'>{widgetName}</h1>
       <p className='bg-inherit'>{widgetDesc}</p>
      
    </div>
  )
}

export default Widget
