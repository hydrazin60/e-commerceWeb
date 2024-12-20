import DataUriParser from "datauri/parser.js";
import path from "path";

const parser = new DataUriParser();

const getDataUri = (file) => {
  try {
    if (!file || !file.originalname || !file.buffer) {
      throw new Error("File data is missing or incomplete");
    }

    const ext = path.extname(file.originalname).toString();
 
    return parser.format(ext, file.buffer).content;
  } catch (err) {
    console.log(`Data URI error: ${err.message}`);
    throw err;
  }
};

export default getDataUri;
