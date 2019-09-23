import React from 'react'
import styled from 'styled-components'


 const MainPreloader = () =>{
  return(
    <WrapperLoader>
       <div className="loader" id="loader-1"></div>
    </WrapperLoader>

  ) 
}
export default MainPreloader

export const WrapperLoader = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:90vh;
`


