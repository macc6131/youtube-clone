const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Mock videos database
const videos = [
  {id:'dQw4w9WgXcQ', title:'How I Built a YouTube Clone in 1 Hour', channel:'Code with You', views:'1.2M', thumb:'https://picsum.photos/seed/1/640/360'},
  {id:'jNQXAC9IVRw', title:'Beach Vibes - LoFi Mix', channel:'LoFi Girl', views:'856K', thumb:'https://picsum.photos/seed/2/640/360'},
  {id:'9bZkp7q19f0', title:'Learn Grid Layout Fast', channel:'CSS Masters', views:'430K', thumb:'https://picsum.photos/seed/3/640/360'},
  {id:'kJQP7kiw5Fk', title:'My Trip to New York 2026 Vlog', channel:'Travel Daily', views:'2.1M', thumb:'https://picsum.photos/seed/4/640/360'},
  {id:'OPf0YbXqDm0', title:'Sage Green Bikini Try-On Haul (Styling Tips)', channel:'Style Studio', views:'98K', thumb:'https://picsum.photos/seed/5/640/360'},
  {id:'RgKAFK5djSk', title:'JavaScript in 100 Seconds', channel:'Fireship', views:'3.4M', thumb:'https://picsum.photos/seed/6/640/360'},
];

app.get('/api/videos', (req, res) => {
  res.json(videos);
});

app.get('/api/videos/search', (req, res) => {
  const q = req.query.q?.toLowerCase() || '';
  res.json(videos.filter(v => v.title.toLowerCase().includes(q) || v.channel.toLowerCase().includes(q)));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
