const IframeVideo = ({ url }) => {
  return (
    <iframe
      className="xl:w-full xl:h-[500px] lg:w-full lg:h-[400px] md:w-full md:h-[300px] smd:w-full smd:h-[300px] sm:w-full sm:h-[300px]"
      src={url}
      width="100%"
      height="50%"
      allow="autoplay"
      frameBorder="0"
      id="videoplayer"
      allowFullScreen
    />
  );
};

export default IframeVideo;
