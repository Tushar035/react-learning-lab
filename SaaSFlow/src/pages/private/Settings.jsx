import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Switch,
  FormControlLabel,
  Button,
  Divider,
  TextField,
  Stack,
} from "@mui/material";

const Settings = () => {
  return (
    <Box>
      {/* Page Header */}
      <Typography variant="h4" fontWeight={600} mb={3}>
        Settings
      </Typography>

      <Grid container spacing={4}>
        {/* Notifications Settings */}
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" mb={2}>
                Notifications
              </Typography>

              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Email Notifications"
              />

              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Push Notifications"
              />

              <FormControlLabel
                control={<Switch />}
                label="Weekly Summary Reports"
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Appearance Settings */}
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" mb={2}>
                Appearance
              </Typography>

              <FormControlLabel
                control={<Switch />}
                label="Dark Mode"
              />

              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Compact Layout"
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Workspace Settings */}
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" mb={2}>
                Workspace Settings
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Workspace Name"
                    fullWidth
                    defaultValue="TeamTask Workspace"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    label="Default Role"
                    fullWidth
                    defaultValue="User"
                  />
                </Grid>
              </Grid>

              <Divider sx={{ my: 3 }} />

              <Stack direction="row" spacing={2}>
                <Button variant="contained">
                  Save Changes
                </Button>
                <Button variant="outlined" color="secondary">
                  Reset to Default
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;