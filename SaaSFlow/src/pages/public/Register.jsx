import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
  InputAdornment,
  Alert,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      setLoading(true);
      setError("");

      // TODO: integrate with backend
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Registration successful!");
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Card sx={{ width: 450 }} elevation={4}>
        <CardContent>
          <Typography variant="h5" fontWeight={600} mb={3}>
            Create Your TeamTask Account
          </Typography>

          <Stack spacing={2}>
            {error && <Alert severity="error">{error}</Alert>}

            <Stack direction="row" spacing={2}>
              <TextField label="First Name" fullWidth />
              <TextField label="Last Name" fullWidth />
            </Stack>

            <TextField label="Email" fullWidth type="email" />

            <TextField
              label="Password"
              fullWidth
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                    >
                      {showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Confirm Password"
              fullWidth
              type={showConfirm ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowConfirm(!showConfirm)
                      }
                    >
                      {showConfirm ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleRegister}
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Register"}
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;