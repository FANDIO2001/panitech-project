import { CourseCard } from '@/features/courses/components/CourseCard'
import { fetchCourses } from '@/features/courses/actions/fetchCourses'

export default async function CoursesPage() {
  const courses = await fetchCourses()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Nos Cours</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}
