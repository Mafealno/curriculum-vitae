export interface OutputAction {
    type: "ADD_ACTION",
    payload: string
}

export interface OutputState {
    actions: { date: Date, output: string, ms: string }[]
}