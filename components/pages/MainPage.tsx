'use client'
import useNotifyContext from '@/hooks/useNotifyContext'
import StubHeader from '@/components/shared/stubs/StubHeader'
import useDataUser from '@/hooks/useDataUser'

export default function MainPage(){
  const {setIsNotify} = useNotifyContext()
  return <main className='min-h-screen'>
    <StubHeader/>
 </main>
}