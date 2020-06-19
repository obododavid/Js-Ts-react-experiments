import { useStyles } from "./style"

export interface EnhancedTableProps {
    classes: ReturnType<typeof useStyles>
    numSelected: number
    onRequestSort: (
        event: React.MouseEvent<unknown>,
        property: keyof Data
    ) => void
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
    order: Order
    orderBy: string
    rowCount: number
}

export type Order = "asc" | "desc"

export interface Data {
    calories: number
    carbs: number
    fat: number
    name: string
    protein: number
}

export interface HeadCell {
    disablePadding: boolean
    id: keyof Data
    label: string
    numeric: boolean
}

export interface EnhancedTableToolbarProps {
    numSelected: number
}
