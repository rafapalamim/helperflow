import ActionHandler from './ActionHandler'

export type ActionHandlerProps = {
    name: string,
    action: ActionHandler
}

export type ActionProps = {
    id: string,
    name: string,
    buttonName: string,
    buttonIcon?: string | null,
    buttonId?: string | null,
    buttonClass?: string | null,
    handlers?: ActionHandlerProps | ActionHandlerProps[]
}

export default class Action {

	private readonly _id: string
	private _name: string
	private _buttonName: string
	private _buttonIcon: string | null
	private _buttonId: string | null
	private _buttonClass: string | null
	private _handlers: Map<string, ActionHandler>


	constructor(props: ActionProps) {
		this._id = props.id
		this._name = props.name
		this._buttonName = props.buttonName
		this._buttonIcon = props.buttonIcon ?? null
		this._buttonId = props.buttonId ?? null
		this._buttonClass = props.buttonClass ?? null
		this._handlers = new Map<string, ActionHandler>()

		if(props.handlers) {
			this.addHandler(props.handlers)
		}
	}

	get id() : string {
		return this._id
	}

	get name() : string {
		return this._name
	}

	get buttonName() : string {
		return this._buttonName
	}

	get buttonIcon() : string | null {
		return this._buttonIcon
	}

	get buttonId() : string | null {
		return this._buttonId
	}

	get buttonClass() : string | null {
		return this._buttonClass
	}

	addHandler(handler: ActionHandlerProps | ActionHandlerProps[]) : void {

		const newList = !Array.isArray(handler) ? [handler] : handler

		if(newList) {
			newList.forEach(handler => {
				this._handlers.set(handler.name, handler.action)
			})
		}

	}

	async execute() : Promise<void> {
		if(this._handlers.size > 0) {
			this._handlers.forEach(async (handler) => {
				await handler.execute()
			})
		}
	}

}