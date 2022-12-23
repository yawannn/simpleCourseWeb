import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { SiAcclaim } from "react-icons/si"
import { MdDehaze } from 'react-icons/md'
import informative from '../public/informative.png'
import active from '../public/active.png'
import communicative from '../public/communicative.png'


const home = () => {
    return (
        <div>
            <Head>
                <title>LearnBoost</title>
                <meta name="description" content="TailwindCSS & Next.JS" />
            </Head>
            <main className='px-8 py-2'>
                <nav className='sticky flex flex-row items-baseline justify-between'>
                    <div className='flex flex-row items-center gap-2'>
                        <SiAcclaim />
                        <h1 className='text-lg font-semibold'>LearnBoost</h1>
                    </div>
                    <div>
                        <MdDehaze />
                    </div>
                </nav>
                <section className=' my-8 min-h-screen flex flex-row'>
                    <div className='py-4 flex flex-col gap-4 xl:py-16'>
                        <h1 className='py-4 text-5xl font-semibold tracking-wider md:max-w-lg'>
                            Feel learning with ease in anything, anytime, anywhere
                        </h1>
                        <p className='text-lg md:max-w-md'>LearnBoost can help you acquire many knowledge that you can by facilitate you with abundance of courses that you could take anytime, anywhere</p>
                        <div className='py-4 flex flex-row'>
                            <Link href='/'>
                                <h1 className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br transition duration-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Sign Up Now</h1>
                            </Link>
                        </div>
                    </div>
                    <div className='hidden lg:block lg'>
                        <img src="programming.png" alt="" />
                    </div>

                </section>
                <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <section className='my-8 min-h-screen'>
                    <h1 className='align-middle content-center py-4 text-center text-4xl'>Key Feature and Why Us?</h1>
                    <div className='flex flex-col justify-center gap-4 lg:flex-row'>
                        <div className='py-4 px-4 flex flex-col text-center shadow-lg rounded-lg align-baseline'>
                            <Image src={informative} alt='Informative' />
                            <h1 className='text-xl py-4 font-semibold'>Informative</h1>
                            <p className='pb-4'>LearnBoost provides a full explanation and also beginner friendly, so everyone can learn!</p>
                        </div>
                        <div className='py-4 px-4 flex flex-col text-center shadow-lg rounded-lg'>
                            <Image src={active} alt='Active' />
                            <h1 className='text-xl py-4 font-semibold'>Active</h1>
                            <p className='pb-4'>LearnBoost with wide and immense active user and community, will help you learn and grow together!</p>
                        </div>
                        <div className='py-4 px-4 flex flex-col text-center shadow-lg rounded-lg'>
                            <Image src={communicative} alt='Communicative' />
                            <h1 className='text-xl py-4 font-semibold'>Communicative</h1>
                            <p className='pb-4'>LearnBoost with learning design won't let you down by feeling our learning experience, communicative and helpful tutor can help you learn anything you want</p>
                        </div>
                    </div>
                </section>
                <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <section className='lg:min-h-screen'>
                    <div className='flex flex-col text-center lg:flex-row lg:my-24'>
                        <img className='md:basis-1/2 self-center' width='250' height='250' src="daftar.png" alt="WKKWK" />
                        <div className='lg:py-36 lg:basis-1/2 lg:text-left'>
                            <h3 className='lg:text-xl'><p className='text-cyan-400 inline-block'>LearnBoost</p> encourages you</h3>
                            <h1 className='py-4 text-2xl lg:text-4xl font-medium'>Apply! Join Our Course</h1>
                            <p className='pb-4'>There's plenty of courses that you could choose, start from the bottom to the top with us</p>
                            <button className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br transition duration-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Apply</button>
                        </div>
                    </div>
                </section>
                <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <section className='lg:min-h-screen'>
                    <div className='flex flex-col text-center lg:flex-row lg:my-24'>
                        <img className='md:basis-1/2 self-center' width='250' height='250' src="belajar.png" alt="WKKWK" />
                        <div className='lg:py-36 lg:basis-1/2 lg:text-left'>
                            <h3 className='lg:text-xl'><p className='text-cyan-400 inline-block'>LearnBoost</p> lets you</h3>
                            <h1 className='py-4 text-2xl lg:text-4xl font-medium'>Look our Syllabus</h1>
                            <p className='pb-4'>Look deeper into our syllabus, if you're interested come and join us</p>
                            <button className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br transition duration-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Look Syllabus</button>
                        </div>
                    </div>
                </section>
                <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <section className='lg:min-h-screen'>
                    <div className='flex flex-col text-center lg:flex-row lg:my-24'>
                        <img className='md:basis-1/2 self-center' width='250' height='250' src="karir.png" alt="WKKWK" />
                        <div className='lg:py-32 lg:basis-1/2 lg:text-left'>
                            <h3 className='lg:text-xl'><p className='text-cyan-400 inline-block'>LearnBoost</p> can get you</h3>
                            <h1 className='py-4 text-2xl lg:text-4xl font-medium'>A Career, see your career roadmap</h1>
                            <p className='pb-4'>LearnBoost care about your future, see your career roadmap and learn with us</p>
                            <button className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br transition duration-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Career Roadmap</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>

    )
}

export default home