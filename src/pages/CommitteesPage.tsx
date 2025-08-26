import React from 'react';
import CommitteeSection from '../components/CommitteeSection/CommitteeSection';

const CommitteesPage: React.FC = () => {
    // return (
    //     <div style={{
    //         display: 'flex',
    //         gap: '20px',
    //         padding: '20px'
    //     }}>
    //         <div style={{
    //             flex: '0 0 300px' // Fixed width for left column
    //         }}>
    //             <CommitteeSection />
    //         </div>
    //         <div style={{
    //             flex: '1' // Takes remaining space
    //         }}>
    //             <Committee 
    //                 images={['/images/headshots/biplav.jpg','/images/headshots/eshan.jpg']} 
    //             />
    //             <Committee 
    //                 images={['/images/sports1.jpg', '/images/sports2.jpg']}
    //             />
    //             <Committee 
    //                 images={['/images/cultural1.jpg', '/images/cultural2.jpg']}
    //             />
    //             <Committee 
    //                 images={['/images/media1.jpg', '/images/media2.jpg']}
    //             />
    //         </div>
    //     </div>
    // );

    return <CommitteeSection/>
};

export default CommitteesPage;
