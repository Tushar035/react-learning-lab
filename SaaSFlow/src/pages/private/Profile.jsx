import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  TextField,
  Stack,
  Chip,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const Profile = () => {
  return (
    <Box>
      {/* Page Header */}
      <Typography variant="h4" fontWeight={600} mb={3}>
        My Profile
      </Typography>

      <Grid container spacing={4}>
        {/* Left Side - Profile Card */}
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent sx={{ textAlign: "center" }}>
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  margin: "0 auto",
                  mb: 2,
                  bgcolor: "primary.main",
                  fontSize: 32,
                }}
              >
                TP
              </Avatar>

              <Typography variant="h6">Tushar Patil</Typography>

              <Typography variant="body2" color="text.secondary" mb={1}>
                tushar@email.com
              </Typography>

              <Chip
                label="Admin"
                color="primary"
                size="small"
                sx={{ mb: 2 }}
              />

              <Button
                variant="outlined"
                startIcon={<EditIcon />}
                fullWidth
              >
                Edit Profile
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Side - Account Details */}
        <Grid item xs={12} md={8}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" mb={2}>
                Account Information
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="First Name"
                    fullWidth
                    defaultValue="Tushar"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    label="Last Name"
                    fullWidth
                    defaultValue="Patil"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    fullWidth
                    defaultValue="tushar@email.com"
                  />
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              <Stack direction="row" spacing={2}>
                <Button variant="contained">Save Changes</Button>
                <Button variant="outlined" color="secondary">
                  Change Password
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;