import useHeaderContext from '@/hooks/useHeaderContext'

export default function MenuIcon(){
  const {isOpenMenu} = useHeaderContext()
 return <svg viewBox="0 0 24 24" className='fill-none w-6 h-6' xmlns="http://www.w3.org/2000/svg">
   <path d="M3 12H21" className='stroke-2 stroke-neutral-700 dark:stroke-neutral-300' style={{strokeLinecap:'round', strokeLinejoin:'round'}}/>
   <path d="M3 6H21" className={`transition-transform duration-300 ease-out stroke-2 stroke-neutral-700 dark:stroke-neutral-300 ${isOpenMenu&&'translate-y-1.5'}`} style={{strokeLinecap:'round', strokeLinejoin:'round'}}/>
   <path d="M3 18H21" className={`transition-transform duration-300 ease-out stroke-2 stroke-neutral-700 dark:stroke-neutral-300 ${isOpenMenu&&'-translate-y-1.5'}`} style={{strokeLinecap:'round', strokeLinejoin:'round'}}/>
 </svg>

}