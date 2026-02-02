import React from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  MenuItem
} from "@mui/material";

const relations = ["S/o", "D/o", "W/o", "H/o", "F/o", "M/o", "C/o"];

export default function Register() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh"
      }}
    >
      <Grid
        container
        sx={{
          width: "100%",
          height: "100%"
        }}
      >
        {/* ================= LEFT IMAGE ================= */}
        <Grid
          item
          md={6}
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            background: "#1976d2"
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img
              src="/image.png"
              alt="hospital"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain"
              }}
            />
          </Box>
        </Grid>

        {/* ================= RIGHT FORM ================= */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: 4,
            display: "grid",
            gridTemplateRows: "auto 1fr auto"
          }}
        >
          {/* HEADER */}
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography variant="h4" fontWeight="bold" color="primary">
              MEDIQ
            </Typography>
            <Typography color="text.secondary">
              Patient Self Registration
            </Typography>
          </Box>

          {/* FORM GRID */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 2,
              alignContent: "start"
            }}
          >
            <TextField label="Prefix" />

            <TextField label="First Name *" />

            <TextField label="Last Name *" />

            <TextField select label="Relation *">
              {relations.map((r) => (
                <MenuItem key={r} value={r}>
                  {r}
                </MenuItem>
              ))}
            </TextField>

            <TextField label="Relative Name *" />

            <TextField select label="Gender *">
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>

            <TextField label="Mobile *" />

            <TextField
              type="date"
              label="Date of Birth *"
              InputLabelProps={{ shrink: true }}
            />

            <TextField label="Address *" />
          </Box>

          {/* BUTTON */}
          <Box sx={{ mt: 4 }}>
            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{ height: 52 }}
            >
              REGISTER
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
