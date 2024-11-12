import DataUriParser from "datauri/parser.js";
import path from "path";

const parser = new DataUriParser();

const getDataUri = (filepath) => {
  try {
    if (!filepath || !filepath.originalname || !filepath.buffer) {
      throw new Error("File not found");
    }
    const ext = path.extname(filepath.originalname).toString();
    return parser.format(ext, filepath.buffer).content;
  } catch (err) {
    console.log(`Data Uri error: ${err.message}`);
    throw err;
  }
};

export default getDataUri;
