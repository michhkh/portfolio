import { TextAndContent } from "../textAndContent/TextAndContent";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarMenu,
  SidebarLink,
  SidebarWrapper,
} from "./styles/StyledSidebarElements";

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            {TextAndContent.sidebar.home}
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>
            {TextAndContent.sidebar.projects}
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            {TextAndContent.sidebar.about}
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
