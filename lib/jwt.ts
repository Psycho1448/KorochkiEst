import jwt from 'jsonwebtoken'

export interface IJWTPayload {
  id: string
  login:string
  role:string
  email:string
  date: Date
}
export function GenerateJWT({props}: {props: IJWTPayload }){
  const secret = process.env.JWT_SECRET
  if(!secret){
    throw new Error('Missing JWT secret')
  }
  return jwt.sign({props}, secret, {expiresIn: '1h'})
}
export function ValidateJWT({token}:{token: string}){
  const secret = process.env.JWT_SECRET
  if(!secret){
    throw new Error('Missing JWT secret')
  }
  return jwt.verify(token, secret)
}