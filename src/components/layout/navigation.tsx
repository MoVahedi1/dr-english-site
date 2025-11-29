'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  Calendar, 
  ChevronDown,
  Sun,
  Moon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';
import { useI18n } from '@/lib/i18n/context';
import LanguageSwitcher from '@/components/ui/language-switcher';

const navigation = [
  { name: 'common.navigation.home', href: '/' },
  { 
    name: 'common.navigation.treatments', 
    href: '/treatments',
    children: [
      { name: 'Dermatology', href: '/treatments/dermatology' },
      { name: 'Hair Restoration', href: '/treatments/hair-restoration' },
      { name: 'Laser Treatments', href: '/treatments/laser' },
      { name: 'Injectables', href: '/treatments/injectables' },
      { name: 'Body Contouring', href: '/treatments/body-contouring' },
    ]
  },
  { name: 'common.navigation.gallery', href: '/gallery' },
  { name: 'common.navigation.about', href: '/about' },
  { name: 'common.navigation.blog', href: '/blog' },
  { name: 'common.navigation.contact', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavItems = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navigation.map((item) => (
        <div key={item.name} className={mobile ? 'py-2' : ''}>
          {item.children ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant={mobile ? "ghost" : "ghost"} 
                  className={mobile 
                    ? `w-full justify-start ${pathname.startsWith(item.href) ? 'text-primary' : ''}`
                    : `h-9 px-4 ${pathname.startsWith(item.href) ? 'text-primary' : ''}`
                  }
                >
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align={mobile ? "start" : "center"} className="min-w-[200px]">
                {item.children.map((child) => (
                  <DropdownMenuItem key={child.name} asChild>
                    <Link 
                      href={child.href}
                      className={pathname === child.href ? 'text-primary' : ''}
                    >
                      {child.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              href={item.href}
              className={`${
                mobile 
                  ? `block py-2 text-lg ${pathname === item.href ? 'text-primary font-medium' : ''}`
                  : `inline-flex h-9 items-center px-4 ${pathname === item.href ? 'text-primary font-medium' : ''}`
              } hover:text-primary transition-colors`}
              onClick={() => mobile && setIsOpen(false)}
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </>
  );

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-background/95 backdrop-blur-md border-b shadow-sm' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <motion.div 
                className="w-10 h-10 luxury-gradient rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white font-bold text-xl">D</span>
              </motion.div>
              <span className="font-bold text-xl hidden sm:block text-gradient">
                Dr. Dermatology
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <NavItems />
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-2">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hidden sm:flex"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>

              {/* Phone */}
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Phone className="h-5 w-5" />
              </Button>

              {/* Book Appointment CTA */}
              <Button 
                asChild
                className="hidden sm:flex luxury-gradient text-white hover:shadow-lg transition-all"
              >
                <Link href="/booking">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Now
                </Link>
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-4 mt-8">
                    <NavItems mobile />
                    
                    <div className="pt-4 border-t space-y-3">
                      <Button 
                        variant="outline" 
                        className="w-full justify-start"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                      >
                        <Sun className="mr-2 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute mr-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Us
                      </Button>
                      
                      <Button className="w-full luxury-gradient text-white">
                        <Calendar className="mr-2 h-4 w-4" />
                        Book Appointment
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
}