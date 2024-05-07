export default interface ActionHandler {
    execute<D>(data?: D): Promise<void>
}