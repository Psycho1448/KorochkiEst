'use client'
import Link from 'next/link'
import React from 'react'
import {formRegisterData} from '@/data/formRegisterData'
import FormInput from '@/components/shared/inputs/FormInput'
import usePendingContext from '@/hooks/usePendingContext'
import useNotifyContext from '@/hooks/useNotifyContext'
import {useRouter} from 'next/navigation'
import useDataUser from '@/hooks/useDataUser'
import {calcBackoffMs} from 'next/dist/lib/recursive-delete'

export default function Page(){
  const {setPending, pending} = usePendingContext()
  const {setIsNotify, setMessage} = useNotifyContext()
  const router = useRouter()
  async function handleRegister(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    setPending(async ()=>{
      const req = await fetch('/api/auth/register', {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({data})
      })
      const res = await req.json()
      if(res.ok){
        setIsNotify(true)
        setMessage(res.message)
        router.push('/login')
      }else {
        setIsNotify(true)
        setMessage(`Ошибка: ${res.error}`)
      }
    })
  }
  return <form onSubmit={handleRegister} className='max-w-150 flex flex-col gap-2.5 w-full items-center bg-white dark:bg-[#212121] rounded-2xl border border-neutral-300 dark:border-neutral-700 p-2.5'>
    <p className='text-neutral-800 dark:text-neutral-200 text-lg font-medium'>Регистрация аккаунта</p>
    {formRegisterData.map((data)=>{return <FormInput props={data} key={data.id}/>})}
    <Link href={'/login'} className='text-sm text-neutral-600 dark:text-neutral-400 select-none transition-colors duration-300 ease-out hover:text-blue-500'>Есть аккаунт? Войти</Link>
    <button type='submit' disabled={pending} className='w-full disabled:cursor-default disabled:bg-neutral-400 dark:disabled:bg-neutral-700 select-none bg-green-500 dark:bg-green-600 hover:bg-green-400 dark:hover:bg-green-500 active:bg-green-600 dark:active:bg-green-700 transition-colors duration-300 ease-out py-1.25 text-white cursor-pointer rounded-md'>{pending?'Регистрируем':'Зарегистрироваться'}</button>
  </form>
}