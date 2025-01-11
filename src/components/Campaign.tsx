"use client";
import * as React from 'react'
import { CampaignComponentProps } from '@/@types/global'
import Image from 'next/image'
import { Typography } from '@mui/material';
import Link from 'next/link';

const CampaignComponent: React.FC<CampaignComponentProps> = ({ title, description, startDate, endDate, image, link, hasActions, handleShowCreateCampaign }) => {
    return (
        <div className="flex flex-col gap-4 p-2 border rounded-md w-5/6">

            <div className="flex gap-8">
                <Image
                    aria-hidden
                    src={image}
                    alt="Globe icon"
                    width={100}
                    height={100}
                />
                <div className="flex flex-col gap-8">
                    <header className="flex items-center justify-between flex-1">
                        <Typography variant="h6">{title}</Typography>
                        <div className="flex gap-8">
                            <Typography variant="subtitle1" className="px-2 border border-[#89e81d] rounded-md">Started date: {startDate}</Typography>
                            <Typography variant="subtitle1" className="px-2 border border-[#89e81d] rounded-md">End date: {endDate}</Typography>
                        </div>
                    </header>
                    <p>
                        {description}
                    </p>
                    {!hasActions && (<Link href={link}>
                        <Typography variant="subtitle1" className="w-fit cursor-pointer hover:underline">Visit Campaign</Typography>
                    </Link>)}
                    {hasActions && (
                        <div className="flex gap-4">
                        <button type="button" className="bg-[#c4c4c4] rounded-full text-sm py-2 px-4">Join Campaign</button>
                        <button type="button" className="bg-[#89e81d] rounded-full text-sm py-2 px-4">Approved</button>
                        <button type="button" className="text-white bg-red-500 rounded-full text-sm py-2 px-4">Rejected</button>
                        <button type="button" className="bg-white border rounded-full text-sm py-2 px-4" onClick={handleShowCreateCampaign}>Submit Content</button>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CampaignComponent