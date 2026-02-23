import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        px: 3,
      }}
    >
      <ErrorOutlineIcon
        sx={{ fontSize: 80, color: "primary.main", mb: 2 }}
      />

      <Typography
        variant="h1"
        sx={{ fontWeight: 700, fontSize: { xs: "80px", md: "120px" } }}
      >
        404
      </Typography>

      <Typography variant="h5" sx={{ mb: 1 }}>
        Page Not Found
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: "text.secondary", maxWidth: 400, mb: 4 }}
      >
        The page you are looking for doesn’t exist or may have been moved.
        Please check the URL or navigate back.
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>

        <Button
          variant="contained"
          onClick={() => navigate("/dashboard")}
        >
          Go to Dashboard
        </Button>
      </Stack>
    </Box>
  );
};

export default NotFound;