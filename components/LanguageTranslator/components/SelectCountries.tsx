import { DetailedHTMLProps, SelectHTMLAttributes, FC, memo } from "react";

import Option from "./Option";

import { Counrty } from "../types";

interface SelectProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  data: Counrty;
}

const SelectCountries: FC<SelectProps> = ({ data, ...props }) => {
  const countrys = Object.entries(data);

  return (
    <select {...props}>
      {countrys.map(([code, name]) => (
        <Option key={code} value={code} label={name} />
      ))}
    </select>
  );
};

export default memo(SelectCountries);
