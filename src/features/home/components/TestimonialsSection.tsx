'use client'

import Image from 'next/image'

const testimonials = [
    {
        id: 1,
        name: 'Alex Thompson',
        achievement: 'Completed 50+ Courses',
        successStory: 'From beginner to expert in 12 months',
        icon: '🏆', // Trophy
        image: '/assets/testimonial-1.png',
    },
    {
        id: 2,
        name: 'Sophia Martinez',
        achievement: 'Top Performer 2025',
        successStory: 'Achieved 100% completion rate',
        icon: '⭐', // Star
        image: '/assets/testimonial-2.png',
    },
    {
        id: 3,
        name: 'James Wilson',
        achievement: 'Career Transformation',
        successStory: 'Landed dream job after 6 months',
        icon: '🚀', // Rocket
        image: '/assets/testimonial-3.png',
    },
]

export function TestimonialsSection() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        What our former students say about us
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Be inspired by our top learners who transformed their careers
                    </p>
                </div>

                {/* Testimonials Grid - 3 Cards Horizontal */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                            style={{
                                borderRadius: '17.09px',
                                backgroundColor: '#EFF6FF',
                                width: '100%',
                                maxWidth: '353.96px',
                                minHeight: '429.64px'
                            }}
                            className="mx-auto"
                        >
                            {/* Profile Picture - Top */}
                            <div className="flex justify-center mb-1">
                                <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center relative">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover rounded-full"
                                        sizes="96px"
                                    />
                                </div>
                            </div>

                            {/* Content - Bottom */}
                            <div className="text-center flex-1 flex flex-col">
                                {/* Icon/Emoji */}
                                <div className="text-4xl mb-2">
                                    {testimonial.icon}
                                </div>

                                {/* Name */}
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {testimonial.name}
                                </h3>

                                {/* Achievement */}
                                <div className="text-blue-500 font-semibold mb-2">
                                    {testimonial.achievement}
                                </div>

                                {/* Success Story */}
                                <p className="text-gray-600 text-sm">
                                    {testimonial.successStory}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
