import { SvgIcon } from '@mui/material';
import { CustomSvgIconProps } from './IconsCustomProps';
import theme from '@/theme';

export default function ColleaguesIcon(props: CustomSvgIconProps) {
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
        d="M1 19C1 19.9616 1.12727 20.597 1.36768 21.0477C1.59037 21.4652 1.96307 21.8227 2.67887 22.121C3.42312 22.4311 4.49679 22.6584 6.04824 22.802C7.5899 22.9448 9.53855 23 12 23C14.4614 23 16.4101 22.9448 17.9518 22.802C19.5032 22.6584 20.5769 22.4311 21.3211 22.121C22.0369 21.8227 22.4096 21.4652 22.6323 21.0477C22.8727 20.597 23 19.9616 23 19C23 18.0384 22.8727 17.403 22.6323 16.9523C22.4096 16.5348 22.0369 16.1773 21.3211 15.879C20.5769 15.5689 19.5032 15.3416 17.9518 15.198C16.4101 15.0552 14.4614 15 12 15C9.53855 15 7.5899 15.0552 6.04824 15.198C4.49679 15.3416 3.42312 15.5689 2.67887 15.879C1.96307 16.1773 1.59037 16.5348 1.36768 16.9523C1.12727 17.403 1 18.0384 1 19Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M6.45456 6C6.45456 8.6813 8.85366 11 12 11C15.1464 11 17.5455 8.6813 17.5455 6C17.5455 3.3187 15.1464 1 12 1C8.85366 1 6.45456 3.3187 6.45456 6Z"
        stroke={color}
        fill="none"
        strokeWidth="2"
      />
    </SvgIcon>
  );
}

ColleaguesIcon.defaultProps = {
  color: theme.palette.common.black,
  size: 24,
};
