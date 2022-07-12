import {createRequire} from "module";
import humps from 'humps';
import p, {dirname} from 'path';
import * as svg from "@icon-park/svg";
import {fileURLToPath} from 'url';
import mkdirp from 'mkdirp';
import * as fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);
const icons = require("iconpark/source/icons.json")

const outline = {theme: 'outline', size: '24'}
const filled = {theme: 'filled', size: '24'}
const two_tone = {theme: 'two-tone', size: '24'}
const multi_color = {theme: 'multi-color', size: '24'}

icons.forEach(item => {
    const file_name = item.name
    const sf = humps.pascalize(file_name);
    // outline
    generation(sf, outline, file_name + '.svg')
    // filled
    generation(sf, filled, file_name + '-filled.svg')
    // two-tone
    generation(sf, two_tone, file_name + '-two-tone.svg')
    // multi-color
    generation(sf, multi_color, file_name + '-multi-color.svg')
});

function generation(func, config, file_name) {
    const content = svg[func](config);
    const file = p.join(__dirname, 'resources/svg', file_name);
    mkdirp.sync(p.dirname(file));
    fs.writeFileSync(file, content, 'utf8');
    console.log('sync-icon:' + file_name);
}
