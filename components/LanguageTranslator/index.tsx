import {
  faCopy,
  faExchangeAlt,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import {
  ChangeEventHandler,
  DetailedHTMLProps,
  FC,
  SelectHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from "react";

import s from "./styles.module.scss";

import { countries } from "./data/countries";
import { Counrty } from "./types";
import { ENGLISH_CODE, HEBREW_CODE } from "./utils/constants";

import { useTranslate } from "./hooks/query/useTranslate";

interface OptionProps {
  value: string;
  label: string;
}

const Option: FC<OptionProps> = ({ value, label }) => {
  return <option value={value}>{label}</option>;
};

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

function LanguageTranslator() {
  const [languageFrom, setLanguageFrom] = useState<string>(ENGLISH_CODE);
  const [languageTo, setLanguageTo] = useState<string>(HEBREW_CODE);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { data, setRequest } = useTranslate();

  console.log(data, "data");

  const languageFromSelectHandler = useCallback<
    ChangeEventHandler<HTMLSelectElement>
  >((e) => setLanguageFrom(e.target.value), []);

  const languageToSelectHandler = useCallback<
    ChangeEventHandler<HTMLSelectElement>
  >((e) => setLanguageTo(e.target.value), []);

  const buttonHandler = useCallback(() => {
    if (textareaRef.current?.value) {
      setRequest({
        langFrom: languageFrom,
        langTo: languageTo,
        text: textareaRef.current.value,
      });
    }
  }, [languageTo, languageFrom, setRequest]);

  return (
    <div className={cn(s.container)}>
      <div className={cn(s.wrapper)}>
        <div className={cn(s.textInput)}>
          <textarea
            className={cn(s.fromText)}
            placeholder="Enter text"
            cols={10}
            rows={5}
            ref={textareaRef}
          />
          <textarea
            className={cn(s.toText)}
            placeholder="Enter text"
            cols={10}
            rows={5}
            disabled
          />
        </div>
        <ul className={cn(s.controls)}>
          <li className={cn(s.row, s.from)}>
            <div className={cn(s.icons)}>
              <FontAwesomeIcon icon={faVolumeUp} />
              <FontAwesomeIcon icon={faCopy} />
            </div>
            <SelectCountries
              className={cn(s.from)}
              data={countries}
              defaultValue={languageFrom}
              onChange={languageFromSelectHandler}
            />
          </li>
          <li className={cn(s.exchange)}>
            <FontAwesomeIcon icon={faExchangeAlt} />
          </li>
          <li className={cn(s.row, s.to)}>
            <SelectCountries
              className={cn(s.to)}
              data={countries}
              defaultValue={languageTo}
              onChange={languageToSelectHandler}
            />
            <div className={cn(s.icons)}>
              <FontAwesomeIcon icon={faVolumeUp} />
              <FontAwesomeIcon icon={faCopy} />
            </div>
          </li>
        </ul>
      </div>
      <button onClick={buttonHandler}>Translate text</button>
    </div>
  );
}

export default LanguageTranslator;
