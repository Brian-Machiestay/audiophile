// images
import Image from "next/image";
import Header from "./components/header";
import headphone_store1 from './assets/shared/desktop/image-category-thumbnail-headphones.png'
import speaker_store2 from './assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphones_store3 from './assets/shared/desktop/image-category-thumbnail-earphones.png'
import arrowright from './assets/shared/desktop/icon-arrow-right.svg'
import zx9_speaker from './assets/home/desktop/image-speaker-zx9.png'
import yx1_earphones from './assets/home/desktop/image-earphones-yx1.jpg'
import image_gear from './assets/shared/desktop/image-best-gear.jpg'
import logo from './assets/shared/desktop/logo.svg'
import facebook_logo from './assets/shared/desktop/icon-facebook.svg'
import x_logo from './assets/shared/desktop/icon-twitter.svg'
import insta_logo from './assets/shared/desktop/icon-instagram.svg'




export default function Home() {
  return (
    <main className="">
      <section className="bg-almostblack px-28 bg-[url('/images/image-hero.jpg')] bg-cover h-[729px]">
        <Header />
        <div className="flex flex-1 flex-col text-white justify-center h-[85%]">
          <div className="">
            <h1 className="tracking-[10px]">NEW PRODUCT</h1>
            <p className="text-[56px] font-bold">XX99 MARK II</p>
            <p className="text-[56px] font-bold">HEADPHONES</p>
            <p className="w-[349px]">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <button className="mt-14 bg-orange hover:bg-lightorange py-4 px-6">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </section>
      <section className="mt-72 flex justify-between px-28">
            <button className="flex items-end relative w-[350px] min-h-[204px] group bg-graycolor rounded-lg pb-4">
                <Image src={headphone_store1} alt="head phone" className="absolute w-80 -mt-28" />
                <div className="w-full flex flex-col justify-end items-center rounded">
                  <p className="tracking-[1.29px] text-[18pt] font-bold">HEADPHONES</p>
                  <p className="w-fit flex gap-2 items-center group-hover:text-orange">
                    SHOP <span className="text-2xl text-orange"><Image src={arrowright} alt="arrow right" /></span>
                  </p>
                </div>
            </button>
            <button className="flex items-end relative w-[350px] h-[204px] group bg-graycolor rounded-lg pb-4">
                <Image src={speaker_store2} alt="head phone" className="absolute w-80 -mt-28" />
                <div className="bg-graycolor w-full flex flex-col justify-end items-center rounded">
                  <p className="tracking-[1.29px] text-[18pt] font-bold">SPEAKERS</p>
                  <p className="w-fit flex gap-2 items-center group-hover:text-orange">
                    SHOP <span className="text-2xl text-orange"><Image src={arrowright} alt="arrow right" /></span>
                  </p>
                </div>
            </button>
            <button className="flex items-end relative w-[350px] h-[204px] group bg-graycolor rounded-lg pb-4">
                <Image src={earphones_store3} alt="head phone" className="absolute w-80 -mt-28" />
                <div className="bg-graycolor w-full flex flex-col justify-end items-center rounded">
                  <p className="tracking-[1.29px] text-[18pt] font-bold">EARPHONES</p>
                  <p className="w-fit flex gap-2 items-center group-hover:text-orange">
                    SHOP <span className="text-2xl text-orange"><Image src={arrowright} alt="arrow right" /></span>
                  </p>
                </div>
            </button>
        </section>
        <section className="flex items-center justify-between mx-28 text-white bg-orange mt-40 rounded-lg h-[560px] bg-[url('/images/pattern-circles.svg')] bg-cover">
          <div className="self-end ml-32 overflow-hidden">
            <Image src={zx9_speaker} alt="zx9 speaker" width={350} className="-mb-4 w-full" />
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
        <section className="mt-24 rounded-lg px-28">
          <div className="bg-[url('/images/image-speaker-zx7.jpg')] bg-cover bg-no-repeat w-full min-h-[320px] rounded-lg pl-32 flex flex-col justify-center">
            <p className="text-[28pt] font-bold">zx7 SPEAKER</p>
            <button className="mt-14 border-2 border-almostblack text-black py-4 px-6 hover:bg-almostblack w-fit">
                SEE PRODUCT
            </button>
          </div>
          <div className="flex flex-auto justify-between mt-24 gap-12">
            <div className="w-1/2">
              <Image src={yx1_earphones} alt="earphone" className="rounded-lg w-full" />
            </div>
            <div className="bg-graycolor rounded-lg flex flex-col items-center justify-center w-1/2">
              <p className="text-[28pt] font-bold">YX1 EARPHONES</p>
              <button className="mt-14 border-2 border-almostblack text-black py-4 px-6 hover:bg-almostblack w-fit">
                SEE PRODUCT
              </button>
            </div>
          </div>
          <div className="flex flex-auto justify-between mt-24 gap-12">
            <div className="flex flex-col justify-center w-1/2 gap-8">
              <h2 className="text-[40pt] font-bold">BRINGING YOU THE <span className="text-orange">BEST</span> AUDIO GEAR</h2>
              <p className="w-[445px]">
              Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
              </p>
            </div>
            <div className="bg-graycolor rounded-lg flex flex-col items-center justify-center w-1/2">
              <Image src={image_gear} alt="image gear" className="rounded-lg w-full" />
            </div>
          </div>
        </section>
        <section className="mt-40 bg-almostblack text-white px-28">
            <div className="flex justify-between pb-8 w-full">
              <a className="font-bold text-xl"><Image src={logo} alt="logo" className="border-t-4 border-orange pt-12" /></a>
              <div className="flex gap-6 pt-12 font-semibold">
                  <a>HOME</a>
                  <a>HEADPHONES</a>
                  <a>SPEAKERS</a>
                  <a>EARPHONES</a>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <p className="w-[540px] text-gray-400 font-semibold">Audiophile is an all in one stop to fulfill your audio needs. 
                We&lsquo;re a small team of music lovers and sound specialists who are 
                devoted to helping you get the most out of personal audio. Come and visit our 
                demo facility - we&lsquo;re open 7 days a week.</p>
                <div className="flex self-end gap-4">
                  <Image src={facebook_logo} alt="facebook" />
                  <Image src={x_logo} alt="twitter" />
                  <Image src={insta_logo} alt="instagram" />
                </div>
            </div>
            <p className="mt-8 text-gray-400 font-semibold">Copyright 2021. All Rights Reserved</p>
        </section>
    </main>
  );
}
