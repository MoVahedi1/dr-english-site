'use client';

import { motion } from 'framer-motion';
import { Star, Award, Calendar, MapPin, Mail, Phone, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Medical Director & Board-Certified Dermatologist',
    specialty: 'Medical & Cosmetic Dermatology',
    experience: '15+ years',
    education: [
      'Harvard Medical School, MD',
      'Mayo Clinic, Dermatology Residency',
      'Fellowship in Cosmetic Dermatology, UCLA'
    ],
    certifications: [
      'American Board of Dermatology',
      'American Society for Dermatologic Surgery',
      'American Academy of Dermatology'
    ],
    achievements: [
      'Top Dermatologist Award 2023',
      'Published 50+ peer-reviewed articles',
      'Clinical Professor at UCLA Medical School'
    ],
    languages: ['English', 'Spanish', 'French'],
    bio: 'Dr. Johnson is a renowned dermatologist with expertise in both medical and cosmetic dermatology. She is known for her innovative approaches to skin rejuvenation and her commitment to patient care.',
    image: '/api/placeholder/400/400',
    rating: 4.9,
    reviews: 234
  },
  {
    name: 'Dr. Michael Chen',
    title: 'Hair Restoration Specialist',
    specialty: 'Hair Transplant & Restoration',
    experience: '12+ years',
    education: [
      'Johns Hopkins University School of Medicine, MD',
      'UCSF, Dermatology Residency',
      'Fellowship in Hair Restoration, ISHRS'
    ],
    certifications: [
      'American Board of Dermatology',
      'International Society of Hair Restoration Surgery',
      'American Hair Loss Association'
    ],
    achievements: [
      'Pioneer in FUE techniques',
      'Over 5,000 successful procedures',
      'Trained 50+ physicians worldwide'
    ],
    languages: ['English', 'Mandarin', 'Cantonese'],
    bio: 'Dr. Chen specializes in advanced hair restoration techniques using the latest FUE and FUT methods. He has helped thousands of patients restore their confidence through natural-looking results.',
    image: '/api/placeholder/400/400',
    rating: 4.8,
    reviews: 189
  },
  {
    name: 'Dr. Emily Rodriguez',
    title: 'Laser & Aesthetic Medicine Specialist',
    specialty: 'Laser Treatments & Non-Invasive Procedures',
    experience: '10+ years',
    education: [
      'Stanford University School of Medicine, MD',
      'Cleveland Clinic, Dermatology Residency',
      'Fellowship in Laser Medicine, Harvard'
    ],
    certifications: [
      'American Board of Dermatology',
      'American Society for Laser Medicine and Surgery',
      'International Society of Aesthetic Plastic Surgery'
    ],
    achievements: [
      'Laser Expert of the Year 2022',
      'Clinical researcher for new laser technologies',
      'Speaker at international conferences'
    ],
    languages: ['English', 'Spanish', 'Portuguese'],
    bio: 'Dr. Rodriguez is a leading expert in laser medicine and non-invasive aesthetic procedures. She combines artistic vision with technical expertise to deliver exceptional results.',
    image: '/api/placeholder/400/400',
    rating: 4.9,
    reviews: 312
  }
];

const clinicStats = [
  { label: 'Medical Professionals', value: '15+' },
  { label: 'Combined Experience', value: '100+ years' },
  { label: 'Happy Patients', value: '50,000+' },
  { label: 'Procedures Performed', value: '100,000+' },
];

const values = [
  {
    title: 'Excellence',
    description: 'We strive for the highest standards in medical care and patient outcomes.'
  },
  {
    title: 'Innovation',
    description: 'We embrace cutting-edge technology and techniques to deliver superior results.'
  },
  {
    title: 'Compassion',
    description: 'We treat every patient with empathy, respect, and personalized attention.'
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest ethical standards in all our practices and recommendations.'
  }
];

export default function AboutPage() {
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
              Meet Our World-Class Team
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Medical Excellence</span>
              <br />
              <span className="text-gradient">Meets Artistry</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our board-certified specialists bring decades of combined experience in dermatology, 
              hair restoration, and aesthetic medicine to provide you with the highest quality care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {clinicStats.map((stat, index) => (
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

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Medical Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the experts dedicated to your skin health and beauty
            </p>
          </motion.div>

          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="luxury-card overflow-hidden border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Image Section */}
                      <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20">
                          <Avatar className="w-full h-full rounded-none">
                            <AvatarImage src={member.image} alt={member.name} />
                            <AvatarFallback className="rounded-none text-4xl">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-white/90 text-primary">
                            <Star className="w-3 h-3 fill-current mr-1" />
                            {member.rating} ({member.reviews} reviews)
                          </Badge>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="mb-4">
                          <Badge className="mb-3 bg-accent/10 text-accent border-accent/20">
                            {member.specialty}
                          </Badge>
                          <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                          <p className="text-muted-foreground font-medium">{member.title}</p>
                          <p className="text-sm text-primary mt-1">{member.experience} experience</p>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {member.bio}
                        </p>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center">
                              <Award className="w-4 h-4 mr-2 text-accent" />
                              Education & Training
                            </h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {member.education.map((edu, i) => (
                                <li key={i}>• {edu}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Certifications</h4>
                            <div className="flex flex-wrap gap-2">
                              {member.certifications.map((cert, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {cert}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-2">Languages</h4>
                            <div className="flex flex-wrap gap-2">
                              {member.languages.map((lang, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {lang}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3 mt-6">
                          <Button size="sm" className="luxury-gradient text-white">
                            <Calendar className="w-4 h-4 mr-2" />
                            Book Consultation
                          </Button>
                          <Button variant="outline" size="sm">
                            <Phone className="w-4 h-4 mr-2" />
                            Contact
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="luxury-card h-full p-6 text-center border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 luxury-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">
                        {value.title.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
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
                Experience the Difference
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Schedule a consultation with our expert team and discover personalized 
                solutions for your skin and beauty concerns.
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg"
              >
                Meet Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}