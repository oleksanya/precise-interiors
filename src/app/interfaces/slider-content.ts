export interface Slide {
  id: number;
  image: string;
  alt: string;
}

export interface SliderContent {
  title: string;
  description: string;
  slides: Slide[];
}
