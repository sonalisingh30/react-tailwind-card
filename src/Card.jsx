import BlogImage from "./assets/Blog_Image.svg";
import userpic from "./assets/userpic.svg";

const Card = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-yellow-300 p-4">
      <div className="relative bg-white w-full max-w-xs md:max-w-sm rounded-3xl overflow-hidden shadow-[0px_8px_30px_rgba(0,0,0,1)]">
        <div className="absolute inset-0 bg-black opacity-10 rounded-3xl shadow-2xl -z-10"></div>

        <img
          src={BlogImage}
          alt="HTML"
          className="w-full h-48 p-4 object-cover"
        />

        <div className="p-4">
          <span className="inline-block bg-yellow-500 text-white text-xs px-2 py-1 rounded-s uppercase font-bold mb-2">
            Learning
          </span>
          <p className="text-xs text-black-500">Published 21 Dec 2023</p>
          <h2 className="font-bold text-xl mb-2 text-gray-900 mt-1">
            HTML & CSS Foundations
          </h2>
          <p className="text-sm text-gray-700 mt-2 leading-relaxed">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          <div className="flex items-center mt-4">
            <img
              src={userpic}
              alt="greg hooper"
              className="w-8 h-8 rounded-full mr-2"
            />
            <p className="ml-3 text-black font-bold text-sm">Greg Hooper</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
