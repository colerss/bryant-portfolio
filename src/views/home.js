import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import TitleBox from "../components/titleBox";
export default function HomePage() {
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={0} md={2}></Grid>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              margin: "1rem",
              backgroundColor: "primary.light",
              padding: "1rem",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
               <TitleBox title={"My Portfolio"}></TitleBox>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={0} md={2}></Grid>
      </Grid>
    </Container>
  );
}
