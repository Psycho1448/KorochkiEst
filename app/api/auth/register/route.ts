import {z} from 'zod'
import {NextResponse} from 'next/server'
import {prisma} from '@/lib/prisma'
import bcrypt from 'bcrypt'
const schemaRegister = z.object({
  login: z.string('Укажите логин').min(6, 'Логин должен быть минимум 6 символов').regex(/^[a-zA-Z0-9]+$/, 'Логин может содержать только латиницу и цифры'),
  password: z.string('Укажите пароль').min(8, 'Пароль должен быть минимум 8 символов'),
  FIO: z.string('УКажите ФИО').regex(/^[А-Яа-яЁё\s]+$/, 'Неправильно указаны ФИО'),
  tel: z.string('Укажите телефон').min(11, 'Телефон должен быть в формате: 8(XXX)XXX-XX-XX').max(11, 'Телефон должен быть в формате: 8(XXX)XXX-XX-XX'),
  email: z.string('Укажите email').regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Неккоректная почта'),
})
export async function POST(req:Request){
  const body = await req.json()
  const check = schemaRegister.safeParse(body.data)
  if(!check.success){
    return NextResponse.json({ok:false, error:check.error.issues[0].message})
  }else {
    const existUser = await prisma.users.findFirst({where:{login:{equals:check.data.login, mode:'insensitive'}}})
    if(existUser){
      return NextResponse.json({ok:false, error:'Пользователь с таким логином уже существует'})
    }
    const hashPassword = await bcrypt.hash(check.data.password, 12)
    await prisma.users.create({data:{login:check.data.login, password:hashPassword, FIO:check.data.FIO, tel:check.data.tel, email:check.data.email}})
    return NextResponse.json({ok:true, message:'Успешно'})
  }
}