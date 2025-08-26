import { useEffect } from 'react';

interface ImagePreloaderProps {
    images: string[];
}

const ImagePreloader: React.FC<ImagePreloaderProps> = ({ images }) => {
    useEffect(() => {
        // Only preload on faster connections to avoid wasting mobile data
        const connection = (navigator as Navigator & { connection?: { effectiveType?: string }; mozConnection?: { effectiveType?: string }; webkitConnection?: { effectiveType?: string } }).connection ||
            (navigator as Navigator & { mozConnection?: { effectiveType?: string } }).mozConnection ||
            (navigator as Navigator & { webkitConnection?: { effectiveType?: string } }).webkitConnection;
        const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');

        if (isSlowConnection) {
            return; // Skip preloading on slow connections
        }

        const preloadImages = () => {
            images.forEach((src) => {
                const img = new Image();
                img.loading = 'eager';
                img.src = src;
            });
        };

        // Preload after a short delay to prioritize initial page load
        const timeoutId = setTimeout(preloadImages, 1000);

        return () => clearTimeout(timeoutId);
    }, [images]);

    return null; // This component doesn't render anything
};

export default ImagePreloader;