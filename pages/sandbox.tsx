import { useState } from "react";
import Image from "next/image";
import cn from "classnames";
import s from "../styles/styles.module.scss";

const Sandbox = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={cn(s.card_main_box, { [s.active]: isActive })}>
      <div className={s.contentBx}>
        <div className={s.content}>
          <h2>
            Someone Famous <br /> <span>Creative Desinger</span>
          </h2>
          <div className={s.imgBx}>
            <Image
              src="/user_avatar.webp"
              alt="user avatar"
              width={128}
              height={128}
              layout="responsive"
            />
            <button>Hi👋, its me!</button>
          </div>
        </div>
      </div>
      <div className={s.toggle} onClick={() => setIsActive((prev) => !prev)}>
        <span />
      </div>
    </div>
  );
};

export default Sandbox;
