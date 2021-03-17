import React from "react";

type SpendingPanelProps = {
  name: string;
  memberSince: string;
  potentialSavings: number;
  lifetimeSavings: number;
};

export const SpendingPanel = ({
  name,
  memberSince,
  potentialSavings,
  lifetimeSavings,
}: SpendingPanelProps) => {
  return (
    <div className="bg-white overflow-hidden shadow bg-gradient-to-br from-pink to-yellow w-full ">
      <div className="px-4 py-5 sm:p-6 grid grid-cols-4 text-left">
        <div className="border-r border-gray-300 p-2">
          <div className="text-md">Welcome,</div>
          <div className="font-bold text-3xl">{name}</div>
          <span className="text-sm text-gray-500">
            Member since {memberSince}
          </span>
        </div>

        <div className="border-r border-gray-300 p-2">
          <div className="text-md">Today's Potential Savings</div>
          <div className=" text-nayya-green text-5xl">${potentialSavings}</div>
        </div>

        <div className="border-r border-gray-300 p-2">
          <div className="text-md">Your Lifetime Savings</div>
          <div className=" text-nayya-green text-5xl">${lifetimeSavings}</div>
        </div>

        <div className=" p-2 flex">
          <div className="text-md text-gray-500">
            The more actions you complete from below, the more you save!
          </div>
          <div className="flex align-top p-2 outline-none cursor-pointer">
            <svg
              width="26"
              height="26"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8927 10.7064L19 10.5328V8.46725L17.8927 8.29358C16.9813 8.13994 16.661 6.93277 17.3735 6.34719L18.2092 5.65881L17.1809 3.8783L16.1582 4.26127C15.2924 4.58561 14.414 3.70834 14.7387 2.84184L15.1217 1.8191L13.3412 0.790801L12.6528 1.6265C12.0683 2.33752 10.8604 2.02023 10.7064 1.10734L10.5328 0H8.46725L8.29358 1.10734C8.13883 2.01875 6.93277 2.339 6.34719 1.6265L5.65881 0.790801L3.8783 1.8191L4.26127 2.84184C4.58561 3.7076 3.70834 4.58598 2.84184 4.26127L1.8191 3.8783L0.790801 5.65881L1.6265 6.34719C2.33604 6.93129 2.02246 8.1392 1.10734 8.29358L0 8.46725V10.5328L1.10734 10.7064C2.01504 10.8604 2.3416 12.0643 1.6265 12.6528L0.790801 13.3412L1.8191 15.1217L2.84184 14.7387C3.70352 14.4159 4.58746 15.2883 4.26127 16.1582L3.8783 17.1809L5.65881 18.2092L6.34719 17.3735C6.93092 16.6643 8.13846 16.9775 8.29358 17.8927L8.46725 19H10.5328L10.7064 17.8927C10.8593 16.9872 12.0631 16.6569 12.6528 17.3735L13.3412 18.2092L15.1217 17.1809L14.7387 16.1582C14.4159 15.2965 15.2883 14.4125 16.1582 14.7387L17.1809 15.1217L18.2092 13.3412L17.3735 12.6528C16.6625 12.068 16.9798 10.8612 17.8927 10.7064ZM9.5 14.1387C6.94205 14.1387 4.86133 12.058 4.86133 9.5C4.86133 6.94205 6.94205 4.86133 9.5 4.86133C12.058 4.86133 14.1387 6.94205 14.1387 9.5C14.1387 12.058 12.058 14.1387 9.5 14.1387Z"
                fill="#BDBDBD"
              />
              <path
                d="M17.3735 12.6528L18.2092 13.3412L17.1809 15.1217L16.1582 14.7387C15.2883 14.4125 14.4159 15.2965 14.7387 16.1582L15.1217 17.1809L13.3412 18.2092L12.6528 17.3735C12.0631 16.6569 10.8593 16.9872 10.7064 17.8927L10.5328 19H9.5V14.1387C12.0579 14.1387 14.1387 12.058 14.1387 9.5C14.1387 6.94205 12.0579 4.86133 9.5 4.86133V0H10.5328L10.7064 1.10734C10.8604 2.02023 12.0683 2.33752 12.6528 1.6265L13.3412 0.790801L15.1217 1.8191L14.7387 2.84184C14.414 3.70834 15.2924 4.58561 16.1582 4.26127L17.1809 3.8783L18.2092 5.65881L17.3735 6.34719C16.661 6.93277 16.9812 8.13994 17.8927 8.29358L19 8.46725V10.5328L17.8927 10.7064C16.9798 10.8612 16.6625 12.068 17.3735 12.6528Z"
                fill="#BDBDBD"
              />
              <path
                d="M14.5098 9.5C14.5098 6.73758 12.2624 4.49023 9.5 4.49023C6.73758 4.49023 4.49023 6.73758 4.49023 9.5C4.49023 12.2624 6.73758 14.5098 9.5 14.5098C12.2624 14.5098 14.5098 12.2624 14.5098 9.5ZM6.7168 9.5C6.7168 7.96553 7.96516 6.7168 9.5 6.7168C11.0348 6.7168 12.2832 7.96553 12.2832 9.5C12.2832 11.0345 11.0348 12.2832 9.5 12.2832C7.96516 12.2832 6.7168 11.0345 6.7168 9.5Z"
                fill="#E0E0E0"
              />
              <path
                d="M9.5 14.5098C6.73758 14.5098 4.49023 12.2624 4.49023 9.5L6.7168 9.5C6.7168 11.0345 7.96516 12.2832 9.5 12.2832C11.0348 12.2832 12.2832 11.0345 12.2832 9.5L14.5098 9.5C14.5098 12.2624 12.2624 14.5098 9.5 14.5098Z"
                fill="#E0E0E0"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
