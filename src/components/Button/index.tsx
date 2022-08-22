import * as S from './styles';
import { ButtonProps } from './types';

export const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
};
