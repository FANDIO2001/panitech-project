'use client'

export function CourseEarnCertificateSection() {
  return (
    <section className="pt-12 md:pt-16 pb-12 md:pb-16 bg-[#F5F5DC]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section principale avec texte à gauche et certificat à droite */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Colonne gauche - Texte */}
            <div>
              {/* Titre */}
              <h2 
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                style={{ 
                  fontFamily: 'Poppins',
                  fontWeight: 600
                }}
              >
                CompTIA Security+ 701 Training | CompTIA Security+ Certification Certificate
              </h2>

              {/* Sous-titre */}
              <h3 
                className="text-xl md:text-2xl font-bold text-gray-900 mb-6"
                style={{ 
                  fontFamily: 'Poppins',
                  fontWeight: 600
                }}
              >
                Earn Your Certificate
              </h3>

              {/* Points avec checkmarks */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">
                    Industry-recognized certificate by PaniTechAcademy
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">
                    Dedicated live sessions by faculty of industry experts
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">
                    Lifetime access to self-paced learning content
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne droite - Carte de certificat exemple */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-yellow-50 border-2 border-orange-500 rounded-lg p-8 w-full max-w-sm shadow-lg">
                {/* Icône */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
                    </svg>
                  </div>
                </div>

                {/* Titre du certificat */}
                <h4 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Certificate of Completion
                </h4>

                {/* Nom du cours */}
                <p className="text-gray-600 text-center mb-4">
                  Full Stack Web Development Bootcamp
                </p>

                {/* Ligne de séparation */}
                <div className="border-t-2 border-orange-500 mb-4"></div>

                {/* Entité émettrice */}
                <p className="text-gray-600 text-center">
                  TechAcademy Pro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
