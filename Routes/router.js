const express = require('express')
const productsController = require('../Controller/productsController')

const usersController = require('../Controller/usersController')
const jwtMiddleware = require('../Middleware/jwtMiddleware')
const cartController = require('../Controller/cartController')
const wishlistController = require('../Controller/wishlistController')


const router = new express.Router()

//get all products
router.get('/products/all',productsController.getAllproductsController)

//register
router.post('/register',usersController.registerControlller)

//login
router.post('/login',usersController.loginController)

//get a product
router.get('/get-product/:id',productsController.getAProductController)

//add to wishlist
router.post('/wishlist/add',jwtMiddleware,wishlistController.addToWishlistController)

//get from wishlist
router.get('/wishlist/allproduct',jwtMiddleware,wishlistController.getfromWishlistController)

//remove from wishlist
router.delete('/wishlist/removeItem/:id',jwtMiddleware,wishlistController.removeWishlistController)

//add to cart
router.post('/cart/add',jwtMiddleware,cartController.addToCartController)

//get cart item
router.get('/cart/allproduct',jwtMiddleware,cartController.getitemfromCartController)

//remove item from cart
router.delete('/cart/remove-item/:id',jwtMiddleware,cartController.removeItemController)

//increament cart
router.get('/cart/increment/:id',jwtMiddleware,cartController.incrementItem)

//decreament cart
router.get('/cart/decrement/:id',jwtMiddleware,cartController.decrementItem)

//empty cart
router.delete('/empty-cart',jwtMiddleware,cartController.emptyCartController)



module.exports = router