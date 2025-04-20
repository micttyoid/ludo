export interface IPawn {
    id: string
    position: { x: number; y: number }
    move(newX: number, newY: number): void
}
