import React from "react";

import { Link } from "react-router-dom";

import {
  Typography,
  CardMedia,
  Container,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemButton,
  // Checkbox,
} from "@mui/material";

import MainLayout from "../layouts/MainLayout";

let theme = createTheme({
  header: {
    color: "#606c38",
  },
});

theme = responsiveFontSizes(theme);

const cards = [
  {
    title: "Projections",
    description:
      "Discover the projections that convert curved 3D surfaces to flat 2D surfaces. ",
    url: "/projections",
    img: require("../../assets/homepage/projection.png"),
    disabled: false,
  },
  {
    title: "Scale",
    description:
      "Explore how map scale can be used to hide and show details on a map.",

    url: "/scale",
    img: require("../../assets/homepage/scale.png"),
    disabled: false,
  },
  {
    title: "Visual Encoding",
    description: "Learn about the main building blocks of visual encoding.",

    url: "/visual",
    img: require("../../assets/homepage/visualencoding.png"),
    disabled: false,
  },
  {
    title: "Types of Maps",
    description:
      "Find out how visual encoding allows geographers to produce thematic maps.",

    url: "/thematic",
    img: require("../../assets/homepage/typesofmaps.png"),
    disabled: false,
  },
  {
    title: "Classification Schemes",
    description: "Under ongoing development. Come back another time.",
    url: "/",
    img: require("../../assets/homepage/construction.png"),
    disabled: true,
  },
  {
    title: "Spatial Autocorrelation Statistics",
    description: "Under ongoing development. Come back another time.",
    url: "/",
    img: require("../../assets/homepage/construction.png"),
    disabled: true,
  },
  {
    title: "Lying with Maps",
    description: "Under ongoing development. Come back another time.",
    url: "/",
    img: require("../../assets/homepage/construction.png"),
    disabled: true,
  },
  {
    title: "Resources",
    description: "GIS resources recommended by the developer(s) of the site.",
    url: "/resources",
    img: require("../../assets/homepage/construction.png"),
    disabled: true,
  },
];

export default function Home() {
  /* Disable checkboxes for now. Awaiting progress report functionality. */
  // const [checked, setChecked] = React.useState([-1]);

  // const handleToggle = (value) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  // };

  return (
    <MainLayout>
      <ThemeProvider theme={theme}>
        <div>
          <Container maxWidth="sm" style={{ marginTop: "25px" }}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Geographic Information Science / Systems
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              View any of the topics below to learn about GIS!{" "}
              <b>Disclaimer:</b> The entire site is under ongoing development.
              Feedback is welcome.
            </Typography>
          </Container>
        </div>

        <Container maxWidth="md" style={{ padding: "20px" }}>
          <Typography gutterBottom variant="h3" sx={theme.header}>
            Topics
          </Typography>
          <List
            dense
            sx={{
              width: "100%",
              maxWidth: "100%",
              bgcolor: "background.paper",
              padding: "0",
              border: 1,
            }}
          >
            {cards.map((card, index) => {
              const labelId = `checkbox-list-secondary-label-${index}`;

              return (
                <ListItem
                  key={index}
                  // secondaryAction={
                  //   <Checkbox
                  //     edge="end"
                  //     style={{ color: "#283618" }}
                  //     onChange={handleToggle(index)}
                  //     checked={checked.indexOf(index) !== -1}
                  //     inputProps={{ "aria-labelledby": labelId }}
                  //     disabled={card.disabled}
                  //   />
                  // }
                  disablePadding
                  sx={{
                    borderBottom: 1,
                  }}
                >
                  <ListItemButton
                    to={card.url}
                    component={Link}
                    variant="contained"
                    disabled={card.disabled}
                    sx={{
                      "&:hover": {
                        opacity: "0.8",
                      },
                      padding: 0,
                    }}
                  >
                    <ListItemAvatar>
                      <CardMedia
                        style={{ padding: "56.25%", width: "100px" }} // 16:9 aspect ratio
                        image={card.img}
                        title={card.title + "image"}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      style={{ padding: "0px 0px 0px 25px" }}
                      id={labelId}
                      primary={card.title}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          ></Typography>
                          {card.description}
                        </React.Fragment>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Container>
      </ThemeProvider>
    </MainLayout>
  );
}
