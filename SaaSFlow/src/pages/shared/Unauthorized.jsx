import {
  Box,
  Typography,
  Button,
  Stack,
  Alert,
  Paper,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 5,
          maxWidth: 500,
          textAlign: "center",
          borderRadius: 3,
        }}
      >
        <LockOutlinedIcon
          sx={{ fontSize: 70, color: "error.main", mb: 2 }}
        />

        <Typography
          variant="h2"
          sx={{ fontWeight: 700, mb: 1 }}
        >
          403
        </Typography>

        <Typography variant="h5" sx={{ mb: 2 }}>
          Access Denied
        </Typography>

        <Alert severity="error" sx={{ mb: 3 }}>
          You don’t have permission to access this page.
        </Alert>

        <Typography
          variant="body1"
          sx={{ color: "text.secondary", mb: 4 }}
        >
          This action requires additional privileges. Please contact
          your administrator if you believe this is a mistake.
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="outlined"
            onClick={() => navigate(-1)}
          >
            Go Back
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/dashboard")}
          >
            Go to Dashboard
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Unauthorized;