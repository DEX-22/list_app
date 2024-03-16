type roomDate = string | Date

export interface IRoom{
    id: number,
    name: string,
    created_at:roomDate,
    created_by: number | null
}