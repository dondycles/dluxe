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
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    // <nav className="flex flex-row items-center justify-between sm:justify-center p-4 gap-4">
    //   <Image src={icon} alt="D'luxe" width={32} height={32} />
    //   <div className="sm:flex flex-row gap-4 hidden">
    //     <ButtonGroup
    //       variant="shadow"
    //       color="primary"
    //       radius="full"
    //       className="text-black"
    //     >
    //       <Button className="font-semibold text-xs">Home</Button>
    //       <Dropdown>
    //         <DropdownTrigger>
    //           <Button
    //             endContent={<FaCaretDown />}
    //             className="font-semibold text-xs"
    //           >
    //             About Us
    //           </Button>
    //         </DropdownTrigger>
    //         <DropdownMenu
    //           color="primary"
    //           variant="shadow"
    //           aria-label="About Us"
    //         >
    //           <DropdownItem key="profile">Company Profile</DropdownItem>
    //           <DropdownItem key="team">Team</DropdownItem>
    //         </DropdownMenu>
    //       </Dropdown>
    //       <Dropdown>
    //         <DropdownTrigger>
    //           <Button
    //             endContent={<FaCaretDown />}
    //             className="font-semibold text-xs"
    //           >
    //             Resources
    //           </Button>
    //         </DropdownTrigger>
    //         <DropdownMenu
    //           color="primary"
    //           variant="shadow"
    //           aria-label="Resources"
    //         >
    //           <DropdownItem key="educ">Educational Resources</DropdownItem>
    //           <DropdownItem key="investment">Investment Sectors</DropdownItem>
    //         </DropdownMenu>
    //       </Dropdown>
    //       <Button className="font-semibold text-xs">Our Transparency</Button>
    //     </ButtonGroup>
    //     <Button
    //       className="text-xs font-semibold"
    //       color="primary"
    //       variant="shadow"
    //       radius="full"
    //       endContent={<BiSolidLogInCircle />}
    //     >
    //       Log In
    //     </Button>
    //   </div>
    //   <Button
    //     onClick={() => {
    //       setOpenMenu((prev) => !prev);
    //     }}
    //     className={`sm:hidden text-base font-semibold z-[100]`}
    //     color="primary"
    //     variant="shadow"
    //     isIconOnly
    //   >
    //     <GiHamburgerMenu />
    //   </Button>
    //   <AnimatePresence mode="popLayout">
    //     {openMenu && (
    //       <m.div
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         exit={{ opacity: 0 }}
    //         className="fixed top-0 left-0 w-full h-full bg-background/10 backdrop-blur-sm flex items-center justify-center flex-col gap-4 p-4 z-50"
    //         onClick={() => {
    //           setOpenMenu(false);
    //         }}
    //       >
    //         <Accordion className="">
    //           <AccordionItem key="1" aria-label="Home" title="Home">
    //             1
    //           </AccordionItem>
    //           <AccordionItem key="2" aria-label="About Us" title="About Us">
    //             2
    //           </AccordionItem>
    //           <AccordionItem key="3" aria-label="Resources" title="Resources">
    //             3
    //           </AccordionItem>
    //           <AccordionItem
    //             key="4"
    //             aria-label="Our Transparency"
    //             title="Our Transparency"
    //           >
    //             3
    //           </AccordionItem>
    //         </Accordion>
    //       </m.div>
    //     )}
    //   </AnimatePresence>
    // </nav>
    <Navbar shouldHideOnScroll>
      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand className="gap-2">
          <Image src={icon} alt="D'luxe" width={32} height={32} />
          <p className="font-bold text-inherit">D'LUXE</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4 mx-auto" justify="center">
        <Image src={icon} alt="D'luxe" width={32} height={32} />
        <ButtonGroup
          variant="shadow"
          color="primary"
          radius="full"
          className="text-black"
        >
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
              <Button key="profile">Company Profile</Button>
              <Button key="team">Team</Button>
            </div>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Resources" title="Resources">
            <div className="flex flex-col gap-2">
              <Button key="educ">Educational Resources</Button>
              <Button key="investment">Investment Sectors</Button>
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
