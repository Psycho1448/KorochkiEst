export default function ButtonLogout(){
  async function logout(){
    const req = await fetch('/api/logout',{
      method:'GET'
    })
    const res = await req.json()
    if(res.ok){
      window.location.reload()
    }
  }
  return <button className='bg-red-500 dark:bg-red-600 py-1.25 rounded-md cursor-pointer transition-colors duration-300 ease-out hover:bg-red-400 dark:hover:bg-red-500 active:bg-red-600 dark:active:bg-red-700 font-medium lg:px-2.5' onClick={()=>logout()}>Выход</button>
}