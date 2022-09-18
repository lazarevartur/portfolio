import cn from "classnames";
import {
  FC,
  KeyboardEventHandler,
  memo,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { typingText as initialText } from "./data";
import s from "./styles.module.scss";

const lattersLowerCase: string[] = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const specialCharacters: string[] = ["!", "?", "-", ",", " ", "'"];

const acceptedLatters: string[] = [
  ...lattersLowerCase,
  ...lattersLowerCase.map((char) => char.toUpperCase()),
  ...numbers.map((number) => number.toString()),
  ...specialCharacters,
];
// type LetterStatus = "success" | "mistake" | "";
enum LetterStatus {
  success = "success",
  mistake = "mistake",
}
interface LetterProps {
  children: ReactNode;
  status?: LetterStatus;
  isActive?: boolean;
}

const Letter: FC<LetterProps> = ({ children, status, isActive }) => {
  return (
    <span
      className={cn({
        [s.active]: isActive,
        [s[status!]]: s[status ?? ""],
      })}
    >
      {children}
    </span>
  );
};

const LetterMemo = memo(Letter);

const gameTime = 60;
const startIndex = 0;
const initResult = [] as LetterStatus[];

const validateWpm = (wpm: string | null | number | undefined) =>
  !wpm || wpm < 0 || wpm === Infinity ? 0 : wpm;

function SpeedTestGame() {
  const [typingText, setTypingText] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const [cursor, setCursor] = useState(0);
  const [time, setTime] = useState(gameTime);
  const [result, setResult] = useState<LetterStatus[]>(initResult);

  const isTyping = cursor > 0;

  const mistakesCount = useMemo(
    () => result.filter((item) => item === LetterStatus.mistake).length,
    [result]
  );
  const cpm = result.length - mistakesCount;

  const wpm = useMemo(
    () =>
      validateWpm(
        Math.round(((cursor - mistakesCount) / 5 / (gameTime - time)) * 60)
      ),
    [cursor, mistakesCount, time]
  );

  const resetGame = () => {
    setTime(gameTime);
    setCursor(startIndex);
    setResult(initResult);
    setTypingText(initialText());
  };

  const inputHandler: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (!acceptedLatters.includes(e.key) || !time) return;

    if (typingText[cursor] === e.key) {
      setResult((prev) => [...prev, LetterStatus.success]);
    } else {
      setResult((prev) => [...prev, LetterStatus.mistake]);
    }

    setCursor((prev) => prev + 1);
  };

  useEffect(() => {
    setTypingText(initialText());
  }, []);

  useEffect(() => {
    if (isTyping) {
      const timerId = setInterval(() => {
        setTime((prev) => {
          if (prev - 1 === 0) {
            clearInterval(timerId);
          }

          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [isTyping]);

  return (
    <div className={cn(s.container)}>
      <div className={cn(s.wrapper)}>
        <input ref={inputRef} onKeyDown={inputHandler} />
        <div
          className={cn(s.contentBox)}
          onClick={() => inputRef.current?.focus()}
        >
          <div className={cn(s.typingText)}>
            <p>
              {typingText.map((letter, index) => (
                <LetterMemo
                  status={result[index]}
                  isActive={index === cursor}
                  key={index}
                >
                  {letter}
                </LetterMemo>
              ))}
            </p>
          </div>
          <div className={s.content}>
            <ul className={s.resultDetails}>
              <li className={s.times}>
                <p>Time left:</p>
                <span>
                  <b>{time}</b>s
                </span>
              </li>
              <li className={s.mistake}>
                <p>Mistakes:</p>
                <span>{mistakesCount}</span>
              </li>
              <li className={s.wpm}>
                <p>WPM:</p>
                <span>{wpm}</span>
              </li>
              <li className={s.cpm}>
                <p>CPM:</p>
                <span>{cpm}</span>
              </li>
            </ul>
            <button onClick={resetGame}>Try again</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeedTestGame
