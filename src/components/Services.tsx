import ServiceCard from './ServiceCard'
import { useLanguage } from '../contexts/LanguageContext'

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

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      title: t('services.gestureDrawing.title'),
      description: (
        <>
          {t('services.gestureDrawing.description')}
        </>
      ),
      bulletPoints: t('services.gestureDrawing.bulletPoints') as string[],
      price: 30,
      skillLevel: t('services.common.skillLevel'),
      languages: [t('services.common.languages')],
      meetingType: [t('services.common.meetingType')],
      formUrl: "https://forms.gle/ZouL3jincXKjKAu26",
      gallery: [gesture1, gesture2, gesture3, gesture4]
    },
    {
      id: 2,
      title: t('services.anatomy.title'),
      description:(
      <>
          {t('services.anatomy.description')}
      </>
      ),
      bulletPoints: t('services.anatomy.bulletPoints') as string[],
      price: 30,
      skillLevel: t('services.common.skillLevel'),
      languages: [t('services.common.languages')],
      meetingType: [t('services.common.meetingType')],
      formUrl: "https://forms.gle/ZouL3jincXKjKAu26",
      gallery: [anatomy1, anatomy2, anatomy3, anatomy4]
    },
    {
      id: 3,
      title: t('services.characterDesign.title'),
      description: (
        <>
          {t('services.characterDesign.description')}
        </>
      ),
      bulletPoints: t('services.characterDesign.bulletPoints') as string[],
      price: 30,
      skillLevel: t('services.common.skillLevel'),
      languages: [t('services.common.languages')],
      meetingType: [t('services.common.meetingType')],
      formUrl: "https://forms.gle/ZouL3jincXKjKAu26",
      gallery: [conecptart1, conecptart2, conecptart3, conecptart4]
    }
  ];

  return (
    <div className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">{t('services.title')}</h2>
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