import Categorie from './../schema/Category.js'

export default (req, res) => {

    Categorie
        .find({})
        .then((categories) => {
            if (!categories || !categories.length) {
                return res.status(404).json({ status: false, data: {} })
            }
            return res.status(200).json({ status: true, data: categories })
        })
        .catch(err => res.status(500).json({ status: false, data: {} }))
}