import ServiceCard from './ServiceCard'

// Import all images
import gesture1 from '../img/Gesture/Gesture1.jpg'
import gesture2 from '../img/Gesture/Gesture2.jpg'
import gesture3 from '../img/Gesture/Gesture3.jpg'
import gesture4 from '../img/Gesture/Gesture4.jpg'
import anatomy1 from '../img/Anatomy/Anatomy1.jpg'
import anatomy2 from '../img/Anatomy/Anatomy2.jpg'
import anatomy3 from '../img/Anatomy/Anatomy3.jpg'
import anatomy4 from '../img/Anatomy/Anatomy4.jpg'
import conecptart1 from '../img/ConceptArt/ConceptArt1.jpg'
import conecptart2 from '../img/ConceptArt/ConceptArt2.jpg'
import conecptart3 from '../img/ConceptArt/ConceptArt3.jpg'
import conecptart4 from '../img/ConceptArt/ConceptArt4.jpg'

const services = [
  {
    id: 1,
    title: "Gesture Drawing Course",
    description: (
      <>
        In this course, you'll learn <strong>three powerful methods</strong> to break down even the most challenging poses with ease. Whether you're a beginner or an intermediate artist, my tailored approach will help you level up fast.
      </>
    ),
    bulletPoints: [
      <>Learn <strong>three powerful methods</strong> to break down even the most difficult poses</>,
      "Draw figures that feel natural and full of energy",
      "Boost your skills with personalized, one-on-one guidance"
    ],
    price: 30,
    skillLevel: "Beginner/Intermediate",
    languages: ["English/Russian"],
    meetingType: ["In Person/Zoom"],
    formUrl: "https://forms.google.com/gesture-drawing-form",
    gallery: [gesture1, gesture2, gesture3, gesture4]
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
    gallery: [anatomy1, anatomy2, anatomy3, anatomy4]
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
    gallery: [conecptart1, conecptart2, conecptart3, conecptart4]
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