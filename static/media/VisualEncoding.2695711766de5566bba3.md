# Marks

Cartography is considered a graphical form of communication. Communicating with maps would not be possible without the main building blocks for the visual encoding of vector data. The main building blocks for visual encoding are **marks** and **channels**. Marks are a set of geometric primitives made up of:

1. **Points**
   - Represent locational information
     - A single point with X, Y coordinates (Cartesian coordinate system)
     - A single point with latitude, longitude coordinates (geographic coordinate system)
     - A single point with an address
     - E.g., Houses, hospitals, restaurants, etc.
2. **Lines**
   - Represent a connection with measurable length
     - Two vertices can be connected by a line to form a route
     - E.g., Highways, trails, bus routes, etc.
3. **Areas**
   - Represent a boundary with measurable area
     - Three vertices can be closed with two lines to form a boundary
     - E.g., Municipal boundaries, lakes, parks, etc.

<ContentFigure img={marks.png} title={Types of Marks} credit={Credit: PennState licensed under CC BY-ND 2.0} url={https://creativecommons.org/licenses/by-nc-sa/4.0/} />

<br>

# Channels

The appearance of marks can be manipulated using channels:

1. **Position**
   - Change in X and/or Y position
2. **Color**
   - Color hue
     - Primary and secondary colors
   - Color luminance (or brightness)
     - The lightness or darkness of a color
   - Color saturation
     - How vivid or washed-out a color appears
3. **Shape**
   - Change in shape, which there are an infinite number of
   - Glyphs are considered a part of this channel
     - E.g., Egyptian hieroglyphs, and other typographic characters or symbols.
4. **Tilt**
   - Change in Angle and/or Alignment
5. **Size**
   - Change in Length, Area, and/or Volume

<ContentFigure img={channels.png} title={Types of Channels} credit={Credit: PennState licensed under CC BY-ND 2.0} url={https://creativecommons.org/licenses/by-nc-sa/4.0/} />

<br>

# Visually Encoded Map

Now that you've learned about visual encoding, play around with the map below to see which marks and channels are displayed, as well as the data they contain. You can alter the style of the points by pressing the bottom-right button.

<VisualVariables/>

<br>