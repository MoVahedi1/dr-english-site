'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, Phone, Calendar, Shield, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const stats = [
  { label: 'Years of Excellence', value: '15+' },
  { label: 'Happy Patients', value: '10,000+' },
  { label: 'Success Rate', value: '98%' },
  { label: 'Awards', value: '25+' },
];

const features = [
  {
    icon: Shield,
    title: 'Board Certified',
    description: 'All our dermatologists are board-certified with extensive experience',
  },
  {
    icon: Award,
    title: 'Award-Winning Care',
    description: 'Recognized for excellence in dermatological and aesthetic treatments',
  },
  {
    icon: Users,
    title: 'Personalized Approach',
    description: 'Customized treatment plans tailored to your unique needs',
  },
];

const treatments = [
  {
    title: 'Dermatology',
    description: 'Medical and cosmetic dermatology for all skin conditions',
    image: '/api/placeholder/400/300',
    href: '/treatments/dermatology',
  },
  {
    title: 'Hair Restoration',
    description: 'Advanced hair transplant and restoration solutions',
    image: '/api/placeholder/400/300',
    href: '/treatments/hair-restoration',
  },
  {
    title: 'Laser Treatments',
    description: 'State-of-the-art laser technology for skin rejuvenation',
    image: '/api/placeholder/400/300',
    href: '/treatments/laser',
  },
  {
    title: 'Injectables',
    description: 'Botox, fillers, and other minimally invasive treatments',
    image: '/api/placeholder/400/300',
    href: '/treatments/injectables',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 px-4 py-2 text-sm bg-accent/10 text-accent border-accent/20">
                Excellence in Dermatology & Aesthetic Medicine
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-gradient">Where Science</span>
                <br />
                <span className="text-gradient">Meets Beauty</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Experience world-class dermatological care and aesthetic treatments with our 
                board-certified specialists in a luxurious, state-of-the-art facility.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  asChild
                  size="lg"
                  className="luxury-gradient text-white px-8 py-6 text-lg hover:shadow-xl transition-all"
                >
                  <Link href="/booking">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="px-8 py-6 text-lg border-2 hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Link href="/treatments">
                    Explore Treatments
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-8 text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <span className="ml-2 font-medium">4.9/5 (500+ reviews)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">Dr. Dermatology</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with personalized care to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="luxury-card h-full p-8 text-center border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 luxury-gradient rounded-lg flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Signature Treatments</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of dermatological and aesthetic services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <Card className="luxury-card overflow-hidden border-0 shadow-lg">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 luxury-gradient rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">
                          {treatment.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {treatment.description}
                    </p>
                    <Link 
                      href={treatment.href}
                      className="text-primary font-medium text-sm hover:underline flex items-center"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-6 border-2 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Link href="/treatments">
                View All Treatments
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
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
                Ready to Transform Your Skin?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Schedule your personalized consultation today and take the first step 
                towards healthier, more beautiful skin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg"
                >
                  <Link href="/booking">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Now
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg"
                >
                  <Link href="tel:+15551234567">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}