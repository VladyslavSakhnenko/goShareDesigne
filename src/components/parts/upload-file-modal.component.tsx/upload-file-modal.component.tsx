import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import folder from "../../../img/folder.png";
import FileUpload from "../file-uploads/file-upload.component";
interface CreateFolderModalProps {
  open: boolean;
  onClose: () => void;
}

const UploadFilesModal: React.FC<CreateFolderModalProps> = ({
  open,
  onClose,
}) => {
  const [folderName, setFolderName] = useState("");
  const [accessType, setAccessType] = useState("onlyYou");

  const handleCreate = () => {
    // Implement folder creation logic
    console.log("Creating folder:", folderName, "with access:", accessType);
    onClose();
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Style for the modal, responsive to screen size
  const style = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "100%" : 700, // Full width on mobile devices
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    overflowY: "auto", // Optional, for better UX in case of overflow
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="create-folder-modal-title"
      aria-describedby="create-folder-modal-description">
      <Box sx={style}>
        <Box display="flex" alignItems="center">
          <img
            src={folder}
            alt="Folder"
            style={{ height: 36, marginRight: 8 }}
          />
          <Typography
            id="create-folder-modal-title"
            variant="h6"
            component="h2">
            Upload file
          </Typography>
        </Box>
        <Box sx={{ mt: 2, mb: 4 }}>
          <Divider />
        </Box>
        <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
          Select file
        </Typography>
        <FileUpload />
        <Typography sx={{ fontSize: "16px", fontWeight: "bold", mt: 4, mb: 2 }}>
          Who can access
        </Typography>
        <RadioGroup
          aria-label="access"
          name="accessType"
          value={accessType}
          onChange={(e) => setAccessType(e.target.value)}
          sx={{
            "& .MuiFormControlLabel-root": {
              marginBottom: "10px",
            },
            "& .MuiSvgIcon-root": {
              fontSize: "1.5rem",
            },
          }}>
          <FormControlLabel
            value="onlyYou"
            control={<Radio />}
            label={
              <Box>
                <Typography variant="subtitle1">Only you</Typography>
                <Typography variant="body2">
                  Only you can access this folder
                </Typography>
              </Box>
            }
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              marginBottom: "8px",
              padding: "12px",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "#e8e8e8",
              },
              "& .MuiRadio-root": {
                color: "inherit",
              },
              ml: "0.5px",
              mr: 0,
            }}
          />
          <FormControlLabel
            value="forSharing"
            control={<Radio />}
            label={
              <Box>
                <Typography variant="subtitle1">For sharing</Typography>
                <Typography variant="body2">
                  Anyone with the link has access to the files
                </Typography>
              </Box>
            }
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              marginBottom: "8px",
              padding: "12px",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "#e8e8e8",
              },
              "& .MuiRadio-root": {
                color: "inherit",
              },
              ml: "0.5px",
              mr: 0,
            }}
          />
        </RadioGroup>
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleCreate}
            color="primary"
            variant="contained"
            style={{ marginLeft: "8px" }}>
            Upload
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default UploadFilesModal;
