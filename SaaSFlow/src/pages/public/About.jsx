import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  Button,
  Stack,
} from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SecurityIcon from "@mui/icons-material/Security";
import GroupsIcon from "@mui/icons-material/Groups";

const About = () => {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box textAlign="center" py={6}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          About TeamTask
        </Typography>

        <Typography variant="h6" color="text.secondary" maxWidth={700} mx="auto">
          TeamTask is a modern multi-tenant SaaS platform designed to help
          teams manage projects, collaborate efficiently, and stay productive.
        </Typography>
      </Box>

      {/* Features Section */}
      <Grid container spacing={4} mb={6}>
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent sx={{ textAlign: "center" }}>
              <RocketLaunchIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Fast & Scalable
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Built with modern architecture to scale across teams and
                enterprises.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent sx={{ textAlign: "center" }}>
              <SecurityIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Secure by Design
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Role-based access, JWT authentication, and multi-tenant
                isolation ensure data security.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent sx={{ textAlign: "center" }}>
              <GroupsIcon color="primary" sx={{ fontSize: 50, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Built for Teams
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Collaborate, track progress, and manage users with ease.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Mission Section */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          Our Mission
        </Typography>

        <Typography variant="body1" color="text.secondary" maxWidth={800} mx="auto">
          Our mission is to simplify project management for modern teams by
          providing intuitive tools, scalable architecture, and secure
          collaboration environments.
        </Typography>
      </Box>

      {/* Call to Action */}
      <Box textAlign="center" pb={6}>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" size="large">
            Get Started
          </Button>
          <Button variant="outlined" size="large">
            Learn More
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default About;