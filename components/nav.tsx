"use client";

import Image from "next/image";
import icon from "@/public/icon.png";
import {
  Button,
  ButtonGroup,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import { FaCaretDown } from "react-icons/fa";
import { BiSolidLogInCircle } from "react-icons/bi";
export default function Nav() {
  return (
    <Navbar className=" py-4" shouldHideOnScroll={true}>
      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand className="gap-2">
          <Image src={icon} alt="D'luxe" width={32} height={32} />
          <p className="font-bold text-inherit">D'LUXE</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex gap-4 mx-auto text-white"
        justify="center"
      >
        <Image src={icon} alt="D'luxe" width={32} height={32} />
        <ButtonGroup variant="shadow" color="primary" radius="full">
          <Button className="font-semibold text-xs">Home</Button>
          <Dropdown>
            <DropdownTrigger>
              <Button
                endContent={<FaCaretDown />}
                className="font-semibold text-xs"
              >
                About Us
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              color="primary"
              variant="shadow"
              aria-label="About Us"
            >
              <DropdownItem key="profile">Company Profile</DropdownItem>
              <DropdownItem key="team">Team</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger>
              <Button
                endContent={<FaCaretDown />}
                className="font-semibold text-xs"
              >
                Resources
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              color="primary"
              variant="shadow"
              aria-label="Resources"
            >
              <DropdownItem key="educ">Educational Resources</DropdownItem>
              <DropdownItem key="investment">Investment Sectors</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button className="font-semibold text-xs">Our Transparency</Button>
        </ButtonGroup>
        <Button
          className="text-xs font-semibold"
          color="primary"
          variant="shadow"
          radius="full"
          endContent={<BiSolidLogInCircle />}
        >
          Log In
        </Button>
      </NavbarContent>
      <NavbarMenu>
        <Accordion>
          <AccordionItem hideIndicator key="1" aria-label="Home" title="Home" />
          <AccordionItem key="2" aria-label="About Us" title="About Us">
            <div className="flex flex-col gap-2">
              <Button key="profile" color="primary" variant="shadow">
                Company Profile
              </Button>
              <Button key="team" color="primary" variant="shadow">
                Team
              </Button>
            </div>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Resources" title="Resources">
            <div className="flex flex-col gap-2">
              <Button key="educ" color="primary" variant="shadow">
                Educational Resources
              </Button>
              <Button key="investment" color="primary" variant="shadow">
                Investment Sectors
              </Button>
            </div>
          </AccordionItem>
          <AccordionItem
            hideIndicator
            key="4"
            aria-label="Our Transparency"
            title="Our Transparency"
          />
        </Accordion>
      </NavbarMenu>
    </Navbar>
  );
}
