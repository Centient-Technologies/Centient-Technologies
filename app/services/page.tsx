import Image from 'next/image'
import ServicesSection from './components/ServicesSection'


export default function ServicesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">ALL SERVICES</h2>
        </div>
        <ServicesSection></ServicesSection>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      </div>
    </div>
  )
}