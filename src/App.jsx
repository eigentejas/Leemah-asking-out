import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
        "Naur",
        "Think again; you'll miss out on various intellectual debtates! 🤔",
        "Give it another thought; we could even learn to dance, maybe salsa, together! 👯",
        "Are you sure? We could hike every mountain 🧗‍♀️ and make so many dog friends! 🐶",
        "Are you absolutely certain? Missing out on sketching each other's ideas? 🎨",
        "Last chance! I could compose music for you... 🎹",
        "You might regret this! I was *just* about to play you some Lana songs... 🎶",
        "Don't want to zone 2 🏃‍♀️ and talk philosophy? 📚",
        "Okay, okay, last attempt… I give great massages! 💆‍♂️",
        "Plsss? 😭 I can try to be less cringey with my lines 🤡",
        "Fine, my loss, but just know… I'll still be here annoying you anyway! 😏"
      ]

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/mTJ4GSXWbHMAAAAj/kissing-love.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Mai tai man pasand chhu! ❤️
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://media.tenor.com/CtS0MGYRI6wAAAAi/animals.gif"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Leemah, will you be my girlfriend?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Omigawd Yes!
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
