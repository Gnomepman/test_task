import { SvgIcon } from '@mui/material';
import { CustomSvgIconProps } from './IconsCustomProps';
import theme from '@/theme';

export default function DocumentIcon(props: CustomSvgIconProps) {
  const { size, color } = props;

  return (
    <SvgIcon
      style={{
        height: `${size}px`,
        width: `${size}px`,
      }}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.0002 7H14.0002"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M7.00024 12H17.0002"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M1.00024 12C1.00024 14.4477 1.1327 16.3463 1.46177 17.827C1.78832 19.2963 2.29502 20.2921 3.0016 20.9986C3.70818 21.7052 4.7039 22.2119 6.17322 22.5385C7.65391 22.8675 9.55257 23 12.0002 23C13.0777 23 14.0525 22.9744 14.9351 22.9169C18.0875 22.7112 19.8936 22.1039 20.9989 20.9986C22.1042 19.8934 22.7114 18.0873 22.9171 14.9349C22.9747 14.0522 23.0002 13.0774 23.0002 12C23.0002 9.55232 22.8678 7.65366 22.5387 6.17298C22.2122 4.70365 21.7055 3.70794 20.9989 3.00136C20.2923 2.29478 19.2966 1.78807 17.8273 1.46153C16.3466 1.13246 14.4479 1 12.0002 1C9.55257 1 7.65391 1.13246 6.17322 1.46153C4.7039 1.78807 3.70818 2.29478 3.0016 3.00136C2.29502 3.70794 1.78832 4.70365 1.46177 6.17298C1.1327 7.65366 1.00024 9.55232 1.00024 12Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
}

DocumentIcon.defaultProps = {
  color: theme.palette.common.black,
  size: 24,
};
