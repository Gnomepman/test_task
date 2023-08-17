import { CustomSvgIconProps } from './IconsCustomProps';
import theme from '@/theme';

export default function ArrowLeftIcon(props: CustomSvgIconProps) {
  const { size, color } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 7L9 12L14 17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

ArrowLeftIcon.defaultProps = {
  color: theme.palette.common.black,
  size: 24,
};
