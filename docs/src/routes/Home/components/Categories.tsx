import * as React from "react";
import * as PropTypes from "prop-types";

import { WrapperState } from "components/Wrapper";
import MainTitleCenter from "./MainTitleCenter";
import Category from "./Category";
import IconComponents from "components/Icons/IconComponents";
import IconLayout from "components/Icons/IconLayout";
import IconStyle from "components/Icons/IconStyle";
import IconToolkits from "components/Icons/IconToolkits";
import ScrollReveal from "react-uwp/ScrollReveal";

export interface DataProps {}

export interface CategoriesProps extends DataProps, React.HTMLAttributes<HTMLDivElement>, WrapperState {}

const ICON_WIDTH = 180;
const CATEGORY_STYLE: React.CSSProperties = {
  margin: 10
};
export default class Categories extends React.Component<CategoriesProps, void> {
  static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };

  render() {
    const { renderContentHeight, renderContentWidth, screenType, ...attributes } = this.props;
    const { theme } = this.context;
    const styles = getStyles(this);

    return (
      <div
        {...attributes}
        style={styles.root}
      >
        <ScrollReveal speed={1000}>
          <MainTitleCenter
            style={{ padding: 20 }}
            title="Design and UI for UWP Web Apps"
            description={<p>
              React-UWP came about from our love of React and Microsoft's UWP Design.
              <br />
              We want UWP design easier to implementation in web applications
            </p>}
            linkInfo="GET STARTED"
            link="get-started"
          />
        </ScrollReveal>
        <ScrollReveal
          style={{ transform: "translateY(400px)", opacity: 0 }}
          animatedStyle={{ transform: "translateY(0)", opacity: 1 }}
          speed={1500}
          wrapperStyle={{ width: "100%" }}
          useWrapper
        >
        <div style={styles.categories}>
            <Category
              style={CATEGORY_STYLE}
              title="Layout"
              description="Design and code an app that’s easy to navigate and looks great on a variety of devices and screen sizes."
              link="/layout"
              icon={<IconLayout width={ICON_WIDTH} />}
            />
          <Category
            style={CATEGORY_STYLE}
            title="Styles"
            description="Define your app’s personality through color, typography, and motion."
            link="/styles"
            icon={<IconStyle width={ICON_WIDTH} />}
          />
          <Category
            style={CATEGORY_STYLE}
            title="Components"
            description="Create a UI from a powerful set of building blocks."
            link="/components"
            icon={<IconComponents width={ICON_WIDTH} />}
          />
          <Category
            style={CATEGORY_STYLE}
            title="Design Toolkits"
            description="Jumpstart your project with design templates and tools."
            link="/resources"
            icon={<IconToolkits width={ICON_WIDTH} />}
          />
        </div>
        </ScrollReveal>
      </div>
    );
  }
}

function getStyles(categories: Categories): {
  root?: React.CSSProperties;
  categories?: React.CSSProperties;
} {
  const {
    context: { theme },
    props: { style, renderContentWidth }
  } = categories;
  const { prepareStyles } = theme;

  return {
    root: prepareStyles({
      ...style
    }),
    categories: prepareStyles({
      width: renderContentWidth,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      margin: "40px auto 0"
    })
  };
}
