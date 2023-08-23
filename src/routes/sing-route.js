const express = require('express');
const router = express.Router();
const SingController = require('../controllers/sing-controller');

router.get('/',SingController.findAllSings); // GET /sing/
router.get('/:singNo', SingController.findSingBySingNo); // GET /sing/1
router.post('/', SingController.registNewSing);
router.put('/', SingController.updateSingBySingNo);
router.delete('/:singNo', SingController.deleteSingBySingNo);

module.exports = router;