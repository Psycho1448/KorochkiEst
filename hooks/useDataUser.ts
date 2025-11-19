import {useContext} from 'react'
import {DataContext} from '@/context/DataContext'

export default function useDataUser(){
  return useContext(DataContext)
}