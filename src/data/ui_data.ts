import Genre1 from "@/components/layout/genres/Genre1";
import Genre2 from "@/components/layout/genres/Genre2";
import Genre3 from "@/components/layout/genres/Genre3";
import Genre4 from "@/components/layout/genres/Genre4";
import Genre5 from "@/components/layout/genres/Genre5";
import Genre6 from "@/components/layout/genres/Genre6";
import Genre7 from "@/components/layout/genres/Genre7";
import Genre8 from "@/components/layout/genres/Genre8";
import Intro1 from "@/components/layout/intro/Intro1";
import Intro2 from "@/components/layout/intro/Intro2";
import Intro3 from "@/components/layout/intro/Intro3";
import Intro4 from "@/components/layout/intro/Intro4";
import Intro5 from "@/components/layout/intro/Intro5";
import Taxonomy1 from "@/components/layout/taxonomy/Taxonomy1";
import Taxonomy10 from "@/components/layout/taxonomy/Taxonomy10";
import Taxonomy11 from "@/components/layout/taxonomy/Taxonomy11";
import Taxonomy12 from "@/components/layout/taxonomy/Taxonomy12";
import Taxonomy13 from "@/components/layout/taxonomy/Taxonomy13";
import Taxonomy14 from "@/components/layout/taxonomy/Taxonomy14";
import Taxonomy15 from "@/components/layout/taxonomy/Taxonomy15";
import Taxonomy16 from "@/components/layout/taxonomy/Taxonomy16";
import Taxonomy17 from "@/components/layout/taxonomy/Taxonomy17";
import Taxonomy18 from "@/components/layout/taxonomy/Taxonomy18";
import Taxonomy19 from "@/components/layout/taxonomy/Taxonomy19";
import Taxonomy2 from "@/components/layout/taxonomy/Taxonomy2";
import Taxonomy20 from "@/components/layout/taxonomy/Taxonomy20";
import Taxonomy21 from "@/components/layout/taxonomy/Taxonomy21";
import Taxonomy22 from "@/components/layout/taxonomy/Taxonomy22";
import Taxonomy3 from "@/components/layout/taxonomy/Taxonomy3";
import Taxonomy4 from "@/components/layout/taxonomy/Taxonomy4";
import Taxonomy5 from "@/components/layout/taxonomy/Taxonomy5";
import Taxonomy6 from "@/components/layout/taxonomy/Taxonomy6";
import Taxonomy7 from "@/components/layout/taxonomy/Taxonomy7";
import Taxonomy8 from "@/components/layout/taxonomy/Taxonomy8";
import Taxonomy9 from "@/components/layout/taxonomy/Taxonomy9";

export const introViews = [
    Intro1,
    Intro2,
    Intro3,
    Intro4,
    Intro5,
];

export const genreViews = [
    Genre1,
    Genre2,
    Genre3,
    Genre4,
    Genre5,
    Genre6,
    Genre7,
    Genre8,
];

export const taxonomyViews = [
    Taxonomy1,
    Taxonomy2,
    Taxonomy3,
    Taxonomy4,
    Taxonomy5,
    Taxonomy6,
    Taxonomy7,
    Taxonomy8,
    Taxonomy9,
    Taxonomy10,
    Taxonomy11,
    Taxonomy12,
    Taxonomy13,
    Taxonomy14,
    Taxonomy15,
    Taxonomy16,
    Taxonomy17,
    Taxonomy18,
    Taxonomy19,
    Taxonomy20,
    Taxonomy21,
    Taxonomy22,
];

export const contentViews = [
    ...introViews,
    ...genreViews,
    ...taxonomyViews,
]

export const controlGroupItems = [
    {
        label: "Intro",
        length: introViews.length,
    },
    {
        label: "Genres",
        length: genreViews.length,
    },
    {
        label: "Taxonomy",
        length: taxonomyViews.length,
    },
];

export const footerMenus = [
    {
        title: 'About',
        link: 'https://pudding.cool/about',
    },
    {
        title: 'Facebook',
        link: 'https://facebook.com/pudding.viz/',
    },
    {
        title: 'Twitter',
        link: 'https://twitter.com/puddingviz/',
    },
    {
        title: 'Instagram',
        link: 'https://www.instagram.com/the.pudding',
    },
    {
        title: 'Patreon',
        link: 'https://patreon.com/thepudding/',
    },
    {
        title: 'Privacy',
        link: 'https://pudding.cool/privacy/',
    },
    {
        title: 'Newsletter',
        link: 'https://thepuddingmail.substack.com/',
    },
    {
        title: 'RSS',
        link: 'https://pudding.cool/feed/index.xml',
    },
]