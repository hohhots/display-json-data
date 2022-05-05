import fs from 'node:fs';
import { useQuery } from 'h3'

const baseDir = "origin-data";

export default async (req, res) => {
    const query = await useQuery(req);
    const dir = './public/' + baseDir + '/' + query.day + '/' + query.hour + '/' + query.day + '-' + query.hour + '.json';

    try{
        return fs.readFileSync(dir, {encoding:'utf8', flag:'r'});
    }catch(e){
        console.error('read file error.' + e);
    }
};
