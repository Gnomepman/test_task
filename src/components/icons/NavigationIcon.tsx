import { SvgIcon } from '@mui/material';
import { CustomSvgIconProps } from './IconsCustomProps';
import theme from '@/theme';

export default function NavigationIcon(props: CustomSvgIconProps) {
  const { size, color } = props;

  return (
    <SvgIcon
      style={{
        height: `${size}px`,
        width: `${size}px`,
      }}
      viewBox="0 0 24 24"
    >
      <path
        d="M9.83544 14.1705L12.4894 11.5198M9.83544 14.1705C7.88994 16.1172 -0.294128 12.695 1.17558 8.36715C2.64528 4.0393 18.74 -1.24555 21.9934 2.00986C25.2469 5.26527 19.9413 21.4206 15.6352 22.8357C11.3291 24.2507 7.88994 16.1172 9.83544 14.1705Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
}

NavigationIcon.defaultProps = {
  color: theme.palette.common.black,
  size: 24,
};
