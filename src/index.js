import * as $ from 'jquery'
import Post from '@models/Post'
import json from '@/assets/json'
import xml from '@/assets/data.xml'
import csv from '@/assets/data.csv'
import WebpackLogo from '@/assets/webpack-logo.png'
import '@/styles/styles.css'


const post = new Post('Webpack Post Title', WebpackLogo)

console.log('Post to sting: ', post.toString())

$('pre').addClass('code').html(post.toString())

console.log('JSON: ', json)
console.log('XML: ', xml)
console.log('CSV: ', csv)
