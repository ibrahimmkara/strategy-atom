import { FC } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { ButtonCustomProps } from "./Button.types";

const StyledButton = styled(Button)<ButtonCustomProps>((props) => ({
  "background-color": props.visual?.backgroundColor,
  padding: props.visual?.padding,
  border: props.visual?.border,
  "border-radius": props.visual?.borderRadius,
  width: props.visual?.width,
}));

const GrdButton: FC<ButtonCustomProps> = ({ visual, ...props }) => {
  return <StyledButton visual={visual} {...props} />;
};

export default GrdButton;
