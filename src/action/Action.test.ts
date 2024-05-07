import { describe, expect, jest, test } from '@jest/globals'
import Action from './Action'

describe('Action unit tests', () => {

	test('Should be able to instance a new action', async () => {

		const action = new Action({
			id: '1',
			name: 'action-1',
			buttonName: 'Approve',
			buttonIcon: 'icon-1-icon',
			buttonId: 'icon-1-id',
			buttonClass: 'icon-1-class'
		})

		expect(action.id).toBe('1')
		expect(action.name).toBe('action-1')
		expect(action.buttonName).toBe('Approve')
		expect(action.buttonIcon).toBe('icon-1-icon')
		expect(action.buttonId).toBe('icon-1-id')
		expect(action.buttonClass).toBe('icon-1-class')

	})

	test('Should be able to create a new action without handlers and execute it', async () => {

		const action = new Action({
			id: '1',
			name: 'action-1',
			buttonName: 'Approve'
		})

		const actionSpy = jest.spyOn(action, 'execute')

		expect(action.buttonIcon).toBeNull()
		expect(action.buttonId).toBeNull()
		expect(action.buttonClass).toBeNull()

		await action.execute()

		expect(actionSpy).toHaveBeenCalledTimes(1)

	})

})