import { SvgIcon } from '@mui/material';
import { CustomSvgIconProps } from './IconsCustomProps';
import theme from '@/theme';

export default function DeleteIcon(props: CustomSvgIconProps) {
  const { size, color } = props;

  return (
    <SvgIcon
      style={{
        height: `${size}px`,
        width: `${size}px`,
      }}
      viewBox="0 0 20 24"
      fill="none"
    >
      <path
        d="M1.37007 14.7829C1.43006 15.0528 1.48764 15.3135 1.54331 15.5655C1.8645 17.02 2.1222 18.1869 2.41496 19.154C2.75672 20.2829 3.11339 21.018 3.57483 21.5318C4.45908 22.5162 6.01659 23 10.0001 23C13.9837 23 15.5412 22.5162 16.4254 21.5318C16.8868 21.018 17.2435 20.2829 17.5853 19.154C17.878 18.1869 18.1357 17.0201 18.4569 15.5657C18.5126 15.3135 18.5702 15.0528 18.6302 14.7829C19.408 11.285 18.8947 9.54317 17.7283 8.56682C17.0969 8.03836 16.1721 7.63709 14.8661 7.37407C13.5629 7.1116 11.9484 7 10.0001 7C8.05182 7 6.43732 7.1116 5.13411 7.37407C3.82814 7.63709 2.90332 8.03836 2.27197 8.56682C1.10554 9.54317 0.592247 11.285 1.37007 14.7829Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M10.0001 12V18M6.00012 12V18M14.0001 12V18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0001 2.07058C15.6539 2.33516 18.1084 3.29618 19.5158 4.14321C19.989 4.428 20.1417 5.04247 19.8569 5.51566C19.5721 5.98886 18.9577 6.14158 18.4845 5.85679C17.1809 5.07224 14.4556 4 10.0001 4C5.52988 4 2.72875 5.0786 1.54035 5.84152C1.0756 6.13988 0.456969 6.00499 0.158607 5.54023C-0.139756 5.07548 -0.00486638 4.45685 0.45989 4.15848C1.8081 3.29297 4.33316 2.3338 8.00012 2.07024V1C8.00012 0.447715 8.44784 0 9.00012 0H11.0001C11.5524 0 12.0001 0.447715 12.0001 1V2.07058Z"
        fill={color}
      />
    </SvgIcon>
  );
}

DeleteIcon.defaultProps = {
  color: theme.palette.common.black,
  size: 24,
};
