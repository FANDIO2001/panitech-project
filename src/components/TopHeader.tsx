import Link from 'next/link'

export function TopHeader() {
  return (
    <div className="bg-blue-700 text-white py-3">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base">
          Pani Tech Academy is a leading Ed tech.{' '}
          <Link 
            href="/about" 
            className="underline hover:text-blue-200 transition-colors"
          >
            Learn more now
          </Link>
        </p>
      </div>
    </div>
  )
}
