import { SvgIcon } from '@mui/material';
import { CustomSvgIconProps } from './IconsCustomProps';
import theme from '@/theme';

export default function TeamIcon(props: CustomSvgIconProps) {
  const { size, color } = props;

  return (
    <SvgIcon
      style={{
        height: `${size}px`,
        width: `${size}px`,
      }}
      viewBox="0 0 26 16"
    >
      <path
        d="M8.00024 12.8C8.00024 13.4103 8.06476 13.7842 8.16598 14.0271C8.25029 14.2294 8.37274 14.3751 8.61796 14.5058C8.89941 14.656 9.35264 14.7894 10.096 14.8775C10.8308 14.9646 11.7767 15 13.0002 15C14.2238 15 15.1697 14.9646 15.9045 14.8775C16.6478 14.7894 17.1011 14.656 17.3825 14.5058C17.6277 14.3751 17.7502 14.2294 17.8345 14.0271C17.9357 13.7842 18.0002 13.4103 18.0002 12.8C18.0002 12.1897 17.9357 11.8158 17.8345 11.5729C17.7502 11.3706 17.6277 11.2249 17.3825 11.0942C17.1011 10.944 16.6478 10.8106 15.9045 10.7225C15.1697 10.6354 14.2238 10.6 13.0002 10.6C11.7767 10.6 10.8308 10.6354 10.096 10.7225C9.35264 10.8106 8.89941 10.944 8.61796 11.0942C8.37274 11.2249 8.25029 11.3706 8.16598 11.5729C8.06476 11.8158 8.00024 12.1897 8.00024 12.8Z"
        stroke={color}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2502 4C10.2502 5.71863 11.5413 7 13.0002 7C14.4592 7 15.7502 5.71863 15.7502 4C15.7502 2.28137 14.4592 1 13.0002 1C11.5413 1 10.2502 2.28137 10.2502 4Z"
        stroke={color}
        fill="none"
        strokeWidth="2"
      />
      <path
        d="M18.2502 2.40002C19.6002 2.40002 20.5002 3.60002 20.5002 4.80002C20.5002 6.00002 19.6002 7.20002 18.2502 7.20002"
        stroke={color}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.75024 2.40002C6.40024 2.40002 5.50024 3.60002 5.50024 4.80002C5.50024 6.00002 6.40024 7.20002 7.75024 7.20002"
        stroke={color}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9502 14.4C23.0502 14.4 24.2502 14.0571 24.2502 12C24.2502 9.94283 23.0502 9.59998 19.7502 9.59998"
        stroke={color}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.05024 14.4C2.95024 14.4 1.75024 14.0571 1.75024 12C1.75024 9.94283 2.95024 9.59998 6.25024 9.59998"
        stroke={color}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}

TeamIcon.defaultProps = {
  color: theme.palette.common.black,
  size: 24,
};
