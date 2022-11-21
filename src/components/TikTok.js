import React from "react";

const TikTok = ({ author, description, TikTokURL }) => {
  console.log(TikTokURL);
  return (
    <div className="flex flex-col w-96 rounded h-auto text-white py-8 mx-auto bg-black px-2 text-sm content-start border border-yellow-200">
      <div class="aspect-w-9 aspect-h-16">
        <iframe
          title="tiktok"
          src={TikTokURL}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-center text-xl text-yellow-400 mt-2">{author}</div>
      <div className=" text-xl text-center text-indigo-600 mt-1">
        {description}
      </div>
    </div>
  );
};

export default TikTok;
