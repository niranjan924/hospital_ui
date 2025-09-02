import { Heart, Users, Award, Stethoscope, Shield, Clock, MapPin, Phone } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About MedCare Hospital
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over 50 years, MedCare Hospital has been a cornerstone of healthcare excellence, 
              providing compassionate care and innovative medical solutions to our community.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To provide exceptional healthcare services that heal, comfort, and promote wellness 
                in our community. We are committed to delivering patient-centered care with compassion, 
                respect, and clinical excellence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-red-500" />
                  <span className="text-gray-700 font-medium">Compassionate Patient Care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700 font-medium">Clinical Excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700 font-medium">Community Partnership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-purple-600" />
                  <span className="text-gray-700 font-medium">Safety & Quality</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg" 
                alt="Medical team"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Heart className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compassion</h3>
              <p className="text-gray-600 leading-relaxed">
                We treat every patient with empathy, kindness, and understanding, 
                recognizing the human side of healthcare and the trust placed in us.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-teal-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Shield className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                We uphold the highest ethical standards in all our interactions, 
                ensuring trust, transparency, and honest communication with patients and families.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Award className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for the highest quality in medical care, continuously 
                improving our services, outcomes, and patient experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the experienced professionals leading our hospital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Chief Medical Officer",
                specialty: "Internal Medicine",
                experience: "20+ years",
                image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg",
                description: "Leading our clinical operations with expertise in internal medicine and healthcare administration."
              },
              {
                name: "Dr. Michael Chen",
                role: "Director of Surgery",
                specialty: "Cardiovascular Surgery",
                experience: "18+ years",
                image: "https://images.pexels.com/photos/6816862/pexels-photo-6816862.jpeg",
                description: "Pioneering minimally invasive surgical techniques with a focus on cardiovascular procedures."
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Head of Emergency Medicine",
                specialty: "Emergency Medicine",
                experience: "15+ years",
                image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg",
                description: "Ensuring 24/7 emergency care excellence with rapid response protocols and trauma expertise."
              }
            ].map((doctor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 group">
                <div className="relative">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{doctor.role}</p>
                  <p className="text-gray-500 text-sm mb-2">{doctor.specialty} • {doctor.experience}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{doctor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">MedCare by the Numbers</h2>
            <p className="text-xl opacity-90">Our commitment to excellence in healthcare</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Years of Service</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">250+</div>
              <div className="text-blue-200">Medical Staff</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">50k+</div>
              <div className="text-blue-200">Patients Served Annually</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Accreditations & Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Recognized for our commitment to quality and safety
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Joint Commission Accredited",
              "Magnet Hospital Recognition",
              "AHRQ Patient Safety Excellence",
              "HIMSS Stage 7 Award"
            ].map((accreditation, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-200">
                <div className="bg-gold-100 p-3 rounded-lg w-fit mx-auto mb-4">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{accreditation}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}