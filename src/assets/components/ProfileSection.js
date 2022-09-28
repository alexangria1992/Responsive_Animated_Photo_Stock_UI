import React from "react";
import styled from "styled-components";
import AvatarIcon from "../images/icons/Avatar.svg";
import NotifIcon from "../images/icons/Notification.svg";
import ChatIcon from "../images/icons/Chat.svg";
import Img from "./styled/Img.styled";
import { Colors, Devices } from "../Theme";

export default function ProfileSection() {
  return (
    <ProfileSectionEl>
      <Image src={ChatIcon} width="24px" />
      <Notif>
        <Image src={NotifIcon} width="24px" />
      </Notif>

      <AvatarImage src={AvatarIcon} width="38px" />
    </ProfileSectionEl>
  );
}

const ProfileSectionEl = styled.div`
  /* background-color: green; */
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 12 / span 1;

  padding: 0 0.5rem;

  @media ${Devices.MobileL} {
    grid-column: 12 / span 1;
  }
  @media ${Devices.Tablet} {
    grid-column: 11 / span 2;
    column-gap: 1rem;
  }

  @media ${Devices.Laptop} {
    justify-content: flex-end;
    column-gap: 2rem;
  }
`;

const Image = styled(Img)`
  display: none;
  cursor: pointer;

  @media ${Devices.Tablet} {
    display: inline-block;
  }
`;

const AvatarImage = styled(Img)`
  cursor: pointer;
`;

const Notif = styled.span`
  position: relative;
  :before {
    content: "2";
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(30%, -50%);
    display: none;
    justify-content: center;
    align-items: center;
    font-size: 0.65rem;
    width: 15px;
    height: 15px;
    color: ${Colors.Background};
    background-color: ${Colors.Black};
    border-radius: 50%;
    border: 2px solid ${Colors.Background};

    @media ${Devices.Tablet} {
      display: flex;
    }
  }
`;
