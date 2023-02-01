import React from 'react';

const HeroImg = () => {
  return <div className="relative hero h-[50vh] rounded-b-[50px]"  style={{ backgroundImage: `url(/images/bgg.png)` }}>
    <div className="max-w-5xl text-center grid justify-items-center">
      <h1 className="text-6xl text-[#343434] font-jacques mb-2">BRIGHTEN YOUR GLOW</h1>
      <div className="divider w-[700px] h-[1px] bg-[#303030] opacity-50"></div> 
      <p className="mt-4 mb-4 text-[36px] text-[#4D4D4D] leading-[29px] font-junge">SKIN TREATMENT RECOMMENDER</p>
      <p className="mt-3 text-[24px] text-[#4D4D4D] font-junge">Reliable and personalized for your skin needs</p>
    </div>
    <a href="/quiz" className="absolute !translate-y-1/2 bottom-0 btn w-[215px] h-[58px] border border-[#000] border-opacity-25 bg-[#ff8644] hover:bg-[#fe7529] hover:border-[#fe7529] text-white text-[27.5px] hover:shadow-lg font-jacques font-normal normal-case py-2 px-4 rounded-full ">Get Started</a>
  </div>
};

export default HeroImg;