const React = require('react')
const Def = require("../default")

function new_form() {
    return (
        <Def>
            <main>
                <h1>Add a new Place</h1>
                <form method="POST" action="/places">
                    <div className='form-group'>
                        <label htmlFor="name">Place Name</label>
                        <input className='form-control' name='name' id='name' required />
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor="founded">Founded Year</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="founded" 
                            name="founded" 
                            value={new Date().getFullYear()} />
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
        </Def>
    )
}



module.exports = new_form