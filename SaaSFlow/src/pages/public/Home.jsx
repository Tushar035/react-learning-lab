import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SecurityIcon from "@mui/icons-material/Security";
import GroupsIcon from "@mui/icons-material/Groups";

const Home = () => {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box textAlign="center" py={8}>
        <Typography
          variant="h2"
          fontWeight={700}
          gutterBottom
        >
          Manage Projects Smarter 🚀
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          maxWidth={700}
          mx="auto"
          mb={4}
        >
          TeamTask helps teams collaborate, manage projects, and track
          progress with a secure multi-tenant SaaS platform.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained" size="large">
            Get Started
          </Button>
          <Button variant="outlined" size="large">
            Learn More
          </Button>
        </Stack>
      </Box>

      {/* Features Section */}
      <Grid container spacing={4} py={6}>
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent sx={{ textAlign: "center" }}>
              <RocketLaunchIcon
                color="primary"
                sx={{ fontSize: 50, mb: 2 }}
              />
              <Typography variant="h6" gutterBottom>
                Fast Performance
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Optimized architecture ensures high performance and scalability.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent sx={{ textAlign: "center" }}>
              <SecurityIcon
                color="primary"
                sx={{ fontSize: 50, mb: 2 }}
              />
              <Typography variant="h6" gutterBottom>
                Secure by Design
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Role-based access and JWT authentication keep your data safe.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent sx={{ textAlign: "center" }}>
              <GroupsIcon
                color="primary"
                sx={{ fontSize: 50, mb: 2 }}
              />
              <Typography variant="h6" gutterBottom>
                Team Collaboration
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Work together efficiently with shared dashboards and tools.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;