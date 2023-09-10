import React from "react";
import Image from "next/image";

type Props = {};

const ExamplesS = (props: Props) => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h3 className="text-2xl mb-4">Cat on table</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-2">
          <Image
            alt="Original Doodle"
            src="/cat-on-table.jpg"
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
          />
          <span className="font-medium text-sm text-center">
            Original Doodle
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            alt="Transformed Doodle"
            src="/cat-on-table-realistic.png"
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
          />
          <span className="font-medium text-sm text-center">
            Transformed Realistic
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            alt="Transformed Doodle"
            src="/cat-on-table-anime.png"
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
          />
          <span className="font-medium text-sm text-center">
            Transformed Anime
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            alt="Transformed Doodle"
            src="/cat-on-table-lowpoly.png"
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
          />
          <span className="font-medium text-sm text-center">
            Transformed Low poly
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            alt="Transformed Doodle"
            src="/cat-on-table-cartoon.png"
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
          />
          <span className="font-medium text-sm text-center">
            Transformed Cartoon
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            alt="Transformed Doodle"
            src="/cat-on-table-painting.png"
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
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
            src="/rainbow-in-cloud.jpg"
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
          />
          <span className="font-medium text-sm text-center">
            Original Doodle
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            alt="Transformed Doodle"
            src="/rainbow-in-cloud-realistic.png"
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
          />
          <span className="font-medium text-sm text-center">
            Transformed Realistic
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            alt="Transformed Doodle"
            src="/rainbow-in-cloud-anime.png"
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
          />
          <span className="font-medium text-sm text-center">
            Transformed Anime
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            alt="Transformed Doodle"
            src="/rainbow-in-cloud-lowpoly.png"
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
          />
          <span className="font-medium text-sm text-center">
            Transformed Low poly
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            alt="Transformed Doodle"
            src="/rainbow-in-cloud-cartoon.png"
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
          />
          <span className="font-medium text-sm text-center">
            Transformed Cartoon
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            alt="Transformed Doodle"
            src="/rainbow-in-cloud-painting.png"
            className="rounded-md border border-slate-300"
            width={200}
            height={200}
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
