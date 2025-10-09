import express from 'express';
import axios from 'axios';
import { config } from 'dotenv';
import headers from '../lib/auth.js';

const router = express.Router();
config();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.github.com/repos/ReVanced/GmsCore/releases', { headers });
      
    const data = response.data[0];
    let assets = []
    
    for(let i = 0; i < data.assets.length; i++) {
      assets.push({
        filename: data.assets[i].name,
        size: data.assets[i].size,
        download_url: data.assets[i].browser_download_url,
        type: data.assets[i].content_type
      })
    }
   // console.log(assets)
    res.json({
      url: data.html_url,
      body: data.body,
      assets
    });
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch releases' });
  }
});

export default router;