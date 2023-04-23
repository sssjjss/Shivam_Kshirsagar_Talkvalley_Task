import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
const SingleAd = ({
  imageUrl,
  companyId,
  primaryText,
  headline,
  description,
  CTA,
  company,
}) => {
  return (
    <Paper elevation={5} sx={{ margin: 2, padding: 1 }}>
      <Box
        sx={{
          margin: 2,
        }}
      >
        <Grid
          container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <h4>{company?.name}</h4>
          <a href={company?.url}>{company?.url}</a>
        </Grid>
        <img src={imageUrl} width="100%" height="100%" />
        <h4>{headline}</h4>
        <Typography>{primaryText}</Typography>
        <p>Description: {description}</p>
        <Button fullWidth variant="outlined">
          {CTA}
        </Button>
      </Box>
    </Paper>
  );
};

export default SingleAd;
