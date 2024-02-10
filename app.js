require('dotenv').config()
const axios = require('axios');
const prompt = require('prompt-sync')({sigint: true});

const start = async function() {
    console.log('Tools:\n\n1. Float Search\n2. Sticker Search');

    console.log('Choose a tool(number)');
    const tool = prompt();

    switch (tool) {
        case "1": {
            await float();
        }
        case "2": {
            await sticker();
        }
        default: {
            start();
        }
    }
}


const float = async function() {
    let hasPage = true;
    let page = 1;

    console.log('Which skin-id do you want to search?');
    const skin_id = prompt();

    console.log('What float number do you want?');
    const float = prompt();

    console.log('searching...');
    let floats = [];

    while (hasPage) {
        let buffRequest = await axios.get(`https://buff.163.com/api/market/goods/sell_order?game=csgo&goods_id=${skin_id}&page_num=${page}&page_size=100&sort_by=paintwear.asc&mode=&allow_tradable_cooldown=1&_=1674841790694`, {
            headers: {
                'Cookie': `Device-Id=${process.env.DEVICE_ID}; Locale-Supported=en; game=csgo; session=${process.env.SESSION}; csrf_token=${process.env.CSRF_TOKEN}`
            }
        });
    
        if (!buffRequest.data.data.items.length) {
            hasPage = false;
        }

        floats = floats.concat(buffRequest.data.data.items.map(x => x.asset_info.paintwear).filter(x => x.includes(float)));

        page++
    }

    (floats.length) ? console.log(`${floats.length} items with ${float} in the float were found: \n${floats.join('\n')}`) : console.log(`No items with ${float} in the float where found`);

}

const sticker = async function() {
    let hasPage = true;
    let page = 1;

    const regex = new RegExp("(\w+ \| )(\w*dy\w*) (\(\w+\))? ?(\| .+)", "gmi");

    console.log('searching...');
    let stickers = [];

    while (page < 10) {
        console.log(page)
        let buffRequest = await axios.get(`https://buff.163.com/api/market/goods?game=csgo&page_num=${page}&category_group=sticker&tab=selling&use_suggestion=0&_=1707497670083`, {
            headers: {
                'Cookie': `Device-Id=${process.env.DEVICE_ID}; Locale-Supported=en; game=csgo; session=${process.env.SESSION}; csrf_token=${process.env.CSRF_TOKEN}`
            }
        });
    
        if (!buffRequest.data.data.items.length) {
            hasPage = false;
        }

        buffRequest.data.data.items.forEach(x => {
            console.log(regex.exec("Sticker | Dycha (Holo) | Rio 2022"))
            if (x.goods_info.info.tags.category.internal_name.includes("sticker_tournament") && x.name.match(regex)) {
                console.log(stickers)
                stickers.push(x.name)
            }
        });

        page++
    }

    (stickers.length) ? console.log(`${stickers.length} items were found: \n${stickers.join('\n')}\n`) : console.log(`No items were found\n`);

}

start();