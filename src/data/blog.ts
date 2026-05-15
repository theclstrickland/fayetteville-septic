export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-often-should-i-pump-my-septic-tank',
    title: 'How Often Should I Pump My Septic Tank?',
    description: 'Septic tank pumping frequency depends on tank size, household size, and usage. Here is what Fayetteville homeowners need to know about pump schedules and costs.',
    date: '2026-05-15',
    readTime: '5 min read',
  },
  {
    slug: 'what-size-septic-tank-do-i-need',
    title: 'What Size Septic Tank Do I Need for My Home?',
    description: 'North Carolina sizes septic tanks by bedroom count, not square footage. Learn the NC requirements and how to pick the right tank for your Fayetteville area home.',
    date: '2026-05-15',
    readTime: '5 min read',
  },
  {
    slug: 'how-much-does-a-septic-system-cost-in-fayetteville',
    title: 'How Much Does a Septic System Cost in Fayetteville?',
    description: 'Septic system costs in Fayetteville range from $3,500 to $15,000 depending on system type and soil conditions. A breakdown of what drives the price.',
    date: '2026-05-15',
    readTime: '6 min read',
  },
];
