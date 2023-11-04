/*import React, { useState } from 'react';
import WSPGallery from './components/WSPGallery';
import './App.css';
import image1 from './img/image-1.webp';
import image2 from './img/image-2.webp';
import image3 from './img/image-3.webp';
import image4 from './img/image-4.webp';
import image5 from './img/image-5.webp';
import image6 from './img/image-6.webp';
import image7 from './img/image-7.webp';
import image8 from './img/image-8.webp';
import image9 from './img/image-9.webp';
import image10 from './img/image-10.jpeg';
import image11 from './img/image-11.jpeg';
import image12 from './img/addImage.jpeg';

function App() {
  const [galleryImages, setGalleryImages] = useState([
    {
      img: image1,
    },
    {
      img: image2,
    },
    {
      img: image3,
    },
    {
      img: image4,
    },
    {
      img: image5,
    },
    {
      img: image6,
    },
    {
      img: image7,
    },
    {
      img: image8,
    },
    {
      img: image9,
    },
    {
      img: image10,
    },
    {
      img: image11,
    },
    {
      img: image12,
    }
  ]);

  const [selectedImages, setSelectedImages] = useState({});

  const handleImageClick = (index) => {
    setSelectedImages((prevSelectedImages) => ({
      ...prevSelectedImages,
      [index]: !prevSelectedImages[index],
    }));
  };

  const handleDeleteSelected = () => {
    const updatedGalleryImages = galleryImages.filter(
      (_, index) => !selectedImages[index]
    );

    setGalleryImages(updatedGalleryImages);
    setSelectedImages({});
  };

  const numSelectedImages = Object.values(selectedImages).filter(
    (selected) => selected
  ).length;

  const headingText =
    numSelectedImages > 0
      ? `${numSelectedImages} Files Selected`
      : 'Gallery';

  return (
    <div className="App">
      <div className="gallery-container">
        <div className="gallery-heading">
          <strong>{headingText}</strong>
          {numSelectedImages > 0 && (
            <button id="delete-button" onClick={handleDeleteSelected}>Delete files</button>
          )}
        </div>
        <WSPGallery
          galleryImages={galleryImages}
          selectedImages={selectedImages}
          onImageClick={handleImageClick}
        />
      </div>
    </div>
  );
}

export default App;
*/

import React, { useState, useEffect } from 'react';
import WSPGallery from './components/WSPGallery';
import './App.css';
import image1 from './img/image-1.webp';
import image2 from './img/image-2.webp';
import image3 from './img/image-3.webp';
import image4 from './img/image-4.webp';
import image5 from './img/image-5.webp';
import image6 from './img/image-6.webp';
import image7 from './img/image-7.webp';
import image8 from './img/image-8.webp';
import image9 from './img/image-9.webp';
import image10 from './img/image-10.jpeg';
import image11 from './img/image-11.jpeg';
import image12 from './img/addImage.jpeg';

function App() {
  const [galleryImages, setGalleryImages] = useState([
    {
      img: image1,
    },
    {
      img: image2,
    },
    {
      img: image3,
    },
    {
      img: image4,
    },
    {
      img: image5,
    },
    {
      img: image6,
    },
    {
      img: image7,
    },
    {
      img: image8,
    },
    {
      img: image9,
    },
    {
      img: image10,
    },
    {
      img: image11,
    },
    {
      img: image12,
    }
  ]);

  const [selectedImages, setSelectedImages] = useState({});
  const [reorderedGalleryImages, setReorderedGalleryImages] = useState(galleryImages);

  useEffect(() => {
    setReorderedGalleryImages(galleryImages);
  }, [galleryImages]);

  const handleImageClick = (index) => {
    setSelectedImages((prevSelectedImages) => ({
      ...prevSelectedImages,
      [index]: !prevSelectedImages[index],
    }));
  };

  const handleDeleteSelected = () => {
    const updatedGalleryImages = galleryImages.filter(
      (_, index) => !selectedImages[index]
    );

    setGalleryImages(updatedGalleryImages);
    setSelectedImages({});
  };

  const handleReorder = (result) => {
    if (!result.destination) {
      return;
    }

    const updatedImages = Array.from(reorderedGalleryImages);
    const [reorderedItem] = updatedImages.splice(result.source.index, 1);
    updatedImages.splice(result.destination.index, 0, reorderedItem);

    setReorderedGalleryImages(updatedImages);
  };

  const numSelectedImages = Object.values(selectedImages).filter(
    (selected) => selected
  ).length;

  const headingText =
    numSelectedImages > 0
      ? `${numSelectedImages} Files Selected`
      : 'Gallery';

  return (
    <div className="App">
      <div className="gallery-container">
        <div className="gallery-heading">
          <strong>{headingText}</strong>
          {numSelectedImages > 0 && (
            <button id="delete-button" onClick={handleDeleteSelected}>Delete files</button>
          )}
        </div>
        <WSPGallery
          galleryImages={reorderedGalleryImages}
          selectedImages={selectedImages}
          onImageClick={handleImageClick}
          onReorder={handleReorder}
        />
      </div>
    </div>
  );
}

export default App;
