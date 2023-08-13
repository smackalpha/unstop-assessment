import Image from "next/image";
import React from "react";
import Avatar from "../../../public/avatar.png";
import Schedule from "../../../public/schedule.png";
import VerticalDots from "../../../public/dots.png";
import Work from "../../../public/work.png";
import Share from "../../../public/share.png";
import { BiLinkAlt } from "react-icons/bi";

const MyCard = ({ data }) => {
  return (
    <div className="card">
      <div className="flex items-start justify-between border-b-2 border-dashed pb-4">
        <div className="flex justify-start items-center gap-2">
          <Image src={Work} alt="abc" />
          <div className="flex flex-col justify-center items-start space-y-1">
            <span className="myassessment">{data?.title}</span>
            <div className="flex justify-center items-center space-x-2">
              <span className="subheading4 font-medium border-r-2 pr-2">
                {data.purpose}
              </span>
              <Image src={Schedule} alt="abc" />
              <span className="subheading3">{data?.date}</span>
            </div>
          </div>
        </div>
        <Image src={VerticalDots} alt="abc" />
      </div>

      <div className="flex items-start justify-between mt-6">
        <div className="flex items-start justify-center space-x-2">
          <div className="flex flex-col justify-center items-center">
            <span className="numbercard">{data?.duration}</span>
            <span className="headingcard">Duration</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="numbercard">{data?.questions}</span>
            <span className="headingcard">Questions</span>
          </div>
        </div>
        <div className="flex items-center justify-end space-x-1">
          <span
            style={{
              border: "1px solid gray",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
              borderRadius: "15px",
              padding: "5px",
              marginRight: "10px",
              width: "55%",
            }}
          >
            <div>
              <BiLinkAlt color="gray" height={16} />
            </div>

            <div>
              <button style={{ color: "lightgray", fontSize: "14px" }}>
                Share
              </button>
            </div>
          </span>
          <Image src={Avatar} alt="abc" />
        </div>
      </div>
    </div>
  );
};

export default MyCard;

//// <Image src={Share} alt="abc" className="cursor-pointer  border-b-2 border-solid red" />
