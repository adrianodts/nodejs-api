import Bill from './../schemas/bill.js'

export default (req, res) => {
    Bill
        .find({})
        .populate('category')
        .then((bills) => {
            if (!bills || !bills.length) {
                res.status(404).json({status: false, data: []})    
            }
            return res.status(200).json({status: true, data: bills})
        })
        .catch(err => res.status(500).json({
            status: false,
            data: []
        }))
}