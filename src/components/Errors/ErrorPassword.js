import React from 'react'
import { StyleMessegeError } from '../Errors/StyleErrorPassword'
const ErrorPassword = () => {
  return (
    <div>
      <strong>
        <StyleMessegeError>
              Вы ввели пароль меньше 6 символов
        </StyleMessegeError>
      </strong>
    </div>
  )
}

export default ErrorPassword
