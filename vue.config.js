const PrerenderSPAPlugin = require('prerender-spa-plugin');
var webpack = require('webpack')
const path = require('path');

module.exports = {
  configureWebpack: {
	  plugins: [
	    new PrerenderSPAPlugin({
	    // Required - The path to the webpack-outputted app to prerender.
	      staticDir: path.join(__dirname, 'dist'),
	      // Required - Routes to render.
	      routes: [
	      	'/',
	      	'/products',
	      	'/industries',
	      	'/environmental-impact',
	      	'/second-chance-program',
	      	'/data',
	      	'/testing',
	      	'/in-the-news',
	      	'/careers',
	      	'/light-test',
	      	'/faq',
	      	'/products/vcplus',
	      	'/products/vcthree',
	      	'/products/vcfusion',
	      	'/products/vcfiber',
	      	'/products/recyclablemailer',
	      	'/products/fibermailer',
	      	'/products/gogreenmailer',
	      	'/products/vericooler',
	      	'/news',
	      	'/news/WxynsBF8rcjvuw8BEWyb',
	      	'/news/wCc3SONvLdPdKEW8oCwQ',
	      	'/news/Ywk1LRjblXMQdQ1kgIQj'
	      ],
	    })
	  ]
	}
}