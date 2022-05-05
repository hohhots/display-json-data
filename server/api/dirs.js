import fs from 'node:fs';

const baseDir = "origin-data";

export default (req, res) => {
    let t = filter(fs.readdirSync('./public/' + baseDir));

    let hours = {};
    t.map((dir) => {
        hours[dir] = filter(fs.readdirSync('./public/' + baseDir + '/' + dir));
    });

    return {days: hours}; 
    //return {days:{"2022-02-20": ["12-01","12-31"], "2022-02-51": ["13-21","13-50"], "2022-02-22": ["14-00","14-29","15-19"]}};
};

function filter(dirs) {
    return dirs.filter((dir) => {
            if(dir.startsWith('.')){
                return false;
            }
            return true;
        });
}