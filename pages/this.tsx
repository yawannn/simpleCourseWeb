import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import { SiAcclaim } from "react-icons/si"
import { MdOutlineSearch, MdOutlineFavoriteBorder, MdOutlinePersonOutline } from 'react-icons/md'
import { CgGhostCharacter, CgGoogle, CgArrowUp, CgFacebook, CgDollar } from 'react-icons/cg'

export default function FirstPost() {
    return (
        <div>
            <Head>
                <title>LearnBoost</title>
                <meta name="description" content="TailwindCSS & Next.JS" />
            </Head>
            <>
                <main className='px-10 md:px-20 lg:px-40'>
                    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                        <div className="container flex flex-wrap items-center justify-between mx-auto">
                            <a href="#" className="flex items-center gap-4">
                                <SiAcclaim />
                                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">LearnBoost</span>
                            </a>
                            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            </button>
                            <div className="hidden w-full lg:block md:w-auto xl:flex xl:flex-row xl:items-center xl:gap-16" id="navbar-default">
                                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                        <Link href='/home' className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Customer</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Tasks</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Reporting</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-400 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Users</a>
                                    </li>
                                </ul>
                                <div className='hidden xl:flex xl:flex-row gap-8 items-center'>
                                    <MdOutlineSearch />
                                    <MdOutlineFavoriteBorder />
                                    <Link href='/'><MdOutlinePersonOutline /></Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <section className='my-10'>
                        <div className='flex flex-col'>
                            <div className='flex flex-row items-baseline gap-4'>
                                <h1 className='text-4xl font-semibold'>UI Masterclass</h1>
                                <p className='text-xs'>$1,620</p>
                            </div>
                            <p className='pb-8 max-w-sm'>
                                Everyone can learn UI Design! Join and learn UI Design with us from scratch!!
                            </p>
                            <div>
                                <div className='flex flex-col w-40 gap-4 text-black md:flex-row md:w-fit'>
                                    <button className='text-white flex flex-row items-center justify-center bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br transition duration-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Join Class</button>
                                    <button className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br transition duration-300 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Read Syllabus</button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='my-8 mt-8 flex flex-col gap-4 xl:flex-row lg:w-fit'>
                        <div className='max-w-xs px-4 py-4 text-left  rounded-xl border-2 hover:bg-black hover:text-white transition duration-300'>
                            <p className='text-lg font-semibold text-gray-500'>Total Members</p>
                            <div className='flex flex-row items-baseline justify-between lg:gap-28'>
                                <p className='text-3xl font-semibold'>1.620</p>
                                <p className='flex flex-row items-center font-semibold border border-black px-2 rounded-full '><CgArrowUp />20%</p>
                            </div>
                        </div>
                        <div className='max-w-xs px-4 py-4 rounded-xl border-2 hover:bg-black hover:text-white transition duration-300'>
                            <p className='text-lg font-semibold text-gray-500'>Enrolled Members</p>
                            <div className='flex flex-row items-baseline justify-between lg:gap-28'>
                                <p className='text-3xl font-semibold'>1.210</p>
                                <p className='flex flex-row items-center font-semibold border border-black px-2 rounded-full '><CgArrowUp />15%</p>
                            </div>
                        </div>
                        <div className='max-w-xs px-4 py-4 rounded-xl border-2 hover:bg-black hover:text-white transition duration-300'>
                            <p className='text-lg font-semibold text-gray-500'>Active Now</p>
                            <div className='flex flex-row items-baseline justify-between lg:gap-28'>
                                <p className='text-3xl font-semibold'>208</p>
                                <p className='flex flex-row items-center font-semibold border border-black px-2 rounded-full '><CgArrowUp />12%</p>
                            </div>
                        </div>
                    </section>
                    <section className='flex flex-col lg:flex-row gap-2 lg:gap-10'>
                        <div className='flex flex-col basis-1/2'>
                            <div className='lg:my-10'>
                                <h1 className='text-3xl font-semibold'>Other Courses</h1>
                                <div className='flex flex-col py-4 px-8 rounded-xl'>
                                    <div className='flex flex-row items-baseline gap-4'>
                                        <CgGoogle />
                                        <h1 className='text-lg font-medium '>SEO Engineering</h1>
                                        <p className='text-xs'>$820</p>
                                    </div>
                                    <p >Grow your skill set and prepare for a career in digital marketing and e-commerce. Enhance your resume with a Digital Marketing and E-commerce certificate from Google.
                                    </p>
                                </div>
                                <div className='flex flex-col py-4 px-8 rounded-xl'>
                                    <div className='flex flex-row items-baseline gap-4'>
                                        <CgDollar />
                                        <h1 className='text-lg font-medium'>Invest</h1>
                                        <p className='text-xs'>$1280</p>
                                    </div>
                                    <p >Learn how to start investing in the stock market. Build wealth using The Motley Fool's market-beating method.
                                    </p>
                                </div>
                                <div className='flex flex-col py-4 px-8 rounded-xl'>
                                    <div className='flex flex-row items-baseline gap-4'>
                                        <CgFacebook />
                                        <h1 className='text-lg font-medium'>Facebook Ad</h1>
                                        <p className='text-xs'>$940</p>
                                    </div>
                                    <p >Learn how to set up and manage ad campaigns for your business using Facebook
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='my-10 basis-1/2'>
                            <h1 className='text-3xl font-semibold'>Testimony</h1>
                            <div className='flex flex-col py-4 px-8 rounded-xl'>
                                <div className='flex flex-row items-baseline gap-4 py-4'>
                                    <CgGhostCharacter />
                                    <h3 className='text-xl font-semibold'>Riki Simalakama</h3>
                                    <p className='text-xs text-center'>2 days ago</p>
                                </div>
                                <p>This app is soooo awesome, I can't believe I can learn this fast!!</p>
                            </div>
                            <div className='flex flex-col py-4 px-8 rounded-xl'>
                                <div className='flex flex-row items-baseline gap-4 py-4'>
                                    <CgGhostCharacter />
                                    <h3 className='text-xl font-semibold'>Ayu Cantika Hayyu</h3>
                                    <p className='text-xs text-center'>4 days ago</p>
                                </div>
                                <p>This app helps me pass my exam, thank you LearnBoost</p>
                            </div>
                            <div className='flex flex-col py-4 px-8 rounded-xl'>
                                <div className='flex flex-row items-baseline gap-4 py-4'>
                                    <CgGhostCharacter />
                                    <h3 className='text-xl font-semibold'>Danang Sajidah</h3>
                                    <p className='text-xs text-center'>7 days ago</p>
                                </div>
                                <p>It's helping me learn alot!! there's plenty course that I could take</p>
                            </div>
                        </div>
                    </section>
                    <div className='max-w-lg'>
                        <h1 className='text-3xl font-semibold'>About</h1>
                        <p className='py-4 px-8 rounded-xl'>LearnBoost is an app full of course you could take, feel the immense in a sea of knowledge, be with us and join LearnBoost courses!!
                        </p>
                    </div>
                </main>
            </>
        </div>

    );
}