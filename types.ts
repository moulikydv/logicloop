
export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  platform: 'google' | 'facebook' | 'yelp';
  timestamp: string;
}

export interface PlatformConfig {
  name: string;
  icon: string;
  color: string;
}
