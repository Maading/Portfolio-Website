import React, { useState } from 'react';
import { NavBar_photo } from "./photo_page//NavBar_photo";
import { Photo_banner } from './photo_page/Photo_banner';
import { Photo_gallery } from './photo_page/Photo_gallery';
import { Footer_photo } from "./photo_page/Footer_photo";

export const Photo_page = () => {
  const [activeTag, setActiveTag] = useState(null);

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };

  return (
    <div className='body-photo'>
      <NavBar_photo onTagClick={handleTagClick} />
      <Photo_banner />
      <Photo_gallery activeTag={activeTag} />
      <Footer_photo />
    </div>
  );
};