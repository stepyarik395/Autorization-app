import React from 'react'
import styled from 'styled-components'

export const paginate = (currentPage, lastPage, clickEvent) => {
  const delta = 1
  const range = []

  for (let i = Math.max(2, (currentPage - delta)); i <= Math.min((lastPage - 1), (currentPage + delta)); i += 1) {
    range.push(i)
  }

  if ((currentPage - delta) > 2) {
    range.unshift('...')
  }

  if ((currentPage + delta) < (lastPage - 1)) {
    range.push('...')
  }

  range.unshift(1)
  if (lastPage !== 1) range.push(lastPage)

  return range.map((i, index) => {
    return (
      !isNaN(i)
        ? <StyleDottsButton
          value={i}
          key={index}
          onClick={() => clickEvent(i)}
          className={currentPage === i ? 'active' : ''}
        >{i}
        </StyleDottsButton>
        : <span key={index}>{i}</span>
    )
  })
}

const Paginator = ({ currentPage, lastPage, clickEvent }) => {
  return (
    <StyleSection>
      {paginate(currentPage, lastPage, clickEvent)}
    </StyleSection>
  )
}
export default Paginator

export const StyleSection = styled.section`
margin-top:20px;
width:400px;
display:flex;
justify-content:center;
align-items:center;
`
export const StyleDottsButton = styled.button`
outline:none;
border:2px solid #9932CC;
cursor:pointer;
margin-top:10px;
margin-left:5px;
margin-right:5px;
border-radius:50%;
margin:5px;
width:30px;
height:30px;
background-color:transparent;
`
