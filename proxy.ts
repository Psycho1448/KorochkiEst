import {NextRequest, NextResponse} from 'next/server'
import {cookies} from 'next/headers'
import {ValidateJWT} from '@/lib/jwt'

export async function proxy(req:NextRequest){
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value
  if(!token){
    return NextResponse.next()
  }else {
    const validToken = ValidateJWT({token:token})
    if(!validToken){
      cookieStore.delete('token')
      return NextResponse.redirect(new URL('/', req.url))
    }
    const publicRoutes = ['/login', '/register']
    if(typeof validToken !== 'string' && publicRoutes.includes(req.nextUrl.pathname)){
      return NextResponse.redirect(new URL('/', req.url))
    }
  }
}