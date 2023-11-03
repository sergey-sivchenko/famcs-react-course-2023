import { Container } from "./styled";

const ICON_SIZES = {
  small: 24,
  medium: 28,
  large: 34,
};

const IconButton = ({
  color = "text",
  disabled = false,
  icon: Icon,
  label = "Icon button",
  onClick,
  size = "medium",
}) => (
  <Container aria-label={label} color={color} disabled={disabled} onClick={onClick} size={size}>
    <Icon size={ICON_SIZES[size] || 32} title={label} />
  </Container>
);

export default IconButton;
