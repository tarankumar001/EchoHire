import React from 'react';
import dayjs from 'dayjs';
import { Feedback, InterviewCardProps } from "@/types";
import Image from "next/image";
import { getRandomInterviewCover } from "@/public/utils";

const InterviewCard = ({
                           interviewId,
                           userId,
                           role,
                           type,
                           teckstack,
                           createdAt
                       }: InterviewCardProps) => {
    const feedback = null as Feedback | null;

    const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;

    const formattedDate = dayjs(
        feedback?.createdAt || createdAt || Date.now()
    ).format('MMM D, YYYY');

    return (
        <div className="card-border w-[360px] max-sm:w-full min-h-96">
            <div className="card-interview">
                <div>
                    {/* Type Badge */}
                    <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-lg bg-light-600">
                        <p className="badge-text">{normalizedType}</p>
                    </div>

                    {/* Cover Image */}
                    <Image
                        src={getRandomInterviewCover()}
                        alt="cover image"
                        width={90}
                        height={90}
                        className="rounded-full object-cover w-[90px] h-[90px]" // 🛠 fixed class names
                    />
                </div>
            </div>
        </div>
    );
};

export default InterviewCard;
