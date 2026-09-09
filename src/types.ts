export type GalleryCategory = 'all' | 'fromages' | 'plateaux' | 'boutique' | 'terroir';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  imageUrl: string;
  description: string;
  tag?: string;
}

export interface ServiceOffer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  recommendedFor: string;
  estimatedPrice: string;
  features: string[];
  imageUrl: string;
  badge?: string;
}

export interface OpeningHourDay {
  day: string;
  morning: string;
  afternoon: string;
  isClosed?: boolean;
}

export interface OrderFormData {
  serviceType: string;
  guestCount: number;
  date: string;
  timeSlot: string;
  preferences: string[];
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  specialRequests: string;
}
