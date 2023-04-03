# buff_bot
Script that can scan buff for a specific float.

Like if you want a float that has 42069 in the float value somewhere etc.

## Requirements:

1. node.js
2. npm

## Installation:

1. Clone the git repo
2. Open it in your terminal
3. Type "npm i" *enter*
4. Type "node app.js" *enter*

Now make a file called ".env" and put your cookie tokens in there.

### Example of .env:

`DEVICE_ID=ldmkgmdfklgldfmk`

`SESSION=1-ojhmpogfiohfg+0hm0+fg0+hm`

`CSRF_TOKEN=ldmgmdfkgkdfmgkædfmækgmdæ.dhdhdfhd.df433463ge.-dsgsgsg`

# F.A.Q.

## How do I find my cookie token?

1. Go to https://buff.163.com/ and login
2. Open devtools
3. Go to application-tab
5. Click on "Cookies" under storage
6. Copy the csrf_token, session and Device-id and paste them in your .env file.

## How do I find the skin-id of a skin?

1. Go to the market on https://buff.163.com/market/csgo
2. Search for the item you want
3. Click on the item
4. copy the skin-id from the url

### Example:

![image](https://user-images.githubusercontent.com/77441913/229525672-38ca50d8-9dec-46ea-bd90-ac472a861faa.png)

Here the skin-id would be 921444
