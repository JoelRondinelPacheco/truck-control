export type TaskEntity = {
    id: string,
    patente: string,
    name: string,
    type: string,
    isRepair: boolean,
    isDone: boolean,
    dateStr: string,
    date: Date,
    inReport: boolean,
    isSaved: boolean,
    isEditing: boolean,
}