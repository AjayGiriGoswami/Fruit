import React from 'react'
import List from './Api'
import Cards from './Cards'

const Main = ({handleitem}) => {
  return (
    <div>
        {List.map((item)=>{
            return(
                <Cards item ={item} handleitem ={handleitem}/>
            )
        })}

    </div>
  )
}

export default Main