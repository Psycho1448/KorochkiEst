export interface IFormInputData {
  name: string;
  id: string;
  placeholder: string;
  autoComplete: string;
  type: string;
}
export const formLoginData: IFormInputData[] = [
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
    autoComplete: 'current-password',
    type: 'password'
  }
]