import styled from "../../styled";

interface ColProps {
  span?: number;
  order?: number;
  offset?: number;
  push?: number;
  pull?: number;
  hidden?: boolean;
  xs?: number | ColProps;
  sm?: number | ColProps;
  md?: number | ColProps;
  lg?: number | ColProps;
  xl?: number | ColProps;
  xxl?: number | ColProps;
  xsBreak?: number;
  smBreak?: number;
  mdBreak?: number;
  lgBreak?: number;
  xlBreak?: number;
  xxlBreak?: number;
}

const colPercent = (col: number, defaultValue: string = "") => {
  return col > 0 ? `${(col * 100) / 24}%;` : defaultValue;
};

const generateMediaQuery = (
  defaultBreakpoint: number,
  responsiveProp: number | ColProps,
  responsiveBreakpoint?: number
) => `
  @media (min-width: ${
    responsiveBreakpoint ? responsiveBreakpoint : defaultBreakpoint
  }px) {
    ${
      typeof responsiveProp === "number"
        ? `
      ${responsiveProp ? `width: ${colPercent(responsiveProp)}` : ""}
    `
        : `
      ${responsiveProp.hidden ? "display:none;" : ""}
      ${responsiveProp.span ? `width: ${colPercent(responsiveProp.span)}` : ""}
      ${responsiveProp.order ? `order: ${responsiveProp.order}` : ""}
      ${
        responsiveProp.offset
          ? `margin-left:${colPercent(responsiveProp.offset)}`
          : ""
      }
    `
    }
    
  }
`;

const StyledCol = styled.div<ColProps>`
  float: left;
  position: relative;
  display: block;
  position: relative;
  min-height: 1px;
  padding-left: 0;
  padding-right: 0;
  flex: 1 1 auto;
  ${props => (props.hidden ? "display:none;" : "")}
  ${props => (props.span ? "width:" + colPercent(props.span) : "")}
  ${props => (props.order ? "order:" + props.order : "")}
  ${props => (props.offset ? "margin-left:" + colPercent(props.offset) : "")}
  ${
    props =>
      props.push
        ? "left:" + colPercent(props.push)
        : "" /*TODO: Consider using 0 for auto value*/
  }
  ${
    props =>
      props.pull
        ? "right:" + colPercent(props.pull)
        : "" /*TODO: Consider using 0 for auto value*/
  }
  ${props => (props.xs ? generateMediaQuery(368, props.xs, props.xsBreak) : "")}
  ${props => (props.sm ? generateMediaQuery(576, props.sm, props.smBreak) : "")}
  ${props => (props.md ? generateMediaQuery(768, props.md, props.lgBreak) : "")}
  ${props => (props.lg ? generateMediaQuery(992, props.lg, props.lgBreak) : "")}
  ${props =>
    props.xl ? generateMediaQuery(1200, props.xl, props.xlBreak) : ""}
  ${props =>
    props.xxl ? generateMediaQuery(1200, props.xxl, props.xxlBreak) : ""}
`;
export const Col = StyledCol;
