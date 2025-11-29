'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, Clock, User, ArrowRight, Heart, MessageCircle, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'The Ultimate Guide to Anti-Aging Skincare in 2025',
    excerpt: 'Discover the latest breakthrough treatments and ingredients that are revolutionizing anti-aging skincare. From cutting-edge laser therapies to innovative injectables.',
    author: 'Dr. Sarah Johnson',
    authorTitle: 'Board-Certified Dermatologist',
    date: '2024-12-15',
    readTime: '8 min read',
    category: 'Anti-Aging',
    tags: ['skincare', 'anti-aging', 'treatments', 'laser'],
    image: '/api/placeholder/600/400',
    featured: true,
    likes: 245,
    comments: 32,
    views: 1520
  },
  {
    id: 2,
    title: 'Hair Restoration: Modern Solutions for Thinning Hair',
    excerpt: 'Explore the latest advances in hair restoration technology, from FUE transplants to PRP therapy and beyond. Learn what works best for different types of hair loss.',
    author: 'Dr. Michael Chen',
    authorTitle: 'Hair Restoration Specialist',
    date: '2024-12-10',
    readTime: '6 min read',
    category: 'Hair Restoration',
    tags: ['hair', 'restoration', 'transplant', 'PRP'],
    image: '/api/placeholder/600/400',
    featured: true,
    likes: 189,
    comments: 28,
    views: 980
  },
  {
    id: 3,
    title: 'Understanding Acne: Causes and Advanced Treatments',
    excerpt: 'Comprehensive guide to acne management, including hormonal factors, dietary influences, and the most effective treatment options available today.',
    author: 'Dr. Emily Rodriguez',
    authorTitle: 'Laser & Aesthetic Medicine Specialist',
    date: '2024-12-05',
    readTime: '10 min read',
    category: 'Acne Treatment',
    tags: ['acne', 'dermatology', 'treatment', 'skincare'],
    image: '/api/placeholder/600/400',
    featured: false,
    likes: 156,
    comments: 41,
    views: 1200
  },
  {
    id: 4,
    title: 'The Science Behind Laser Skin Rejuvenation',
    excerpt: 'Deep dive into how laser technology works to improve skin texture, reduce wrinkles, and treat pigmentation issues with minimal downtime.',
    author: 'Dr. Sarah Johnson',
    authorTitle: 'Board-Certified Dermatologist',
    date: '2024-11-28',
    readTime: '7 min read',
    category: 'Laser Treatments',
    tags: ['laser', 'rejuvenation', 'technology', 'skincare'],
    image: '/api/placeholder/600/400',
    featured: false,
    likes: 203,
    comments: 19,
    views: 890
  },
  {
    id: 5,
    title: 'Injectables 101: Botox vs Fillers - What You Need to Know',
    excerpt: 'Complete comparison of neuromodulators and dermal fillers, including their uses, benefits, and how to choose the right treatment for your goals.',
    author: 'Dr. Emily Rodriguez',
    authorTitle: 'Laser & Aesthetic Medicine Specialist',
    date: '2024-11-20',
    readTime: '5 min read',
    category: 'Injectables',
    tags: ['injectables', 'botox', 'fillers', 'cosmetic'],
    image: '/api/placeholder/600/400',
    featured: false,
    likes: 178,
    comments: 35,
    views: 1450
  },
  {
    id: 6,
    title: 'Non-Surgical Body Contouring: What Really Works?',
    excerpt: 'Evidence-based review of popular non-invasive body contouring treatments including CoolSculpting, EMSCULPT, and radiofrequency therapy.',
    author: 'Dr. Michael Chen',
    authorTitle: 'Hair Restoration Specialist',
    date: '2024-11-15',
    readTime: '9 min read',
    category: 'Body Contouring',
    tags: ['body', 'contouring', 'non-surgical', 'technology'],
    image: '/api/placeholder/600/400',
    featured: false,
    likes: 134,
    comments: 22,
    views: 780
  }
];

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'Anti-Aging', label: 'Anti-Aging' },
  { value: 'Hair Restoration', label: 'Hair Restoration' },
  { value: 'Acne Treatment', label: 'Acne Treatment' },
  { value: 'Laser Treatments', label: 'Laser Treatments' },
  { value: 'Injectables', label: 'Injectables' },
  { value: 'Body Contouring', label: 'Body Contouring' },
  { value: 'Skincare', label: 'Skincare' }
];

const sortOptions = [
  { value: 'recent', label: 'Most Recent' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'views', label: 'Most Viewed' },
  { value: 'comments', label: 'Most Discussed' }
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.likes - a.likes;
        case 'views':
          return b.views - a.views;
        case 'comments':
          return b.comments - a.comments;
        case 'recent':
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, sortBy]);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredAndSortedPosts.filter(post => !post.featured);

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-500/5 via-background to-blue-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 px-4 py-2 text-sm bg-purple-100 text-purple-800 border-purple-200">
              Knowledge Center
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Medical Blog</span>
              <br />
              <span className="text-gradient">& Insights</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Expert insights from our board-certified dermatologists on the latest treatments, 
              skincare innovations, and medical aesthetics trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {searchTerm === '' && selectedCategory === 'all' && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">
                Featured <span className="text-gradient">Articles</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Our most popular and comprehensive guides
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="luxury-card overflow-hidden border-0 shadow-lg group cursor-pointer">
                    <Link href={`/blog/${post.id}`}>
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-muted-foreground">Featured Article Image</span>
                        </div>
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </Link>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <Link href={`/blog/${post.id}`}>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <User className="w-4 h-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <button
                            onClick={() => toggleLike(post.id)}
                            className="flex items-center hover:text-red-500 transition-colors"
                          >
                            <Heart className={`w-4 h-4 mr-1 ${likedPosts.has(post.id) ? 'fill-current text-red-500' : ''}`} />
                            {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                          </button>
                          <div className="flex items-center">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {post.comments}
                          </div>
                          <div className="flex items-center">
                            <Share2 className="w-4 h-4 mr-1" />
                            {post.views}
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm">
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters Section */}
      <section className="py-8 bg-secondary/30 sticky top-16 z-40 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search articles..."
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
              {filteredAndSortedPosts.length} articles
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="luxury-card h-full border-0 shadow-lg group cursor-pointer">
                  <Link href={`/blog/${post.id}`}>
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-muted-foreground">Article Image</span>
                      </div>
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <Link href={`/blog/${post.id}`}>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <button
                          onClick={() => toggleLike(post.id)}
                          className="flex items-center hover:text-red-500 transition-colors"
                        >
                          <Heart className={`w-4 h-4 mr-1 ${likedPosts.has(post.id) ? 'fill-current text-red-500' : ''}`} />
                          {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                        </button>
                        <div className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {post.comments}
                        </div>
                      </div>
                      
                      <Button variant="ghost" size="sm">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredAndSortedPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found for your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
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
                Stay Updated with Medical Insights
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Get the latest dermatology research, treatment innovations, and skincare tips 
                delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/20 border-white/30 text-white placeholder-white/70"
                />
                <Button className="bg-white text-primary hover:bg-gray-100">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}