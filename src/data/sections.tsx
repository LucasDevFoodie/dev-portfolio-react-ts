export type Link = {
    id: number,
    name: string,
    href: string
}

const Links:Link[] = [
    {
        id: 1,
        name: 'About',
        href: "#about"
    },
    {
        id: 2,
        name: 'Featured',
        href: "#featured"
    },
    {
        id: 3,
        name: 'Contact',
        href: "#contact"
    }
];

export default Links