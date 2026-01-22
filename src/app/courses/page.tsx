import { CoursesBanner } from '@/features/courses/components/CoursesBanner'
import { CourseDescriptionSection } from '@/features/courses/components/CourseDescriptionSection'
import { CourseJobsSection } from '@/features/courses/components/CourseJobsSection'
import { CourseLearnSection } from '@/features/courses/components/CourseLearnSection'
import { CourseRequirementsSection } from '@/features/courses/components/CourseRequirementsSection'
import { CourseBatchesSection } from '@/features/courses/components/CourseBatchesSection'
import { CoursePathSection } from '@/features/courses/components/CoursePathSection'
import { CourseFAQSection } from '@/features/courses/components/CourseFAQSection'
import { CourseCertificatesSection } from '@/features/courses/components/CourseCertificatesSection'
import { CourseEarnCertificateSection } from '@/features/courses/components/CourseEarnCertificateSection'
import { CourseCurriculumSection } from '@/features/courses/components/CourseCurriculumSection'
import { CourseReviewsSection } from '@/features/courses/components/CourseReviewsSection'
import { CourseSuccessStoriesSection } from '@/features/courses/components/CourseSuccessStoriesSection'
import { NewsletterSection } from '@/features/home/components/NewsletterSection'

export default async function CoursesPage() {

  return (
    <div className="w-full">
      {/* Bannière en premier */}
      <CoursesBanner />

      {/* Section description directement collée à la bannière */}
      <CourseDescriptionSection />

      {/* Section des emplois */}
      <CourseJobsSection />

      {/* Section What you'll learn */}
      <CourseLearnSection />

      {/* Section Requirements */}
      <CourseRequirementsSection />

      {/* Section Flexible batches */}
      <CourseBatchesSection />

      {/* Section Path to career */}
      <CoursePathSection />

      {/* Section FAQ */}
      <CourseFAQSection />

      {/* Section Certificates */}
      <CourseCertificatesSection />
      <div className='bg-white min-h-10'></div>
      {/* Section Earn Certificate */}
      <CourseEarnCertificateSection />

      {/* Section Curriculum */}
      <CourseCurriculumSection />

      {/* Section Reviews */}
      <CourseReviewsSection />

      {/* Section Success Stories */}
      <CourseSuccessStoriesSection />

      {/* Section Newsletter */}
      <NewsletterSection />
    </div>
  )
}
