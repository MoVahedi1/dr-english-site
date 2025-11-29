'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, CheckCircle, Star, Phone, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

const dermatologyServices = [
  {
    title: 'Acne Treatment',
    description: 'Comprehensive acne management for all ages and skin types',
    duration: '30-60 min',
    price: 'From $150',
    details: 'Customized treatment plans including topical medications, oral therapies, chemical peels, and laser treatments to effectively manage acne and prevent scarring.',
    benefits: [
      'Reduces active breakouts',
      'Prevents future outbreaks',
      'Minimizes scarring',
      'Improves skin texture'
    ]
  },
  {
    title: 'Skin Cancer Screening',
    description: 'Early detection and prevention of skin cancer',
    duration: '30-45 min',
    price: '$200-400',
    details: 'Comprehensive skin examination using dermatoscopy and digital imaging to detect suspicious lesions early when treatment is most effective.',
    benefits: [
      'Early cancer detection',
      'Prevents advanced disease',
      'Peace of mind',
      'Educational guidance'
    ]
  },
  {
    title: 'Rosacea Management',
    description: 'Advanced treatments for rosacea and facial redness',
    duration: '45-60 min',
    price: 'From $200',
    details: 'Multi-modal approach combining topical treatments, oral medications, laser therapy, and lifestyle counseling to control rosacea symptoms.',
    benefits: [
      'Reduces facial redness',
      'Controls breakouts',
      'Prevents progression',
      'Improves confidence'
    ]
  },
  {
    title: 'Anti-Aging Treatments',
    description: 'Comprehensive anti-aging and rejuvenation solutions',
    duration: '60-90 min',
    price: 'From $300',
    details: 'Combination of treatments including chemical peels, laser therapy, microneedling, and medical-grade skincare to combat signs of aging.',
    benefits: [
      'Reduces fine lines',
      'Improves skin texture',
      'Enhances radiance',
      'Long-lasting results'
    ]
  }
];

const conditions = [
  { name: 'Acne & Acne Scars', patients: '5,000+' },
  { name: 'Eczema & Dermatitis', patients: '3,000+' },
  { name: 'Psoriasis', patients: '2,000+' },
  { name: 'Rosacea', patients: '2,500+' },
  { name: 'Skin Cancer', patients: '1,000+' },
  { name: 'Mole & Lesion Removal', patients: '4,000+' }
];

const technologies = [
  {
    name: 'Dermatoscopy',
    description: 'Advanced skin imaging for early cancer detection'
  },
  {
    name: 'Laser Therapy',
    description: 'State-of-the-art lasers for various skin conditions'
  },
  {
    name: 'Digital Mapping',
    description: 'Comprehensive skin analysis and monitoring'
  },
  {
    name: 'Cryotherapy',
    description: 'Precision freezing for lesion removal'
  }
];

export default function DermatologyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-500/5 via-background to-blue-600/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Badge className="mb-6 px-4 py-2 text-sm bg-blue-100 text-blue-800 border-blue-200">
              Medical Excellence
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Dermatology</span>
              <br />
              <span className="text-gradient">Medical & Cosmetic</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              World-class dermatological care combining medical expertise with cosmetic excellence. 
              Our board-certified dermatologists provide comprehensive treatment for all skin conditions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="luxury-gradient text-white">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Call (555) 123-4567
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Patients Treated', value: '15,000+' },
              { label: 'Success Rate', value: '98%' },
              { label: 'Years Experience', value: '15+' },
              { label: 'Procedures', value: '25,000+' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Dermatology Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive medical and cosmetic dermatology treatments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {dermatologyServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="luxury-card h-full border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <Badge variant="secondary">{service.price}</Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-primary" />
                        {service.duration}
                      </div>
                    </div>

                    <p className="text-sm mb-4">{service.details}</p>

                    <div className="mb-6">
                      <p className="font-medium mb-2">Benefits:</p>
                      <div className="space-y-1">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full">
                      Book This Treatment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Conditions We <span className="text-gradient">Treat</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert care for a wide range of dermatological conditions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <motion.div
                key={condition.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="luxury-card p-6 text-center border-0 shadow-lg">
                  <h3 className="font-semibold mb-2">{condition.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {condition.patients} patients treated
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced <span className="text-gradient">Technology</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art equipment for accurate diagnosis and effective treatment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="luxury-card h-full p-6 text-center border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 luxury-gradient rounded-lg flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold text-xl">
                        {tech.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{tech.name}</h3>
                    <p className="text-muted-foreground text-sm">{tech.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="luxury-gradient rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Healthier Skin?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Schedule your dermatology consultation today and take the first step 
                towards better skin health and confidence.
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}