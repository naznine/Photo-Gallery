import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './wsp-gallery.css';

const WSPGallery = ({ galleryImages, selectedImages, onImageClick, onReorder }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  return (
    <DragDropContext onDragEnd={onReorder}>
      <Droppable droppableId="gallery">
        {(provided) => (
          <div className='galleryWrap' ref={provided.innerRef} {...provided.droppableProps}>
            {galleryImages.map((slide, index) => {
              const isSelected = selectedImages[index];

              const handleImageClick = () => {
                onImageClick(index);
              };

              return (
                <Draggable key={index} draggableId={`image-${index}`} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`single ${isSelected ? 'selected' : ''}`}
                      onClick={handleImageClick}
                      style={{
                        ...provided.draggableProps.style,
                        boxShadow: snapshot.isDragging ? '0 0 8px rgba(0, 0, 0, 0.2)' : 'none',
                      }}
                    >
                      {isSelected && (
                        <div className="overlay">
                          <span>✓</span>
                        </div>
                      )}
                      <img src={slide.img} alt='' />
                    </div>
                  )}
                </Draggable>
              );
            })}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default WSPGallery;


