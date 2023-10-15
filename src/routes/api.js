const express =require('express');
const StudentsController=require("../controllers/StudentsController");
const WorksController=require('../controllers/WorksController')

const AuthVerifyMiddleware=require("../middleware/AuthVerifyMiddleware");


const router =express.Router();

// Router for Students Model
router.post("/createStudent",StudentsController.createStudentProfile);
router.post("/loginStudentProfile", StudentsController.login);
router.get("/readStudent",StudentsController.readStudentProfile);
router.get("/deleteStudent/:id",StudentsController.deleteStudentProfile);
router.post("/updateStudent/:id",StudentsController.updateStudentProfile);


// Router for Works Model
router.post("/createWorksProfile",WorksController.create);
router.post("/WorksProfilelogin", WorksController.login);
router.get("/readWorksProfile", AuthVerifyMiddleware, WorksController.read);
router.get("/deleteWorksProfile/:id", AuthVerifyMiddleware, WorksController.delete);
router.post("/updateWorksProfile/:id", AuthVerifyMiddleware, WorksController.update);


module.exports=router;






































module.exports=router;