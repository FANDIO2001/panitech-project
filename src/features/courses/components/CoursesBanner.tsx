'use client'

export function CoursesBanner() {
  return (
    <div 
      className="relative w-full overflow-hidden h-[400px] md:h-[500px] flex items-center justify-center"
      style={{
        backgroundImage: 'url(/cours-image1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay sombre pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
      
      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4 py-8 text-white w-full">
        <div className="max-w-4xl">
          {/* Titre */}
          <h1 
            className="font-semibold mb-4 text-3xl md:text-4xl lg:text-5xl" 
            style={{ 
              fontFamily: 'Poppins',
              fontWeight: 600
            }}
          >
            CompTIA Security+ 701 Training | CompTIA Security+ Certification
          </h1>

          {/* Description - directement après le titre */}
          <p className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed max-w-3xl">
            Master modern web development from scratch. Learn HTML, CSS, JavaScript, React, Node.js, MongoDB, and deploy real-world projects.
          </p>

          {/* Badges - après la description */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {/* Badge Best Seller */}
            <div className="bg-orange-500 text-white px-6 py-3 rounded text-sm font-semibold flex-1 min-w-[120px]">
              Best Seller
            </div>

            {/* Badge Category */}
            <div 
              className="text-white px-6 py-3 rounded text-sm font-semibold flex-1 min-w-[120px]"
              style={{ backgroundColor: '#57C5F7' }}
            >
              Web Development
            </div>

            {/* Badge Level */}
            <div className="bg-transparent border-2 border-white text-white px-6 py-3 rounded text-sm font-semibold flex-1 min-w-[120px]">
              Intermediate
            </div>

            {/* Badge Status */}
            <div className="bg-transparent border-2 border-white text-white px-6 py-3 rounded text-sm font-semibold flex-1 min-w-[120px]">
              Enrolling Now
            </div>
          </div>

          {/* Métriques - en bas */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Certificate */}
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <span className="font-medium">Certificate Included</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-medium">4.8</span>
              <span className="text-sm text-gray-300">(2,847 reviews)</span>
            </div>

            {/* Students */}
            <div className="flex items-center gap-2">
              <span className="font-medium">12,458 students enrolled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
