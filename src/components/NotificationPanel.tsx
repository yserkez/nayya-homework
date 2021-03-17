import React from "react";
import { NotificationType } from "../types";
import * as Icons from "../icons";

type NotificationPanelProps = {
  data: NotificationType;
};

export const NotificationPanel = ({ data }: NotificationPanelProps) => {
  const color = getNotificationColor(data.type);
  const message = textColorWrapper(data.message, data.highlight, color);
  return (
    <div
      className={`bg-white text-nayya overflow-hidden shadow hover:shadow-lg mt-4 border-${color} border-l-2`}
    >
      <div className="px-4 py-5 grid grid-cols-12 items-center">
        <div className="col-span-3 text-left flex">
          <div className="pr-4 pt-1">{getNotificationIcon(data.type)}</div>
          <div>
            <div className="text-sm">{data.action}</div>
            <div className="text-4xl">{data.detail}</div>
          </div>
        </div>
        <div className="col-span-6 text-left">
          <div className="text-gray-500 text-sm">{data.name}</div>
          {message}
        </div>
        <div className="col-span-3">
          <div className={`text-right text-nayya-medical`}>{data.date}</div>
          <div className="border-2 rounded-full border-nayya-blue w-2/3 float-right text-nayya-blue hover:bg-nayya-blue hover:text-white cursor-pointer py-1 px-4 mt-8 flex justify-center align-middle items-center">
            {data.cta}
            {data.cta.toLowerCase() === "save now" ? (
              <div className="ml-2">{Icons.MONEY_COIN}</div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function getNotificationColor(type: string) {
  switch (type) {
    case "medical":
      return "nayya-medical";
    case "dental":
      return "nayya-medical";
    case "claim":
      return "nayya-claims";
    case "reminder":
      return "nayya-reminders";
    case "pharmacy":
      return "nayya-pharmacy";
    default:
      return "nayya-blue";
  }
}

function getNotificationIcon(type: string) {
  switch (type) {
    case "medical":
      return Icons.MEDICAL_ICON;
    case "dental":
      return Icons.DENTAL_ICON;
    case "claim":
      return Icons.CLAIMS_ICON;
    case "reminder":
      return Icons.CLAIMS_ICON;
    case "pharmacy":
      return Icons.PHARMACY_ICON;
    default:
      return <span></span>;
  }
}

function textColorWrapper(text: string, highlight: string, color: string) {
  let beforeHighlight = text.substr(0, text.indexOf(highlight));
  let a = <span>{beforeHighlight}</span>;
  let b = <span className={`text-${color}`}>{highlight}</span>;
  let c = (
    <span>{text.replace(beforeHighlight, "").replace(highlight, "")}</span>
  );

  return (
    <>
      {a}
      {b}
      {c}
    </>
  );
}
