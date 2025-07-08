import React from 'react'
import Button from './Button'



// const li =["All","Gaming"]
const ButtonList = () => {
  return (
    <div className='flex pr-2 mt-4 shadow-xl  '>
     <Button name="All"></Button>
     <Button name="Gaming"></Button>
     <Button name="Songs"></Button>
     <Button name="Live"></Button>
     <Button name="Soccer"></Button>
     <Button name="Cooking"></Button>
     <Button name="Cricket"></Button>
     <Button name="News"></Button>
     <Button name="Entertainments"></Button>
    </div>
  )
}

export default ButtonList