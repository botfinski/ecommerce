import React from "react"
import Link from "next/link"
import { content } from "../../mockData/content"
import Logo from "../Logo/Logo"
import { styled, css } from "@mui/system"

interface Props {
  type: string
}

const Nav = styled("nav")<Props>`
  height: 80px;
  display: flex;
  align-items: center;

  & > ul {
    display: flex;
    list-style: none;
    gap: 35px;
    ${props =>
      props.type === "header" &&
      css`
        margin-left: 88px;
      `};
  }
`

const NavMenu: React.FC<Props> = ({ type }) => {
  return (
    <Nav type={type}>
      <Logo />
      <ul>
        {content.menuItems.map(item => (
          <li key={item.text}>
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </Nav>
  )
}

export default NavMenu
