const React = require('react')
const Def = require("..default/")

function edit_form(data) {
    return (
        <main>
        <h1>Edit a new Place</h1>
        <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
            <div className='form-group'>
                <label htmlFor="name">Place Name</label>
                <input value={data.place.name} className='form-control' name='name' id='name' required />
            </div>
            <div className='form-group'>
                        <label htmlFor='founded'>Founded Year</label>
                        <input className='form-control' id='founded' name='founded' ></input>
                    </div>
            <div className='form-group'>
                <label htmlFor="pic">Place Pic</label>
                <input className='form-control' type='url' name='pic' id='pic' />
            </div>
            <div className='form-group'>
                <label htmlFor="city">Place City</label>
                <input className='form-control' name='city' id='city' />
            </div>
            <div className='form-group'>
                <label htmlFor="state">Place State</label>
                <input className='form-control' name='state' id='state' />
            </div>
            <div className='form-group'>
                <label htmlFor="cuisines">Place Cuisines</label>
                <input className='form-control' name='cuisines' id='cuisines' required />
            </div>
            <button className='btn btn-primary' type='submit' >Add Place</button>
        </form>
    </main>
    )
}




module.exports = edit_form