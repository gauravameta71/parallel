// YouTubeEmbed.js

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className=" w-[50%] h-96"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
