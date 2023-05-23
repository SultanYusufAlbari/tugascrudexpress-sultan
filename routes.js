const express = require('express');
const bodyParser = require('body-parser');
const Biodata = require('./biodata');

const router = express.Router();

// Menggunakan body-parser untuk mengurai permintaan dengan tipe konten 'application/json'
router.use(bodyParser.json());

// Endpoint Create Biodata
router.post('/biodata', (req, res) => {
    console.log(req.body);
  const { nama, tempatLahir, tanggalLahir, alamat } = req.body;

  Biodata.create({ nama, tempatLahir, tanggalLahir, alamat })
    .then((biodata) => {
      res.status(201).json(biodata);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Endpoint Read Biodata
router.get('/biodata/:id', (req, res) => {
  const { id } = req.params;

  Biodata.findByPk(id)
    .then((biodata) => {
      if (!biodata) {
        res.status(404).json({ error: 'Biodata not found' });
      } else {
        res.json(biodata);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Endpoint Update Biodata
router.put('/biodata/:id', (req, res) => {
  const { id } = req.params;
  const { nama, tempatLahir, tanggalLahir, alamat } = req.body;

  Biodata.findByPk(id)
    .then((biodata) => {
      if (!biodata) {
        res.status(404).json({ error: 'Biodata not found' });
      } else {
        biodata.nama = nama;
        biodata.tempatLahir = tempatLahir;
        biodata.tanggalLahir = tanggalLahir;
        biodata.alamat = alamat;

        biodata
          .save()
          .then((updatedBiodata) => {
            res.json(updatedBiodata);
          })
          .catch((error) => {
            res.status(500).json({ error: error.message });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Endpoint Delete Biodata
router.delete('/biodata/:id', (req, res) => {
  const { id } = req.params;

  Biodata.findByPk(id)
    .then((biodata) => {
      if (!biodata) {
        res.status(404).json({ error: 'Biodata not found' });
      } else {
        biodata
          .destroy()
          .then(() => {
            res.sendStatus(204);
          })
          .catch((error) => {
            res.status(500).json({ error: error.message });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
