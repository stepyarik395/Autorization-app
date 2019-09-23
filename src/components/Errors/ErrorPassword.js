import React from 'react'
import styled from 'styled-components'
const ErrorPassword = () => {
  return (
    <StyleMessegeError>
        Вы ввели пароль меньше 6 символов
    </StyleMessegeError>
  )
}

export default ErrorPassword

export const StyleMessegeError = styled.label`
margin-top:0.5rem;
display:block;
`