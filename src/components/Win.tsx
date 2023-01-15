import { default as NextImage } from "next/image";
import { toLocaleStringDefaultConfig } from "../consts";
import { Share } from "./Share";

type WinProps = {
  minutes: number;
  seconds: number;
  shareTitle: string;
  playAgain: () => void;
};

export const Win = ({ minutes, seconds, shareTitle, playAgain }: WinProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-white transition-all duration-500 ease-in-out">
      <NextImage
        src="https://static.wikia.nocookie.net/brawlhalla_gamepedia/images/1/1c/Banner_Rank_Valhallan.png/revision/latest?cb=20220928135053"
        width={150}
        height={150}
        alt="You Win!"
      />
      <h1 className="p-2 text-4xl font-bold">You Win!</h1>
      <span className="p-6 text-3xl">
        Your Time {minutes.toLocaleString("en-US", toLocaleStringDefaultConfig)}
        :{seconds.toLocaleString("en-US", toLocaleStringDefaultConfig)}
      </span>
      <Share shareTitle={shareTitle} playAgain={playAgain} />
    </div>
  );
};
