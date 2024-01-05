import React from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import folder from "../../../img/folder.png";

interface FileComponentProps {
  // onCopyLink: () => void;
}

const File: React.FC<FileComponentProps> = (props) => {
  // Using Material-UI hooks to check for mobile view
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      sx={{
        borderTop: "1px solid #D3D3D3",
        fontSize: "18px",
      }}>
      <Box display="flex" alignItems="center">
        {isMobile ? (
          // Mobile view: Only show folder name
          <>
            <img
              src={folder}
              alt="Folder"
              style={{ height: 36, marginRight: 8 }}
            />
            <Button
              variant="text"
              sx={{ textTransform: "none", color: "black", fontSize: "18px" }}>
              Build your own no-code apps
            </Button>
          </>
        ) : (
          // Desktop view: Show full content
          <>
            <img
              src={folder}
              alt="Folder"
              style={{ height: 36, marginRight: 8 }}
            />
            <Button
              variant="text"
              sx={{ textTransform: "none", color: "black", fontSize: "18px" }}>
              Build your own no-code apps
            </Button>
          </>
        )}
      </Box>
      {isMobile ? (
        // Mobile view: Only show "Copy Link" button
        <Box display="flex" alignItems="center">
          <Button
            variant="text"
            onClick={() => {
              /* Implement copy link logic */
            }}
            sx={{
              fontSize: "18px",
              textTransform: "none",
              backgroundColor: "#f5f5f5",
              color: "black",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
              borderRadius: "4px",
              mr: 4,
            }}>
            Copy Link
          </Button>
        </Box>
      ) : (
        // Desktop view: Show full content
        <Box display="flex" alignItems="center">
          <Box sx={{ textTransform: "none", mr: 4 }}>
            <StarBorderIcon />
          </Box>
          <Typography
            variant="caption"
            color="textSecondary"
            sx={{ mr: 4, fontSize: "18px" }}>
            26/11/2019 8:02 pm
          </Typography>
          <Button
            variant="text"
            onClick={() => {
              /* Implement copy link logic */
            }}
            sx={{
              fontSize: "18px",
              textTransform: "none",
              backgroundColor: "#f5f5f5",
              color: "black",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
              borderRadius: "4px",
              mr: 4,
            }}>
            Copy Link
          </Button>
          <Typography
            variant="caption"
            color="textSecondary"
            sx={{ mr: 2, fontSize: "18px" }}>
            Only you
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default File;
