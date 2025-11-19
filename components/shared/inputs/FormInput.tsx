import {IFormInputData} from '@/data/formLoginData'
import usePendingContext from '@/hooks/usePendingContext'

export default function FormInput({props}:{props:IFormInputData}){
  const {pending} = usePendingContext()
 return <input disabled={pending} type={props.type} placeholder={props.placeholder} name={props.name} id={props.id} autoComplete={props.autoComplete} className='border rounded-md p-1.25 w-full outline-none border-neutral-300 dark:border-neutral-700 transition-colors duration-300 ease-out focus:border-neutral-500'/>
}