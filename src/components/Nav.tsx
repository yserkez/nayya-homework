import React from "react";
import { NayyaWithNotificationsCount } from "./NayyaWithNotificationsCount";
import ProfileIcon from "./ProfileIcon";
type NavProps = {
  name: string;
  page: string;
  updatePage: () => void;
  notificationCount: number;
};

export const Nav = ({
  page,
  name,
  updatePage,
  notificationCount,
}: NavProps) => {
  return (
    <nav className="bg-nayya-blue border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                className="border-white-500 text-white whitespace-pre-line flex items-center px-1 pt-1 border-b-4 text-sm font-medium text-left"
              >
                <NayyaWithNotificationsCount count={notificationCount} />
                My Benefits{"\n"}Concierge
              </a>
              <span className="text-white items-center flex">|</span>
              <a
                href="#"
                className="border-transparent text-white whitespace-pre-line hover:border-white inline-flex items-center px-1 pt-1 border-b-4 text-sm font-medium text-left"
              >
                Pharmacy{"\n"}Savings
              </a>
              <a
                href="#"
                className="border-transparent text-white whitespace-pre-line hover:border-white inline-flex items-center px-1 pt-1 border-b-4 text-sm font-medium text-left"
              >
                Claims{"\n"}Opportunities
              </a>
              <a
                href="#"
                className="border-transparent text-white whitespace-pre-line hover:border-white inline-flex items-center px-1 pt-1 border-b-4 text-sm font-medium text-left"
              >
                Find Care{"\n"}In Network
              </a>
              <span className="text-white items-center flex">|</span>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className=" p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">View notifications</span>
              {/* Heroicon name: outline/bell */}

              <svg
                width="29"
                height="20"
                viewBox="0 0 29 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.8686 0H1.13137C0.506539 0 0 0.497318 0 1.11077V18.8892C0 19.5026 0.506539 19.9999 1.13137 19.9999H27.8686C28.4935 19.9999 29 19.5026 29 18.8892V1.11077C29 0.497318 28.4935 0 27.8686 0Z"
                  fill="white"
                />
                <path
                  d="M27.868 0H14.5654V20H27.868C28.4928 20 28.9994 19.5027 28.9994 18.8892V1.11077C28.9994 0.497318 28.4929 0 27.868 0Z"
                  fill="#F4F1F1"
                />
                <path
                  d="M24.8641 7.30181H17.6206C17.1225 7.30181 16.7188 6.90538 16.7188 6.41641C16.7188 5.92744 17.1225 5.53101 17.6206 5.53101H24.864C25.3621 5.53101 25.7658 5.92744 25.7658 6.41641C25.7658 6.90538 25.3621 7.30181 24.8641 7.30181Z"
                  fill="#003140"
                />
                <path
                  d="M24.8641 10.9876H17.6206C17.1225 10.9876 16.7188 10.5912 16.7188 10.1022C16.7188 9.61317 17.1225 9.2168 17.6206 9.2168H24.864C25.3621 9.2168 25.7658 9.61323 25.7658 10.1022C25.7659 10.5912 25.3621 10.9876 24.8641 10.9876Z"
                  fill="#003140"
                />
                <path
                  d="M24.8641 14.4689H17.6206C17.1225 14.4689 16.7188 14.0725 16.7188 13.5835C16.7188 13.0945 17.1225 12.6981 17.6206 12.6981H24.864C25.3621 12.6981 25.7658 13.0946 25.7658 13.5835C25.7659 14.0725 25.3621 14.4689 24.8641 14.4689Z"
                  fill="#003140"
                />
                <path
                  d="M11.6772 8.4026H9.82033C9.60495 8.4026 9.43038 8.23121 9.43038 8.01975V6.19669C9.43038 5.98524 9.25581 5.81384 9.04043 5.81384H6.56572C6.35034 5.81384 6.17577 5.98524 6.17577 6.19669V8.01975C6.17577 8.23121 6.00119 8.4026 5.78581 8.4026H3.92901C3.71363 8.4026 3.53906 8.57399 3.53906 8.78545V11.2151C3.53906 11.4266 3.71363 11.598 3.92901 11.598H5.78587C6.00125 11.598 6.17582 11.7694 6.17582 11.9808V13.8039C6.17582 14.0153 6.35039 14.1867 6.56577 14.1867H9.04049C9.25587 14.1867 9.43044 14.0153 9.43044 13.8039V11.9808C9.43044 11.7694 9.60501 11.598 9.82039 11.598H11.6772C11.8926 11.598 12.0672 11.4266 12.0672 11.2151V8.78545C12.0671 8.57399 11.8926 8.4026 11.6772 8.4026Z"
                  fill="#FF4A4A"
                />
              </svg>
            </button>
            <ProfileIcon name={name} />
            <div className="ml-6 text-white relative">Caravel Health App</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
