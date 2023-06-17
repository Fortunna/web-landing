import React from "react";
import Typography from "../typography";
import { AnimateFadeIn } from "@/animations";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "classnames";

type componentProps = {
  headers: { title: string; key: string }[];
  children?: React.ReactNode;
  current?: string;
  currentIndex?: number;
  isActive?: Function;
};

const SteeperHeader = (props: componentProps) => {
  const Circle = ({ index }: { index: number }) => {
    return (
      <div
        className={`w-[24px] overflow-hidden relative flex items-center justify-center h-[24px]  rounded-full ${
          props.currentIndex == index ? "bg-secondary" : "bg-white"
        }`}
      >
        <Typography
          className={` !font-sf-pro-text-semi-bold  ${
            props.currentIndex == index
              ? "!bg-secondary text-dark"
              : "!text-dark-2"
          }`}
          variant="body1"
          label={(index + 1).toString()}
        />
      </div>
    );
  };

  const CirclePassed = () => {
    return (
      <div className="w-[24px] overflow-hidden relative flex items-center justify-center h-[24px]  rounded-full border-[1px] border-secondary">
        <svg
          width={12}
          height={9}
          viewBox="0 0 12 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.79999 7.11612L10.358 0.558058C10.6021 0.313981 10.9979 0.313981 11.2419 0.558058C11.486 0.802136 11.486 1.19786 11.2419 1.44194L4.24193 8.44194C3.99785 8.68602 3.60212 8.68602 3.35805 8.44194L0.358046 5.44194C0.113968 5.19786 0.113968 4.80214 0.358046 4.55806C0.602124 4.31398 0.997852 4.31398 1.24193 4.55806L3.79999 7.11612Z"
            fill="#DE1EFD"
          />
        </svg>
      </div>
    );
  };
  return (
    <div className={`grid  grid-cols-5  gap-0`}>
      {props.headers.map((header, index) => {
        const leftActiveLineStyles = classNames({
          "!w-full": parseInt(props?.currentIndex?.toString() || "0") >= index,
        });

        const rightActiveLineStyles = classNames({
          "!w-full": parseInt(props?.currentIndex?.toString() || "0") > index,
        });
        return (
          <div className="text-center" key={index}>
            <div className="grid grid-cols-[auto_24px_auto] gap-0  items-center ">
              {index == 0 ? (
                <div></div>
              ) : (
                <div className="h-[1px] relative flex overflow-hidden bg-gray-300">
                  <div
                    className={`h-full transition-all inline-block w-0  bg-secondary ${leftActiveLineStyles}`}
                  ></div>
                </div>
              )}

              {(props.currentIndex || 0) > index ? (
                <CirclePassed />
              ) : (
                <Circle index={index} />
              )}

              {index + 1 == props.headers.length ? (
                <div></div>
              ) : (
                <div className="h-[1px] relative flex overflow-hidden  bg-gray-300">
                  <div
                    className={`h-full  w-0 transition-all inline-block bg-secondary ${rightActiveLineStyles}`}
                  ></div>
                </div>
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

const SteeperContent = ({
  children,
  isActive,
}: {
  children: React.ReactNode;
  isActive: Function;
}) => {
  return (
    <>
      <AnimatePresence>
        {React.Children.map(children, (child, index) => {
          if (isActive(index)) {
            return (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ display: "none" }}
                transition={{ duration: 0.5 }}
              >
                {child}
              </motion.div>
            );
          }
          return null;
        })}
      </AnimatePresence>
    </>
  );
};
export default function Stepper({
  headers,
  children,
  current,
}: componentProps) {
  const getIndexOfCurrentKey = () => {
    return headers.findIndex((_header) => _header.key == current);
  };
  const isActive = (index: number): boolean => {
    return (current || headers[0].key) == headers[index].key;
  };
  return (
    <div>
      <SteeperHeader currentIndex={getIndexOfCurrentKey()} headers={headers} />
      <div className="overflow-hidden mt-[52px]"></div>
      <Typography
        variant="body1"
        className="!text-light-white !font-poppins-semi-bold"
        label={headers[getIndexOfCurrentKey()]?.title}
      />
      <div className="overflow-hidden mt-[24px]"></div>
      <SteeperContent isActive={isActive}>{children}</SteeperContent>
    </div>
  );
}
