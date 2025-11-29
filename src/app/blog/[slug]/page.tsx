'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Heart, 
  MessageCircle, 
  Share2, 
  ArrowLeft,
  Tag,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

// Sample blog post data - in real app this would come from MDX or API
const blogPost = {
  id: 1,
  title: 'The Ultimate Guide to Anti-Aging Skincare in 2025',
  excerpt: 'Discover the latest breakthrough treatments and ingredients that are revolutionizing anti-aging skincare.',
  author: 'Dr. Sarah Johnson',
  authorTitle: 'Board-Certified Dermatologist',
  authorImage: '/api/placeholder/100/100',
  date: '2024-12-15',
  readTime: '8 min read',
  category: 'Anti-Aging',
  tags: ['skincare', 'anti-aging', 'treatments', 'laser'],
  image: '/api/placeholder/1200/600',
  likes: 245,
  comments: 32,
  views: 1520,
  content: `
# The Ultimate Guide to Anti-Aging Skincare in 2025

Aging is a natural process that affects everyone, but modern dermatology has given us unprecedented tools to slow, prevent, and even reverse many of its visible signs. As we move into 2025, the landscape of anti-aging treatments has evolved dramatically, offering personalized solutions that were once thought impossible.

## Understanding the Aging Process

Before diving into treatments, it's essential to understand what causes skin aging:

### Intrinsic Factors
- **Genetic predisposition**: Your DNA plays a significant role in how your skin ages
- **Hormonal changes**: Decreased collagen production and elasticity over time
- **Cellular aging**: Reduced cell turnover and repair mechanisms

### Extrinsic Factors
- **UV exposure**: The primary cause of premature aging
- **Environmental stressors**: Pollution, smoking, and poor nutrition
- **Lifestyle factors**: Sleep deprivation and chronic stress

## Revolutionary Treatments for 2025

### 1. Advanced Laser Therapies

Modern laser technology has become incredibly sophisticated, offering:

- **Fractional CO2 Lasers**: Minimal downtime with maximum results
- **Radiofrequency Microneedling**: Combines radiofrequency energy with microneedling
- **IPL Photofacials**: Treats pigmentation and vascular issues simultaneously

### 2. Next-Generation Injectables

The world of injectables has evolved beyond simple Botox and fillers:

- **Sculptra**: Stimulates your body's own collagen production
- **Radiesse**: Provides immediate lift and long-term collagen stimulation
- **New neuromodulators**: Longer-lasting results with fewer treatments

### 3. Biostimulatory Treatments

These cutting-edge treatments work from within:

- **PRP Therapy**: Uses your own platelets to stimulate healing and rejuvenation
- **Stem Cell Treatments**: Harnesses regenerative properties of stem cells
- **Growth Factor Injections**: Delivers powerful regenerative proteins

## Skincare Ingredients That Work

While professional treatments are powerful, the right skincare routine is crucial:

### Retinoids
- **Prescription-strength retinoids**: Still the gold standard for anti-aging
- **Encapsulated retinol**: Less irritation with maximum efficacy
- **Retinaldehyde**: The most effective non-prescription option

### Peptides
- **Signal peptides**: Tell your skin to produce more collagen
- **Neurotransmitter peptides**: Relax facial muscles without injections
- **Carrier peptides**: Deliver active ingredients deeper into the skin

### Antioxidants
- **Vitamin C**: Brightens and protects against environmental damage
- **Niacinamide**: Improves skin barrier function and reduces inflammation
- **Resveratrol**: Powerful antioxidant with anti-inflammatory properties

## Creating Your Anti-Aging Strategy

The most effective approach combines multiple modalities:

### Morning Routine
1. **Gentle cleanser** that doesn't strip natural oils
2. **Antioxidant serum** with vitamin C and ferulic acid
3. **Moisturizer** with peptides and growth factors
4. **Broad-spectrum sunscreen** (SPF 30+)

### Evening Routine
1. **Double cleansing** to remove makeup and environmental pollutants
2. **Treatment serum** with retinoids or peptides
3. **Eye cream** targeting specific concerns
4. **Night cream** with reparative ingredients

### Professional Treatments Schedule
- **Quarterly**: Laser treatments or chemical peels
- **Bi-annual**: Injectables for maintenance
- **Annual**: Comprehensive skin assessment and treatment plan update

## Common Mistakes to Avoid

Even with the best products and treatments, certain habits can undermine your efforts:

1. **Inconsistent sunscreen use**: The #1 cause of premature aging
2. **Over-exfoliation**: Can damage your skin barrier
3. **Skipping professional treatments**: Home care has limitations
4. **Expecting overnight results**: Anti-aging is a long-term commitment

## The Future of Anti-Aging

Exciting developments on the horizon include:

- **Gene therapy treatments**: Addressing aging at the cellular level
- **AI-powered skincare analysis**: Personalized treatment recommendations
- **Nanotechnology delivery systems**: Enhanced ingredient penetration
- **Microbiome-based treatments**: Supporting healthy skin bacteria

## Conclusion

Anti-aging in 2025 is about combining the best of science, technology, and consistent self-care. By understanding your skin's unique needs and working with qualified professionals, you can achieve remarkable results that go beyond surface-level improvements.

Remember, the goal isn't to stop aging entirely—it's to age gracefully, healthily, and confidently. With today's advanced treatments and products, that's more achievable than ever before.

---

*This article is for informational purposes only. Consult with a board-certified dermatologist for personalized treatment recommendations.*
  `
};

