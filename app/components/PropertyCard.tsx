'use client'

import Link from 'next/link'
import Image from 'next/image'
import s from '@/app/ui/main.module.css'
import { useState, useLayoutEffect } from 'react'

interface PropertyCardProps {
    id: string
    imageUrl: string
    altText: string
    title: string
    description?: string
    location: string
    bedrooms: number
    bathrooms: number
    area: string
    price: string
}

export const PropertyCard = (props: PropertyCardProps) => {
    const [isLargeScreen, setIsLargeScreen] = useState(false)

    useLayoutEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 640)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className={`${isLargeScreen ? s.propPic : ''} mt-[43px] w-full sm:w-[304px]`}>
            <Link href={`/project?id=${props.id}`}>
                <Image src={props.imageUrl} alt={props.altText} width={304} height={293} className='max-[639px]:w-full'/>
            </Link>
            <div className='mt-[15px] ml-[10px]'>
                <div className=' text-[15px] font-[700]'>{props.title}</div>
                <div className='text-xs'>{props.location}</div>
                <div className='text-xs'>{props.description}</div>
                <div className='mt-[4px] flex gap-[17px] text-xs'>
                    <div>
                        <Image src='/slim-properties/icons/bed.svg' alt='Bed icon' width={17} height={17} className='mr-[2px] inline' />
                        {props.bedrooms}
                    </div>
                    <div>
                        <Image src='/slim-properties/icons/bathtub.svg' alt='Bathtub icon' width={17} height={17} className='mr-[2px] inline' />
                        {props.bathrooms}
                    </div>
                    <div>
                        <Image src='/slim-properties/icons/crop_free.svg' alt='Area icon' width={17} height={17} className='mr-[2px] inline' />
                        {props.area} sqft
                    </div>
                </div>
                <div className='text-[15px] mt-[3px] font-[700]'>{props.price}</div>
            </div>
        </div>
    )
}
