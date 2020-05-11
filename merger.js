let fs = require('fs')
let path = require('path')
let exec = require('child_process').exec

// get all file paths under the dir
function readFileList(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((item, index) => {
    var fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      readFileList(path.join(dir, item), filesList); //递归读取文件
    } else {
      filesList.push(fullPath);
    }
  });
  return filesList;
}

// parsing json through file path
function parseJSONFile(filePath) {
  var json = {};
  json = fs.readFileSync(path.join(__dirname, filePath), 'utf8');
  json = JSON.parse(json);
  return json;
}

// maerge subfile props to master
function mergerFiles() {
  let list = readFileList('jsonFiles')
  let main = parseJSONFile('swagger.json');
  // init main json props
  main.tags = [];
  main.paths = {};
  main.definitions = {};

  list.map(function(path) {
    // 同步读取文件确保输出结果一致，牺牲效率
    let sub = parseJSONFile(path);
    // merge props
    if (sub.tags) main.tags = main.tags.concat(sub.tags);
    sub.paths && Object.assign(main.paths, sub.paths);
    sub.definitions && Object.assign(main.definitions, sub.definitions);
    console.log('merged - ', path);
  })

  // output json file
  let Str_ans = JSON.stringify(main, null, 2);
  fs.writeFile('swagger.json', Str_ans, 'utf8', (err) => {
    if (err) throw err;
    console.log('done');
  });
}

mergerFiles();