const relatedPosts = [
  {
    id: 2,
    title: 'The Science Behind Laser Skin Rejuvenation',
    excerpt: 'Deep dive into how laser technology works to improve skin texture...',
    readTime: '7 min read',
    category: 'Laser Treatments'
  },
  {
    id: 3,
    title: 'Injectables 101: Botox vs Fillers',
    excerpt: 'Complete comparison of neuromodulators and dermal fillers...',
    readTime: '5 min read',
    category: 'Injectables'
  }
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [isLiked, setIsLiked] = useState(false);
  const { toast } = useToast();

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "Removed from favorites" : "Added to favorites",
      description: isLiked ? "Article removed from your favorites." : "Article added to your favorites.",
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blogPost.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Article link copied to clipboard.",
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Article Header */}
      <article className="relative">
        {/* Hero Image */}
        <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-muted-foreground text-lg">Article Hero Image</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
                <li><Link href="/" className="hover:text-primary">Home</Link></li>
                <li>/</li>
                <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                <li>/</li>
                <li className="text-foreground">{blogPost.title}</li>
              </ol>
            </nav>

            {/* Article Meta */}
            <Card className="luxury-card border-0 shadow-lg mb-8">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <Badge className="mb-4" variant="secondary">{blogPost.category}</Badge>
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                      {blogPost.title}
                    </h1>
                    <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                      {blogPost.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      {blogPost.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(blogPost.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {blogPost.readTime}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {blogPost.views} views
                      </div>
                    </div>
                  </div>

                  {/* Author Card */}
                  <div className="lg:w-80">
                    <Card className="border-0 bg-secondary/30">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <Avatar className="w-16 h-16">
                            <AvatarImage src={blogPost.authorImage} alt={blogPost.author} />
                            <AvatarFallback className="text-lg">
                              {blogPost.author.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{blogPost.author}</h3>
                            <p className="text-sm text-muted-foreground">{blogPost.authorTitle}</p>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1"
                            onClick={handleLike}
                          >
                            <Heart className={`w-4 h-4 mr-2 ${isLiked ? 'fill-current text-red-500' : ''}`} />
                            {blogPost.likes + (isLiked ? 1 : 0)}
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1"
                            onClick={handleShare}
                          >
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="prose prose-lg max-w-none"
                >
                  <div 
                    dangerouslySetInnerHTML={{ 
                      __html: blogPost.content.replace(/\n/g, '<br />') 
                    }} 
                  />
                </motion.div>

                {/* Article Actions */}
                <div className="mt-12 pt-8 border-t">
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button 
                        variant="outline" 
                        onClick={handleLike}
                        className="flex items-center"
                      >
                        <Heart className={`w-4 h-4 mr-2 ${isLiked ? 'fill-current text-red-500' : ''}`} />
                        {isLiked ? 'Liked' : 'Like Article'}
                      </Button>
                      <Button variant="outline" onClick={handleShare}>
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {blogPost.comments} Comments
                    </div>
                  </div>
                </div>

                {/* Medical Disclaimer */}
                <Card className="mt-8 border-blue-200 bg-blue-50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-blue-800">
                        <p className="font-medium mb-2">Medical Disclaimer</p>
                        <p>
                          This article is for informational purposes only and does not constitute medical advice. 
                          Always consult with a board-certified dermatologist or qualified healthcare provider 
                          for personalized medical advice and treatment recommendations.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Table of Contents */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4">Table of Contents</h3>
                    <nav className="space-y-2 text-sm">
                      <a href="#understanding-aging" className="block hover:text-primary transition-colors py-1">
                        Understanding the Aging Process
                      </a>
                      <a href="#revolutionary-treatments" className="block hover:text-primary transition-colors py-1">
                        Revolutionary Treatments for 2025
                      </a>
                      <a href="#skincare-ingredients" className="block hover:text-primary transition-colors py-1">
                        Skincare Ingredients That Work
                      </a>
                      <a href="#anti-aging-strategy" className="block hover:text-primary transition-colors py-1">
                        Creating Your Anti-Aging Strategy
                      </a>
                      <a href="#common-mistakes" className="block hover:text-primary transition-colors py-1">
                        Common Mistakes to Avoid
                      </a>
                      <a href="#future-of-anti-aging" className="block hover:text-primary transition-colors py-1">
                        The Future of Anti-Aging
                      </a>
                    </nav>
                  </CardContent>
                </Card>

                {/* Related Articles */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                          <div className="p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                            <h4 className="font-medium mb-1 group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </h4>
                            <div className="flex items-center text-xs text-muted-foreground space-x-3">
                              <span>{post.category}</span>
                              <span>•</span>
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* CTA Card */}
                <Card className="luxury-gradient border-0 shadow-lg text-white">
                  <CardContent className="p-6">
                    <CheckCircle className="w-8 h-8 mb-4" />
                    <h3 className="font-bold mb-2">Ready to Start Your Journey?</h3>
                    <p className="text-sm mb-4 opacity-90">
                      Schedule a consultation with our experts to discuss personalized anti-aging treatments.
                    </p>
                    <Button className="w-full bg-white text-primary hover:bg-gray-100">
                      Book Consultation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Back to Blog */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="outline" asChild>
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}