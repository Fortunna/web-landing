import Modal from "@/components/modal";
import Typography from "@/components/typography";
import React, { ChangeEventHandler } from "react";
import Deposit from "./deposit";

type componentProps = {
  onClose: () => void;
};
export default function ActionModal({ onClose }: componentProps) {
  const header = [
    {
      title: "Deposit",
    },
    {
      title: "Withdraw",
    },
    {
      title: "Rewards",
    },
  ];

  return (
    <div>
      <Modal
        onClose={onClose}
        containerClass="px-4 py-6 relative overflow-hidden rounded-[4px]"
        visible={true}
      >
        <div>
          <div className="flex items-center">
            {header.map((_header, index) => {
              return (
                <div key={index} className="mr-[28px]">
                  <Typography
                    variant="body2"
                    className="!font-dm-sans !text-[#777E90]"
                    label={_header.title}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <Deposit />
      </Modal>
    </div>
  );
}
