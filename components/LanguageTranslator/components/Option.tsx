import { FC, memo } from "react";

interface OptionProps {
  value: string;
  label: string;
}

const Option: FC<OptionProps> = ({ value, label }) => {
  return <option value={value}>{label}</option>;
};

export default memo(Option);
