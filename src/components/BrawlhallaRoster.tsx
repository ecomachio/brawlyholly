import { default as NextImage } from "next/image";
import type { FormEvent } from "react";
import React, { useState } from "react";
import { useStopwatch } from "react-timer-hook";
import styles from "./BrawlhallaRoster.module.css";
import { legends } from "../data/legends";
import { Win } from "./Win";
import { toLocaleStringDefaultConfig } from "../consts";
import { Clock } from "./Clock";

const BrawlhallaRoster = () => {
  const { seconds, minutes, isRunning, start, pause, reset } = useStopwatch({
    autoStart: false,
  });
  const [shareTitle, setShareTitle] = useState("");
  const [search, setSearch] = useState("");
  const [isWin, setIsWin] = useState(false);
  const [score, setScore] = useState(
    legends
      .filter((legend) => !legend.crossover)
      .map((legend) => ({
        name: legend.name,
        isRevealed: false,
      }))
  );

  function isRevealed(name: string): boolean {
    const foundLegend = score.find((legend) => legend.name === name);
    return foundLegend?.isRevealed || false;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (!isRunning) {
      start();
    }

    const foundLegend = legends.find((legend) =>
      legend.name.toLowerCase().includes(search.toLowerCase())
    );

    const foundExactMatch = legends.find(
      (legend) => legend.name.toLowerCase() === search.toLowerCase()
    );

    if (search.length < 5 && !foundExactMatch) {
      return;
    }

    if (foundLegend) {
      setScore((score) => {
        score = score.map((legend) =>
          legend.name === foundLegend.name
            ? { ...legend, isRevealed: true }
            : legend
        );

        const isWin = score.every((legend) => legend.isRevealed);
        if (isWin) {
          const title = `I finished Brawlhalla Roster in ${minutes.toLocaleString(
            "en-US",
            toLocaleStringDefaultConfig
          )}:${seconds.toLocaleString(
            "en-US",
            toLocaleStringDefaultConfig
          )}! Can you beat my time?`;
          setShareTitle(title);
          setIsWin(true);
          pause();
        }
        return score;
      });
    }

    setSearch("");
  }

  return (
    <>
      {isWin ? (
        <Win
          minutes={minutes}
          seconds={seconds}
          shareTitle={shareTitle}
          playAgain={() => {
            setIsWin(false);
            setScore(
              legends.map((legend) => ({
                name: legend.name,
                isRevealed: false,
              }))
            );
            reset();
          }}
        />
      ) : (
        <>
          <div className="sticky top-8 flex w-72 flex-col shadow-sm">
            {isRunning && <Clock minutes={minutes} seconds={seconds} />}
            <div className="rounded-md">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-input focus:shadow-outline-blue block w-full rounded-md border border-gray-300 bg-white py-3 px-4 leading-5 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out focus:border-blue-300 focus:outline-none"
                  placeholder="try a legend name"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />
              </form>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12">
            {legends
              .filter((legend) => !legend.crossover)
              .map((character, index) => (
                <div key={index} className=" h-full w-full">
                  <NextImage
                    priority
                    className="hidden"
                    src={character.image}
                    alt={character.name}
                    width={70}
                    height={70}
                  />
                  {isRevealed(character.name) ? (
                    <div className={styles.bounce}>
                      <NextImage
                        priority
                        className="h-full w-full rounded-br-3xl rounded-tl-3xl"
                        src={character.image}
                        alt={character.name}
                        width={70}
                        height={70}
                      />
                    </div>
                  ) : (
                    <div className="character-image bg-gray-500"></div>
                  )}
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default BrawlhallaRoster;
