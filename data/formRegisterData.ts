import {IFormInputData} from '@/data/formLoginData'
export const formRegisterData: IFormInputData[] = [
  {
    name:'login',
    id: 'loginId',
    placeholder: 'Введите логин',
    autoComplete: 'username',
    type: 'text'
  },
  {
    name: 'password',
    id: 'passwordId',
    placeholder: 'Введите пароль',
    autoComplete: 'new-password',
    type: 'password'
  },
  {
    name: 'FIO',
    id: 'FIOId',
    placeholder: 'Введите ФИО',
    autoComplete: 'username',
    type: 'text'
  },
  {
    name: 'tel',
    id: 'telId',
    placeholder: 'Введите номер телефона',
    autoComplete: 'tel',
    type: 'tel'
  },
  {
    name: 'email',
    id: 'emailId',
    placeholder: 'Введите электронную почту',
    autoComplete: 'email',
    type: 'email'
  }
]