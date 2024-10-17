"use client";

import {DocumentDuplicateIcon, HomeIcon, UserGroupIcon,} from "@heroicons/react/24/outline";
import Link from "next/link";
import {usePathname} from "next/navigation";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Accueil", href: "/", icon: HomeIcon },
  { name: "Compétences", href: "/competences", icon: DocumentDuplicateIcon },
  { name: "Projets", href: "/projets", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        let classLine = "navLine"
        if (pathname===link.href) {
          classLine = "navLineSelect"
        }
        return (
          <Link key={link.name} href={link.href} class={classLine}>
            <LinkIcon class="navIcon" />
            <p>&nbsp;{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
