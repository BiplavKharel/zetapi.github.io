import React, { useState, useEffect } from 'react';

interface CommitteeProps {
    images: string[];
}

const Committee: React.FC<CommitteeProps> = ({images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [images.length]);

   
         const styles = {
        container: {
            padding: '20px',
            maxWidth: '1200px',
            margin: '0 auto',
      
        },
        content: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
        },
        descriptionSection: {
            flex: '1',
            padding: '20px',
        },
        slideshowSection: {
            flex: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
        },
        imageContainer: {
            width: '400px',
            height: '300px',
            overflow: 'hidden',
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        navButton: {
            padding: '10px 20px',
            fontSize: '20px',
            cursor: 'pointer',
            background: '#f0f0f0',
            border: 'none',
            borderRadius: '5px',
        },


        navigationDots: {
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '10px',
            
        },
        dot: {
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
        activeDot: {
            backgroundColor: '#007bff',
        },
        inactiveDot: {
            backgroundColor: '#ccc',
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.slideshowSection}>
            <div style={styles.imageContainer}>
                <img 
                src={images[currentImageIndex]} 
                alt={`Image ${currentImageIndex + 1}`}
            
                />
            </div>
            </div>

            <div style={styles.navigationDots}>
            {images.map((_, index) => (
                <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                style={{
                    ...styles.dot,
                    ...(index === currentImageIndex ? styles.activeDot : styles.inactiveDot),
                }}
                />
            ))}
            </div>
        </div>
    );
};

export default Committee;
