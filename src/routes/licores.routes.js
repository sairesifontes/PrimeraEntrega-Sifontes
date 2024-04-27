import { Router } from 'express';
import licorManager from '../managers/licorManager.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { limit } = req.query;
    const licores = await licorManager.getLicores(limit);
    res.status(200).json(licores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.get('/:lid', async (req, res) => {
  try {
    const { lid } = req.params;
    const licor = await licorManager.getLicorById(parseInt(lid));
    if (!licor) {
      res.status(404).json({ message: `No se encontró el licor con el ID ${lid}` });
    } else {
      res.status(200).json(licor);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.post('/', async (req, res) => {
  try {
    const licor = req.body;
    const newLicor = await licorManager.addLicor(licor);
    res.status(201).json(newLicor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.put('/:lid', async (req, res) => {
  try {
    const { lid } = req.params;
    const licor = req.body;
    await licorManager.updateLicor(parseInt(lid), licor);
    res.status(200).json({ message: `Licor con el ID ${lid} actualizado correctamente` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.delete('/:lid', async (req, res) => {
  try {
    const { lid } = req.params;
    await licorManager.deleteLicor(parseInt(lid));
    res.status(200).json({ message: `Licor con el ID ${lid} eliminado correctamente` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

export default router;