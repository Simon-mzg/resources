const fs = require('fs');
const path = require('path');

// 定义要扫描的根目录
const rootDir = path.join(__dirname, '..', 'static', 'image');
const outputFile = path.join(__dirname, '..', 'utils', 'imageData.js');

// 存储文件信息的数组
const imageData = {
  images: [],
  videos: [],
  pdfs: []
};

// 支持的文件扩展名
const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.bmp'];
const videoExtensions = ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm'];
const pdfExtensions = ['.pdf'];

// 递归扫描目录的函数
function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // 如果是目录，则递归扫描
      scanDirectory(filePath);
    } else if (stat.isFile()) {
      // 如果是文件，则检查扩展名并添加到相应的数组中
      const ext = path.extname(file).toLowerCase();
      const relativePath = path.relative(path.join(__dirname, '..'), filePath).replace(/\\/g, '/');
      
      if (imageExtensions.includes(ext)) {
        imageData.images.push({
          name: path.basename(file),
          path: relativePath
        });
      } else if (videoExtensions.includes(ext)) {
        imageData.videos.push({
          name: path.basename(file),
          path: relativePath
        });
      } else if (pdfExtensions.includes(ext)) {
        imageData.pdfs.push({
          name: path.basename(file),
          path: relativePath
        });
      }
    }
  });
}

// 生成JavaScript文件的函数
function generateJSFile() {
  const jsContent = `/*
 * 自动生成的媒体文件数据
 * 生成时间: ${new Date().toLocaleString()}
 */

export const mediaData = {
  images: ${JSON.stringify(imageData.images, null, 2)},
  videos: ${JSON.stringify(imageData.videos, null, 2)},
  pdfs: ${JSON.stringify(imageData.pdfs, null, 2)}
};

export default mediaData;
`;

  fs.writeFileSync(outputFile, jsContent, 'utf8');
  console.log(`媒体文件数据已生成至: ${outputFile}`);
  console.log(`共找到 ${imageData.images.length} 个图片, ${imageData.videos.length} 个视频, ${imageData.pdfs.length} 个PDF文件`);
}

// 执行扫描和生成
try {
  if (fs.existsSync(rootDir)) {
    console.log(`开始扫描目录: ${rootDir}`);
    scanDirectory(rootDir);
    generateJSFile();
  } else {
    console.log(`目录不存在: ${rootDir}`);
  }
} catch (error) {
  console.error('扫描过程中出现错误:', error);
}
