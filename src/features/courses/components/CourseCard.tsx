import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { Course } from '@/types/course'

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card>
      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
      <p className="text-gray-600 mb-4">{course.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-blue-600 font-semibold">{course.duration}</span>
        <Button variant="primary">Voir le cours</Button>
      </div>
    </Card>
  )
}
