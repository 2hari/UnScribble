import React from "react";
import Image from "next/image";
import CatOnTable from "../../../public/cat-on-table.jpg";
import CatOnTableRealistic from "../../../public/cat-on-table-realistic.png";
import CatOnTableAnime from "../../../public/cat-on-table-anime.png";
import CatOnTableLowPoly from "../../../public/cat-on-table-lowpoly.png";
import CatOnTableCartoon from "../../../public/cat-on-table-cartoon.png";
import CatOnTablePaiting from "../../../public/cat-on-table-painting.png";
import RaindBowInCloud from "../../../public/rainbow-in-cloud.jpg";
import RaindBowInCloudRealistic from "../../../public/rainbow-in-cloud-realistic.png";
import RaindBowInCloudAnime from "../../../public/rainbow-in-cloud-anime.png";
import RaindBowInCloudLowPoly from "../../../public/rainbow-in-cloud-lowpoly.png";
import RaindBowInCloudCartoon from "../../../public/rainbow-in-cloud-cartoon.png";
import RaindBowInCloudPainting from "../../../public/rainbow-in-cloud-painting.png";

type Props = {};

const ExamplesS = (props: Props) => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h3 className="text-2xl mb-4">Cat on table</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-2">
          <Image
            alt="Original Doodle"
            src={CatOnTable}
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
            placeholder="blur"
          />
          <span className="font-medium text-sm text-center">
            Original Doodle
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            alt="Transformed Doodle"
            src={CatOnTableRealistic}
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
            placeholder="blur"
          />
          <span className="font-medium text-sm text-center">
            Transformed Realistic
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            alt="Transformed Doodle"
            src={CatOnTableAnime}
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
            placeholder="blur"
          />
          <span className="font-medium text-sm text-center">
            Transformed Anime
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            alt="Transformed Doodle"
            src={CatOnTableLowPoly}
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
            placeholder="blur"
          />
          <span className="font-medium text-sm text-center">
            Transformed Low poly
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            alt="Transformed Doodle"
            src={CatOnTableCartoon}
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
            placeholder="blur"
          />
          <span className="font-medium text-sm text-center">
            Transformed Cartoon
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            alt="Transformed Doodle"
            src={CatOnTablePaiting}
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
            placeholder="blur"
          />
          <span className="font-medium text-sm text-center">
            Transformed Paiting
          </span>
        </div>
      </div>
      <h3 className="text-2xl mb-4 mt-12">Rainbow in cloud</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-2">
          <Image
            alt="Original Doodle"
            src={RaindBowInCloud}
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
            placeholder="blur"
          />
          <span className="font-medium text-sm text-center">
            Original Doodle
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            alt="Transformed Doodle"
            src={RaindBowInCloudRealistic}
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
            placeholder="blur"
          />
          <span className="font-medium text-sm text-center">
            Transformed Realistic
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            alt="Transformed Doodle"
            src={RaindBowInCloudAnime}
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
            placeholder="blur"
          />
          <span className="font-medium text-sm text-center">
            Transformed Anime
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            alt="Transformed Doodle"
            src={RaindBowInCloudLowPoly}
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
            placeholder="blur"
          />
          <span className="font-medium text-sm text-center">
            Transformed Low poly
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            alt="Transformed Doodle"
            src={RaindBowInCloudCartoon}
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
            placeholder="blur"
          />
          <span className="font-medium text-sm text-center">
            Transformed Cartoon
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            alt="Transformed Doodle"
            src={RaindBowInCloudPainting}
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
            placeholder="blur"
          />
          <span className="font-medium text-sm text-center">
            Transformed Paiting
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExamplesS;
