import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { html } from 'hono/html';

const app = new Hono()
import {getSSLHubRpcClient, Message} from "@farcaster/hub-nodejs";

app.get('/', (c: any) => {
  const frameImage = 'https://placehold.co/600x400?text=Biconomy+Services'
  const framePostUrl = c.req.url

  return c.html(html`
    <html lang="en">
      <head>
        <meta property="og:image" content="${frameImage}" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${frameImage}" />
        <meta property="fc:frame:post_url" content="${framePostUrl}" />
        <meta property="fc:frame:button:1" content="Docs" />
        <meta property="fc:frame:button:2" content="Dashboard" />
        <meta property="fc:frame:button:3" content="Bundler" />
        <meta property="fc:frame:button:4" content="Paymaster" />
        <title>Farcaster Frames</title>
      </head>
      <body>
        <h1>Hello Farcaster!</h1>
      </body>
    </html>
  `)
})

app.post('/', async (c:any) => {
  const HUB_URL = process.env['HUB_URL'] || "nemes.farcaster.xyz:2283"
  const client = getSSLHubRpcClient(HUB_URL);
  const body = await c.req.json()
  console.log("request body", body)
  const {
    trustedData,
    untrustedData: { buttonIndex, fid },
  } = body
  console.log("messageBytes", trustedData)
  console.log("body", c.req.body?.trustedData)
  console.log("buttonIndex", buttonIndex, fid)
  const frameMessage = Message.decode(Buffer.from(c.req.body?.trustedData?.messageBytes || '', 'hex'));
  

  let validatedMessage : Message | undefined = undefined;
  // try {
  //   const frameMessage = Message.decode(Buffer.from(c.req.body?.trustedData?.messageBytes || '', 'hex'));
  //   console.log("frameMessage", frameMessage)
  //   const result = await client.validateMessage(frameMessage);
  //   if (result.isOk() && result.value.valid) {
  //     validatedMessage = result.value.message;
  //   }

  // } catch (error) {
  //   console.error(`Failed to validate message: ${error}`);
  // }
  // if (isValid) {
  //   try {
  //     console.log("123")
  //     const accountAddress = await getFrameAccountAddress(message, { NEYNAR_API_KEY: 'CF978477-FEE6-498A-AEFF-F85B775F4974' });
  //     console.log(accountAddress)
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }


  const frameImage = `https://placehold.co/600x400/white/black?text=your+fid+is+.${fid}`
  const content = "bundler service"
  const framePostUrl = c.req.url

  return c.html(html`
    <html lang="en">
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${frameImage}" />
        <meta property="fc:frame:post_url" content="${framePostUrl}" />
        <title>Farcaster Frames</title>
      </head>
      <body>
        <p>bundler service</p>
      </body>
    </html>
  `)
})

const port = 3001
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port,
})
