const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404 Page</h1>
                <p>Sorry, Page not found. Please try again :p</p>
                <div>
                    <img src='public\images\300.jpg' alt='sad-404-cat-pic' />
                </div>
            </main>
        </Def>
    )
}



module.exports = error404