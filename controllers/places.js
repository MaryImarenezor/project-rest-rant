const router = require('express').Router()
//const places = require('../models/places')
const db = require('../models')


router.get('/', (req, res) => {
    //res.render('places/index', { places })
    //res.send('GET /places stub')
    
    db.Place.find()
    .then((places) => {
        res.render('places/index', { places })
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
    
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    /*
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', {place: places[id], id})
    }
    */
    //res.send('GET /places/:id stub')
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect('/places');
    })
    .catch(err => {
        console.log(err);
        res.render('error404');
    });
})

router.get('/:id/edit', (req, res) => {
    /*
    let id = Number(req.params.id)
    if(isNaN(id)) {
        res.render('error404')
    }
    else if(!places[id]) {
        res.render('error404')
    }
    else {
        res.render('/places/edit', {places: places[id]})
    }
    */
    //res.send('GET edit form stub')
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/edit', { place });
    })
    .catch(err => {
        console.log(err);
        res.render('error404');
    });
})

router.post('/', (req, res) => {
    //res.send('POST /places stub')
    /*
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }

    places.push(req.body)
    res.redirect('/places')
    */
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

router.put('/:id', (req, res) => {
    /*
    let id = Number(req.params.id)
    if(isNaN(id)) {
        res.render('error404')
    }
    else if(!places[id]) {
        res.render('error404')
    }
    else {
        if (!req.body.pic) {
            // Default image if one is not provided
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }

        res.redirect(`/places/${id}`)
    }
    */
    //res.send('PUT /places/:id stub')
    db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect(`/places/${req.params.id}`);
    })
    .catch(err => {
        console.log(err);
        res.render('error404');
    });
})



module.exports = router