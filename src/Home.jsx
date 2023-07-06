import React from 'react'
import { useGlobalContext } from './Context'

const Home = () => {
const {openSidebar,openModal}=useGlobalContext();
console.log(openSidebar,openModal)

  return (
    <div>
      Home
    </div>
  )
}

export default Home
