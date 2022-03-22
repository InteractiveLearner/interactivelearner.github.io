import React from "react";

import { Link } from "react-router-dom";

import { Breadcrumbs, Typography } from "@mui/material";

export default function BreadCrumbs(props) {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Link
        underline="hover"
        to="/"
        style={{ textDecoration: "none", color: "#283618" }}
      >
        Home
      </Link>
      <Typography sx={{ typography: { sm: "body1", xs: "body2" } }}>
        {props.crumbs}
      </Typography>
    </Breadcrumbs>
  );
}
