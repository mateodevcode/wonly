const IframeVideo = ({ UrlSeleccionada }) => {
  return (
    <iframe
      className="sm:w-full xl:w-[1440px] lg:w-[950px] md:w-[750px] xl:h-[900px] lg:h-[520px] md:h-[500px] sm:h-[300px]"
      src={UrlSeleccionada}
      width="750"
      height="500"
      allow="autoplay"
      frameBorder="0"
      id="videoplayer"
      allowFullScreen
    />
  );
};

export default IframeVideo;
