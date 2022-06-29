import {
  faCopy,
  faExchangeAlt,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import s from "./styles.module.scss";

import { countries } from "./data/countries";
import { ENGLISH_CODE, HEBREW_CODE } from "./constants";

import SelectCountries from "./components/SelectCountries";
import { useTranslate } from "./hooks/useTranslate";

function LanguageTranslator() {
  console.log("LanguageTranslator", "REDNDER");

  const [languageFrom, setLanguageFrom] = useState<string>(ENGLISH_CODE);
  const [languageTo, setLanguageTo] = useState<string>(HEBREW_CODE);

  const textareaFromRef = useRef<HTMLTextAreaElement>(null);
  const textareaToRef = useRef<HTMLTextAreaElement>(null);

  const { data, setRequest } = useTranslate();

  useEffect(() => {
    if (textareaToRef.current && data) {
      textareaToRef.current.value = data;
    }
  }, [data]);

  const languageFromSelectHandler = useCallback<
    ChangeEventHandler<HTMLSelectElement>
  >((e) => setLanguageFrom(e.target.value), []);

  const languageToSelectHandler = useCallback<
    ChangeEventHandler<HTMLSelectElement>
  >((e) => setLanguageTo(e.target.value), []);

  const exchangeHandler = () => {
    if (textareaFromRef.current && textareaToRef.current) {
      const tempText = textareaFromRef.current?.value;
      textareaFromRef.current.value = textareaToRef.current.value;
      textareaToRef.current.value = tempText;

      setLanguageFrom(languageTo);
      setLanguageTo(languageFrom);

      setRequest({
        langFrom: languageTo,
        langTo: languageFrom,
        text: textareaFromRef.current.value,
      });
    }
  };

  const copyText = (string: string | undefined) => {
    if (string) {
      navigator.clipboard.writeText(string);
    }
  };

  const speachText = (text: string | undefined, textLang: string) => {
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = textLang;
      speechSynthesis.speak(utterance);
    }
  };

  const buttonHandler = () => {
    if (textareaFromRef.current?.value) {
      setRequest({
        langFrom: languageFrom,
        langTo: languageTo,
        text: textareaFromRef.current.value,
      });
    }
  };

  return (
    <div className={cn(s.container)}>
      <div className={cn(s.wrapper)}>
        <div className={cn(s.textInput)}>
          <textarea
            className={cn(s.fromText)}
            placeholder="Enter text"
            cols={10}
            rows={5}
            ref={textareaFromRef}
          />
          <textarea
            className={cn(s.toText)}
            placeholder="Enter text"
            cols={10}
            rows={5}
            ref={textareaToRef}
            disabled
          />
        </div>
        <ul className={cn(s.controls)}>
          <li className={cn(s.row, s.from)}>
            <div className={cn(s.icons)}>
              <FontAwesomeIcon
                icon={faVolumeUp}
                onClick={() =>
                  speachText(textareaFromRef.current?.value, languageFrom)
                }
              />
              <FontAwesomeIcon
                icon={faCopy}
                onClick={() => copyText(textareaFromRef.current?.value)}
              />
            </div>
            <SelectCountries
              className={cn(s.from)}
              data={countries}
              value={languageFrom}
              onChange={languageFromSelectHandler}
            />
          </li>
          <li className={cn(s.exchange)} onClick={exchangeHandler}>
            <FontAwesomeIcon icon={faExchangeAlt} />
          </li>
          <li className={cn(s.row, s.to)}>
            <SelectCountries
              className={cn(s.to)}
              data={countries}
              value={languageTo}
              onChange={languageToSelectHandler}
            />
            <div className={cn(s.icons)}>
              <FontAwesomeIcon
                icon={faVolumeUp}
                onClick={() =>
                  speachText(textareaToRef.current?.value, languageTo)
                }
              />
              <FontAwesomeIcon
                icon={faCopy}
                onClick={() => copyText(textareaToRef.current?.value)}
              />
            </div>
          </li>
        </ul>
      </div>
      <button onClick={buttonHandler}>Translate text</button>
    </div>
  );
}

export default LanguageTranslator;
