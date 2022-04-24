# How to Contribute

Contributing will require knowledge in [Markdown](https://daringfireball.net/projects/markdown/) and / or [JSX](https://reactjs.org/docs/introducing-jsx.html) as this is how Interactive Learner's content is built.

**Markdown:**

The [/content](https://github.com/InteractiveLearner/interactivelearner.github.io/tree/main/src/views/content) folder is where you will find each topic of Interactive Learner.

Editing an existing topic is simply done by making changes to the markdown and submitting a pull request.

Adding a new topic is a bit trickier. Each topic need's it's own file in the [Pages](https://github.com/InteractiveLearner/interactivelearner.github.io/tree/main/src/views/pages) folder. Each topic also needs to be routed in [App.jsx](https://github.com/InteractiveLearner/interactivelearner.github.io/blob/main/src/App.jsx) and added as a card in [Home.jsx](https://github.com/InteractiveLearner/interactivelearner.github.io/blob/main/src/views/pages/Home.jsx).

**JSX:**

All new React components used in a markdown file must be added to the overrides section of the [Content Builder](https://github.com/InteractiveLearner/interactivelearner.github.io/blob/main/src/components/ContentBuilder.jsx) component.

**Note:** All this information is also available in [plaintext](https://www.interactivelearner-gis.com/static/media/Template.39c2294bb6f605fe9646.md).

*Thank you for supporting this project!*

# Available Markdown and JSX:

## Horizontal Rules

___

---

***

## Headings

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

## Math

This text is &le; than this text.

This text is &ge; than this text.

X<sup>2</sup>

X<sub>2</sub>

## Symbols

Interactive Learner &copy;

## Tables

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

## Links

[link text](https://duckduckgo.com/)

## Maps

<EmptyMap/>

## Iframes

<CardMedia url={https://en.wikipedia.org/wiki/Multivariate_map} height={600}>

## Code

```sudo apt get```

<SyntaxHighlighter language="plaintext">(num) => num + 1</SyntaxHighlighter>

<SyntaxHighlighter language="javascript">
function createStyleObject(classNames, style) {
  return classNames.reduce((styleObject, className) => {
    return {...styleObject, ...style[className]};
  }, {});
}

function createClassNameString(classNames) {
  return classNames.join(' ');
}

// this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully

function createChildren(style, useInlineStyles) {
  let childrenCount = 0;
  return children => {
    childrenCount += 1;
    return children.map((child, i) => createElement({
      node: child,
      style,
      useInlineStyles,
      key:"code-segment-${childrenCount}-${i}"
    }));
  }
}

function createElement({ node, style, useInlineStyles, key }) {
  const { properties, type, tagName, value } = node;
  if (type === "text") {
    return value;
  } else if (tagName) {
    const TagName = tagName;
    const childrenCreator = createChildren(style, useInlineStyles);
    const props = (
      useInlineStyles
      ? { style: createStyleObject(properties.className, style) }
      : { className: createClassNameString(properties.className) }
    );
    const children = childrenCreator(node.children);
    return <TagName key={key} {...props}>{children}</TagName>;
  }
}
</SyntaxHighlighter>

## Images and Figures

![Projection](projection.png)

<ContentFigure img={projection.png} title={Projection} credit={Credit: Omar Kawach} url={https://duckduckgo.com/}/>

## TODO
  - Solve error with components in syntax highlighter
  - Add more math functions
  - Add more unicode symbols
