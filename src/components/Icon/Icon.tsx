import React, { FunctionComponent, SVGProps } from "react";
import styled from "styled-components";
import { ReactComponent as MailIcon } from "../../icons/mail.svg";
import { ReactComponent as PhoneIcon } from "../../icons/phone.svg";
import { ReactComponent as GithubIcon } from "../../icons/github.svg";
import { ReactComponent as LinkedInIcon } from "../../icons/linkedin.svg";
import { ReactComponent as XingIcon } from "../../icons/xing.svg";
import { ReactComponent as MenuIcon } from "../../icons/menu.svg";
import { ReactComponent as BackIcon } from "../../icons/back.svg";

export type IconTypes = "mail" | "phone" | "github" | "xing" | "linkedin" | "menu" | "back";

const iconMap: Record<IconTypes, FunctionComponent<SVGProps<SVGSVGElement>>> = {
  mail: MailIcon,
  phone: PhoneIcon,
  github: GithubIcon,
  xing: XingIcon,
  linkedin: LinkedInIcon,
  menu: MenuIcon,
  back: BackIcon,
};

interface IProps {
  name: IconTypes;
}

interface IStyledIconProps {
  size?: number;
}

type CombinedProps = IProps & Omit<React.SVGProps<SVGSVGElement>, "ref">;

const ForwardedIcon = React.forwardRef(({ name, ...props }: CombinedProps, ref: React.Ref<SVGSVGElement>) => {
  const IconComponent = iconMap[name];
  return <IconComponent {...props} ref={ref} />;
});

ForwardedIcon.displayName = "Icon";

const Icon = styled(ForwardedIcon)<IStyledIconProps>`
  min-width: ${(props) => props.size || 28}px;
  min-height: ${(props) => props.size || 28}px;
  max-width: ${(props) => props.size || 28}px;
  max-height: ${(props) => props.size || 28}px;
`;

export default Icon;
