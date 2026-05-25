const express = require('express');
const { RtcTokenBuilder, RtcRole } = require('agora-token');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/token', (req, res) => {
  const channel = req.query.channel;
  const uid = parseInt(req.query.uid);
  const expiry = Math.floor(Date.now() / 1000) + 3600;
  const token = RtcTokenBuilder.buildTokenWithUid(
    '4117c3467bc24d89b349d0d4e6d9f3dc',
    '7f592ba289b845708285d3d216ccc423',
    channel, uid, RtcRole.PUBLISHER, expiry, expiry
  );
  res.json({ token });
});

app.listen(process.env.PORT || 3000);
