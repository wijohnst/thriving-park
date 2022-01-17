import * as React from 'react';
import { SvgContainer } from 'stories/atoms/SVGIcon/svgicon-styles';

interface Props {
  Icon: React.FC<React.SVGProps<SVGAElement>>;
  height?: number;
  width?: number;
}

const SvgIcon: React.FC<Props> = (props) => {
  const { Icon, height, width } = props;
  return (
    <SvgContainer height={height} width={width}>
      <Icon />
    </SvgContainer>
  );
};

export default SvgIcon;
