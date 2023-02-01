import React from 'react';

const Body = () => {
	return <div className="flex flex-wrap pt-[5rem] grid justify-items-center">
    <div className="carousel w-[1700px]">
      <div id="slide1" className="carousel-item relative w-full flex justify-around">
        <div className="w-[275px] h-[175px] shadow-xl" style={{ backgroundImage: `url(/images/glycopeel.png)` }}>
        </div>
  
      <div className="w-[275px] h-[175px] shadow-xl" style={{ backgroundImage: `url(/images/botanical.png)` }}>
        </div>
  
        <div className="w-[275px] h-[175px] shadow-xl" style={{ backgroundImage: `url(/images/powerpeel.png)` }}>
        </div>
        
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="text-[30px] text-[#4D4D4D]">❮</a> 
          <a href="#slide2" className="text-[30px] text-[#4D4D4D]">❯</a>
        </div>
      </div> 
      
      <div id="slide2" className="carousel-item relative w-full flex justify-around">
         <div className="w-[275px] h-[175px] shadow-xl" style={{ backgroundImage: `url(/images/honeyalmondcleaning.png)` }}>
        </div>
  
        <div className="w-[275px] h-[175px] shadow-xl" style={{ backgroundImage: `url(/images/lumino.png)` }}>
        </div>
  
        <div className="w-[275px] h-[175px] shadow-xl" style={{ backgroundImage: `url(/images/exomes.png)` }}>
        </div> 
  
         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="text-[30px] text-[#4D4D4D]">❮</a> 
          <a href="#slide3" className="text-[30px] text-[#4D4D4D]">❯</a>
        </div>
      </div> 
      
      <div id="slide3" className="carousel-item relative w-full flex justify-around">
        <div className="w-[275px] h-[175px] shadow-xl" style={{ backgroundImage: `url(/images/airdissect.png)` }}>
        </div>
  
        <div className="w-[275px] h-[175px] shadow-xl" style={{ backgroundImage: `url(/images/enerjet.png)` }}>
        </div>
  
        <div className="w-[275px] h-[175px] shadow-xl" style={{ backgroundImage: `url(/images/agnes.png)` }}>
        </div> 
  
         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="text-[30px] text-[#4D4D4D]">❮</a> 
          <a href="#slide4" className="text-[30px] text-[#4D4D4D]">❯</a>
        </div>
      </div>    
      
      <div id="slide4" className="carousel-item relative w-full flex justify-around">
        <div className="w-[275px] h-[175px] shadow-xl" style={{ backgroundImage: `url(/images/picosure.png)` }}>
        </div>
  
        <div className="w-[275px] h-[175px] shadow-xl" style={{ backgroundImage: `url(/images/fraxel.png)` }}>
        </div>
  
        <div className="w-[275px] h-[175px] shadow-xl" style={{ backgroundImage: `url(/images/firm.png)` }}>
        </div> 
  
         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="text-[30px] text-[#4D4D4D]">❮</a> 
          <a href="#slide1" className="text-[30px] text-[#4D4D4D]">❯</a>
        </div>
      </div>
  </div>

  <div id="about">
    <p className="mb-[77px] text-[30px] text-[#4D4D4D] leading-[32px] tracking-[0.2rem] font-jacques pt-[3.5rem]">our treatments</p>
  </div>

  <div className="hero h-[395px] bg-[#F9EBE0]">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src="https://content-us.teletubbies.com/uploads/2021/10/Website_RSG_TT_CHARACTERS.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-[32px] font-jacques text-[#343434]">Jong-un’s Recommender</h1>
          <p className="py-6 pr-[20rem] text-justify text-[#4D4D4D] leading-[19px] font-jacques">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel porttitor massa, ut faucibus metus. Quisque dui urna, commodo nec sodales vel, tincidunt in purus. Vestibulum ultrices est id arcu posuere dictum. Praesent sed consequat leo. Duis risus mauris, ultrices eleifend ultrices in, blandit in nunc. Ut nisl metus, hendrerit sed nisi ut, pharetra laoreet dui. Pellentesque vulputate odio ut justo hendrerit feugiat. In hac habitasse platea dictumst. Ut sit amet ultrices orci, non lacinia metus.</p>
        </div>
    </div>
  </div>
    
</div>


};
export default Body;