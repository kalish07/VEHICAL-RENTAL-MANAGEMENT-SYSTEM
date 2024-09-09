import React from 'react';
import '../styles/HomePage.css';
import { Container, Typography, Button, Grid, TextField, Box, Card, CardContent, CardMedia } from '@mui/material';
import CustomAppBar from './CustomAppBar';
import { useNavigate } from 'react-router-dom';

const cardData = [
  {
    image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ultimate Convenience",
    description: "Pick up your car from any location and return it at your convenience with flexible booking options.",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1664298066038-1b8262ab447a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Safety First",
    description: "Our cars undergo regular maintenance checks to ensure your safety on the road.",
  },
  {
    image: "https://cdn.skoda-storyboard.com/2023/10/87_Skoda_Superb_history_a919fa66.png",
    title: "Wide Range of Choices",
    description: "From compact hatchbacks to spacious SUVs, we have a car to match every occasion.",
  },
];

const stepData = [
  {
    image: "https://cdn.dribbble.com/users/13755062/screenshots/20222679/media/e19545d796ea364d8caf8e44b51eff92.jpg",
    title: "Search & Book",
    description: "Use our easy-to-use search tool to find the perfect car and book it online.",
  },
  {
    image: "https://blog.autoslash.com/wp-content/uploads/2020/10/car-rental-pick-you-up.jpg",
    title: "Pick Up Your Car",
    description: "Visit the pickup location to collect your car and start your journey.",
  },
  {
    image: "https://images.pexels.com/photos/7144207/pexels-photo-7144207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Return the Car",
    description: "Drop off the car at the designated location and complete your rental.",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <CustomAppBar />
      <Container className="homepage" disableGutters maxWidth={false} sx={{ px: 0 }}>
        {/* Hero Section */}
        <Box className="hero">
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', zIndex: 2 }}>
            Explore the Freedom of Self-Drive
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, fontSize: '1.5rem', color: '#e0e0e0', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)', zIndex: 2 }}>
            Choose from a range of well-maintained cars and enjoy unlimited kilometers.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/booking')}
            sx={{ padding: '1rem 2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', zIndex: 2 }}
          >
            Start Your Journey
          </Button>
        </Box>

        {/* Booking Section */}
        <Box className="booking-section">
          <Typography variant="h4" gutterBottom>Book Your Drive in Minutes</Typography>
          <Typography variant="body1" sx={{ mb: 4, color: '#ccc' }}>
            Simply choose your pickup location, select your dates, and drive away!
          </Typography>
          <Box className="booking-form-container">
            {['Pickup Location', 'Drop-off Location', 'Date and Time'].map(label => (
              <TextField key={label} label={label} variant="outlined" />
            ))}
            <Button variant="contained" color="primary" size="large">Get Car</Button>
          </Box>
        </Box>

        {/* Why Choose Us Section */}
        <Box className="why-choose-us">
          <Typography variant="h4" align="center" gutterBottom>Why Choose Us?</Typography>
          <Typography variant="body1" align="center" sx={{ mb: 6 }}>
            Our self-drive car rentals offer the perfect blend of convenience, flexibility, and safety.
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {cardData.map((card, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card className="card" sx={{ height: '100%' }}>
                  <CardMedia component="img" height="140" image={card.image} alt={card.title} />
                  <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>{card.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{card.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* How It Works Section */}
        <Box className="how-it-works">
          <Typography variant="h4" gutterBottom>How It Works</Typography>
          <Typography variant="body1" sx={{ mb: 6 }}>
            Follow these simple steps to get started with your self-drive car rental.
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {stepData.map((step, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card className="card" sx={{ height: '100%' }}>
                  <CardMedia component="img" height="200" image={step.image} alt={step.title} />
                  <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>{step.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{step.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;