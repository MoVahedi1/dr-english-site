'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Clock,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const footerSections = [
  {
    title: 'Services',
    links: [
      { name: 'Dermatology', href: '/treatments/dermatology' },
      { name: 'Hair Restoration', href: '/treatments/hair-restoration' },
      { name: 'Laser Treatments', href: '/treatments/laser' },
      { name: 'Injectables', href: '/treatments/injectables' },
      { name: 'Body Contouring', href: '/treatments/body-contouring' },
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Before & After', href: '/gallery' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ]
  },
  {
    title: 'Support',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Insurance', href: '/insurance' },
      { name: 'Patient Forms', href: '/forms' },
    ]
  }
];

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@drdermatology.com',
    href: 'mailto:info@drdermatology.com'
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Medical Center Dr, Suite 100, Beverly Hills, CA 90210',
    href: '#'
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri: 9AM-6PM, Sat: 9AM-2PM',
    href: '#'
  }
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div 
                className="flex items-center space-x-2 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-10 h-10 luxury-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <span className="font-bold text-xl text-gradient">Dr. Dermatology</span>
              </motion.div>
              
              <motion.p 
                className="text-muted-foreground mb-6 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Experience the pinnacle of dermatological and aesthetic care with our 
                team of board-certified specialists dedicated to your beauty and wellness.
              </motion.p>

              {/* Newsletter */}
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="font-semibold">Stay Updated</h4>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Enter your email" 
                    className="flex-1"
                  />
                  <Button className="luxury-gradient text-white">
                    Subscribe
                  </Button>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex space-x-3 mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {socialLinks.map((social, index) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Link href={social.href}>
                      <social.icon className="h-4 w-4" />
                    </Link>
                  </Button>
                ))}
              </motion.div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div 
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * sectionIndex }}
              >
                <h3 className="font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <Separator className="my-8" />

        {/* Contact Info & Bottom Bar */}
        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Contact Info */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {contactInfo.map((info, index) => (
                <div key={info.label} className="flex items-start space-x-3">
                  <div className="w-10 h-10 luxury-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{info.label}</p>
                    {info.href.startsWith('tel:') || info.href.startsWith('mailto:') ? (
                      <Link 
                        href={info.href}
                        className="text-muted-foreground hover:text-primary text-sm transition-colors"
                      >
                        {info.value}
                      </Link>
                    ) : (
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Quick Actions */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 lg:justify-end"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Button variant="outline" className="flex items-center justify-center">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Consultation
              </Button>
              <Button className="luxury-gradient text-white flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4" />
                Emergency: +1 (555) 911-HELP
              </Button>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div 
            className="pt-8 border-t text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-sm">
              © 2025 Dr. Dermatology & Aesthetic Centre. All rights reserved. | 
              <Link href="/privacy" className="hover:text-primary ml-1">Privacy</Link> | 
              <Link href="/terms" className="hover:text-primary ml-1">Terms</Link> | 
              <Link href="/sitemap" className="hover:text-primary ml-1">Sitemap</Link>
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Board-certified dermatologists • Licensed aesthetic practitioners • 
              HIPAA compliant • Accredited facility
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}