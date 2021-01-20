import cepPromise from 'cep-promise'

export default (req, res) => {
    let cep = req.params.cep
    cepPromise(cep).then(result => res.status(200).json({ status: true, data: result }))
    //return res.json({ rua: "Teste 123", cep: cep })
}