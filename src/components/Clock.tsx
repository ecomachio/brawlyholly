import { toLocaleStringDefaultConfig } from "../consts";

export const Clock = ({
  minutes,
  seconds,
}: {
  minutes: number;
  seconds: number;
}) => {
  return (
    <div className="rounded-full px-12 py-2 text-center text-white">
      <span className="text-5xl">
        {minutes.toLocaleString("en-US", toLocaleStringDefaultConfig)}:
        {seconds.toLocaleString("en-US", toLocaleStringDefaultConfig)}
      </span>
    </div>
  );
};
