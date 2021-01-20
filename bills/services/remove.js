import Bill from './../schemas/bill.js'

export default (req, res) => {
    Bill
        .findByIdAndRemove(req.params.id)
        .then(() => res.status(204).end())
        .catch(err => res.status(500).json({
            status: false,
            data: {}
        }))
}