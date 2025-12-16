import React from 'react';

const BeautyCareBanner = () => {
  return (
    <div className="w-full bg-gray-100 py-8  sm:px-6 lg:px-8">
      <div className="container">
        <div className="relative bg-black rounded overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between min-h-[300px] md:min-h-[350px]">
            {/* Left Content */}
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 text-center md:text-left">
              <p className="text-sm text-gray-400 mb-3 font-medium tracking-wider uppercase">
                Beauty Care
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-tight">
                Anti Paronychia<br />Serum
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase tracking-wide">
                  Buy Now
                </button>
                <button className="text-white font-semibold px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wide">
                  Read More
                </button>
              </div>
            </div>

            {/* Right Product Image */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12">
              <div className="relative">
                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-16 h-16 border-4 border-gray-600 rounded-lg"></div>
                    ))}
                  </div>
                </div>
                
                {/* Product Image Container */}
                <div className="relative z-10 transform hover:scale-110 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop"
                    alt="Anti Paronychia Serum Product"
                    className="w-64 h-64 sm:w-80 sm:h-80 object-contain drop-shadow-2xl"
                  />
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-transparent to-transparent rounded-full blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
            <div className="absolute top-10 right-10 w-32 h-32 border-8 border-gray-700 rounded-full"></div>
            <div className="absolute bottom-10 right-20 w-24 h-24 border-8 border-gray-700 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyCareBanner;