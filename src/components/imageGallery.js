import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useEffect, useState } from "react";

const ImageGallery = ({
  images = [],
  quilted = false,
  cols = 4,
  rowHeight = 100,
  path = undefined,
  pathLimit = "5",
  extension = "png"
}) => {
  const [renderedImages, setRenderedImages] = useState(images);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const handleImageClick = (imagePath) => {
    setSelectedImage(imagePath);
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setSelectedImage(null);
    setIsOverlayOpen(false);
  };
  useEffect(() => {
    if (path) {
      const newRenderedImages = [];
      for (let i = 0; i < pathLimit; i++) {
        newRenderedImages.push(`${path}/${i}.${extension}`);
      }
      setRenderedImages(newRenderedImages);
    }
  }, [path, pathLimit, extension]);

  return (
    <>
    <ImageList
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor: "primary.background",
      }}
      variant={quilted ? "quilted" : ""}
      cols={cols}
      rowHeight={rowHeight}
    >
      {renderedImages.map((imagePath, i) => (
        <ImageListItem key={imagePath + i} onClick={() => handleImageClick(imagePath)}>
          <img src={imagePath} alt="" loading={"lazy"} />
        </ImageListItem>
      ))}
    </ImageList>
    
    {isOverlayOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
          onClick={handleCloseOverlay}
        >
          <img src={selectedImage} alt="" style={{ maxWidth: "80%", maxHeight: "80%" }} />
        </div>
      )}
    </>
  );
};

export default ImageGallery;
