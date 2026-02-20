import { exec } from "child_process";
import fs from "fs";

export function extractText(filePath) {
  return new Promise((resolve, reject) => {
    exec(`python python/ocr.py "${filePath}"`, (error, stdout) => {
      if (error) reject(error);
      else {
        fs.writeFileSync("extracted/output.txt", stdout);
        resolve(stdout);
      }
    });
  });
}