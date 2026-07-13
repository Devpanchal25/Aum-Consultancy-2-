import { useState, SyntheticEvent, ImgHTMLAttributes } from 'react';

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  className?: string;
  category?: 'accounting' | 'tax' | 'audit' | 'other' | 'team' | 'general';
  loading?: 'lazy' | 'eager';
  referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
}

const FALLBACK_IMAGES = {
  accounting: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800&h=500&fm=webp',
  tax: 'https://images.unsplash.com/photo-1554224155-6b99479a49d2?auto=format&fit=crop&q=80&w=800&h=500&fm=webp',
  audit: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800&h=500&fm=webp',
  other: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500&fm=webp',
  team: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400&fm=webp',
  general: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800&h=500&fm=webp'
};

export default function SafeImage({ 
  src, 
  alt, 
  className, 
  category = 'general', 
  loading = 'lazy',
  referrerPolicy = 'no-referrer',
  ...props 
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState<string | undefined>(() => {
    if (!src) return FALLBACK_IMAGES[category];
    
    // Auto-optimize Unsplash URLs for WebP
    if (src.includes('images.unsplash.com') && !src.includes('fm=webp') && !src.includes('format=webp')) {
      return src.includes('?') ? `${src}&fm=webp` : `${src}?fm=webp`;
    }
    return src;
  });

  const [hasError, setHasError] = useState(false);

  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    if (!hasError) {
      setHasError(true);
      // Fallback to category-specific professional image
      setImgSrc(FALLBACK_IMAGES[category]);
    } else {
      // If the category fallback also fails, use the ultimate general fallback
      if (imgSrc !== FALLBACK_IMAGES.general) {
        setImgSrc(FALLBACK_IMAGES.general);
      }
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt || "Aum Consultancy Finance"}
      className={className}
      loading={loading}
      referrerPolicy={referrerPolicy}
      onError={handleError}
      {...props}
    />
  );
}
