const router = require('express').Router()
//const places = require('../models/places')
const db = require('../models')

//ROUTE TO: READ the /places index
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', { places })
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
    
})

//ROUTE TO: READ the "Add a Place" form
router.get('/new', (req, res) => {
    res.render('places/new')
})

//ROUTE TO: READ the "Place in detail" page
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
        console.log(place.comments)
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

//ROUTE TO: DELETE a place
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(place => {
            if (!place) {
                return res.status(404).render('error404'); // Handle non-existent ID
            }
            res.redirect('/places'); // Redirect after successful deletion
        })
        .catch(err => {
            console.log('err', err);
            res.status(500).render('error404'); // Internal Server Error
        });
});


//ROUTE TO: ACCESS the "Edit a Place" form
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/edit', { place })
    })
    .catch(err => {
        res.render('error404')
    })
})

//ROUTE TO: CREATE a new Place
//NOT FUNCITONAL ;(
router.post('/', (req, res) => {
    console.log(req.body)

    db.Place.create(req.body)
    .then(() => {
        res.redirect("/places")
    })
    .catch(err =>{
        console.log('Validation Error: ', err)
        res.render('error404')
    })
})

//ROUTE TO: UPDATE a Place
//IT'S FUNCTIONAL AS IT'S PERFORMING THE ".then()" AND NOT THE ".catch()", BUT THERE'S NO UPDATE IN THE DATABASE( >:[ )
router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

//ROUTE TO: ACCESS the "New Comment" form
//NOT FUNCITONAL ;(
router.get('/:id/comment', (req, res) => {
    res.render('places/newcomment')
})

//ROUTE TO: CREATES a new comment
router.post('/:id/comment', (req, res) => {
    console.log(req.body)
    db.Place.findById(req.params.id)
    .then(place => {
        db.Comment.create(req.body)
        .then(comment => {
            place.comments.push(comment.id)
            place.save()
            .then(() => {
                res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})



module.exports = router