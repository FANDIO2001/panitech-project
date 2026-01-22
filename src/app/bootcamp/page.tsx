import { BootcampMediaSection } from '@/features/bootcamp/components/BootcampMediaSection'
import { BootcampInfoSidebar } from '@/features/bootcamp/components/BootcampInfoSidebar'
import { BootcampHeaderSection } from '@/features/bootcamp/components/BootcampHeaderSection'
import { BootcampTabs } from '@/features/bootcamp/components/BootcampTabs'
import { BootcampCTASection } from '@/features/bootcamp/components/BootcampCTASection'
import { fetchBootcamp } from '@/features/bootcamp/actions/fetchBootcamp'

export default async function BootcampPage() {
  // Pour l'instant, on récupère le bootcamp avec l'ID 1
  // Dans un vrai projet, on pourrait utiliser les paramètres de l'URL
  const bootcamp = await fetchBootcamp(1)

  if (!bootcamp) {
    return (
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Bootcamp introuvable</h1>
            <p className="text-gray-600">Le bootcamp que vous recherchez n'existe pas.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Section média et sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Colonne gauche - Média */}
              <div className="flex">
                <BootcampMediaSection bootcamp={bootcamp} />
              </div>

              {/* Colonne droite - Informations */}
              <div className="flex">
                <div className="sticky top-8 w-full">
                  <BootcampInfoSidebar bootcamp={bootcamp} />
                </div>
              </div>
            </div>

            {/* Section header avec titre, description et métriques */}
            <div className="mt-12">
              <BootcampHeaderSection bootcamp={bootcamp} />
            </div>

            {/* Onglets de navigation */}
            <div className="mt-8">
              <BootcampTabs bootcamp={bootcamp} />
            </div>
          </div>
        </div>
      </div>

      {/* Section CTA collée au footer */}
      <BootcampCTASection />
    </>
  )
}
