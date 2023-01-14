import Image from "next/image";
import React, { FormEvent, FormEventHandler, useEffect, useState } from "react";
import styles from "./BrawlhallaRoster.module.css";

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
  },
  {
    name: "Black Knight",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_BlackKnightM.png",
  },
  {
    name: "King Knight",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_KingKnightM.png",
  },
  {
    name: "Specter Knight",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_SpecterKnightM.png",
  },
  {
    name: "Plague Knight",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_PlagueKnightM.png",
  },
  {
    name: "Enchantress",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_EnchantressM.png",
  },
  {
    name: "Globox",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_GloboxM.png",
  },
  {
    name: "Barbara",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_BarbaraM.png",
  },
  {
    name: "Hellboy",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_HellboyM.png",
  },
  {
    name: "Nimue",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_NimueM.png",
  },
  {
    name: "Daimio",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_DaimioM.png",
  },
  {
    name: "Gruagach",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_GruagachM.png",
  },
  {
    name: "Finn",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_FinnM.png",
  },
  {
    name: "Jake",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_JakeM.png",
  },
  {
    name: "Princess Bubblegum",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_BubblegumM.png",
  },
  {
    name: "John Cena",
    image: "https://www.brawlhalla.com/c/uploads/2021/12/Cena.png",
  },
  {
    name: "Becky Lynch",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_BeckyM.png",
  },
  {
    name: "Xavier Woods",
    image: "https://www.brawlhalla.com/c/uploads/2021/12/Xavier.png",
  },
  {
    name: "The Rock",
    image: "https://www.brawlhalla.com/c/uploads/2021/12/therock.png",
  },
  {
    name: "Asuka",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_AsukaM.png",
  },
  {
    name: "Roman Reigns",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_RomanReignsM.png",
  },
  {
    name: "Macho Man",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_MachoManM.png",
  },
  {
    name: "The Undertaker",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_UndertakerM.png",
  },
  {
    name: "Amethyst",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_AmethystM.png",
  },
  {
    name: "Stevonnie",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_StevonnieM.png",
  },
  {
    name: "Garnet",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_GarnetM.png",
  },
  {
    name: "Pearl",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_PearlM.png",
  },
  {
    name: "Lara Croft",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_LaraClassicM.png",
  },
  {
    name: "Heatblast",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_HeatblastM.png",
  },
  {
    name: "Diamondhead",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_DiamondheadM.png",
  },
  {
    name: "Four Arms",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_FourArmsM.png",
  },
  {
    name: "Michonne",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_MichonneM.png",
  },
  {
    name: "Daryl",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_DarylM.png",
  },
  {
    name: "Rick",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_RickM.png",
  },
  {
    name: "Negan",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/12/a_Roster_Pose_NeganM.png",
  },
  {
    name: "Maggie",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/12/a_Roster_Pose_MaggieM.png",
  },
  {
    name: "Po",
    image: "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_PoM.png",
  },
  {
    name: "Tai Lung",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_TaiLungM.png",
  },
  {
    name: "Tigress",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/01/a_Roster_Pose_TigressM.png",
  },
  {
    name: "Michelangelo",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_MikeyM.png",
  },
  {
    name: "Raphael",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_RaphM.png",
  },
  {
    name: "Leonardo",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_LeoM.png",
  },
  {
    name: "Donatello",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/07/a_Roster_Pose_DonnieM.png",
  },
  {
    name: "Ryu",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/12/a_Roster_Pose_RyuM.png",
  },
  {
    name: "Chun Li",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/12/a_Roster_Pose_ChunLiM.png",
  },
  {
    name: "Akuma",
    image:
      "https://www.brawlhalla.com/c/uploads/2021/12/a_Roster_Pose_AkumaM.png",
  },
  {
    name: "M. Bison",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/05/a_Roster_Pose_BisonM-1.png",
  },
  {
    name: "Ken",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/05/a_Roster_Pose_KenM-1.png",
  },
  {
    name: "Sakura",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/05/a_Roster_Pose_SakuraM-1.png",
  },
  {
    name: "Dhalsim",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/05/a_Roster_Pose_DhalsimM-1.png",
  },
  {
    name: "Luke",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/05/a_Roster_Pose_LukeM-1.png",
  },
  {
    name: "Storm Shadow",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/03/a_Roster_Pose_StormShadowM.png",
  },
  {
    name: "Snake Eyes",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/03/a_Roster_Pose_SnakeEyesM.png",
  },
  {
    name: "Eivor",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/07/a_Roster_Pose_EivorM.png",
  },
  {
    name: "Alucard",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/10/a_Roster_Pose_AlucardCVM.png",
  },
  {
    name: "Simon Belmont",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/10/a_Roster_Pose_SimonCVM.png",
  },
  {
    name: "Aang",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/11/a_Roster_Pose_AangM.png",
  },
  {
    name: "Toph",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/11/a_Roster_Pose_TophM.png",
  },
  {
    name: "Zuko",
    image:
      "https://www.brawlhalla.com/c/uploads/2022/11/a_Roster_Pose_ZukoM.png",
  },
];

const BrawlhallaRoster = () => {
  const [search, setSearch] = useState("");
  const [score, setScore] = useState(
    legends.map((legend) => ({
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
      setScore(
        score.map((legend) =>
          legend.name === foundLegend.name
            ? { ...legend, isRevealed: true }
            : legend
        )
      );
    }
    setSearch("");
  }

  return (
    <>
      <div className="sticky top-8 animate-[wiggle_1s_ease-in-out_infinite] bg-sky-500/50 shadow-sm">
        <div className="rounded-md">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-input focus:shadow-outline-blue block w-full rounded-md border border-gray-300 bg-white py-3 px-4 leading-5 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out focus:border-blue-300 focus:outline-none"
              placeholder="Search..."
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </form>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
            >
              <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 transition-height duration-1000 ease-in-out md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12">
        {legends.map((character, index) => (
          <div key={index} className=" h-full w-full">
            {!isRevealed(character.name) ? (
              <div className={styles.bounce}>
                <Image
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
  );
};

export default BrawlhallaRoster;
