function filePath(path,staticPath){
	return function(req,res,next){
		req.filePath = path
		req.fileStaticPath = staticPath
		next()
	}
}

module.exports = filePath