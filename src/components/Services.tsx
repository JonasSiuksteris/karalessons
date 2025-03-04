import ServiceCard from './ServiceCard'

const services = [
  {
    id: 1,
    title: "Gesture Drawing Course",
    description: "In this course, you'll learn three powerful methods to break down even the most challenging poses with ease. Whether you're a beginner or an intermediate artist, my tailored approach will help you level up fast.",
    bulletPoints: [
      "Learn three powerful methods to break down even the most difficult poses",
      "Draw figures that feel natural and full of energy",
      "Boost your skills with personalized, one-on-one guidance"
    ],
    price: 30,
    skillLevel: "Beginner/Intermediate",
    languages: ["English/Russian"],
    meetingType: ["In Person/Zoom"],
    formUrl: "https://forms.google.com/gesture-drawing-form",
    gallery: [
      "https://picsum.photos/seed/gesture1/800/600",
      "https://picsum.photos/seed/gesture2/800/600",
      "https://picsum.photos/seed/gesture3/800/600"
    ]
  },
  {
    id: 2,
    title: "Anatomy For Artist",
    description: "Learn the fundamentals of anatomy, from construction techniques and proportions to sculpting the body with precision. Discover how to break down complex shapes, capture natural poses, and tweak anatomy to fit your unique art style.",
    bulletPoints: [
      "Sculpt and stylize anatomy to fit your unique art style",
      "Nail proportions and structure with ease",
      "Break down complex shapes for more fluid poses"
    ],
    price: 30,
    skillLevel: "Beginner/Intermediate",
    languages: ["English/Russian"],
    meetingType: ["In Person/Zoom"],
    formUrl: "https://forms.google.com/anatomy-form",
    gallery: [
      "https://picsum.photos/seed/anatomy1/800/600",
      "https://picsum.photos/seed/anatomy2/800/600",
      "https://picsum.photos/seed/anatomy3/800/600"
    ]
  },
  {
    id: 3,
    title: "Character Design Course",
    description: "Dive into the world of character design and learn how to create expressive, unforgettable characters. This course covers composition, stylization, and essential design principles to help you bring your ideas to life. Perfect for beginners and intermediate artists!",
    bulletPoints: [
      "Master visual storytelling and bring your ideas to life",
      "Design compelling characters, environments, and props with confidence",
      "Develop a unique artistic voice through personalized, one-on-one guidance"
    ],
    price: 30,
    skillLevel: "Beginner/Intermediate",
    languages: ["English/Russian"],
    meetingType: ["In Person/Zoom"],
    formUrl: "https://forms.google.com/character-design-form",
    gallery: [
      "https://picsum.photos/seed/character1/800/600",
      "https://picsum.photos/seed/character2/800/600",
      "https://picsum.photos/seed/character3/800/600"
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