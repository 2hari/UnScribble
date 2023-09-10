import clsx from "clsx";
import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const clash = localFont({ src: "../app/ClashDisplay-Variable.ttf" });

const Hero: React.FC = () => {
  return (
    <div className="px-4 py-4 md:py-10 flex flex-col items-center gap-4">
      <h1
        className={clsx(
          clash.className,
          "text-4xl md:text-7xl font-semibold text-center max-w-2xl mt-8"
        )}
      >
        Transform your Scribbles{" "}
        <span className="bg-gradient-to-r text-transparent bg-clip-text from-violet-500 to-blue-500">
          with AI
        </span>
      </h1>

      <p className="text-lg max-w-2xl text-center">
        Generate various visual styles for your scribble using our AI. It&apos;s
        free - try now!
      </p>

      <div className="flex items-center gap-3 mt-2">
        <Link href="/visualize">
          <button
            type="button"
            className=" py-3 px-5 border-2 rounded-lg font-medium bg-slate-900 text-slate-100 transition-colors hover:bg-slate-700 border-slate-700"
          >
            Transform Scribble
          </button>
        </Link>
      </div>

      <div className="flex gap-4 mt-12">
        <div className="flex flex-col gap-2">
          <Image
            alt="Pizza Doodle"
            src="/pizza.jpg"
            className="rounded-md border border-slate-300"
            width={256}
            height={256}
          />
          <span className="font-medium text-sm text-center">
            Original doodle + &quot;A pizza slice&quot;
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <Image
            alt="Transformed Doodle"
            src="/pizza-realistic.png"
            className="rounded-md border border-slate-300"
            width={256}
            height={256}
          />
          <span className="font-medium text-sm text-center">
            Transformed doodle
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
