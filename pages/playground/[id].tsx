import { useMemo } from "react";
import { useRouter } from "next/router";
import { PLAYGROUND_COMPONENTS } from "../../src/config";

import s from "../../src/styles/styles.module.scss";

const PlaygroundItem = () => {
  const router = useRouter();
  const componentPath = `/${router.query.id}`;

  const Component = useMemo(
    () => PLAYGROUND_COMPONENTS[componentPath] ?? null,
    [componentPath]
  );

  if (!Component) {
    return <div>404</div>;
  }

  return (
    <div>
      <div>
        <span
          className={`mx-2 my-1 cursor-pointer ${s.hover_link}`}
          onClick={router.back}
        >
          Go back
        </span>
      </div>
      <div className="flex items-center justify-center min-h-[530px]">
        <Component />
      </div>
    </div>
  );
};

export default PlaygroundItem;
