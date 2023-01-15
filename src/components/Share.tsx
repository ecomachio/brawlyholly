import {
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

const shareUrl = "https://https://brawlyholly-46xk.vercel.app/";
export const Share = ({
  shareTitle,
  playAgain,
}: {
  shareTitle: string;
  playAgain: () => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">
        Challenge your friends to beat your time!
      </h2>
      <div className="flex items-center justify-center gap-4 p-8">
        <TwitterShareButton
          url={shareUrl}
          title={shareTitle}
          className="Demo__some-network__share-button"
        >
          <TwitterIcon size={64} round />
        </TwitterShareButton>
        <WhatsappShareButton
          url={shareUrl}
          title={shareTitle}
          separator=":: "
          className="Demo__some-network__share-button"
        >
          <WhatsappIcon size={64} round />
        </WhatsappShareButton>
        <FacebookShareButton
          url={shareUrl}
          title={shareTitle}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={64} round />
        </FacebookShareButton>
        <RedditShareButton
          url={shareUrl}
          title={shareTitle}
          className="Demo__some-network__share-button"
        >
          <RedditIcon size={64} round />
        </RedditShareButton>
        <TelegramShareButton
          url={shareUrl}
          title={shareTitle}
          className="Demo__some-network__share-button"
        >
          <TelegramIcon size={64} round />
        </TelegramShareButton>
      </div>
      <button
        className="rounded-md bg-blue-500 p-4 text-2xl font-bold shadow-md hover:bg-blue-600"
        onClick={playAgain}
      >
        Play Again
      </button>
    </div>
  );
};
