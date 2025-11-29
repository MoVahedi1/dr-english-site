'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, Award, Star, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const treatmentCategories = [
  {
    title: 'Dermatology',
    description: 'Comprehensive medical and cosmetic dermatology services for all skin conditions',
    icon: '🏥',
    color: 'from-blue-500 to-blue-600',
    treatments: [
      'Acne Treatment',
      'Rosacea Management',
      'Skin Cancer Screening',
      'Eczema & Psoriasis',
      'Mole Removal',
      'Anti-Aging Treatments'
    ],
    stats: {
      procedures: '10,000+',
      satisfaction: '98%',
      experience: '15+ years'
    },
    href: '/treatments/dermatology'
  },
  {
    title: 'Hair Restoration',
    description: 'Advanced hair transplant and restoration solutions with natural results',
    icon: '💇',
    color: 'from-purple-500 to-purple-600',
    treatments: [
      'FUE Hair Transplant',
      'FUT Hair Transplant',
      'PRP Therapy',
      'Scalp Micropigmentation',
      'Hair Loss Treatment',
      'Eyebrow Restoration'
    ],
    stats: {
      procedures: '5,000+',
      satisfaction: '95%',
      experience: '12+ years'
    },
    href: '/treatments/hair-restoration'
  },
  {
    title: 'Laser Treatments',
    description: 'State-of-the-art laser technology for skin rejuvenation and resurfacing',
    icon: '⚡',
    color: 'from-green-500 to-green-600',
    treatments: [
      'Laser Hair Removal',
      'Laser Resurfacing',
      'IPL Photofacial',
      'Laser Tattoo Removal',
      'Vascular Lesions',
      'Scar Revision'
    ],
    stats: {
      procedures: '15,000+',
      satisfaction: '97%',
      experience: '10+ years'
    },
    href: '/treatments/laser'
  },
  {
    title: 'Injectables',
    description: 'Minimally invasive treatments for facial rejuvenation and enhancement',
    icon: '💉',
    color: 'from-pink-500 to-pink-600',
    treatments: [
      'Botox',
      'Dermal Fillers',
      'Kybella',
      'Sculptra',
      'Radiesse',
      'Liquid Facelift'
    ],
    stats: {
      procedures: '20,000+',
      satisfaction: '99%',
      experience: '8+ years'
    },
    href: '/treatments/injectables'
  },
  {
    title: 'Body Contouring',
    description: 'Non-surgical body sculpting and contouring treatments',
    icon: '✨',
    color: 'from-orange-500 to-orange-600',
    treatments: [
      'CoolSculpting',
      'EMSCULPT',
      'Radiofrequency',
      'Ultrasound Therapy',
      'Cellulite Treatment',
      'Skin Tightening'
    ],
    stats: {
      procedures: '8,000+',
      satisfaction: '94%',
      experience: '6+ years'
    },
    href: '/treatments/body-contouring'
  },
  {
    title: 'Skincare',
    description: 'Medical-grade skincare treatments and product consultations',
    icon: '🧴',
    color: 'from-teal-500 to-teal-600',
    treatments: [
      'Chemical Peels',
      'Hydrafacial',
      'Microneedling',
      'Dermaplaning',
      'Custom Facials',
      'Product Consultation'
    ],
    stats: {
      procedures: '25,000+',
      satisfaction: '96%',
      experience: '10+ years'
    },
    href: '/treatments/skincare'
  }
];

const whyChooseUs = [
  {
    title: 'Board-Certified Experts',
    description: 'All treatments performed by board-certified dermatologists and specialists',
    icon: Award
  },
  {
    title: 'Latest Technology',
    description: 'State-of-the-art equipment and cutting-edge treatment techniques',
    icon: Star
  },
  {
    title: 'Personalized Care',
    description: 'Customized treatment plans tailored to your unique needs',
    icon: Users
  },
  {
    title: 'Proven Results',
    description: 'Thousands of satisfied patients with documented success stories',
    icon: CheckCircle
  }
];

export default function TreatmentsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 px-4 py-2 text-sm bg-accent/10 text-accent border-accent/20">
              Comprehensive Treatment Solutions
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Advanced Treatments</span>
              <br />
              <span className="text-gradient">Exceptional Results</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover our comprehensive range of dermatological and aesthetic treatments, 
              all performed by board-certified specialists using the latest technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Treatment Categories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our specialized treatments designed to address your specific concerns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="luxury-card h-full border-0 shadow-lg overflow-hidden group cursor-pointer">
                  <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{category.icon}</div>
                      <Badge variant="secondary" className="text-xs">
                        {category.stats.procedures} procedures
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                      {category.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        {category.stats.satisfaction} satisfaction rate
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        {category.stats.experience} experience
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm font-medium mb-2">Popular treatments:</p>
                      <div className="flex flex-wrap gap-1">
                        {category.treatments.slice(0, 3).map((treatment, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {treatment}
                          </Badge>
                        ))}
                        {category.treatments.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{category.treatments.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Button asChild className="w-full">
                      <Link href={category.href}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="text-gradient">Choose Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference that expertise, technology, and personalized care make
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="luxury-card h-full p-6 text-center border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 luxury-gradient rounded-lg flex items-center justify-center mx-auto mb-6">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
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
                Find Your Perfect Treatment
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Not sure which treatment is right for you? Schedule a consultation 
                with our experts to receive personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg"
                >
                  Schedule Consultation
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg"
                >
                  View Before & After
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}