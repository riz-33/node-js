const putUser = (req, res) => {
    console.log("req", req.body)
    res.send({ status: 200 })
}

export default putUser;