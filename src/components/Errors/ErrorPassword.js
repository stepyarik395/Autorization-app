import React from 'react'
import { StyleMessegeError } from '../Errors/StyleErrorPassword'
const ErrorPassword = () => {
  return (
    <StyleMessegeError>
        Вы ввели пароль меньше 6 символов
    </StyleMessegeError>
  )
}

export default ErrorPassword
