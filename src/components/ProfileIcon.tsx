import React from "react";

type ProfileIconProps = {
  name: string;
};
const ProfileIcon = ({ name }: ProfileIconProps) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className="ml-6 relative">
      <div>
        <button
          type="button"
          className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="user-menu"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={() => setIsActive(!isActive)}
        >
          <div className="bg-gradient-to-br from-pink to-yellow h-8 w-8 rounded-full flex text-center justify-center align-middle">
            <span className="text-lg flex self-center">{name[0]}</span>
          </div>
        </button>
      </div>
      {isActive && (
        <div
          className="origin-top-right z-50 transition ease-in-out duration-200 absolute right-0 mt-4  shadow-lg pt-16 pb-12 w-64 px-8 bg-gradient-to-br from-pink to-yellow justify-start"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <a
            href="#"
            className="block px-4 py-2 text-lg text-black text-left"
            role="menuitem"
          >
            My Messages
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-lg text-black  hover:border-b-2 border-nayya-blue text-left"
            role="menuitem"
          >
            Settings
          </a>
          <button className="bg-nayya-blue rounded-full float-right mt-8">
            <a
              href="#"
              className=" px-4 py-2 text-lg text-white inline-flex"
              role="menuitem"
            >
              Log out
            </a>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileIcon;
