import { SvgIcon } from '@mui/material';
import { CustomSvgIconProps } from './IconsCustomProps';
import theme from '@/theme';

export default function ArrowDownIcon(props: CustomSvgIconProps) {
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
        d="M12.0003 17C11.745 16.9987 11.4932 16.9406 11.2631 16.8299C11.0331 16.7192 10.8305 16.5587 10.6703 16.36L6.46025 11.26C6.21425 10.953 6.05944 10.583 6.01347 10.1923C5.9675 9.80153 6.03222 9.40574 6.20025 9.05C6.33653 8.74083 6.55893 8.47741 6.84087 8.29122C7.12282 8.10503 7.4524 8.00393 7.79025 8H16.2103C16.5481 8.00393 16.8777 8.10503 17.1596 8.29122C17.4416 8.47741 17.664 8.74083 17.8003 9.05C17.9683 9.40574 18.033 9.80153 17.987 10.1923C17.9411 10.583 17.7863 10.953 17.5403 11.26L13.3303 16.36C13.17 16.5587 12.9674 16.7192 12.7374 16.8299C12.5073 16.9406 12.2555 16.9987 12.0003 17Z"
        fill={color}
      />
    </SvgIcon>
  );
}

ArrowDownIcon.defaultProps = {
  color: theme.palette.common.black,
  size: 24,
};
