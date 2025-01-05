"use client";

import React, { useState } from 'react';
import { Book, Calendar, Heart, User, Settings, Info, PlayCircle, ChevronRight, Moon, Sun, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const IntroContent = {
  whatIsSadhana: {
    title: "What is Sadhana?",
    content: "Sadhana is a Sanskrit word that means 'spiritual practice' or 'spiritual discipline.' It is any practice that helps you connect with your inner self and the divine. Think of it as a personal journey of transformation, much like how an artist practices daily to master their craft or how an athlete trains consistently to excel in their sport.",
    benefits: [
      "Inner peace and mental clarity",
      "Deeper self-awareness",
      "Spiritual growth and understanding",
      "Better stress management",
      "Connection with ancient wisdom traditions"
    ]
  },
  howToStart: {
    title: "How to Begin Your Journey",
    steps: [
      {
        title: "Start Simple",
        description: "Begin with basic meditation or breathing practices for just 5-10 minutes daily."
      },
      {
        title: "Be Consistent",
        description: "Choose a specific time each day for your practice, preferably early morning."
      },
      {
        title: "Create Sacred Space",
        description: "Designate a quiet, clean space for your practice where you won't be disturbed."
      },
      {
        title: "Seek Guidance",
        description: "Connect with experienced practitioners or teachers who can guide your journey."
      }
    ]
  }
};

const sadhanaHistory = {
  overview: {
    title: "Origins of Sadhana",
    description: "Sadhanas have evolved over thousands of years through the wisdom of ancient rishis (seers) and spiritual masters. These practices were carefully developed and preserved through guru-shishya (teacher-student) traditions.",
    timeline: [
      {
        era: "Vedic Period (1500-500 BCE)",
        development: "Early forms of sadhana emerged through yajna (fire rituals) and mantra recitation. The Gayatri Sadhana originates from this period."
      },
      {
        era: "Classical Period (500 BCE - 500 CE)",
        development: "Development of systematic meditation practices and deity-specific worship. Many Shiva and Vishnu sadhanas were formalized."
      },
      {
        era: "Tantric Period (500-1500 CE)",
        development: "Evolution of sophisticated ritual practices and energy-based sadhanas. Emergence of Shakti-focused practices."
      },
      {
        era: "Bhakti Movement (800-1700 CE)",
        development: "Rise of devotional sadhanas accessible to all, regardless of social status or education."
      }
    ]
  }
};

const sadhanaTypes = [
  {
    id: "shiva-sadhanas",
    title: "Shiva Sadhanas",
    description: "Practices dedicated to Lord Shiva, representing transformation and inner awakening",
    origin: "Originating from the ancient Shaivite traditions, these practices were first codified in the Shaiva Agamas and later evolved through various lineages.",
    examples: [
      {
        name: "Shivanga Sadhana",
        background: "Developed as a means to experience the fundamental nature of existence, this practice emerged from the yogic traditions of Tamil Nadu.",
        keyFeatures: [
          "21-day intensive practice",
          "Focus on inner transformation",
          "Combines physical and spiritual disciplines"
        ]
      },
      {
        name: "Rudra Sadhana",
        background: "Based on the Vedic Rudra Suktas, this practice was traditionally performed by rishis for intense spiritual purification.",
        significance: "Represents the most potent form of Shiva worship for spiritual evolution"
      }
    ]
  },
  {
    id: "devi-sadhanas",
    title: "Devi Sadhanas",
    description: "Practices honoring the Divine Mother in her various forms",
    origin: "These practices emerged from the Shakta traditions and were systematized in texts like Devi Mahatmya and various Tantras.",
    examples: [
      {
        name: "Navaratri Sadhana",
        background: "Evolved from ancient harvest festivals and the worship of the Divine Mother as the source of creation.",
        significance: "Represents the victory of divine consciousness over ego and ignorance"
      }
    ]
  },
  {
    id: "specialized-sadhanas",
    title: "Specialized Sadhanas",
    description: "Unique practices developed for specific spiritual goals",
    examples: [
      {
        name: "Sabarimala Sadhana",
        background: "Emerged from the traditions of Kerala, combining elements of Shaivism, Vaishnavism, and local customs.",
        significance: "Represents the unity of different spiritual paths and the importance of discipline"
      },
      {
        name: "Gayatri Sadhana",
        background: "One of the oldest continuing spiritual practices, dating back to the Rig Veda.",
        significance: "Considered the mother of all mantras and spiritual practices"
      }
    ]
  }
];

const categories = [
  {
    id: "meditation",
    title: "Meditation Practices",
    description: "Learn various meditation techniques from different traditions",
    icon: Moon,
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50"
  },
  {
    id: "mantras",
    title: "Sacred Chants",
    description: "Discover the power of ancient Sanskrit mantras",
    icon: Heart,
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50"
  },
  {
    id: "rituals",
    title: "Traditional Rituals",
    description: "Explore meaningful ceremonies and practices",
    icon: Star,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50"
  }
];

const Section = ({ title, children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {title && <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>}
    {children}
  </div>
);

// Om Symbol Component
const Om = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    <path d="M50,10 C70,10 85,25 85,45 C85,65 70,80 50,80 C30,80 15,65 15,45 C15,25 30,10 50,10 Z M50,20 C35,20 25,30 25,45 C25,60 35,70 50,70 C65,70 75,60 75,45 C75,30 65,20 50,20 Z M60,45 C60,50 55,55 50,55 C45,55 40,50 40,45 C40,40 45,35 50,35 C55,35 60,40 60,45 Z M50,0 L50,100 M0,50 L100,50" strokeWidth="5" stroke="currentColor" fill="none"/>
  </svg>
);

export default function MainContent() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Om className="w-10 h-10 mr-3 text-indigo-600" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Sadhaka
                </h1>
                <p className="text-sm text-gray-600">Your Guide to Spiritual Practice</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              {["Home", "Practices", "Learn", "Community"].map((item) => (
                <button
                  key={item}
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-50 to-white py-20">
        <Section>
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Begin Your Journey of
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Spiritual Growth
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover ancient practices of Sanatana Dharma adapted for the modern world. 
              Start your transformation with guided support and a welcoming community.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Start Your Journey
            </button>
          </div>
        </Section>
      </section>

      {/* What is Sadhana Section */}
      <Section className="py-16 bg-white">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{IntroContent.whatIsSadhana.title}</h2>
            <p className="text-lg text-gray-600 mb-8">{IntroContent.whatIsSadhana.content}</p>
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits of Regular Practice</h3>
              <ul className="space-y-3">
                {IntroContent.whatIsSadhana.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <ArrowRight className="w-5 h-5 mr-2 text-indigo-600" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{IntroContent.howToStart.title}</h2>
            <div className="space-y-6">
              {IntroContent.howToStart.steps.map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3">
                        {index + 1}
                      </span>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Historical Context */}
      <Section className="py-16 bg-gradient-to-b from-white to-indigo-50">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">The Journey Through Time</h2>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-600 mb-8 text-center">{sadhanaHistory.overview.description}</p>
          <div className="space-y-8">
            {sadhanaHistory.overview.timeline.map((period, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-48 pt-1">
                  <h3 className="font-semibold text-indigo-600">{period.era}</h3>
                </div>
                <div className="flex-grow pl-8 border-l-2 border-indigo-200">
                  <p className="text-gray-600">{period.development}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sadhana Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {sadhanaTypes.map((type) => (
            <Card key={type.id} className="hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle>{type.title}</CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{type.origin}</p>
                <div className="space-y-4">
                  {type.examples.map((example, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-2">{example.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{example.background}</p>
                      {example.keyFeatures && (
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          {example.keyFeatures.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      )}
                      {example.significance && (
                        <p className="text-sm text-indigo-600 mt-2">{example.significance}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Practice Categories */}
      <Section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Explore Different Paths</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.id} className="hover:shadow-xl transition-all transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center mb-4`}>
                  <category.icon className={`w-6 h-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <button className="text-indigo-600 flex items-center hover:text-indigo-700">
                  Learn more <ChevronRight className="ml-1 w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="py-16 bg-gradient-to-b from-white to-indigo-50">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Begin?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your spiritual journey with guidance and support from our community of practitioners.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            Begin Your Practice
          </button>
        </div>
      </Section>
    </div>
  );
}