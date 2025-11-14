'use client'
import {useEffect, useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
export default function Preloader(){
 const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(()=>{
      setLoading(false);
    },1000)
  }, [])
  return<AnimatePresence>
    {loading
      ?
      <motion.div key={'preloader'} exit={{opacity:0}} className='flex flex-col items-center gap-1.25 justify-center fixed z-1000 bg-white dark:bg-[#212121] inset-0'>
        <div className='flex flex-row gap-1.25'>
          {[Array(5).fill(0).map((_,index)=>{
            return <motion.div animate={{y:-5}} transition={{delay: index*0.2, repeatDelay:0.5, repeat:Infinity, repeatType:'mirror', duration:0.5}} key={index} className='bg-neutral-600 dark:bg-neutral-400 w-3 aspect-square rounded-full'></motion.div>
          })]}
        </div>
        <p className='text-neutral-800 dark:text-neutral-200 text-lg font-medium'>Загрузка...</p>
      </motion.div>
      :
      null}
  </AnimatePresence>
}