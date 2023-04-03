require('dotenv').config()
const axios = require('axios');
const prompt = require('prompt-sync')({sigint: true});


const buff = async function() {
    let hasPage = true;
    let page = 1;

    console.log('Which skin-id do you want to search?');
    const skin_id = prompt();

    console.log('What float numbet do you want?');
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

buff();
