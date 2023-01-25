export interface Project {
    name: string,
    description: string,
    mainFuctions: string[],
    mainTechnologies: string[],
    images: ImageProject[],
    links: LinkProject[],
    subDirectory: string,
};

export interface LinkProject {
    name: string,
    url: string,
    type: "git" | "site" | "download"
}

export interface ImageProject {
    name: string,
    label: string,
}