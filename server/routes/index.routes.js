import {Router} from 'express'
import axios from 'axios'
import {BASE_URL} from '../config.js'
import cors from 'cors'

const router = Router()

router.get("/products", cors(), async (req,res) => {
    await axios.get(BASE_URL + "/sites/MLA/search", {params: {q: req.query.search}} )
    .then(response => {
        res.send(response.data)
    })
    .catch(err =>{
        if(err.response){
            let{ status, statusText } = err.response;
            res.status(status).send(statusText);
        } else res.status(404).send(err)
    })
})

router.get("/products/:id", cors(), async (req,res) => {
    await axios.get(`${BASE_URL}/items/${req.params.id}`)
    .then(response => {
        res.send(response.data)
    })
    .catch(err =>{
        if(err.response){
            let{ status, statusText } = err.response;
            res.status(status).send(statusText);
        } else res.status(404).send(err)
    })
})

router.get("/products/:id/description", cors(), async (req,res) => {
    await axios.get(`${BASE_URL}/items/${req.params.id}/description`)
    .then(response => {
        res.send(response.data)
    })
    .catch(err =>{
        if(err.response){
            let{ status, statusText } = err.response;
            res.status(status).send(statusText);
        } else res.status(404).send(err)
    })
})

export default router;