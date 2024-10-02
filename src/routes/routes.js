import { Router } from 'express';
import myLogger from '../middleware/middleware';

const router = Router();

router.get("/:id", myLogger)
router.post("/", myLogger)
router.put("/:id", myLogger)
router.delete("/:id", myLogger)

export default router;