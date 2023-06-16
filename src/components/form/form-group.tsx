import React from "react";
import TextInput from "../input";
import Typography from "../typography";
import Select, { selectComponentProps } from "../select";

type componentProps = {
  label: string;
  id: string;
  containerClassName?: string;
  inputClassName?: string;
  selectClassName?: string;
  inputPlaceholder?: string;
  useSelect?: boolean;
};

export default function FormGroup({
  id,
  label,
  inputPlaceholder,
  options,
  useSelect,
  containerClassName,
  selectClassName,
  inputClassName,
}: componentProps & Partial<selectComponentProps>) {
  return (
    <div className={`${containerClassName}`}>
      <label className="" htmlFor={id}>
        <Typography
          variant="body2"
          className="!text-neutrals-5 !font-aeonik-pro-bold"
          label={label}
        />
      </label>
      {useSelect ? (
        <Select
          id={id}
          className={`${selectClassName} mt-[16px]`}
          options={options || []}
        />
      ) : (
        <TextInput
          placeholder={inputPlaceholder}
          className={`${inputClassName} mt-[16px]`}
          id={id}
        />
      )}
    </div>
  );
}
