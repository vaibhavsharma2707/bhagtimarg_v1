export interface Deity {
  id: string;
  name: string;
  name_hi: string;
  description: string;
  description_hi: string;
  image: string;
  content: {
    chalisaId: string;
    aartiId: string;
    mantraIds: string[];
    storyIds: string[];
  };
  tags: string[];
}

export interface Content {
  id: string;
  title: string;
  title_hi: string;
  type: 'Chalisa' | 'Aarti' | 'Story' | 'Mantra';
  content: string[];
  content_hi?: string[];
  deityId?: string; // Optional field to link content back to a deity
  audioUrl?: string;
}

export interface ZodiacSign {
    id: string;
    name: { en: string; hi: string };
    dateRange: string;
    imageUrl: string;
}