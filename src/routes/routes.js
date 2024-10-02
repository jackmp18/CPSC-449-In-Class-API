import { Router } from 'express';
import { getHandler } from '../controllers/read';

const router = Router();

router.get("/:id", getHandler);
router.post("/")
router.put("/:id")
router.delete("/:id")

export default router;