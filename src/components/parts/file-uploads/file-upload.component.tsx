import React, { useState, useCallback } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const FileUpload = () => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === "dragenter" || event.type === "dragover") {
      setDragActive(true);
    } else if (event.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);
    const files = event.dataTransfer.files;
    console.log(files);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const files = event.target.files;
    console.log(files);
  };

  const onButtonClick = () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    fileInput.click();
  };

  return (
    <Box
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
      sx={{
        padding: "16px",
        border: "2px dashed grey",
        borderRadius: "10px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "150px",
        cursor: "pointer",
        backgroundColor: dragActive ? "action.hover" : "",
      }}>
      <input
        id="fileInput"
        type="file"
        multiple
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          sx={{ mr: 4 }}>
          <CloudUploadIcon style={{ fontSize: "48px" }} />
        </IconButton>
        <Box>
          <Typography>Select a file or drag and drop here</Typography>
          <Typography variant="caption">
            JPG, PNG or PDF, file size no more than 10MB
          </Typography>
        </Box>
      </Box>
      <Button variant="outlined" onClick={onButtonClick}>
        SELECT FILE
      </Button>
    </Box>
  );
};

export default FileUpload;
