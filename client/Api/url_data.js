const axios = require('axios');
const cheerio = require('cheerio');

const get = async(link) => {

  const url =link;
// ''.includes
//   if(url.includes('https://www.youtube.com/')){
//       return 'yt';
//   }
console.log(link,'121')
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const title=$('title').text()
    const img = $('meta[property="og:image"]')?.attr('content') ||null;
    const description = $('meta[name="description"]')?.attr('content') ||null;
    // console.log({title,img,description})
    return {title,img,description}
  } catch (e) {
      return {title:'',img:'',description:""};
    // console.error(`Error while fetching rental properties for ${postCode} - ${e.message}`);
  }
};

export {get};