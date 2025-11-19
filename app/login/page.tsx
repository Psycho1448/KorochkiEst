'use client'
import React from 'react'
import {formLoginData} from '@/data/formLoginData'
import FormInput from '@/components/shared/inputs/FormInput'
import Link from 'next/link'
import usePendingContext from '@/hooks/usePendingContext'
import useNotifyContext from '@/hooks/useNotifyContext'
import {useRouter} from 'next/navigation'
export default function Page(){
  const {setPending, pending} = usePendingContext()
  const {setIsNotify, setMessage} = useNotifyContext()
  const router = useRouter()
 async function handleLogin(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
   const formData = new FormData(e.currentTarget)
   const data = Object.fromEntries(formData)
   setPending(async ()=>{
     const req = await fetch('/api/auth/login', {
       method: 'POST',
       headers: {'Content-Type':'application/json'},
       body: JSON.stringify({data})
     })
     const res = await req.json()
     if(res.ok){
       setIsNotify(true)
       setMessage(res.message)
       window.location.reload()
     }else {
       setIsNotify(true)
       setMessage(`Ошибка: ${res.error}`)
     }
   })
 }
  return<form onSubmit={handleLogin} className='flex flex-col max-w-150 w-full gap-2.5 p-2.5 bg-white rounded-2xl border border-neutral-300 dark:border-neutral-700 dark:bg-[#212121] items-center'>
     <p className='text-center text-lg font-medium text-neutral-800 dark:text-neutral-200'>Вход в аккаунт</p>
     {formLoginData.map((data)=><FormInput props={data} key={data.id}/>)}
     <Link href={'/register'} className='select-none text-center text-sm text-neutral-600 dark:text-neutral-400 max-w-max transition-colors duration-300 ease-out hover:text-blue-500'>Еще не зарегистрированы? Регистрация</Link>
     <button type='submit' disabled={pending} className='cursor-pointer disabled:cursor-default disabled:bg-neutral-400 dark:disabled:bg-neutral-700 select-none w-full bg-violet-500 dark:bg-violet-600 py-1.25 rounded-md font-medium text-white hover:bg-violet-400 dark:hover:bg-violet-500 active:bg-violet-600 dark:active:bg-violet-700 transition-colors duration-300 ease-out'>{pending?'Входим':'Войти'}</button>
   </form>
}