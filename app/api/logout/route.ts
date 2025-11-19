import {cookies} from 'next/headers'
import { NextResponse} from 'next/server'
import {prisma} from '@/lib/prisma'
import {ValidateJWT} from '@/lib/jwt'

export async function GET(){
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  if (!token) {
    return NextResponse.json({ok:false})
  }
  const validToken = ValidateJWT({token: token.value})
  if (!validToken) {
    return NextResponse.json({ok:false})
  }
  if(typeof validToken === 'object') {
    await prisma.tokens.deleteMany({where:{userId:validToken.id}})
    cookieStore.delete('token')
    return NextResponse.json({ok:true})
  }
}