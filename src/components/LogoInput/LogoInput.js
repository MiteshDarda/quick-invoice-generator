import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import styles from "./logoinput.module.css";
import CloseIcon from "@mui/icons-material/Close";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { Button } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

function LogoInput() {
  const [images, setImages] = useState([]);
  const [hovered, setHover] = useState(false);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  const onHover = () => {
    setHover(true);
  };

  const onHoverOut = () => {
    setHover(false);
  };

  return (
    <>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="upload__image-wrapper">
            {images.length === 0 ? (
              <button
                style={isDragging ? { color: "red" } : null}
                onClick={onImageUpload}
                {...dragProps}
                className={styles.imageUpload}
              >
                <AddPhotoAlternateIcon />
                <br />
                LOGO
              </button>
            ) : (
              <div className={styles.parent}>
                {imageList.map((image, index) => (
                  <div key={index}>
                    <img
                      className={hovered ? styles.hover : ""}
                      src={image.data_url}
                      alt=""
                      width="75"
                      height="75"
                      onMouseEnter={onHover}
                      onMouseLeave={onHoverOut}
                    />
                    {hovered ? (
                      <div className={styles.children}>
                        <Button
                          onMouseEnter={onHover}
                          className={styles.minWidth}
                          sx={{
                            height: 20,
                            maxWidth: 10,
                            m: 1,
                            color: "primary.main",
                            transition: "all 0.5s",
                            ":hover": {
                              background: "black",
                              color: "white",
                            },
                          }}
                          onClick={() => {
                            onHoverOut();
                            return onImageUpdate(index);
                          }}
                        >
                          <UpgradeIcon sx={{ width: 20 }} />
                        </Button>
                        <Button
                          onMouseEnter={onHover}
                          className={styles.minWidth}
                          sx={{
                            height: 20,
                            maxWidth: 10,
                            m: 1,
                            color: "primary.main",
                            transition: "all 0.5s",
                            ":hover": {
                              background: "black",
                              color: "white",
                            },
                          }}
                          onClick={() => {
                            onHoverOut();
                            return onImageRemove(index);
                          }}
                        >
                          <CloseIcon sx={{ height: 10 }} />
                        </Button>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </ImageUploading>
    </>
  );
}

export default LogoInput;
