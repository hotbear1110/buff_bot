# buff_bot
Script that can scan buff for a specific float.

Like if you want a float that has 42069 in the float value somewhere etc.

Requirements:

1. node.js
2. npm

Installation:

1. Clone the git repo
2. Open it in your terminal
3. Type "npm i" *enter*
4. Type "node app.js" *enter*

How do I find my cookie token?

1. Go to any item on https://buff.163.com/
2. Open devtools
3. Go to network-tab
4. refresh the site
5. look for a Name that starts with "sell_order?"

![image](https://user-images.githubusercontent.com/77441913/229374382-0d1c255a-86e1-4988-90b3-1088572a792e.png)

6. Click on it
7. Now under "Request headers" copy the part at "Cookie: "

Now make a file called ".env" and put your cookie token in there.

Example of .env:

`COOKIE=Device-Id=ldmkgmdfklgldfmk; Locale-Supported=en; game=csgo; session=1-ojhmpogfiohfg+0hm0+fg0+hm; csrf_token=ldmgmdfkgkdfmgkædfmækgmdæ.dhdhdfhd.df433463ge.-dsgsgsg`
