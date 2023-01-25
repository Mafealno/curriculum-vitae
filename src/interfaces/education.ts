export default interface Education {
    name: string,
    schoolName: string,
    schoolNameFull?: string,
    startDate: Date,
    endDate: Date,
    status: "Não iniciado" | "Em andamento" | "Concluído",
    achievements?: string[],

}