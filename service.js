import express from 'express';

import { urlencoded } from 'body-parser';
import ejs from 'ejs';
//const express = require('express');

//const bodyParser = require('body-parser');
//const ejs = require('ejs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Ana sayfa, kullanıcıya iki sayıyı girmesi için bir form gösterir
app.get('/', (req, res) => {
  res.render('index');
});

// Formdan gelen sayıları topla ve sonucu göster
app.post('/topla', (req, res) => {
  const { sayi1, sayi2 } = req.body;

  if (isNaN(sayi1) || isNaN(sayi2)) {
    res.render('sonuc', { hata: 'Geçersiz sayılar' });
  } else {
    const toplam = Number(sayi1) + Number(sayi2);
    res.render('sonuc', { toplam });
  }
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} üzerinde çalışıyor`);
});
