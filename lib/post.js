import path from 'path';
import fs from 'fs';
import matter from 'matter';


const postsDirectory = path.join(process.cwd(), 'posts');

//mdファイルのデータを取り出す
export function getSPostsData() {
  const fileNames= fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');//ファイル名（id）を取得

    //マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);//ファイルのメタデータを解析する

    //idとデータを返す
    return {
      id,
      ...matterResult,
    }

  });
  
}