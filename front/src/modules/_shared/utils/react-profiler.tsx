import { FC, Profiler, ReactNode } from "react";

export const ReactProfiler: FC<{ id: string; children: ReactNode }> = ({
  id,
  children,
}) => {
  function onRender(
    id: string,
    phase: string,
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    endTime: number,
  ) {
    console.table([
      ["id", id],
      ["phase", phase],
      ["actualDuration", actualDuration],
      ["baseDuration", baseDuration],
      ["startTime", startTime],
      ["endTime", endTime],
    ]);
  }

  return (
    <Profiler id={id} onRender={onRender}>
      {children}
    </Profiler>
  );
};
