'use client'

interface Certificate {
  id: number
  name: string
  logo: React.ReactNode
  url: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    name: 'Microsoft',
    url: 'https://www.microsoft.com',
    logo: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="grid grid-cols-2 gap-0.5 w-12 h-12">
          <div className="bg-[#F25022]"></div>
          <div className="bg-[#7FBA00]"></div>
          <div className="bg-[#00A4EF]"></div>
          <div className="bg-[#FFB900]"></div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    name: 'Adobe Solution Partner',
    url: 'https://www.adobe.com',
    logo: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-red-600 font-bold text-2xl mb-1">A</div>
        <div className="text-xs text-gray-600 text-center">Adobe SOLUTION PARTNER</div>
      </div>
    ),
  },
  {
    id: 3,
    name: 'Google Developers Certified Agency',
    url: 'https://developers.google.com',
    logo: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-1">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="text-xs text-gray-600 text-center">
          <div>Google Developers</div>
          <div>Agency Program</div>
          <div className="font-semibold">Certified Agency</div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    name: 'AWS Partner Network',
    url: 'https://aws.amazon.com/partners/',
    logo: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-orange-600 font-bold text-xl mb-1">aws</div>
        <div className="text-xs text-gray-600">partner network</div>
      </div>
    ),
  },
  {
    id: 5,
    name: 'AWS Partner Network',
    url: 'https://aws.amazon.com/partners/',
    logo: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-orange-600 font-bold text-xl mb-1">aws</div>
        <div className="text-xs text-gray-600">partner network</div>
      </div>
    ),
  },
  {
    id: 6,
    name: 'AWS Partner Network',
    url: 'https://aws.amazon.com/partners/',
    logo: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-orange-600 font-bold text-xl mb-1">aws</div>
        <div className="text-xs text-gray-600">partner network</div>
      </div>
    ),
  },
  {
    id: 7,
    name: 'Microsoft',
    url: 'https://www.microsoft.com',
    logo: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-0.5 w-12 h-12 mb-2">
          <div className="bg-[#F25022]"></div>
          <div className="bg-[#7FBA00]"></div>
          <div className="bg-[#00A4EF]"></div>
          <div className="bg-[#FFB900]"></div>
        </div>
        <div className="text-xs text-gray-600">Microsoft</div>
      </div>
    ),
  },
  {
    id: 8,
    name: 'Adobe Solution Partner',
    url: 'https://www.adobe.com',
    logo: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-red-600 font-bold text-2xl mb-1">A</div>
        <div className="text-xs text-gray-600 text-center">Adobe SOLUTION PARTNER</div>
      </div>
    ),
  },
  {
    id: 9,
    name: 'Google Developers Certified Agency',
    url: 'https://developers.google.com',
    logo: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-1">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="text-xs text-gray-600 text-center">
          <div>Google Developers</div>
          <div>Agency Program</div>
          <div className="font-semibold">Certified Agency</div>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    name: 'AWS Partner Network',
    url: 'https://aws.amazon.com/partners/',
    logo: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-orange-600 font-bold text-xl mb-1">aws</div>
        <div className="text-xs text-gray-600">partner network</div>
      </div>
    ),
  },
  {
    id: 11,
    name: 'AWS Partner Network',
    url: 'https://aws.amazon.com/partners/',
    logo: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-orange-600 font-bold text-xl mb-1">aws</div>
        <div className="text-xs text-gray-600">partner network</div>
      </div>
    ),
  },
  {
    id: 12,
    name: 'AWS Partner Network',
    url: 'https://aws.amazon.com/partners/',
    logo: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-orange-600 font-bold text-xl mb-1">aws</div>
        <div className="text-xs text-gray-600">partner network</div>
      </div>
    ),
  },
  {
    id: 13,
    name: 'Microsoft',
    url: 'https://www.microsoft.com',
    logo: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-0.5 w-12 h-12 mb-2">
          <div className="bg-[#F25022]"></div>
          <div className="bg-[#7FBA00]"></div>
          <div className="bg-[#00A4EF]"></div>
          <div className="bg-[#FFB900]"></div>
        </div>
        <div className="text-xs text-gray-600">Microsoft</div>
      </div>
    ),
  },
  {
    id: 14,
    name: 'Adobe Solution Partner',
    url: 'https://www.adobe.com',
    logo: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-red-600 font-bold text-2xl mb-1">A</div>
        <div className="text-xs text-gray-600 text-center">Adobe SOLUTION PARTNER</div>
      </div>
    ),
  },
  {
    id: 15,
    name: 'Google Developers Certified Agency',
    url: 'https://developers.google.com',
    logo: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-1">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="text-xs text-gray-600 text-center">
          <div>Google Developers</div>
          <div>Agency Program</div>
          <div className="font-semibold">Certified Agency</div>
        </div>
      </div>
    ),
  },
  {
    id: 16,
    name: 'AWS Partner Network',
    url: 'https://aws.amazon.com/partners/',
    logo: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-orange-600 font-bold text-xl mb-1">aws</div>
        <div className="text-xs text-gray-600">partner network</div>
      </div>
    ),
  },
  {
    id: 17,
    name: 'AWS Partner Network',
    url: 'https://aws.amazon.com/partners/',
    logo: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-orange-600 font-bold text-xl mb-1">aws</div>
        <div className="text-xs text-gray-600">partner network</div>
      </div>
    ),
  },
  {
    id: 18,
    name: 'AWS Partner Network',
    url: 'https://aws.amazon.com/partners/',
    logo: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-orange-600 font-bold text-xl mb-1">aws</div>
        <div className="text-xs text-gray-600">partner network</div>
      </div>
    ),
  },
  {
    id: 19,
    name: 'Microsoft',
    url: 'https://www.microsoft.com',
    logo: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 gap-0.5 w-12 h-12 mb-2">
          <div className="bg-[#F25022]"></div>
          <div className="bg-[#7FBA00]"></div>
          <div className="bg-[#00A4EF]"></div>
          <div className="bg-[#FFB900]"></div>
        </div>
        <div className="text-xs text-gray-600">Microsoft</div>
      </div>
    ),
  },
  {
    id: 20,
    name: 'Adobe Solution Partner',
    url: 'https://www.adobe.com',
    logo: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="text-red-600 font-bold text-2xl mb-1">A</div>
        <div className="text-xs text-gray-600 text-center">Adobe SOLUTION PARTNER</div>
      </div>
    ),
  },
  {
    id: 21,
    name: 'Google Developers Certified Agency',
    url: 'https://developers.google.com',
    logo: (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-1">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="text-xs text-gray-600 text-center">
          <div>Google Developers</div>
          <div>Agency Program</div>
          <div className="font-semibold">Certified Agency</div>
        </div>
      </div>
    ),
  },
]

export function CourseCertificatesSection() {
  return (
    <section className="pt-12 md:pt-16 pb-20 md:pb-24" style={{
      background: 'linear-gradient(to bottom, #57C5F7, #005C86)',
    }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Titre */}
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-12 text-center"
            style={{
              fontFamily: 'Poppins',
              fontWeight: 600
            }}
          >
            CompTIA Security+ 701 Training | CompTIA Security+ Certification Certificate
          </h2>

          {/* Grille de certificats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 md:gap-6">
            {certificates.map((certificate) => (
              <a
                key={certificate.id}
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex items-center justify-center min-h-[120px] cursor-pointer"
              >
                {certificate.logo}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
