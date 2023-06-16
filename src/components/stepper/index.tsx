import React from "react";
import Typography from "../typography";

type componentProps = {
  headers: { title: string }[];
  children?: React.ReactNode;
};

const SteeperHeader = (props: componentProps) => {
  const gridName = `grid-cols-${props.headers.length}`;
  return (
    <div className={`grid  grid-cols-5  gap-0`}>
      {props.headers.map((header, index) => {
        return (
          <div className="text-center" key={index}>
            <div className="grid grid-cols-[auto_24px_auto] gap-0  items-center ">
              {index == 0 ? (
                <div></div>
              ) : (
                <div className="h-[1px] bg-gray-300"></div>
              )}
              <div className="w-[24px] overflow-hidden relative flex items-center justify-center h-[24px] bg-white rounded-full">
                <Typography
                  className="!text-dark-2 !font-sf-pro-text-semi-bold"
                  variant="body1"
                  label={(index + 1).toString()}
                />
              </div>
              {index + 1 == props.headers.length ? (
                <div></div>
              ) : (
                <div className="h-[1px] bg-gray-300"></div>
              )}
            </div>

            <Typography
              variant="body2"
              className="!font-sf-pro-text-semi-bold  mt-[8px]  !text-gray-600"
              label={header.title}
            />
          </div>
        );
      })}
    </div>
  );
};

const SteeperContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {React.Children.map(children, (child, index) => {
        return <>{child}</>;
      })}
    </>
  );
};
export default function Stepper({ headers, children }: componentProps) {
  return (
    <div>
      <SteeperHeader headers={headers} />
      <div className="overflow-hidden mt-[52px]"></div>
      <Typography
        variant="body1"
        className="!text-light-white !font-poppins-semi-bold"
        label="Pool Parameters"
      />
      <div className="overflow-hidden mt-[24px]"></div>
      <SteeperContent>{children}</SteeperContent>
    </div>
  );
}
