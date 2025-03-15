const useSliderSettings = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } },
      ],
    };
  
    return {
      sliderSettingsAuto: { ...settings, autoplay: true, autoplaySpeed: 2000 },
      sliderSettingsManual: { ...settings, autoplay: false },
    };
  };
  
  export default useSliderSettings;
  