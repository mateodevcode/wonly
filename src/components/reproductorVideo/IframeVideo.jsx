const IframeVideo = ({ UrlSeleccionada }) => {
  return (
    <iframe
      className="sm:w-full lg:w-[950px] md:w-[750px] lg:h-[520px] md:h-[500px] sm:h-[300px]"
      src={UrlSeleccionada}
      width="750"
      height="500"
      allow="autoplay"
      frameBorder="0"
      id="videoplayer"
    />
  );
};

export default IframeVideo;
