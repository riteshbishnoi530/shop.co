import React, { useState } from "react";
import { REVIEWS_LIST } from "@/utils/helper";
import {ThreeDots } from "@/utils/icons";
import Image from "next/image";

const Reviews = () => {
  const [sortOption, setSortOption] = useState("Oldest");
  const [sortedReviews, setSortedReviews] = useState([...REVIEWS_LIST]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const option: string = e.target.value;
    setSortOption(option);

    const sortedList = [...REVIEWS_LIST].sort((a, b) => {
      const dateA: Date = new Date(a.postDate.split("Posted on ")[1]);
      const dateB: Date = new Date(b.postDate.split("Posted on ")[1]);
      return option === "Latest"
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    });
    setSortedReviews(sortedList);
  };

  return (
    <div className="pt-8">
      <div className="max-w-[1240px] mx-auto container">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-2 items-center justify-center">
            <p className="font-bold text-2xl leading-[100%]">All Reviews</p>
            <p className="leading-[100%] text-black/60 text-base">
              ({REVIEWS_LIST.length})
            </p>
          </div>
          <select
            className="cursor-pointer outline-none rounded-[62px] font-medium py-[13px] px-5 bg-light-blue"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option>Oldest</option>
            <option>Latest</option>
          </select>
        </div>
        <div className="flex w-full max-w-[1240px] pt-7 flex-wrap lg:gap-x-[1.62%] max-lg:gap-5 gap-y-5">
          {sortedReviews.map((item, index) => (
            <div
              key={index}
              className="w-[49.19%] max-lg:w-full border border-solid border-black/10 rounded-[20px] py-7 max-sm:p-6 max-lg:px-7 px-8"
            >
              <div className="flex w-full justify-between items-center">
                <Image className="max-h-[22px] w-fit" src={item.reviewsStart} alt="star" width={127} height={22}/>
                <span className="cursor-pointer flex">
                  <ThreeDots />
                </span>
              </div>
              <div className="flex gap-1 items-center pt-[15px]">
                <p className="font-bold text-xl leading-[100%]">
                  {item.userName}
                </p>
                <Image width={24} height={24} src="/assets/images/green-tick.webp" alt="green tick"/>
              </div>
              <p className="text-black/60 mt-3 mb-6">{`${item.description}`}</p>
              <p className="font-medium text-black/60">{`${item.postDate}`}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center w-full pt-9">
          <button className="cursor-pointer border border-black/10 py-[15px] max-w-[230px] rounded-[62px] w-full">Load More Reviews</button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;