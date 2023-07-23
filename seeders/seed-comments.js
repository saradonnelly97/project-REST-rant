const db = require('../models')

// To use await, we need an async function.
async function seed() {
    // Get the place, H-Thai-ML
    let place = await db.Place.findOne({ name: 'The O-Curry-ence' })

    // Create a fake sample comment.
    let comment = await db.Comment.create({
        author: 'Famished Frandle',
        rant: false,
        stars: 5.0,
        content: 'SPICCCCYYYYYYYYYY!!!!'
    })

    // Add that comment to the place's comment array.
    place.comments.push(comment.id)

    //save the place now that it has comment
    await place.save()
    
    // Exit the program
    process.exit()
}

seed()
