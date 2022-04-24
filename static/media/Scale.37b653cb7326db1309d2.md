# Scale Types

As we've seen with projections, mapping isn't a perfect depiction of reality. When you use your favourite navigation service to look up locations or directions (e.g., Google Maps, Apple Maps, Bing Maps, etc. ), the real-world features you see cannot be drawn to their proper scale. These navigation services, on the other hand, use a **graphic scale** to indicate the measurable relationship between the map and the area being examined. Similarly, GIS tools such as QGIS and ArcGIS Pro portray this relationship using representative fractions (**ratio scale**). Both representative fractions and graphic scales can be read aloud as a **verbal scale**. However, representative fractions differ from graphic scales in that they do not employ units (e.g., km, miles, etc.). Regardless of whether representative fractions or graphic scales are used, the level of detail shown is what matters most.

# Scale Sizes

The level of detail on a map is determined by the scale size. In **small-scale** maps, a lot of ground is covered in a large geographic area and at a low level of detail whereas **large-scale** maps cover small geographic areas with a high level of detail. In the figure below, the small-scale map of Victoria depicts the entire region, neighborhoods, and major road networks. In contrast, the large-scale map of Victoria depicts the downtown core, street names, more labels and outline of buildings.

<ContentFigure img={scale.png} title={Small Scale versus Large Scale Victoria, BC} />

<br>

# Scale Map

The view of Victoria, BC below is displayed in small-scale by default. The buttons to change scale are on the bottom right of the map. Notice how the real-world units and length of the graphic scale (bottom left of the map) vary as you move around and zoom in / out of the map.

<ScaleMap />

<br>