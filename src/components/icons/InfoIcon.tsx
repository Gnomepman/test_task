import { SvgIcon } from '@mui/material';
import { CustomSvgIconProps } from './IconsCustomProps';
import theme from '@/theme';

export default function InfoIcon(props: CustomSvgIconProps) {
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
        d="M12.0002 2.25C10.0719 2.25 8.18682 2.82183 6.58344 3.89317C4.98006 4.96451 3.73038 6.48726 2.99242 8.26884C2.25447 10.0504 2.06139 12.0108 2.43759 13.9021C2.8138 15.7934 3.7424 17.5307 5.10596 18.8943C6.46952 20.2579 8.2068 21.1865 10.0981 21.5627C11.9894 21.9389 13.9498 21.7458 15.7314 21.0078C17.513 20.2699 19.0357 19.0202 20.1071 17.4168C21.1784 15.8134 21.7502 13.9284 21.7502 12C21.7475 9.41498 20.7194 6.93661 18.8915 5.10872C17.0636 3.28084 14.5853 2.25273 12.0002 2.25ZM12.0002 20.25C10.3686 20.25 8.7735 19.7661 7.41679 18.8596C6.06009 17.9531 5.00267 16.6646 4.37824 15.1571C3.75382 13.6496 3.59044 11.9908 3.90877 10.3905C4.2271 8.79016 5.01283 7.32015 6.16662 6.16637C7.3204 5.01259 8.79041 4.22685 10.3908 3.90852C11.9911 3.59019 13.6499 3.75357 15.1574 4.37799C16.6649 5.00242 17.9534 6.05984 18.8599 7.41655C19.7664 8.77325 20.2502 10.3683 20.2502 12C20.2478 14.1873 19.3778 16.2843 17.8311 17.8309C16.2845 19.3775 14.1875 20.2475 12.0002 20.25ZM13.5002 16.5C13.5002 16.6989 13.4212 16.8897 13.2806 17.0303C13.1399 17.171 12.9492 17.25 12.7502 17.25C12.3524 17.25 11.9709 17.092 11.6896 16.8107C11.4083 16.5294 11.2502 16.1478 11.2502 15.75V12C11.0513 12 10.8606 11.921 10.7199 11.7803C10.5793 11.6397 10.5002 11.4489 10.5002 11.25C10.5002 11.0511 10.5793 10.8603 10.7199 10.7197C10.8606 10.579 11.0513 10.5 11.2502 10.5C11.6481 10.5 12.0296 10.658 12.3109 10.9393C12.5922 11.2206 12.7502 11.6022 12.7502 12V15.75C12.9492 15.75 13.1399 15.829 13.2806 15.9697C13.4212 16.1103 13.5002 16.3011 13.5002 16.5ZM10.5002 7.875C10.5002 7.6525 10.5662 7.43499 10.6898 7.24998C10.8135 7.06498 10.9892 6.92078 11.1947 6.83564C11.4003 6.75049 11.6265 6.72821 11.8447 6.77162C12.063 6.81502 12.2634 6.92217 12.4207 7.0795C12.5781 7.23684 12.6852 7.43729 12.7286 7.65552C12.772 7.87375 12.7498 8.09995 12.6646 8.30552C12.5795 8.51109 12.4353 8.68679 12.2503 8.8104C12.0653 8.93402 11.8478 9 11.6252 9C11.3269 9 11.0407 8.88147 10.8298 8.6705C10.6188 8.45952 10.5002 8.17337 10.5002 7.875Z"
        fill={color}
      />
    </SvgIcon>
  );
}

InfoIcon.defaultProps = {
  color: theme.palette.common.black,
  size: 24,
};