export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  category: 'whatsapp' | 'revenue' | 'calendar' | 'cintra';
  imageUrl: string;
  aspectRatio?: string;
  caption: string;
  highlightMetric?: string;
  verifiedTag?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
