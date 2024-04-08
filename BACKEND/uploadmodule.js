const multer=require('multer')

const storefile = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./Uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  function fileFilter(req, file, cb) {
    if (file.mimetype.startsWith("image")) {
      return cb(null, true);
      // return cb(err, false);
    } else {
      return cb(new Error("something went wrong"), false);
    }
  }
  
  const upload = multer({ storage: storefile, fileFilter: fileFilter });
  
  module.exports = upload;