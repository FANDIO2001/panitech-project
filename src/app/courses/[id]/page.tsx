import { CourseHeaderSection } from '@/features/courses/components/CourseHeaderSection'
import { CourseInfoSidebar } from '@/features/courses/components/CourseInfoSidebar'
import { CourseTabs } from '@/features/courses/components/CourseTabs'
import { fetchCourse } from '@/features/courses/actions/fetchCourse'

interface CourseDetailPageProps {
  params: {
    id: string
  }
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const courseId = parseInt(params.id, 10)
  const course = await fetchCourse(courseId)

  if (!course) {
    return (
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Cours introuvable</h1>
            <p className="text-gray-600">Le cours que vous recherchez n'existe pas.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Bannière en premier */}
      <CourseHeaderSection course={course} />
      
      {/* Contenu principal du cours */}
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Colonne principale - Contenu */}
              <div className="lg:col-span-2">
                {/* Onglets de navigation */}
                <div className="mt-8">
                  <CourseTabs course={course} />
                </div>
              </div>

              {/* Colonne latérale - Informations */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <CourseInfoSidebar course={course} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
