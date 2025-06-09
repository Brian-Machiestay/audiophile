// images
import Image from "next/image";
import Header from "./components/header";
import headphone_store1 from './assets/shared/desktop/image-category-thumbnail-headphones.png'
import speaker_store2 from './assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphones_store3 from './assets/shared/desktop/image-category-thumbnail-earphones.png'
import arrowright from './assets/shared/desktop/icon-arrow-right.svg'
import zx9_speaker from './assets/home/desktop/image-speaker-zx9.png'

export default function Home() {
  return (
    <main className="">
      <div className="bg-almostblack px-28 bg-[url('/images/image-hero.jpg')] bg-cover h-[729px]">
        <Header />
        <section className="flex flex-1 flex-col text-white justify-center h-[85%]">
          <div className="">
            <h1 className="tracking-[10px]">NEW PRODUCT</h1>
            <p className="text-[56px] font-bold">XX99 MARK II</p>
            <p className="text-[56px] font-bold">HEADPHONES</p>
            <p className="w-[349px]">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <button className="mt-14 bg-orange hover:bg-lightorange py-4 px-6">
              SEE PRODUCT
            </button>
          </div>
        </section>
        <section className="mt-72 flex justify-between">
            <button className="flex relative w-[350px] h-[204px] group">
                <Image src={headphone_store1} alt="head phone" className="absolute w-80 -mt-28" />
                <div className="bg-gray w-full flex flex-col justify-end items-center rounded">
                  <p className="tracking-[1.29px] text-[18pt] font-bold">HEADPHONES</p>
                  <p className="w-fit flex gap-2 items-center group-hover:text-orange">
                    SHOP <span className="text-2xl text-orange"><Image src={arrowright} alt="arrow right" /></span>
                  </p>
                </div>
            </button>
            <button className="flex relative w-[350px] h-[204px] group">
                <Image src={speaker_store2} alt="head phone" className="absolute w-80 -mt-28" />
                <div className="bg-gray w-full flex flex-col justify-end items-center rounded">
                  <p className="tracking-[1.29px] text-[18pt] font-bold">SPEAKERS</p>
                  <p className="w-fit flex gap-2 items-center group-hover:text-orange">
                    SHOP <span className="text-2xl text-orange"><Image src={arrowright} alt="arrow right" /></span>
                  </p>
                </div>
            </button>
            <button className="flex relative w-[350px] h-[204px] group">
                <Image src={earphones_store3} alt="head phone" className="absolute w-80 -mt-28" />
                <div className="bg-gray w-full flex flex-col justify-end items-center rounded">
                  <p className="tracking-[1.29px] text-[18pt] font-bold">EARPHONES</p>
                  <p className="w-fit flex gap-2 items-center group-hover:text-orange">
                    SHOP <span className="text-2xl text-orange"><Image src={arrowright} alt="arrow right" /></span>
                  </p>
                </div>
            </button>
        </section>
        <section className="flex items-center justify-between text-white bg-orange mt-40 rounded-lg h-[560px] bg-[url('/images/pattern-circles.svg')] bg-cover">
          <div className="self-end ml-64 w-fit overflow-hidden">
            <Image src={zx9_speaker} alt="zx9 speaker" className="-mb-4 w-fit" />
          </div>
          <div className="mr-32">
            <p className="text-[56pt] font-bold">zx9</p>
            <p className="text-[56pt] font-bold">SPEAKER</p>
            <p className="w-[349px] text-almostwhite">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <button className="mt-14 bg-fullblack py-4 px-6 text-white hover:bg-almostblack">
              SEE PRODUCT
            </button>
          </div>
        </section>
        <section className="mt-24 rounded-lg">
          <div className="bg-[url('/images/image-speaker-zx7.jpg')] bg-cover bg-no-repeat w-full min-h-[320px] rounded-lg pl-32 flex flex-col justify-center">
            <p className="text-[28pt] font-bold">zx7 SPEAKER</p>
            <button className="mt-14 bg-fullblack py-4 px-6 text-white hover:bg-almostblack w-fit">
              SEE PRODUCT
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
