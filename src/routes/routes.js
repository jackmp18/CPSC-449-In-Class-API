import { Router } from 'express';
import updateHandler from '../controllers/update';

const router = Router();

router.get("/:id")
router.post("/")
router.put("/:id", updateHandler)
router.delete("/:id")

export default router;