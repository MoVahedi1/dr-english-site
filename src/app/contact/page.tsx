'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    description: 'Monday to Saturday, 9AM - 6PM'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@drdermatology.com',
    href: 'mailto:info@drdermatology.com',
    description: 'We respond within 24 hours'
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Medical Center Dr, Suite 100, Beverly Hills, CA 90210',
    href: '#',
    description: 'Free parking available'
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri: 9AM-6PM, Sat: 9AM-2PM',
    href: '#',
    description: 'Emergency appointments available'
  }
];

const departments = [
  {
    name: 'New Appointments',
    email: 'appointments@drdermatology.com',
    phone: '+1 (555) 123-4568',
    description: 'Schedule your first consultation'
  },
  {
    name: 'Billing & Insurance',
    email: 'billing@drdermatology.com',
    phone: '+1 (555) 123-4569',
    description: 'Payment and insurance questions'
  },
  {
    name: 'Medical Records',
    email: 'records@drdermatology.com',
    phone: '+1 (555) 123-4570',
    description: 'Request your medical records'
  },
  {
    name: 'Emergency',
    email: 'emergency@drdermatology.com',
    phone: '+1 (555) 911-HELP',
    description: 'Urgent medical concerns'
  }
];

const faqs = [
  {
    question: 'How do I schedule an appointment?',
    answer: 'You can schedule online through our booking system, call us directly, or use WhatsApp for quick scheduling.'
  },
  {
    question: 'What insurance do you accept?',
    answer: 'We accept most major insurance plans. Please contact our billing department to verify your coverage.'
  },
  {
    question: 'Do you offer virtual consultations?',
    answer: 'Yes, we offer telemedicine consultations for certain conditions and follow-up appointments.'
  },
  {
    question: 'What should I bring to my appointment?',
    answer: 'Please bring your ID, insurance card, list of medications, and any relevant medical records.'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I would like to inquire about your services.');
    window.open(`https://wa.me/15551234567?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-500/5 via-background to-blue-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 px-4 py-2 text-sm bg-green-100 text-green-800 border-green-200">
              Get in Touch
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Contact Us</span>
              <br />
              <span className="text-gradient">We're Here to Help</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Have questions about our services? Need to schedule an appointment? 
              Our friendly team is ready to assist you with all your dermatological needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                asChild
              >
                <a href="tel:+15551234567">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to reach us for your convenience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="luxury-card h-full p-6 text-center border-0 shadow-lg">
                  <div className="w-16 h-16 luxury-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.label}</h3>
                  {info.href.startsWith('tel:') || info.href.startsWith('mailto:') ? (
                    <a 
                      href={info.href}
                      className="text-primary hover:underline block mb-2"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="mb-2">{info.value}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <Input
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full luxury-gradient text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Departments */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map */}
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">123 Medical Center Dr, Beverly Hills</p>
                  </div>
                </div>
              </Card>

              {/* Departments */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Departments</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={dept.name} className="border-b last:border-b-0 pb-4 last:pb-0">
                      <h4 className="font-semibold mb-1">{dept.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{dept.description}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                        <a href={`mailto:${dept.email}`} className="text-primary hover:underline">
                          {dept.email}
                        </a>
                        <span className="hidden sm:inline">•</span>
                        <a href={`tel:${dept.phone}`} className="text-primary hover:underline">
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="luxury-card border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2 text-primary" />
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="luxury-gradient rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Emergency Contact Available
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90">
                For urgent medical concerns, we have emergency lines available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
                  asChild
                >
                  <a href="tel:+15559114357">
                    <Phone className="mr-2 h-5 w-5" />
                    Emergency: (555) 911-HELP
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Emergency
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}