import {cookies} from 'next/headers'
import {NextResponse} from 'next/server'
import {ValidateJWT} from '@/lib/jwt'

export async function GET(){
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value
  if(!token){
    return NextResponse.json({ok: false, user: null})
  }
  const validToken = ValidateJWT({token:token})
  if(!validToken){
    cookieStore.delete('token')
    return NextResponse.json({ok: false, user: null})
  }else {
    return NextResponse.json({ok: true, user: validToken})
  }
}