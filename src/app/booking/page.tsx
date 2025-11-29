'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  CreditCard, 
  Check, 
  ChevronRight, 
  ChevronLeft,
  Phone,
  Mail,
  MapPin,
  AlertCircle,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    title: 'Medical Director & Board-Certified Dermatologist',
    specialty: 'Medical & Cosmetic Dermatology',
    experience: '15+ years',
    rating: 4.9,
    reviews: 234,
    price: 350,
    image: '/api/placeholder/200/200',
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday']
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    title: 'Hair Restoration Specialist',
    specialty: 'Hair Transplant & Restoration',
    experience: '12+ years',
    rating: 4.8,
    reviews: 189,
    price: 400,
    image: '/api/placeholder/200/200',
    availability: ['Tuesday', 'Wednesday', 'Friday', 'Saturday']
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    title: 'Laser & Aesthetic Medicine Specialist',
    specialty: 'Laser Treatments & Non-Invasive Procedures',
    experience: '10+ years',
    rating: 4.9,
    reviews: 312,
    price: 300,
    image: '/api/placeholder/200/200',
    availability: ['Monday', 'Thursday', 'Friday', 'Saturday']
  }
];

const services = [
  {
    id: 1,
    category: 'dermatology',
    name: 'General Dermatology Consultation',
    duration: 30,
    price: 200,
    description: 'Comprehensive skin examination and consultation'
  },
  {
    id: 2,
    category: 'dermatology',
    name: 'Acne Treatment Consultation',
    duration: 45,
    price: 250,
    description: 'Specialized consultation for acne management'
  },
  {
    id: 3,
    category: 'hair',
    name: 'Hair Restoration Consultation',
    duration: 60,
    price: 300,
    description: 'Complete hair loss evaluation and treatment planning'
  },
  {
    id: 4,
    category: 'laser',
    name: 'Laser Treatment Consultation',
    duration: 30,
    price: 150,
    description: 'Assessment for laser procedures and compatibility'
  },
  {
    id: 5,
    category: 'injectables',
    name: 'Injectables Consultation',
    duration: 30,
    price: 100,
    description: 'Consultation for Botox, fillers, and other injectables'
  },
  {
    id: 6,
    category: 'body',
    name: 'Body Contouring Consultation',
    duration: 45,
    price: 200,
    description: 'Evaluation for non-surgical body contouring treatments'
  }
];

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
];

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientInfo, setPatientInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const availableDates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date.toISOString().split('T')[0];
  });

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    toast({
      title: "Appointment Booked Successfully!",
      description: "You will receive a confirmation email shortly.",
    });
    
    // Reset form or redirect to confirmation
    setTimeout(() => {
      setCurrentStep(totalSteps + 1);
    }, 1000);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return selectedDoctor !== null;
      case 2:
        return selectedService !== null;
      case 3:
        return selectedDate && selectedTime;
      case 4:
        return patientInfo.firstName && patientInfo.lastName && 
               patientInfo.email && patientInfo.phone;
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <DoctorSelection />;
      case 2:
        return <ServiceSelection />;
      case 3:
        return <DateTimeSelection />;
      case 4:
        return <PatientInformation />;
      case 5:
        return <Confirmation />;
      default:
        return <SuccessPage />;
    }
  };

  const DoctorSelection = () => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Select Your Doctor</h2>
        <p className="text-muted-foreground">Choose from our board-certified specialists</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <Card 
            key={doctor.id}
            className={`luxury-card cursor-pointer border-2 transition-all ${
              selectedDoctor?.id === doctor.id 
                ? 'border-primary shadow-lg' 
                : 'border-transparent hover:border-primary/50'
            }`}
            onClick={() => setSelectedDoctor(doctor)}
          >
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <div className="w-20 h-20 luxury-gradient rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-2xl">
                    {doctor.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-bold">{doctor.name}</h3>
                <p className="text-sm text-muted-foreground">{doctor.title}</p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                  <span>{doctor.rating} ({doctor.reviews} reviews)</span>
                </div>
                <div className="text-muted-foreground">{doctor.specialty}</div>
                <div className="text-muted-foreground">{doctor.experience} experience</div>
                <div className="font-semibold">${doctor.price} consultation</div>
              </div>

              {selectedDoctor?.id === doctor.id && (
                <div className="mt-4 text-center">
                  <Badge className="bg-primary text-primary-foreground">Selected</Badge>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );

  const ServiceSelection = () => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Select Service</h2>
        <p className="text-muted-foreground">Choose the consultation type you need</p>
      </div>

      <RadioGroup value={selectedService?.id?.toString()} onValueChange={(value) => {
        const service = services.find(s => s.id === parseInt(value));
        setSelectedService(service);
      }}>
        <div className="grid gap-4">
          {services.map((service) => (
            <Card 
              key={service.id}
              className={`luxury-card cursor-pointer border-2 transition-all ${
                selectedService?.id === service.id 
                  ? 'border-primary shadow-lg' 
                  : 'border-transparent hover:border-primary/50'
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <RadioGroupItem value={service.id.toString()} id={service.id} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">${service.price}</div>
                        <div className="text-sm text-muted-foreground">{service.duration} min</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </RadioGroup>
    </motion.div>
  );

  const DateTimeSelection = () => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Select Date & Time</h2>
        <p className="text-muted-foreground">Choose your preferred appointment time</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-4">Available Dates</h3>
          <div className="grid grid-cols-2 gap-2">
            {availableDates.map((date) => (
              <Button
                key={date}
                variant={selectedDate === date ? "default" : "outline"}
                className="justify-start"
                onClick={() => setSelectedDate(date)}
              >
                {new Date(date).toLocaleDateString('en-US', { 
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric'
                })}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Available Times</h3>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {selectedDate && selectedTime && (
        <Card className="mt-6 border-primary">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="font-medium">
                  Selected: {new Date(selectedDate).toLocaleDateString()} at {selectedTime}
                </span>
              </div>
              <Badge variant="secondary">
                {selectedService?.duration} minutes
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );

  const PatientInformation = () => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Patient Information</h2>
        <p className="text-muted-foreground">Please provide your contact details</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              id="firstName"
              value={patientInfo.firstName}
              onChange={(e) => setPatientInfo({...patientInfo, firstName: e.target.value})}
              placeholder="John"
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name *</Label>
            <Input
              id="lastName"
              value={patientInfo.lastName}
              onChange={(e) => setPatientInfo({...patientInfo, lastName: e.target.value})}
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={patientInfo.email}
              onChange={(e) => setPatientInfo({...patientInfo, email: e.target.value})}
              placeholder="john.doe@example.com"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={patientInfo.phone}
              onChange={(e) => setPatientInfo({...patientInfo, phone: e.target.value})}
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={patientInfo.dateOfBirth}
            onChange={(e) => setPatientInfo({...patientInfo, dateOfBirth: e.target.value})}
          />
        </div>

        <div>
          <Label htmlFor="notes">Additional Notes (Optional)</Label>
          <Textarea
            id="notes"
            value={patientInfo.notes}
            onChange={(e) => setPatientInfo({...patientInfo, notes: e.target.value})}
            placeholder="Please describe your concerns or any specific requirements..."
            rows={4}
          />
        </div>

        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
              <div className="text-sm text-blue-800">
                <p className="font-medium">Privacy Notice</p>
                <p>Your information is protected by HIPAA regulations and will never be shared without your consent.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );

  const Confirmation = () => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Confirm Your Appointment</h2>
        <p className="text-muted-foreground">Please review your appointment details</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              Doctor & Service
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Doctor:</span>
              <span className="font-medium">{selectedDoctor?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Service:</span>
              <span className="font-medium">{selectedService?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Duration:</span>
              <span>{selectedService?.duration} minutes</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Consultation Fee:</span>
              <span className="font-semibold">${selectedService?.price}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Date & Time
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date:</span>
              <span className="font-medium">
                {new Date(selectedDate).toLocaleDateString('en-US', { 
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Time:</span>
              <span className="font-medium">{selectedTime}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              Patient Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Name:</span>
              <span className="font-medium">{patientInfo.firstName} {patientInfo.lastName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Email:</span>
              <span>{patientInfo.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Phone:</span>
              <span>{patientInfo.phone}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-start space-x-2">
              <Check className="w-5 h-5 text-green-500 mt-0.5" />
              <div className="text-sm text-green-800">
                <p className="font-medium">What happens next?</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>You'll receive a confirmation email within 5 minutes</li>
                  <li>Appointment reminder 24 hours before your visit</li>
                  <li>Free cancellation up to 24 hours before appointment</li>
                  <li>Payment can be made at the clinic or online</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );

  const SuccessPage = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12"
    >
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check className="w-10 h-10 text-green-600" />
      </div>
      
      <h2 className="text-3xl font-bold mb-4">Appointment Confirmed!</h2>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        Your appointment has been successfully booked. You'll receive a confirmation email shortly with all the details.
      </p>

      <div className="max-w-md mx-auto space-y-4">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-3 text-left">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-3 text-primary" />
                <div>
                  <p className="font-medium">Date & Time</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(selectedDate).toLocaleDateString()} at {selectedTime}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-3 text-primary" />
                <div>
                  <p className="font-medium">Doctor</p>
                  <p className="text-sm text-muted-foreground">{selectedDoctor?.name}</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">123 Medical Center Dr, Beverly Hills, CA</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex space-x-3">
          <Button className="flex-1" onClick={() => window.print()}>
            Print Confirmation
          </Button>
          <Button variant="outline" className="flex-1">
            Add to Calendar
          </Button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Book Your Appointment</h1>
            <span className="text-sm text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Content */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        {currentStep <= totalSteps && (
          <div className="max-w-4xl mx-auto mt-8">
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              {currentStep === totalSteps ? (
                <Button
                  onClick={handleSubmit}
                  disabled={!isStepValid() || isSubmitting}
                  className="luxury-gradient text-white"
                >
                  {isSubmitting ? 'Booking...' : 'Confirm Appointment'}
                  <Check className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="luxury-gradient text-white"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}