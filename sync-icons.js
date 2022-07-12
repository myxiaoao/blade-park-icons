import * as fs from "fs";
import * as svg from "@icon-park/svg";
import humps from 'humps';
import mkdirp from 'mkdirp';
import p, {dirname} from 'path';
import {createRequire} from "module";
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const icons = require("@icon-park/svg/icons.json");
const style = {
    outline: {theme: 'outline', size: '24'},
    filled: {theme: 'filled', size: '24'},
    two_tone: {theme: 'two-tone', size: '24'},
    multi_color: {theme: 'multi-color', size: '24'}
};

icons.forEach(item => {
    const file_name = item.name
    const sf = humps.pascalize(file_name);
    // outline
    generation(sf, style.outline, file_name + '.svg');
    // filled
    generation(sf, style.filled, file_name + '-filled.svg');
    // two-tone
    generation(sf, style.two_tone, file_name + '-two-tone.svg');
    // multi-color
    generation(sf, style.multi_color, file_name + '-multi-color.svg');
});

console.log('sync icons done.');

function generation(func, config, file_name) {
    const content = svg[func](config);
    const file = p.join(__dirname, 'resources/svg', file_name);
    mkdirp.sync(p.dirname(file));
    fs.writeFileSync(file, content, 'utf8');
    console.log('sync-icon:' + file_name);
}
