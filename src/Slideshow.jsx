import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const Slideshow = ({ images }) => {
  const [index, setIndex] = useState(0);

  // Auto slide every 5 seconds (optional)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  return (
    <div className="relative w-full">
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="rounded-lg shadow-xl border-2 border-black w-full h-auto object-contain"
      />

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 shadow-md hover:bg-gray-800"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white rounded-full p-2 shadow-md hover:bg-gray-800"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Slideshow;
