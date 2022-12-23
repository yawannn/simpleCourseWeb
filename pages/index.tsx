import Head from 'next/head'
import Link from 'next/link'
import { SiGoogle, SiAcclaim } from 'react-icons/si'

export default function Home() {
  return (
    <div>
      <Head>
        <title>LearnBoost</title>
        <meta name="description" content="TailwindCSS & Next.JS" />
      </Head>
      <main className='h-screen'>
        <div className='md:flex md:flex-row'>
          <div className='hidden md:block md:basis-1/2 lg:basis-2/3 bg-[url(../public/login.png)]'>
          </div>
          <div className='my-14 py-4 px-4 max-w-prose md:basis-1/2 lg:basis-1/3'>
            <div className=' flex flex-col gap-8'>
              <h1 className='text-3xl font-bold'>Nice to see <p className='text-blue-600 inline-block'>you</p></h1>
              <input className='w-full h-8 bg-gray-100 px-4 rounded-lg placeholder-gray-400 focus:placeholder-opacity-0' type="text" placeholder='Enter Your E-mail' />
              <input className='w-full h-8 bg-gray-100 px-4 rounded-lg placeholder-gray-400 focus:placeholder-opacity-0' type="text" placeholder='Enter Password' />
            </div>
            <div className='my-4 flex flex-row justify-between py-4'>
              <div className='flex flex-row gap-2 items-baseline'>
                <input type='checkbox' />
                <p>Remember Me</p>
              </div>
              <div>
                <a className='text-blue-600 hover:underline' href="#">Forgot Password?</a>
              </div>
            </div>
            <div className='flex flex-col my-8 gap-8 max-w-lg'>
              <Link className='text-white text-center py-2 rounded-lg bg-blue-500 hover:border-2 hover:bg-white hover:border-blue-500 hover:text-blue-500' href="/this">Sign Up</Link>
              <button className='h-8 rounded-lg bg-black text-white hover:border-2 border-black hover:bg-white hover:text-black'>
                <p className='flex flex-row items-center gap-2 justify-center'>
                  <SiGoogle />
                  Sign up using Google
                </p>
              </button>
              <p className='text-center'>Dont have an account? <a className='text-blue-600' href="#">Sign up now</a></p>
            </div>
            <div className='my-16 flex flex-row items-baseline justify-center'>
              <SiAcclaim />
              <h1 className='text-xl font-semibold'>LearnBoost</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

