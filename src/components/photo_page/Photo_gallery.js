import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as photo_img from './index_photo';
import 'animate.css';

const photos = [
  { id: 1, image: photo_img.img1, description: 'Description 1', tags: ['street'] },
  { id: 2, image: photo_img.img2, description: 'Description 2', tags: ['street'] },
  { id: 3, image: photo_img.img3, description: 'Description 3', tags: ['street'] },
  { id: 4, image: photo_img.img4, description: 'Description 3', tags: ['street', 'travel'] },
  { id: 5, image: photo_img.img5, description: 'Description 3', tags: ['street'] },
  { id: 6, image: photo_img.img6, description: 'Description 3', tags: ['street'] },
  { id: 7, image: photo_img.img7, description: 'Description 3', tags: ['black&white'] },
  { id: 8, image: photo_img.img8, description: 'Description 3', tags: ['street'] },
  { id: 9, image: photo_img.img9, description: 'Description 3', tags: ['street'] },
  { id: 10, image: photo_img.img10, description: 'Description 3', tags: ['street'] },
  { id: 11, image: photo_img.img11, description: 'Description 3', tags: ['street'] },
  { id: 12, image: photo_img.img12, description: 'Description 3', tags: ['street'] },
  { id: 13, image: photo_img.img13, description: 'Description 3', tags: ['travel'] },
  { id: 14, image: photo_img.img14, description: 'Description 3', tags: ['street'] },
  { id: 15, image: photo_img.img15, description: 'Description 3', tags: ['street'] },
  { id: 16, image: photo_img.img16, description: 'Description 3', tags: ['street'] },
  { id: 17, image: photo_img.img17, description: 'Description 3', tags: ['street', 'travel'] },
  { id: 18, image: photo_img.img18, description: 'Description 3', tags: ['black&white'] },
  { id: 19, image: photo_img.img19, description: 'Description 3', tags: ['street'] },
  { id: 20, image: photo_img.img20, description: 'Description 3', tags: ['travel'] },
  { id: 21, image: photo_img.img21, description: 'Description 3', tags: ['travel'] },
  { id: 22, image: photo_img.img22, description: 'Description 3', tags: ['travel'] },
  { id: 23, image: photo_img.img23, description: 'Description 3', tags: ['travel'] },
  { id: 24, image: photo_img.img24, description: 'Description 3', tags: ['travel'] },
  { id: 25, image: photo_img.img25, description: 'Description 3', tags: ['travel'] },
  { id: 26, image: photo_img.img26, description: 'Description 3', tags: ['travel'] },
  { id: 27, image: photo_img.img27, description: 'Description 3', tags: ['black&white'] },
  { id: 28, image: photo_img.img28, description: 'Description 3', tags: ['street'] },
  { id: 29, image: photo_img.img29, description: 'Description 3', tags: ['street'] },
  { id: 30, image: photo_img.img30, description: 'Description 3', tags: ['black&white'] },
  { id: 31, image: photo_img.img31, description: 'Description 3', tags: ['street'] },



  // Add more photo objects as needed
];

export const Photo_gallery = ({ activeTag }) => {
  const [enlargedPhoto, setEnlargedPhoto] = useState(null);
  const [key, setKey] = useState(0);

  const handlePhotoClick = (photo) => {
    setEnlargedPhoto(photo);
  };

  const handleCloseEnlargedPhoto = () => {
    setEnlargedPhoto(null);
  };

  const handleKeyDown = (event) => {
    if (enlargedPhoto) {
      const filteredPhotos = activeTag ? photos.filter(photo => photo.tags.includes(activeTag)) : photos;

      if (event.key === 'ArrowLeft') {
        // Move to the previous photo
        const currentIndex = filteredPhotos.findIndex((photo) => photo.id === enlargedPhoto.id);
        const newIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
        setEnlargedPhoto(filteredPhotos[newIndex]);
      } else if (event.key === 'ArrowRight') {
        // Move to the next photo
        const currentIndex = filteredPhotos.findIndex((photo) => photo.id === enlargedPhoto.id);
        const newIndex = (currentIndex + 1) % filteredPhotos.length;
        setEnlargedPhoto(filteredPhotos[newIndex]);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [enlargedPhoto]);

  useEffect(() => {
    // Increment the key to remount the component and trigger fade-in effect
    setKey((prevKey) => prevKey + 1);
  }, [activeTag]); // Trigger when activeTag changes

  const filteredPhotos = activeTag ? photos.filter(photo => photo.tags.includes(activeTag)) : photos;
  const reversedPhotos = [...filteredPhotos].reverse();

  return (
    <div id="photo-gallery">
      <Container className="photo-container">
        <Row key={key}>
          {reversedPhotos.map((photo) => (
            <Col key={photo.id} xs={12} md={4} lg={3}>
              <div className={`photo-gallery-photo animate__animated animate__fadeIn`} onClick={() => handlePhotoClick(photo)}>
                <img src={photo.image} alt={photo.description} />
              </div>
            </Col>
          ))}
        </Row>

        {enlargedPhoto && (
          <div className={`enlarged-photo ${enlargedPhoto ? 'active animate__animated animate__fadeIn' : 'animate__fadeOut'}`} onClick={handleCloseEnlargedPhoto}>
            <img src={enlargedPhoto.image} alt={enlargedPhoto.description} />
          </div>
        )}
      </Container>
    </div>
  );
};
