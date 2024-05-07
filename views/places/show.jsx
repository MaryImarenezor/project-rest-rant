const React = require('react')
const Def = require("../default")

function show(data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <h2>Rating</h2>
                <p>currently unrated</p>

                <h2>Comments</h2>
                <p>no comments yet!</p>

                <a href="" className="btn btn-warning">Edit</a>
                <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                    <button href={`/places/${data.id}/edit`} className='btn btn-danger' type='submit'>Delete</button>
                </form> 
            </main>
        </Def>
    )
}




module.exports = show