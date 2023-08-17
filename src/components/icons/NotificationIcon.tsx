import { SvgIcon } from '@mui/material';
import { CustomSvgIconProps } from './IconsCustomProps';
import theme from '@/theme';

export default function NotificationIcon(props: CustomSvgIconProps) {
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
        d="M7.00024 21C8.50024 22.3333 11.5002 22.3333 13.0002 21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9989 1.05208C10.9998 1.03483 11.0002 1.01747 11.0002 1C11.0002 0.447715 10.5525 0 10.0002 0C9.44796 0 9.00024 0.447715 9.00024 1C9.00024 1.01748 9.00069 1.03486 9.00158 1.05212C5.65393 1.53463 2.50393 5.29948 3.00029 9.5C3.25737 10.7854 2.44792 11.4664 1.60542 12.1752C0.809298 12.845 -0.0163377 13.5396 0.000497328 14.7925C0.000497328 16.5484 1.00026 17.5 2.46854 17.9719C2.46854 17.9719 5.15763 19 10.0004 19C14.8431 19 17.5322 17.9719 17.5322 17.9719C19.0005 17.5 20.0005 16.5 20.0002 14.7925C20.0001 13.5288 19.1749 12.8339 18.3833 12.1672C17.5445 11.4609 16.7432 10.7861 17.0004 9.5C17.4968 5.29938 14.3467 1.53444 10.9989 1.05208ZM4.42796 12.088C4.93458 11.287 5.17868 10.317 4.97945 9.20278C4.80711 7.5846 5.37155 6.0193 6.35041 4.83963C7.36253 3.61987 8.65054 3 9.71937 3H10.2814C11.3502 3 12.6382 3.61987 13.6503 4.83963C14.6292 6.01928 15.1936 7.58455 15.0213 9.2027C14.823 10.3108 15.0607 11.2779 15.565 12.0801C16.0026 12.7762 16.6178 13.2948 16.9946 13.6125L17.0232 13.6365C17.9702 14.4354 18.0002 14.5596 18.0002 14.7927C18.0003 15.2288 17.8836 15.4409 17.7778 15.5684C17.6503 15.722 17.3989 15.914 16.9202 16.0679L16.8686 16.0844L16.8255 16.1009L16.8223 16.1021C16.8135 16.1053 16.7945 16.112 16.7655 16.1218C16.7075 16.1415 16.6094 16.1734 16.4721 16.2138C16.1976 16.2945 15.7668 16.4088 15.1879 16.5252C14.0303 16.7581 12.2796 17 10.0004 17C7.7211 17 5.97044 16.7581 4.81287 16.5252C4.23393 16.4088 3.80311 16.2945 3.5286 16.2138C3.39136 16.1734 3.29322 16.1415 3.23522 16.1218C3.20622 16.112 3.18726 16.1053 3.17847 16.1021L3.17533 16.101L3.13213 16.0844L3.08052 16.0678C2.57924 15.9067 2.33407 15.7188 2.21574 15.5778C2.12318 15.4676 2.0005 15.2637 2.0005 14.7925V14.779L2.00032 14.7656C1.99764 14.5665 2.00262 14.4559 2.96367 13.6461L2.99255 13.6218L2.99255 13.6218C3.37134 13.3028 3.98818 12.7834 4.42796 12.088Z"
        fill={color}
      />
    </SvgIcon>
  );
}

NotificationIcon.defaultProps = {
  color: theme.palette.common.black,
  size: 24,
};
