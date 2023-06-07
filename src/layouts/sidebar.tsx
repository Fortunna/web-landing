import Divider from "@/components/divider";
import AppLogo from "@/components/logo";
import Typography from "@/components/typography";
import classNames from "classnames";
import { BOTTOM_MENU_DATA, TOP_MENU_DATA } from "config/theme/sidebar";
import Link from "next/link";
import React from "react";

const MenuItem = ({
  data,
  type,
  active,
  to,
}: {
  data: { name: string; icon: React.ReactNode };
  type: "main" | "submenu";
  active: boolean;
  to: string;
}) => {
  const classStyles = classNames({
    "hover:border-secondary  ": type == "main" || active,
  });

  return (
    <li>
      <Link
        href={to}
        className={`flex ps-2 border-l-2   cursor-pointer hover:border-l-2 border-transparent ${type}   items-center ${classStyles}`}
      >
        {type == "submenu" ? (
          <div>
            <svg
              className="no-animate"
              width={6}
              height={7}
              viewBox="0 0 6 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.25 3.1701L0.75 5.76817L0.75 0.572021L5.25 3.1701Z"
                fill="#636C7B"
              />
            </svg>
          </div>
        ) : null}
        <div className="w-[54px] flex justify-center items-center h-[54px]">
          {data.icon}
        </div>

        <Typography className="text-light-white" label={data.name} use="span" />
      </Link>
    </li>
  );
};
const BottomMenuItem = ({
  data,
}: {
  data: { name: string; icon: React.JSX.Element };
}) => {
  return (
    <li
      className={`flex ps-2 border-l-2   cursor-pointer hover:border-l-2 border-transparent hover:border-secondary  items-center `}
    >
      <div className="w-[44px] flex justify-end items-center h-[44px]">
        {data.icon}
      </div>

      <Typography
        className="text-light-white ps-3"
        label={data.name}
        use="span"
      />
    </li>
  );
};
export default function Sidebar() {
  return (
    <div className="bg-background overflow-y-auto pb-10 sidebar flex flex-col justify-between h-screen">
      <div>
        <div className="p-5">
          <AppLogo />
        </div>
        <div className="">
          <div className="mt-5"></div>
          <ul>
            {TOP_MENU_DATA.map((_data, index) => {
              return (
                <div key={index} className="">
                  <MenuItem
                    to={_data.to}
                    active={false}
                    type="main"
                    data={_data}
                  />

                  {_data?.menu ? (
                    <div className="ps-9">
                      {_data?.menu?.map((_subMenu, _index) => {
                        return (
                          <div key={_index + index.toString()}>
                            <MenuItem
                              to={_subMenu.to}
                              active={false}
                              type="submenu"
                              data={_subMenu}
                            />
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </ul>
        </div>
        <div className="h-100 flex-col-reverse">
          <div className="my-[41px]">
            <Divider />
          </div>

          <ul>
            {BOTTOM_MENU_DATA.map((_data, index) => {
              return (
                <div key={index}>
                  <BottomMenuItem data={_data} />
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
