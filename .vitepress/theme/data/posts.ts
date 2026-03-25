import { appUrl } from './site'

export type BlogRelatedLink = {
  label: string
  href: string
}

export type BlogPostItem = {
  slug: string
  title: string
  description: string
  publishedAt: string
  author: string
  role: string
  coverImage: string
  tags: string[]
  readingTime: number
  featured: boolean
  relatedLinks?: BlogRelatedLink[]
}

export const blogPosts: BlogPostItem[] = [
  {
    slug: 'microdrama-101-everything-you-need-to-know',
    title: 'Microdrama 101: Everything You Need to Know About This $20B Industry',
    description: 'The complete guide to the microdrama industry — market size, top platforms, revenue models, production costs, audience demographics, and how AI is transforming short-form drama creation.',
    publishedAt: '2026-03-22',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/blog-cover-microdrama.png',
    tags: ['AI Drama', 'Landscape', 'Creators'],
    readingTime: 12,
    featured: true,
    relatedLinks: [
      { label: 'Create Your Own Microdrama', href: appUrl('/create') },
      { label: 'View Pricing', href: appUrl('/pricing') },
      { label: 'Explore Community', href: appUrl('/world') }
    ]
  },
  {
    slug: 'seedance-2-ai-video-model-guide',
    title: 'Seedance 2.0: The Multimodal AI Video Model That Changes Everything',
    description: "Explore Seedance 2.0's multimodal video generation — combine images, video, audio, and text references for cinematic AI content. Best practices, prompting tips, and creative examples.",
    publishedAt: '2026-03-22',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/blog-cover-seedance-2.png',
    tags: ['AI Video', 'Landscape', 'Creators'],
    readingTime: 9,
    featured: true,
    relatedLinks: [
      { label: 'Try It on Plot Party', href: appUrl('/create') },
      { label: 'View Pricing', href: appUrl('/pricing') },
      { label: 'Explore Community', href: appUrl('/world') }
    ]
  },
  {
    slug: 'creating-drama-episode-plot-party-tutorial',
    title: 'Creating a Drama Episode with Plot Party: Step-by-Step Tutorial',
    description: "Learn how to create a 1-2 minute AI drama episode on Plot Party. From writing your script to generating videos and publishing — a complete walkthrough of the agentic canvas.",
    publishedAt: '2026-03-21',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/canvas-agent-mode.png',
    tags: ['AI Drama', 'Creators', 'AI Video'],
    readingTime: 6,
    featured: true,
    relatedLinks: [
      { label: 'Start Creating', href: appUrl('/create') },
      { label: 'Quick Generations', href: appUrl('/generate') },
      { label: 'View Pricing', href: appUrl('/pricing') }
    ]
  },
  {
    slug: 'how-to-create-ai-microdrama-complete-guide',
    title: 'How to Create an AI Microdrama: A Complete Guide for Beginners',
    description: 'Learn how to create compelling AI-generated microdramas from scratch. Step-by-step guide covering story structure, AI video generation, character design, and publishing your first microdrama on Plot Party.',
    publishedAt: '2026-03-20',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/blog-cover-microdrama.png',
    tags: ['AI Video', 'AI Drama', 'Creators'],
    readingTime: 8,
    featured: true,
    relatedLinks: [
      { label: 'Start Creating', href: appUrl('/create') },
      { label: 'Explore Community Stories', href: appUrl('/world') },
      { label: 'View Pricing Plans', href: appUrl('/pricing') }
    ]
  },
  {
    slug: 'ai-video-generation-tools-2026-comparison',
    title: "Best AI Video Generation Tools in 2026: Creator's Comparison Guide",
    description: "Compare the top AI video generation tools of 2026 including Plot Party, Runway, Pika, and more. Discover which tool is best for microdramas, short films, and creative storytelling projects.",
    publishedAt: '2026-03-15',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/blog-cover-tool-comparison.png',
    tags: ['AI Video', 'Landscape', 'Creators'],
    readingTime: 10,
    featured: false,
    relatedLinks: [
      { label: 'Try Plot Party Free', href: appUrl('/pricing') },
      { label: 'See What Creators Are Making', href: appUrl('/world') }
    ]
  },
  {
    slug: 'ip-holders-guide-ai-content-monetization',
    title: 'IP Holders: How to Monetize Your Intellectual Property with AI-Generated Content',
    description: 'A comprehensive guide for IP holders on leveraging AI content creation tools to monetize characters, worlds, and stories. Learn about licensing, fan engagement, and revenue strategies with Plot Party.',
    publishedAt: '2026-03-10',
    author: 'Sophia Xing',
    role: 'Founder, Plot Party',
    coverImage: 'https://storage.googleapis.com/plotparty-storage-public/blogs/blog-cover-ip-world.png',
    tags: ['Monetization', 'Landscape', 'Creators'],
    readingTime: 7,
    featured: true,
    relatedLinks: [
      { label: 'IP Holders Program', href: appUrl('/ip') },
      { label: 'Pricing for IP Holders', href: appUrl('/pricing') },
      { label: 'Contact Us', href: 'mailto:sophia@plotparty.ai' }
    ]
  }
]
