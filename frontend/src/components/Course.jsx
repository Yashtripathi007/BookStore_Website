import React from 'react'
import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom"
function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
     < h1 className="text-2xl font-semibold md:text-4xl"> We are happy to see you <span className="text-pink-500">here !!!</span></h1>
       <p className="mt-12 ">A library is a space where knowledge is organized, preserved, and shared. It provides access to a wide variety of books, journals, and digital resources that foster learning, research, and personal growth. Beyond just housing materials, libraries often offer community programs, quiet study areas, and access to technology, making them essential hubs for education and discovery. Whether for casual readers or serious researchers, libraries serve as gateways to information and ideas, supporting curiosity and lifelong learning.</p>
       <Link to="/">
       <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300
        mt-6">Back</button>
       </Link >
       </div>
       <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            list.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
          }
       </div>
    </div>
    </>
  )
}

export default Course
