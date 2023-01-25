export interface Experience {
    companyName: string,
    corporateName: string,
    office: string,
    startDate: Date,
    endDate?: Date,
    mainTechnologies: string[]
    functions: ExperienceFuction[]
}

export interface ExperienceFuction {
    description: string
}