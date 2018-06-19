module.exports.index = (req, res) => {
    if (req.originalUrl === '/' && req.method === 'GET') {
        res.render('home/home')
    } else if (req.originalUrl === '/goodluck' && req.method === 'GET') {
        res.render('ztmm/goodluck')
    } else {
        return true
    }
}
