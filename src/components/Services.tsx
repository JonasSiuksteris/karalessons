import ServiceCard from './ServiceCard'

const services = [
  {
    id: 1,
    title: "Fundamentals of Drawing",
    description: "Master the basics of drawing including perspective, shading, and composition. Perfect for beginners wanting to build a strong foundation.",
    price: 299,
    skillLevel: "Beginner",
    formUrl: "https://forms.google.com/fundamentals-form",
    gallery: [
      "https://picsum.photos/seed/art1/800/600",
      "https://picsum.photos/seed/art2/800/600",
      "https://picsum.photos/seed/art3/800/600"
    ]
  },
  {
    id: 2,
    title: "Figure Drawing Mastery",
    description: "Deep dive into human anatomy, gesture drawing, and figure composition. Ideal for artists ready to tackle the complexity of the human form.",
    price: 399,
    skillLevel: "Intermediate",
    formUrl: "https://forms.google.com/figure-drawing-form",
    gallery: [
      "https://picsum.photos/seed/figure1/800/600",
      "https://picsum.photos/seed/figure2/800/600",
      "https://picsum.photos/seed/figure3/800/600"
    ]
  },
  {
    id: 3,
    title: "Digital Art & Illustration",
    description: "Learn professional digital art techniques, from concept art to character design. Perfect for artists transitioning to digital medium.",
    price: 449,
    skillLevel: "Advanced",
    formUrl: "https://forms.google.com/digital-art-form",
    gallery: [
      "https://picsum.photos/seed/digital1/800/600",
      "https://picsum.photos/seed/digital2/800/600",
      "https://picsum.photos/seed/digital3/800/600"
    ]
  }
]

const Services = () => {
  return (
    <div className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
