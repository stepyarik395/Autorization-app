import React from 'react'
import { StyleSection } from './StylePaginator'

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
        ? <button
          value={i}
          key={index}
          onClick={() => clickEvent(i)}
          className={currentPage === i ? 'active' : 'buttons'}
        >
        {i}
        </button>
        : <span key={index}>{i}</span>
    )
  })
}

const Paginator = ({ currentPage, lastPage, clickEvent }) => {
  return (
    <StyleSection className='pagination'>
      {paginate(currentPage, lastPage, clickEvent)}
    </StyleSection>
  )
}
export default Paginator
