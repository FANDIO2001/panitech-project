import { Hero } from '@/features/home/components/Hero'
import { CourseBundles } from '@/features/home/components/CourseBundles'
import { TopRatedCourses } from '@/features/home/components/TopRatedCourses'
import { NewestCourses } from '@/features/home/components/NewestCourses'
import { InstructorLeadCourses } from '@/features/home/components/InstructorLeadCourses'
import { BootcampSection } from '@/features/home/components/BootcampSection'
import { Frame107Section } from '@/features/home/components/Frame107Section'
import { PartnersSection } from '@/features/home/components/PartnersSection'
import { WhyChooseSection } from '@/features/home/components/WhyChooseSection'
import { TestimonialsSection } from '@/features/home/components/TestimonialsSection'
import { ReviewsSection } from '@/features/home/components/ReviewsSection'
import { FAQSection } from '@/features/home/components/FAQSection'
import { BusinessSection } from '@/features/home/components/BusinessSection'
import { HireStudentsSection } from '@/features/home/components/HireStudentsSection'
import { NewsletterSection } from '@/features/home/components/NewsletterSection'

export default function HomePage() {
    return (
        <div>
            <Hero />
            <TopRatedCourses />
            <CourseBundles />
            <NewestCourses />
            <InstructorLeadCourses />
            <BootcampSection />
            <Frame107Section />
            <PartnersSection />
            <WhyChooseSection />
            <TestimonialsSection />
            <ReviewsSection />
            <FAQSection />
            <BusinessSection />
            <HireStudentsSection />
            <NewsletterSection />
        </div>
    )
}
