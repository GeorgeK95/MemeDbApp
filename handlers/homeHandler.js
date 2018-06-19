module.exports.index = (req, res) => {
    if (req.originalUrl === '/' && req.method === 'GET') {
        res.render('home/home')
    } else if (req.originalUrl === '/greeting' && req.method === 'GET') {
        res.render('ztmm/greeting')
    } else {
        return true
    }
}
