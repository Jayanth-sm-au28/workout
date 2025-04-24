import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CourseProps {
  rows?: number;
  cols?: number;
  width?: string;
}

const Course: React.FC<CourseProps> = ({
  rows = 5,
  width = "w-[1420px]",
}) => {
  const courseTitles = [
    "React Basic", "JavaScript", "TypeScript", "Next.js Pro",
    "Vue Complete", "Angular Dev", "Node Expert", "MongoDB Pro",
    "Python Master", "Development", "Web Design", "Full Stack",
    "React Native", "Swift Code", "Java Master", "Cloud Expert",
    "UI Design", "UX Design", "DevOps Pro", "React Developer",
    "AWS Solutions", "Frontend Dev", "Backend Pro"
  ];

  const grid = Array.from({ length: rows }, (_, index) => ({
    id: index,
    isEven: index % 2 === 0
  }));

  const truncateText = (text: string) => {
    return text.length > 12 ? `${text.slice(0, 9)}...` : text;
  };

  const evenRowSettings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    rtl: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  const oddRowSettings = {
    ...evenRowSettings,
    rtl: true,
    speed: 7000,
  };

  return (
    <div className={`mx-auto ${width}`}>
      <div className="relative">
        {grid.map((row) => (
          <div key={row.id} className="mb-4">
            <Slider {...(row.isEven ? evenRowSettings : oddRowSettings)}>
              {courseTitles.map((title, index) => (
                <div key={index} className="px-1">
                  <button
                    className="w-full bg-white/10 hover:bg-white/20 
                             text-white rounded-lg px-4 py-2 text-sm
                             transition-all duration-300 whitespace-nowrap
                             border border-white/20 hover:border-white/40"
                  >
                    {truncateText(title)}
                  </button>
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;