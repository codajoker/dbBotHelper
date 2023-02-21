const { Router } = require('express')
const {User} = require('../schemas/schema')

const storesController = Router()

storesController.get('/', async (req, res, next) => {
	try {
		const allStores = await User.find(req.body)

		res.status(200).send(allStores)
	} catch (err) {
		next(err)
	}
})

storesController.get('/:id', async (req, res, next) => {
	try {
		const store = await User.findById(req.params.id)

		res.status(200).send(store)
	} catch (err) {
		next(err)
	}
})

storesController.get('/chatId/:chatId', async (req, res, next) => {
	try {
		const store = await User.findOne(req.params)

		res.status(200).send(store)
	} catch (err) {
		next(err)
	}
})

storesController.post('/', async (req, res, next) => {
	try {
		const existing = await User.findOne(req.body)

		if (existing) return res.status(204).send()

		const newStore = await User.create(req.body)

		res.status(201).send(newStore)
	} catch (err) {
		next(err)
	}
})

storesController.patch('/chatId/:chatId', async (req, res, next) => {
	try {
		const updatedStore = await User.findOneAndUpdate(req.params, req.body, { new: true })

		res.status(200).send(updatedStore)
	} catch (err) {
		next(err)
	}
})

storesController.delete('/chatId/:chatId', async (req, res, next) => {
	try {
		const deletedStore = await User.findOneAndDelete(req.params)

		res.status(200).send(deletedStore)
	} catch (err) {
		next(err)
	}
})

module.exports = storesController