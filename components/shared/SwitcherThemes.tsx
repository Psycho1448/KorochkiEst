import {themesData} from '@/data/themesData'
import {useTheme} from 'next-themes'
import {motion} from 'framer-motion'
export default function SwitcherThemes(){
 const {setTheme, theme} = useTheme()
  return <div className='max-w-max flex flex-row border border-neutral-300 dark:border-neutral-700 rounded-full p-1.25 gap-1.25 bg-neutral-100 dark:bg-neutral-900'>
   {themesData.map((item, index) => {
     return <button key={index} onClick={()=>setTheme(item.theme)} className='p-2 relative'>
       <span className='relative z-1'>{item.icon}</span>
       {theme===item.theme?
         <motion.span layoutId='switcherThemeBg'
                     className='border rounded-full border-neutral-300 dark:border-neutral-700 absolute inset-0 bg-white dark:bg-neutral-800'></motion.span>
       :
       null}
     </button>
   })}
 </div>
}