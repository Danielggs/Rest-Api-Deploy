const z = require('zod')

const movieSchema= z.object({
    title:z.string({
        invalid_type_error: 'movie',
        required_error:"movie2"
    }),
    year: z.number().int().positive().min(1900).max(2025),
    director: z.string(),
    duration: z.number().int().positive(),
    rate: z.number().min(0).max(10).default(5),
    poster: z.string().url({
        message:'posster must be a valid url'
    }),
    genre: z.array(
        z.enum([
            "Drama",
            "Action",
            "Crime",
            "Adventure",
            "Sci-Fi",
            "Romance",
            "Animation",
            "Biography",
            "Fantasy"
            ])
    )

})

function validateMovies (object){
    return movieSchema.safeParse(object)
}

function validatePartialMovies(input){
    return movieSchema.partial().safeParse(input)
}

module.exports={
    validateMovies,
    validatePartialMovies
}