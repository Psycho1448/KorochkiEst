import SwitcherThemes from '@/components/shared/SwitcherThemes'
import {motion} from 'framer-motion'
import React from 'react'
import useHeaderContext from '@/hooks/useHeaderContext'
import StubHeader from '@/components/shared/stubs/StubHeader'
import ButtonLogin from '@/components/shared/buttons/ButtonLogin'
import useDataUser from '@/hooks/useDataUser'
import ButtonLogout from '@/components/shared/buttons/ButtonLogout'
export default function MenuMobile(){
  const dataUser = useDataUser()
  const {setIsOpenMenu} = useHeaderContext()

  return <div className='fixed z-100 inset-0 flex justify-end'>
    <motion.div onClick={() => setIsOpenMenu(false)} key='containerMenu' initial={{opacity: 0}} animate={{opacity: 1}}
                exit={{opacity: 0}} className='bg-black/25 inset-0 absolute z-0'>
    </motion.div>
    <motion.div initial={{x: '100%'}} animate={{x: 0}} exit={{x: '100%'}} transition={{type: 'tween'}} key='contentMenu'
                className='w-5/6 bg-white dark:bg-[#212121] h-full z-1 relative p-2.5 flex flex-col'>
      <StubHeader/>
      <div className='flex flex-col gap-5'>
        {dataUser === null ?<ButtonLogin/>: <ButtonLogout/> }
        <div className='flex justify-end'>
          <SwitcherThemes/>
        </div>
      </div>
    </motion.div>
  </div>
}