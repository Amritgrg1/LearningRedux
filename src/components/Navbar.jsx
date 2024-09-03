import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const count = useSelector((state) => state.count.value);
  return (
    <div>navbar from count is:{count}</div>
  )
}

export default Navbar