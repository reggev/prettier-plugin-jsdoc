const {
  ABSTRACT,
  AUTHOR,
  AUGMENTS,
  ASYNC,
  CALLBACK,
  CATEGORY,
  CLASS,
  CONSTANT,
  DEFAULT,
  DEPRECATED,
  DESCRIPTION,
  EXAMPLE,
  EXTENDS,
  EXTERNAL,
  FILE,
  FIRES,
  FUNCTION,
  MEMBER,
  MEMBEROF,
  PARAM,
  PROPERTY,
  PRIVATE,
  RETURNS,
  SINCE,
  SEE,
  THROWS,
  TEMPLATE,
  TYPE,
  TYPEDEF,
  TODO,
  VERSION,
  YIELDS,
} = require("./src/tags");
const { jsdocParser } = require("./src");
const { parsers } =
  require("prettier/parser-babel") || require("prettier/parser-babylon");
const babelFlow = parsers["babel-flow"];

// jsdoc-parser
module.exports = {
  languages: [
    {
      name: "JavaScript",
      parsers: ["jsdoc-parser"],
    },
  ],
  parsers: {
    "jsdoc-parser": { ...babelFlow, parse: jsdocParser },
  },
  // How to define options: https://github.com/prettier/prettier/blob/master/src/cli/constant.js#L16
  // Issue with string type: https://github.com/prettier/prettier/issues/6151
  options: {
    jsdocSpaces: {
      type: "int",
      category: "jsdoc",
      default: 1,
      description: "How many spaces will be used to separate tag elements.",
    },
    jsdocTagsOrder: {
      type: "path",
      category: "jsdoc",
      array: true, // Fancy way to get option in array form
      default: [
        {
          value: [
            ASYNC,
            PRIVATE,
            MEMBEROF,
            VERSION,
            AUTHOR,
            DEPRECATED,
            SINCE,
            CATEGORY,
            DESCRIPTION,
            EXAMPLE,
            ABSTRACT,
            AUGMENTS,
            CONSTANT,
            DEFAULT,
            EXTERNAL,
            FILE,
            FIRES,
            TEMPLATE,
            FUNCTION,
            CLASS,
            TYPEDEF,
            TYPE,
            CALLBACK,
            PROPERTY,
            PARAM,
            EXTENDS,
            MEMBER,
            SEE,
            "other",
            THROWS,
            YIELDS,
            RETURNS,
            TODO,
          ],
        },
      ],
      description: "Define order of tags.",
    },
    jsdocDescriptionWithDot: {
      type: "boolean",
      category: "jsdoc",
      default: false,
      description: "Should dot be inserted at the end of description",
    },
    jsdocDescriptionTag: {
      type: "boolean",
      category: "jsdoc",
      default: false,
      description: "Should description tag be used",
    },
    jsdocVerticalAlignment: {
      type: "boolean",
      category: "jsdoc",
      default: false,
      description: "Should tags, types, names and description be aligned",
    },
    jsdocKeepUnParseAbleExampleIndent: {
      type: "boolean",
      category: "jsdoc",
      default: false,
      description:
        "Should unParseAble example (pseudo code or no js code) keep its indentation",
    },
  },
  defaultOptions: {
    jsdocSpaces: 1,
    jsdocDescriptionWithDot: false,
    jsdocDescriptionTag: false,
    jsdocVerticalAlignment: false,
    jsdocKeepUnParseAbleExampleIndent: false,
  },
};
