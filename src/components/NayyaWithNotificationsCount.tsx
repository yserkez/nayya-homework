import React from "react";

type NayyaWithNotificationsCountProps = {
  count: number;
};

export const NayyaWithNotificationsCount = ({
  count,
}: NayyaWithNotificationsCountProps) => {
  return (
    <div className="flex-shrink-0 flex items-center mr-4 relative">
      {count && (
        <div className="absolute bg-red-500 border-nayya-blue border -top-1.5 -right-2 h-4 w-4 rounded-full justify-center flex">
          <span className="text-white flex text-right text-xs">
            {count < 10 ? count : ""}
          </span>
        </div>
      )}
      <svg
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="31" height="31" rx="3.875" fill="url(#paint0_linear)" />
        <path
          d="M22.4769 6.9754C22.4769 12.9126 22.4769 18.8498 22.4769 24.8004C21.2638 24.787 20.6573 24.787 19.4308 24.7603C17.0586 21.6446 14.7808 18.4754 12.5838 15.226C12.5838 18.3417 12.5838 21.4574 12.5838 24.5731C11.236 24.5196 9.87468 24.4527 8.52686 24.3725C8.52686 18.569 8.52686 12.7789 8.52686 6.9754C9.7399 6.9754 10.3464 6.9754 11.5729 6.9754C13.8912 10.3051 16.1421 13.6748 18.4199 17.0312C18.4199 13.6748 18.4199 10.3318 18.4199 6.9754C19.7677 6.9754 21.129 6.9754 22.4769 6.9754Z"
          fill="#074C93"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="1.55"
            y1="1.55"
            x2="29.0625"
            y2="31"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F4C8CF" />
            <stop offset="0.96875" stop-color="#FFFBD8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
