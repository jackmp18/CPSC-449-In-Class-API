import { Router } from 'express';

import myLogger from '../middleware/index.js';
import { getHandler, postHandler, updateHandler, deleteHandler } from '../controllers/index.js';

const router = Router();

router.get("/:id", myLogger, getHandler);
router.post("/", myLogger, postHandler);
router.put("/:id", myLogger, updateHandler);
router.delete("/:id", myLogger, deleteHandler);

export default router;