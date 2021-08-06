import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const searchInputRef = useRef(null);
  const router = useRouter();
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    console.log(term);
    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Head>
        <title>Google</title>
      </Head>
      {/* Header */}
      <header className="flex justify-between items-center text-sm text-gray-700 p-5 w-full">
        {/* left */}
        <div className="flex space-x-5 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* right */}
        <div className="flex space-x-5 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2  rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://avatars.githubusercontent.com/u/52592655?s=60&v=4" />
        </div>
      </header>
      {/* Body */}
      <form className="flex flex-col items-center mt-39 flex-grow w-4/5">
        <Image
          src="https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_2x1.jpg"
          width="500"
          height="200"
        />
        <div className="flex  w-full hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-lg md:max-w-xl lg:max-w-xl">
          <SearchIcon className="h-5 mr-3   text-gray-500" />
          <input
            type="text"
            ref={searchInputRef}
            className=" focus:outline-none flex-grow "
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search{" "}
          </button>
          <button onClick={search} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
