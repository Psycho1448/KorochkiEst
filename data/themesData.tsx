import {JSX} from 'react'
import MonitorIcon from '@/components/icons/MonitorIcon'
import SunIcon from '@/components/icons/SunIcon'
import MoonIcon from '@/components/icons/MoonIcon'

interface IThemesData {
  theme: string
  icon: JSX.Element
}
export const themesData: IThemesData[] = [
  {
    theme:'system',
    icon: <MonitorIcon/>
  },
  {
    theme:'light',
    icon: <SunIcon/>
  },
  {
    theme:'dark',
    icon: <MoonIcon/>
  }
]