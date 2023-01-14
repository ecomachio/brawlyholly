import { default as NextImage } from "next/image";
import { FormEvent, useEffect } from "react";
import React, { useState } from "react";
import { useStopwatch } from "react-timer-hook";
import styles from "./BrawlhallaRoster.module.css";
import {
  FacebookIcon,
  FacebookShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { useRouter } from "next/router";

const legends = [
  {
    name: "Bodvar",
    image: "https://www.brawlhalla.com/c/uploads/2021/07/bodvar.png",
  },
  {
    name: "Cassidy",
    image: "https://www.brawlhalla.com/c/uploads/2021/07/cassidy.png",
  },
  {
    name: "Orion",
    image: "https://www.brawlhalla.com/c/uploads/2021/07/orion.png",
  },
  {
    name: "Lord Vraxx",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_VraxxM-1.png",
  },
  {
    name: "Gnash",
    image: "https://www.brawlhalla.com/c/uploads/2021/07/gnash.png",
  },
  {
    name: "Queen Nai",
    image: "https://www.brawlhalla.com/c/uploads/2021/07/nai.png",
  },
  {
    name: "Hattori",
    image: "https://www.brawlhalla.com/c/uploads/2021/07/hattori.png",
  },
  {
    name: "Sir Roland",
    image: "https://www.brawlhalla.com/c/uploads/2021/07/roland.png",
  },
  {
    name: "Scarlet",
    image: "https://www.brawlhalla.com/c/uploads/2021/07/scarlet.png",
  },
  {
    name: "Thatch",
    image: "https://www.brawlhalla.com/c/uploads/2021/07/thatch.png",
  },
  {
    name: "Ada",
    image: "https://www.brawlhalla.com/c/uploads/2021/07/ada.png",
  },
  {
    name: "Sentinel",
    image: "https://www.brawlhalla.com/c/uploads/2021/07/sentinel.png",
  },
  {
    name: "Lucien",
    image: "https://www.brawlhalla.com/c/uploads/2021/07/lucien.png",
  },
  {
    name: "Teros",
    image: "https://www.brawlhalla.com/c/uploads/2021/07/teros.png",
  },
  {
    name: "Brynn",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ValkyrieM.png",
  },
  {
    name: "Asuri",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_CatM.png",
  },
  {
    name: "Barraza",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ApocM.png",
  },
  {
    name: "Ember",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ElfM.png",
  },
  {
    name: "Azoth",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_AzothM.png",
  },
  {
    name: "Koji",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_SamuraiM.png",
  },
  {
    name: "Ulgrim",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_DwarfM.png",
  },
  {
    name: "Diana",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_MonsterHunterM.png",
  },
  {
    name: "Jhala",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_BarbarianM.png",
  },
  {
    name: "Kor",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_GolemM.png",
  },
  {
    name: "Wu Shang",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_MonkM.png",
  },
  {
    name: "Val",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ValM.png",
  },
  {
    name: "Ragnir",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_DragonM.png",
  },
  {
    name: "Cross",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_CrossM.png",
  },
  {
    name: "Mirage",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_AssassinM.png",
  },
  {
    name: "Nix",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ReaperM.png",
  },
  {
    name: "Mordex",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_WerewolfM.png",
  },
  {
    name: "Yumiko",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_KitsuneM.png",
  },
  {
    name: "Artemis",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_SpaceHunterM.png",
  },
  {
    name: "Caspian",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ThiefM.png",
  },
  {
    name: "Sidra",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_CorsairM.png",
  },
  {
    name: "Xull",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_BruteM.png",
  },
  {
    name: "Kaya",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_InuitM-1.png",
  },
  {
    name: "Isaiah",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_SoldierM.png",
  },
  {
    name: "Jiro",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ShinobiM.png",
  },
  {
    name: "Lin Fei",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_WuxiaM.png",
  },
  {
    name: "Zariel",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_CelestialM.png",
  },
  {
    name: "Rayman",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_RaymanM.png",
  },
  {
    name: "Dusk",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ElfwarM.png",
  },
  {
    name: "Fait",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_SpellwitchM.png",
  },
  {
    name: "Thor",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ThorM.png",
  },
  {
    name: "Petra",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_RagefighterM.png",
  },
  {
    name: "Vector",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ActualRobotM.png",
  },
  {
    name: "Volkov",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_VampLordM.png",
  },
  {
    name: "Onyx",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_GargoyleM.png",
  },
  {
    name: "Jaeyun",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_SellswordM.png",
  },
  {
    name: "Mako",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ActualSharkM.png",
  },
  {
    name: "Magyar",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_GhostArmorM.png",
  },
  {
    name: "Reno",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_BountyHunterM.png",
  },
  {
    name: "Munin",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/12/a_Roster_Pose_BirdBardM.png",
  },
  {
    name: "Arcadia",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/03/a_Roster_Pose_FairyQueenM.png",
  },
  {
    name: "Ezio",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/07/a_Roster_Pose_EzioM.png",
  },
  {
    name: "Tezca",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/12/a_Roster_Pose_LuchadorM.png",
  },
  {
    name: "Shovel Knight",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_ShovelKnightM.png",
    crossover: true,
  },
  {
    name: "Black Knight",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_BlackKnightM.png",
    crossover: true,
  },
  {
    name: "King Knight",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_KingKnightM.png",
    crossover: true,
  },
  {
    name: "Specter Knight",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_SpecterKnightM.png",
    crossover: true,
  },
  {
    name: "Plague Knight",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_PlagueKnightM.png",
    crossover: true,
  },
  {
    name: "Enchantress",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_EnchantressM.png",
    crossover: true,
  },
  {
    name: "Globox",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_GloboxM.png",
    crossover: true,
  },
  {
    name: "Barbara",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_BarbaraM.png",
    crossover: true,
  },
  {
    name: "Hellboy",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_HellboyM.png",
    crossover: true,
  },
  {
    name: "Nimue",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_NimueM.png",
    crossover: true,
  },
  {
    name: "Daimio",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_DaimioM.png",
    crossover: true,
  },
  {
    name: "Gruagach",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_GruagachM.png",
    crossover: true,
  },
  {
    name: "Finn",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_FinnM.png",
    crossover: true,
  },
  {
    name: "Jake",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_JakeM.png",
    crossover: true,
  },
  {
    name: "Princess Bubblegum",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_BubblegumM.png",
    crossover: true,
  },
  {
    name: "John Cena",
    image: "https://www.brawlhalla.com/c/uploads/2021/12/Cena.png",
    crossover: true,
  },

  {
    name: "Becky Lynch",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_BeckyM.png",
    crossover: true,
  },
  {
    name: "Xavier Woods",
    image: "https://www.brawlhalla.com/c/uploads/2021/12/Xavier.png",
    crossover: true,
  },

  {
    name: "The Rock",
    image: "https://www.brawlhalla.com/c/uploads/2021/12/therock.png",
    crossover: true,
  },

  {
    name: "Asuka",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_AsukaM.png",
    crossover: true,
  },
  {
    name: "Roman Reigns",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_RomanReignsM.png",
    crossover: true,
  },
  {
    name: "Macho Man",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_MachoManM.png",
    crossover: true,
  },
  {
    name: "The Undertaker",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_UndertakerM.png",
    crossover: true,
  },
  {
    name: "Amethyst",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_AmethystM.png",
    crossover: true,
  },
  {
    name: "Stevonnie",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_StevonnieM.png",
    crossover: true,
  },
  {
    name: "Garnet",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_GarnetM.png",
    crossover: true,
  },
  {
    name: "Pearl",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_PearlM.png",
    crossover: true,
  },
  {
    name: "Lara Croft",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_LaraClassicM.png",
    crossover: true,
  },
  {
    name: "Heatblast",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_HeatblastM.png",
    crossover: true,
  },
  {
    name: "Diamondhead",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_DiamondheadM.png",
    crossover: true,
  },
  {
    name: "Four Arms",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_FourArmsM.png",
    crossover: true,
  },
  {
    name: "Michonne",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_MichonneM.png",
    crossover: true,
  },
  {
    name: "Daryl",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_DarylM.png",
    crossover: true,
  },
  {
    name: "Rick",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_RickM.png",
    crossover: true,
  },
  {
    name: "Negan",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/12/a_Roster_Pose_NeganM.png",
    crossover: true,
  },
  {
    name: "Maggie",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/12/a_Roster_Pose_MaggieM.png",
    crossover: true,
  },
  {
    name: "Po",
    image: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_PoM.png",
    crossover: true,
  },

  {
    name: "Tai Lung",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_TaiLungM.png",
    crossover: true,
  },
  {
    name: "Tigress",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/01/a_Roster_Pose_TigressM.png",
    crossover: true,
  },
  {
    name: "Michelangelo",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_MikeyM.png",
    crossover: true,
  },
  {
    name: "Raphael",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_RaphM.png",
    crossover: true,
  },
  {
    name: "Leonardo",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_LeoM.png",
    crossover: true,
  },
  {
    name: "Donatello",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_DonnieM.png",
    crossover: true,
  },
  {
    name: "Ryu",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/12/a_Roster_Pose_RyuM.png",
    crossover: true,
  },
  {
    name: "Chun Li",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/12/a_Roster_Pose_ChunLiM.png",
    crossover: true,
  },
  {
    name: "Akuma",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/12/a_Roster_Pose_AkumaM.png",
    crossover: true,
  },
  {
    name: "M. Bison",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/05/a_Roster_Pose_BisonM-1.png",
    crossover: true,
  },
  {
    name: "Ken",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/05/a_Roster_Pose_KenM-1.png",
    crossover: true,
  },
  {
    name: "Sakura",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/05/a_Roster_Pose_SakuraM-1.png",
    crossover: true,
  },
  {
    name: "Dhalsim",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/05/a_Roster_Pose_DhalsimM-1.png",
    crossover: true,
  },
  {
    name: "Luke",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/05/a_Roster_Pose_LukeM-1.png",
    crossover: true,
  },
  {
    name: "Storm Shadow",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/03/a_Roster_Pose_StormShadowM.png",
    crossover: true,
  },
  {
    name: "Snake Eyes",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/03/a_Roster_Pose_SnakeEyesM.png",
    crossover: true,
  },
  {
    name: "Eivor",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/07/a_Roster_Pose_EivorM.png",
    crossover: true,
  },
  {
    name: "Alucard",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/10/a_Roster_Pose_AlucardCVM.png",
    crossover: true,
  },
  {
    name: "Simon Belmont",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/10/a_Roster_Pose_SimonCVM.png",
    crossover: true,
  },
  {
    name: "Aang",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/11/a_Roster_Pose_AangM.png",
    crossover: true,
  },
  {
    name: "Toph",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/11/a_Roster_Pose_TophM.png",
    crossover: true,
  },
  {
    name: "Zuko",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/11/a_Roster_Pose_ZukoM.png",
    crossover: true,
  },
];

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

  // force download all images that are not crossover
  // useEffect(() => {
  //   legends
  //     .filter((legend) => !legend.crossover)
  //     .forEach((legend) => {
  //       console.log(legend.image);
  //       <NextImage
  //         priority
  //         className="h-full w-full rounded-br-3xl rounded-tl-3xl"
  //         src={legend.image}
  //         alt={legend.name}
  //         width={70}
  //         height={70}
  //       />;
  //     });
  // }, []);

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
        console.log(score);
        score = score.map((legend) =>
          legend.name === foundLegend.name
            ? { ...legend, isRevealed: true }
            : legend
        );

        const isWin = score.every((legend) => legend.isRevealed);
        if (isWin) {
          const title = `I finished Brawlhalla Roster in ${minutes.toLocaleString(
            "en-US",
            {
              minimumIntegerDigits: 2,
              useGrouping: false,
            }
          )}:${seconds.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}! Can you beat my time?`;
          setShareTitle(title);
          setIsWin(true);
          pause();
        }
        return score;
      });
    }

    setSearch("");
  }
  const shareUrl = "https://https://brawlyholly-46xk.vercel.app/";

  return (
    <>
      {isWin ? (
        <div className="flex h-full w-full flex-col items-center justify-center p-6 text-white transition-all duration-500 ease-in-out">
          <NextImage
            src="https://static.wikia.nocookie.net/brawlhalla_gamepedia/images/1/1c/Banner_Rank_Valhallan.png/revision/latest?cb=20220928135053"
            width={150}
            height={150}
            alt="You Win!"
          />
          <h1 className="p-2 text-4xl font-bold">You Win!</h1>
          <span className="p-6 text-3xl">
            Your Time{" "}
            {minutes.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
            :
            {seconds.toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </span>

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
              onClick={() => {
                setIsWin(false);
                setScore(
                  legends.map((legend) => ({
                    name: legend.name,
                    isRevealed: false,
                  }))
                );
                reset();
              }}
            >
              Play Again
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="sticky top-8 flex flex-col shadow-sm">
            {isRunning && (
              <div className="rounded-full px-12 py-2 text-center text-white">
                <span className="text-5xl">
                  {minutes.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                  })}
                  :
                  {seconds.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                  })}
                </span>
              </div>
            )}
            <div className="rounded-md">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-input focus:shadow-outline-blue block w-full rounded-md border border-gray-300 bg-white py-3 px-4 leading-5 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out focus:border-blue-300 focus:outline-none"
                  placeholder="Min 5 characters"
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
