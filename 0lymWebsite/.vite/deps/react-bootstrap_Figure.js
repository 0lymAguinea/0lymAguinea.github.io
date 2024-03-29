"use client";
import {
  require_prop_types
} from "./chunk-O63ZRILJ.js";
import {
  require_classnames,
  require_jsx_runtime,
  useBootstrapPrefix
} from "./chunk-OETAF7ER.js";
import {
  require_react
} from "./chunk-O6O4HUXW.js";
import {
  __toESM
} from "./chunk-LQ2VYIYD.js";

// node_modules/react-bootstrap/esm/Figure.js
var React4 = __toESM(require_react());
var import_classnames4 = __toESM(require_classnames());

// node_modules/react-bootstrap/esm/FigureImage.js
var import_classnames2 = __toESM(require_classnames());
var React2 = __toESM(require_react());

// node_modules/react-bootstrap/esm/Image.js
var import_classnames = __toESM(require_classnames());
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var propTypes = {
  /**
   * @default 'img'
   */
  bsPrefix: import_prop_types.default.string,
  /**
   * Sets image as fluid image.
   */
  fluid: import_prop_types.default.bool,
  /**
   * Sets image shape as rounded.
   */
  rounded: import_prop_types.default.bool,
  /**
   * Sets image shape as circle.
   */
  roundedCircle: import_prop_types.default.bool,
  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: import_prop_types.default.bool
};
var Image = React.forwardRef(({
  bsPrefix,
  className,
  fluid = false,
  rounded = false,
  roundedCircle = false,
  thumbnail = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "img");
  return (0, import_jsx_runtime.jsx)("img", {
    // eslint-disable-line jsx-a11y/alt-text
    ref,
    ...props,
    className: (0, import_classnames.default)(className, fluid && `${bsPrefix}-fluid`, rounded && `rounded`, roundedCircle && `rounded-circle`, thumbnail && `${bsPrefix}-thumbnail`)
  });
});
Image.displayName = "Image";
var Image_default = Image;

// node_modules/react-bootstrap/esm/FigureImage.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var FigureImage = React2.forwardRef(({
  className,
  fluid = true,
  ...props
}, ref) => (0, import_jsx_runtime2.jsx)(Image_default, {
  ref,
  ...props,
  fluid,
  className: (0, import_classnames2.default)(className, "figure-img")
}));
FigureImage.displayName = "FigureImage";
FigureImage.propTypes = propTypes;
var FigureImage_default = FigureImage;

// node_modules/react-bootstrap/esm/FigureCaption.js
var React3 = __toESM(require_react());
var import_classnames3 = __toESM(require_classnames());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var FigureCaption = React3.forwardRef(({
  className,
  bsPrefix,
  as: Component = "figcaption",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "figure-caption");
  return (0, import_jsx_runtime3.jsx)(Component, {
    ref,
    className: (0, import_classnames3.default)(className, bsPrefix),
    ...props
  });
});
FigureCaption.displayName = "FigureCaption";
var FigureCaption_default = FigureCaption;

// node_modules/react-bootstrap/esm/Figure.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var Figure = React4.forwardRef(({
  className,
  bsPrefix,
  as: Component = "figure",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "figure");
  return (0, import_jsx_runtime4.jsx)(Component, {
    ref,
    className: (0, import_classnames4.default)(className, bsPrefix),
    ...props
  });
});
Figure.displayName = "Figure";
var Figure_default = Object.assign(Figure, {
  Image: FigureImage_default,
  Caption: FigureCaption_default
});
export {
  Figure_default as default
};
//# sourceMappingURL=react-bootstrap_Figure.js.map
