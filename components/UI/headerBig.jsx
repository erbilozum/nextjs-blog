import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Image from 'next/image';

const HeaderBig = (props) => {
    return (
        <div className={"z-30"}>
            <div className='flex flex-row justify-between'>
                {/*Logo*/}
                <div className='flex items-center'>
                    <Image
                        src='/logos/logo-akasha.png'
                        alt="akasha_yoha"
                        width={150}
                        height={200} />
                </div>
                {/*Center*/}
                <div className='flex'>
                    <nav>
                        <ul className='flex flex-row justfiy-between items-center space-x-2 '>
                            <li className='  space-x-4 flex flex-row '>
                                {
                                    props.data.map((item, index) => (
                                        <div key={index} className={"px-2  pt-5 pb-2 hover:bg-[#e7c100] duration-500 ease-in-out transition-all"} >
                                            <Link activeClass="active" to={item.linkUrl} spy={true} smooth={true} offset={50} duration={800} >
                                                <span className='cursor-pointer text-lg  text-gray-700 hover:text-white'>{item.descripton}</span>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </li>
                        </ul>
                    </nav>
                </div>
                {/*Right*/}
                <div className='flex flex-row items-center ml-4 justify-center'>
                    <FaWhatsapp className={"text-xl text-gray-700  duration-500 ease-in-out transition-all hover:text-[#e7c100]"} />
                    <a className='flex  text-gray-700 duration-500 ease-in-out transition-all no-underline hover:text-[#e7c100] ml-2 flex-nowrap cursor-pointer' href="https://wa.me/+905334193264" target='_blank'>0850 440 09 51</a>
                </div>
            </div>
        </div>
    )
}

export default HeaderBig