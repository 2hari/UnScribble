"use client";
import Image from "next/image";
import { FormEvent, useRef, useState } from "react";
import { Vibes } from "@/types/vibes";
import { Switch } from "./Switch";
import Loading from "./Loading";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import { VisualizeResponse } from "@/types/visualize";
import toast from "react-hot-toast";

enum InputMethod {
  Upload = "Upload",
  Draw = "Draw",
}

const Visualize: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState<string>("");
  const [vibe, setVibe] = useState<Vibes>("ultra-realistic");
  const [description, setDescription] = useState("");
  const [inputMethod, setInputMethod] = useState<InputMethod>(InputMethod.Draw);
  const [loading, setLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(
    null
  );

  const canvasRef = useRef<ReactSketchCanvasRef | null>(null);

  async function handleVisualize(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setLoading(true);

      let imageUrl = photoUrl;
      if (inputMethod === InputMethod.Draw && canvasRef.current) {
        const dataUri = await canvasRef.current.exportImage("jpeg");
        console.log("datauri", dataUri);
        const blob = await fetch(dataUri).then((r) => r.blob());
        console.log("blob", blob);
        const fileUrl = await uploadImage(blob);
        console.log("was-going-2-sent-server", fileUrl);
        imageUrl = fileUrl;
      }

      const res = await fetch("/api/visualize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageUrl: imageUrl,
          vibe: vibe,
          description: description,
        }),
      });

      const json = (await res.json()) as VisualizeResponse;

      setGeneratedImageUrl(json.generated);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      // toast.error(
      //   `Something went wrong, try again later.\n\n error: ${error}`,
      //   {
      //     duration: 6000,
      //   }
      // );
      toast.error(`Something went wrong, try again later.`);
    }
  }

  async function uploadImage(imgFile: any) {
    setIsUploading(true);
    console.log(imgFile);
    const formData = new FormData();
    formData.append("file", imgFile);
    formData.append("upload_preset", "w68rfgzg");

    const upload = await fetch(
      "https://api.cloudinary.com/v1_1/harihari/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const uploadResponse = await upload.json();
    console.log("upload-response", uploadResponse);
    if (uploadResponse.secure_url) {
      setPhotoUrl(uploadResponse.secure_url);
      setIsUploading(false);
      return uploadResponse.secure_url;
    }

    setIsUploading(false);
    return null;
  }

  function toggleInputMethod(params: boolean) {
    setPhotoUrl("");
    setGeneratedImageUrl("");
    setInputMethod(
      inputMethod === InputMethod.Draw ? InputMethod.Upload : InputMethod.Draw
    );
    return;
  }

  console.log(inputMethod);

  return (
    <div className="flex flex-col px-4 pt-4 items-center gap-8 max-w-2xl mx-auto">
      <form className="w-full flex flex-col gap-8" onSubmit={handleVisualize}>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center gap-2">
            <span className="rounded-3xl px-2 bg-slate-900 text-slate-100">
              1
            </span>
            <span className="font-medium text-lg">Choose a vibe</span>
          </div>

          <select
            value={vibe}
            onChange={(e) => {
              setVibe(e.target.value as Vibes);
              setGeneratedImageUrl("");
            }}
            className="rounded-lg p-2 w-full text-lg transition-all border border-slate-300"
          >
            <option value="ultra-realistic">Ultra Realistic</option>
            <option value="low-poly">Low Poly</option>
            <option value="anime">Anime</option>
            <option value="cartoon">Cartoon</option>
            <option value="painting">Painting</option>
          </select>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center gap-2">
            <span className="rounded-3xl px-2 bg-slate-900 text-slate-100">
              2
            </span>
            <span className="font-medium text-lg">
              Short description of scribble
            </span>
          </div>

          <input
            type="text"
            className="rounded-lg p-2 w-full transition-all border border-slate-300 text-lg"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3 w-full">
          <div className="flex items-center gap-2 w-full">
            <span className="rounded-3xl px-2 bg-slate-900 text-slate-100">
              3
            </span>
            <span className="font-medium text-lg">
              Draw or upload your scribble
            </span>

            <div className="ml-auto flex items-center gap-2">
              {inputMethod}
              <Switch id="drawOrUpload" onCheckedChange={toggleInputMethod} />
            </div>
          </div>

          {photoUrl ? (
            <div className="relative pt-3">
              <div className="flex justify-around">
                <div className="h-[512px] w-[512px] relative overflow-hidden">
                  <Image
                    alt="Scribble"
                    src={photoUrl}
                    fill={true}
                    className="object-cover"
                  />
                </div>
              </div>
              <div
                className="absolute right-4 top-4 cursor-pointer transition-all hover:scale-105"
                onClick={() => {
                  setPhotoUrl("");
                  setGeneratedImageUrl("");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            </div>
          ) : inputMethod === InputMethod.Upload ? (
            <div className="flex justify-around pt-3">
              <label htmlFor="imageUploadInput" className="cursor-pointer">
                <input
                  id="imageUploadInput"
                  type="file"
                  accept="image/*"
                  onChange={(e) => uploadImage(e.target.files![0])}
                  className="hidden"
                />
                <div className="h-[270px] w-[270px] md:h-[512px] md:w-[512px] border-2 border-dashed border-[#334155]/30 flex justify-around items-center">
                  {isUploading ? (
                    <Loading color={"text-[#334155]/70"} size={"h-10 w-10"} />
                  ) : (
                    <Image
                      alt="Photo"
                      src={"/upload.svg"}
                      width={40}
                      height={40}
                    />
                  )}
                </div>
              </label>
            </div>
          ) : (
            <div className="relative pt-3">
              <ReactSketchCanvas
                ref={canvasRef}
                className="mx-auto"
                height="512px"
                width="512px"
                strokeWidth={4}
                strokeColor="black"
                exportWithBackgroundImage={false}
              />

              <div
                className="absolute right-4 top-4 cursor-pointer transition-all hover:scale-105"
                onClick={() => {
                  canvasRef.current?.clearCanvas();
                  setGeneratedImageUrl("");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="py-3 px-5 border-2 w-full rounded-lg flex justify-center font-medium bg-slate-900 text-slate-100 transition-colors hover:bg-slate-700 border-slate-700"
        >
          {loading ? (
            <Loading />
          ) : generatedImageUrl ? (
            <span className=" text-white flex items-center">
              Image Generated
              <span className="inline-block ml-4">
                <svg
                  className="h-5 w-5 animate-bounce"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                  />
                </svg>
              </span>
            </span>
          ) : (
            "Transform"
          )}
        </button>
      </form>

      {generatedImageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img alt="Generated Image" src={generatedImageUrl} className="w-full" />
      )}
    </div>
  );
};

export default Visualize;
