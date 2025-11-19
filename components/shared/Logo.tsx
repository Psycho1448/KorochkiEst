import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/img/logo.png'
import useHeaderContext from '@/hooks/useHeaderContext'
export default function Logo(){
  const {setIsOpenMenu} = useHeaderContext()
 return <Link href={'/'} onClick={()=>setIsOpenMenu(false)} className='flex gap-1.25 flex-row items-center text-neutral-900 dark:text-neutral-100 text-2xl md:text-3xl font-bold'><Image src={logo} alt='logo' width={64} height={64} className='hidden md:block md:w-16 md:h-16 rounded-md'/><p>Корочки есть</p></Link>
}