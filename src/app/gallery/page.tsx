'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, Eye, Heart, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const galleryItems = [
  {
    id: 1,
    category: 'acne',
    treatment: 'Acne Treatment',
    patient: 'Female, 28',
    before: '/api/placeholder/400/500',
    after: '/api/placeholder/400/500',
    description: 'Complete acne clearance after 6 months of treatment',
    tags: ['acne', 'scarring', 'transformation'],
    likes: 234,
    views: 1520,
    date: '2024-01-15'
  },
  {
    id: 2,
    category: 'hair',
    treatment: 'FUE Hair Transplant',
    patient: 'Male, 35',
    before: '/api/placeholder/400/500',
    after: '/api/placeholder/400/500',
    description: 'Natural hairline restoration with 3,000 grafts',
    tags: ['hair', 'transplant', 'natural'],
    likes: 189,
    views: 980,
    date: '2024-02-20'
  },
  {
    id: 3,
    category: 'laser',
    treatment: 'Laser Resurfacing',
    patient: 'Female, 42',
    before: '/api/placeholder/400/500',
    after: '/api/placeholder/400/500',
    description: 'Full facial rejuvenation with CO2 laser',
    tags: ['laser', 'rejuvenation', 'anti-aging'],
    likes: 312,
    views: 2100,
    date: '2024-03-10'
  },
  {
    id: 4,
    category: 'injectables',
    treatment: 'Dermal Fillers',
    patient: 'Female, 38',
    before: '/api/placeholder/400/500',
    after: '/api/placeholder/400/500',
    description: 'Non-surgical facelift with hyaluronic acid fillers',
    tags: ['fillers', 'non-surgical', 'rejuvenation'],
    likes: 278,
    views: 1650,
    date: '2024-01-25'
  },
  {
    id: 5,
    category: 'body',
    treatment: 'CoolSculpting',
    patient: 'Female, 32',
    before: '/api/placeholder/400/500',
    after: '/api/placeholder/400/500',
    description: 'Abdominal contouring - 2 inch reduction',
    tags: ['body', 'contouring', 'non-invasive'],
    likes: 156,
    views: 890,
    date: '2024-02-15'
  },
  {
    id: 6,
    category: 'skincare',
    treatment: 'Chemical Peel',
    patient: 'Male, 29',
    before: '/api/placeholder/400/500',
    after: '/api/placeholder/400/500',
    description: 'TCA peel for acne scarring and texture improvement',
    tags: ['peel', 'skincare', 'texture'],
    likes: 145,
    views: 720,
    date: '2024-03-05'
  },
  {
    id: 7,
    category: 'acne',
    treatment: 'Accutane Therapy',
    patient: 'Male, 24',
    before: '/api/placeholder/400/500',
    after: '/api/placeholder/400/500',
    description: 'Severe cystic acne clearance with isotretinoin',
    tags: ['acne', 'medication', 'severe'],
    likes: 198,
    views: 1100,
    date: '2024-01-30'
  },
  {
    id: 8,
    category: 'hair',
    treatment: 'PRP Therapy',
    patient: 'Female, 31',
    before: '/api/placeholder/400/500',
    after: '/api/placeholder/400/500',
    description: 'Hair density improvement after 4 PRP sessions',
    tags: ['hair', 'prp', 'non-surgical'],
    likes: 167,
    views: 850,
    date: '2024-02-28'
  }
];

const categories = [
  { value: 'all', label: 'All Treatments' },
  { value: 'acne', label: 'Acne Treatment' },
  { value: 'hair', label: 'Hair Restoration' },
  { value: 'laser', label: 'Laser Treatments' },
  { value: 'injectables', label: 'Injectables' },
  { value: 'body', label: 'Body Contouring' },
  { value: 'skincare', label: 'Skincare' }
];

const sortOptions = [
  { value: 'recent', label: 'Most Recent' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'views', label: 'Most Viewed' },
  { value: 'likes', label: 'Most Liked' }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());

  const filteredAndSortedItems = useMemo(() => {
    let filtered = galleryItems.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = searchTerm === '' || 
        item.treatment.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });

    // Sort items
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.views - a.views;
        case 'views':
          return b.views - a.views;
        case 'likes':
          return b.likes - a.likes;
        case 'recent':
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, sortBy]);

  const toggleLike = (itemId: number) => {
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-500/5 via-background to-pink-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 px-4 py-2 text-sm bg-purple-100 text-purple-800 border-purple-200">
              Real Results
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Before & After</span>
              <br />
              <span className="text-gradient">Gallery</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover the transformative results achieved by our patients. 
              Real people, real outcomes from our advanced dermatological and aesthetic treatments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-secondary/30 sticky top-16 z-40 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search treatments, tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Results Count */}
            <div className="text-sm text-muted-foreground">
              {filteredAndSortedItems.length} results
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <Card className="luxury-card overflow-hidden border-0 shadow-lg">
                  <CardContent className="p-0">
                    {/* Before/After Images */}
                    <div className="relative aspect-[4/5] bg-gradient-to-br from-primary/10 to-accent/10">
                      <div className="absolute inset-0 grid grid-cols-2 gap-0.5">
                        <div className="relative bg-black/5">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-medium text-black/50">BEFORE</span>
                          </div>
                        </div>
                        <div className="relative bg-black/5">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xs font-medium text-black/50">AFTER</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        {item.treatment}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.patient}</p>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleLike(item.id);
                            }}
                            className="flex items-center hover:text-red-500 transition-colors"
                          >
                            <Heart 
                              className={`w-3 h-3 mr-1 ${likedItems.has(item.id) ? 'fill-current text-red-500' : ''}`} 
                            />
                            {item.likes + (likedItems.has(item.id) ? 1 : 0)}
                          </button>
                          <div className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {item.views}
                          </div>
                        </div>
                        <span className="text-xs">
                          {new Date(item.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredAndSortedItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No results found for your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-background border-b p-4 flex items-center justify-between">
                <h2 className="text-xl font-bold">{selectedItem.treatment}</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedItem(null)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">Before</h3>
                    <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                      <span className="text-muted-foreground">Before Image</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">After</h3>
                    <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                      <span className="text-muted-foreground">After Image</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Patient Details</h3>
                    <p className="text-muted-foreground">{selectedItem.patient}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Treatment Description</h3>
                    <p className="text-muted-foreground">{selectedItem.description}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <button
                        onClick={() => toggleLike(selectedItem.id)}
                        className="flex items-center hover:text-red-500 transition-colors"
                      >
                        <Heart 
                          className={`w-4 h-4 mr-1 ${likedItems.has(selectedItem.id) ? 'fill-current text-red-500' : ''}`} 
                        />
                        {selectedItem.likes + (likedItems.has(selectedItem.id) ? 1 : 0)} likes
                      </button>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {selectedItem.views} views
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}