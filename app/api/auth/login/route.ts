import {z} from 'zod'
import {NextResponse} from 'next/server'
import {prisma} from '@/lib/prisma'
import bcrypt from 'bcrypt'
import {GenerateJWT} from '@/lib/jwt'
import {cookies} from 'next/headers'

const loginSchema = z.object({
  login: z.string('Укажите логин').min(6, 'Укажите логин'),
  password: z.string('Укажите пароль').min(8, 'Укажите пароль')
})

export async function POST(req: Request) {
  const body = await req.json()
  const check = loginSchema.safeParse(body.data)
  const cookieStore = await cookies()
  if (!check.success) {
    return NextResponse.json({ok: false, error: check.error.issues[0].message})
  } else {
    const findUser = await prisma.users.findFirst({where: {login: check.data.login}, select: {password: true, id:true}})
    if (!findUser) {
      return NextResponse.json({ok: false, error: 'Неверный логин или пароль'})
    }
    const checkPass = await bcrypt.compare(check.data.password, findUser.password)
    if (!checkPass) {
      return NextResponse.json({ok: false, error: 'Неверный логин или пароль'})
    } else {
      const user = await prisma.users.findFirst({where: {login: check.data.login}, select: {id:true, login:true, email:true, role:true}})
      if (!user) {
        return NextResponse.json({ok:false, error:'Неизвестная ошибка'})
      }
      const token = GenerateJWT({props:{id:user.id,role:user.role, email:user.email, date:new Date(Date.now()), login:user.login}})
      cookieStore.set({name:'token', value:token, sameSite:'strict', httpOnly:true, maxAge:60*60, secure:process.env.NODE_ENV === 'production', path:'/'})
      await prisma.tokens.create({data: {token: token, userId: findUser.id}})
      return NextResponse.json({ok: true, message: 'Успешно'})
    }
  }
}