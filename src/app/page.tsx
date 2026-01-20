import { Hero } from '@/features/home/components/Hero'
import { CourseBundles } from '@/features/home/components/CourseBundles'
import { TopRatedCourses } from '@/features/home/components/TopRatedCourses'
import { NewestCourses } from '@/features/home/components/NewestCourses'
import { InstructorLeadCourses } from '@/features/home/components/InstructorLeadCourses'
import { BootcampSection } from '@/features/home/components/BootcampSection'

export default function HomePage() {
    return (
        <div>
            <Hero />
            <CourseBundles />
            <TopRatedCourses />
            <NewestCourses />
            <InstructorLeadCourses />
            <BootcampSection />
        </div>
    )
}
