import Genre1 from "@/components/layout/genres/Genre1";
import Genre2 from "@/components/layout/genres/Genre2";
import Genre3 from "@/components/layout/genres/Genre3";
import Genre4 from "@/components/layout/genres/Genre4";
import Intro1 from "@/components/layout/intro/Intro1";
import Intro2 from "@/components/layout/intro/Intro2";
import Intro3 from "@/components/layout/intro/Intro3";
import Intro4 from "@/components/layout/intro/Intro4";
import Intro5 from "@/components/layout/intro/Intro5";

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
    Genre2,
    Genre2,
    Genre2,
    Genre2,
];

export const taxonomyViews = [
    Intro1,
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
