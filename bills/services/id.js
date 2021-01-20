import Bill from './../schemas/bill.js'

export default (req, res) => {
    Bill
        .findById(req.params.id)
        .then((data) => {
            if (!data) {
                res.status(404).json({
                    status: false,
                    data: {}
                })
            }
            return res.status(200).json({
                status: true,
                data: data
            })
        })
        .catch((err) => {
            res.status(500).json({
            status: false,
            data: {}
        })})
}