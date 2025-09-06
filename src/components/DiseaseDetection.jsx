import React, { useState } from "react";
import { IoCaretBack } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { MdAddPhotoAlternate } from "react-icons/md";
import { Mic } from "lucide-react";

const DiseaseDetection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSearch = () => {
    // yaha tu backend call bhi kar sakta hai
    setSelectedImage(null);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between text-white"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/168351414/photo/green-cornfield-ready-for-harvest-late-afternoon-light-sunset-illinois.webp?a=1&b=1&s=612x612&w=0&k=20&c=T60Tymz8tcBTpp5OYPpg7gIQHGDJ-88vXxL7yx8I8eM=')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top Bar */}
      <div className="w-full  flex items-center backdrop-blur-md justify-between px-4 md:px-6 py-4 bg-black/50">
        <IoCaretBack className="text-2xl cursor-pointer" />
        <h1 className="text-xl md:text-3xl font-bold tracking-wide text-center">
          DISEASE DETECTION
        </h1>
        <FiMenu className="text-2xl cursor-pointer" />
      </div>

      {/* Upload Section */}
      <div className="flex flex-col items-center justify-center flex-grow gap-4">
        <label
          htmlFor="file-upload"
          className="w-72 h-52 md:w-96 md:h-64  bg-green-400/80 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition"
        >
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Uploaded"
              className="w-full h-full object-cover rounded-2xl"
            />
          ) : (
            <>
              <MdAddPhotoAlternate className="text-white" size={80} />
              <p className="mt-2 text-white font-semibold">Upload Image</p>
            </>
          )}
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>

        <p className="font-bold text-lg md:text-xl">UPLOAD IMAGE OF PLANT</p>

        {/* 🔍 Search Button */}
        {selectedImage && (
          <button
            onClick={handleSearch}
            className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full shadow-lg transition"
          >
            Search
          </button>
        )}
      </div>

      {/* Bottom Right - Talk to Us */}
      <div className="w-full flex justify-end px-4 pb-4">
        <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full shadow-lg transition">
          <Mic size={20} />
          TALK TO US
        </button>
      </div>
    </div>
  );
};

export default DiseaseDetection;
