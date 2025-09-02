import Link from 'next/link';
import { ArrowRight, Heart, Shield, Users, Award, Phone, Calendar, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Quality Healthcare
                <span className="block text-teal-300">You Can Trust</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Experience exceptional medical care with our team of dedicated professionals, 
                state-of-the-art facilities, and patient-centered approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Appointment
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Emergency Care
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Quick Access</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-teal-300" />
                    <span>24/7 Emergency Services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-teal-300" />
                    <span>Expert Medical Consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="h-6 w-6 text-teal-300" />
                    <span>Compassionate Care</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MedCare Hospital?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge medical technology with compassionate care to deliver 
              the best possible outcomes for our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Care</h3>
              <p className="text-gray-600">
                Board-certified physicians and specialists providing world-class medical care.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-teal-100 p-3 rounded-lg w-fit mb-4">
                <Shield className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Technology</h3>
              <p className="text-gray-600">
                State-of-the-art medical equipment and innovative treatment methods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient-Centered</h3>
              <p className="text-gray-600">
                Personalized care plans focused on your unique health needs and goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Award-Winning</h3>
              <p className="text-gray-600">
                Recognized for excellence in patient care and medical innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Medical Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive healthcare services to meet all your medical needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Emergency Medicine",
                description: "24/7 emergency care with rapid response team and advanced trauma center.",
                image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg"
              },
              {
                title: "Cardiology",
                description: "Comprehensive heart care including preventive, diagnostic, and surgical services.",
                image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg"
              },
              {
                title: "Orthopedics",
                description: "Advanced bone and joint care with minimally invasive surgical options.",
                image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg"
              },
              {
                title: "Pediatrics",
                description: "Specialized care for children from newborns to adolescents.",
                image: "https://images.pexels.com/photos/4386470/pexels-photo-4386470.jpeg"
              },
              {
                title: "Women's Health",
                description: "Comprehensive women's healthcare including obstetrics and gynecology.",
                image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg"
              },
              {
                title: "Oncology",
                description: "Advanced cancer treatment with personalized care plans and support.",
                image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 group">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 flex items-center">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards better health. Our medical team is here to provide 
            you with the care you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
              <Calendar className="h-5 w-5 mr-2" />
              Book Online
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}