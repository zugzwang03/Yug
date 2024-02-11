const router = require('express').Router();
const multer = require('multer');
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");
const fs = require("fs");
const dotenv = require('dotenv');

dotenv.config();

const API_KEY = process.env.API_KEY;
const MODEL_NAME = process.env.MODEL_NAME;

// storage is responsible for processing files uploaded through multer
// here it also allocates a unique file name to each file based on its extension and date
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

// fileFilter used as a middleware for checking whether the file type is valid or not
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// using multer for storage and file filter
let upload = multer({ storage: storage, fileFilter });

router.post("/tutorials/imageUpload", upload.single("file"), async (req, res) => {

  console.log(req.files.file);
  fs.writeFile("./image.jpg", req.files.file.data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
  const result = await run(req.files.file.data);

  // sending response that the product details got submitted successfully
  res.status(200).json(result);
});

// node --version # Should be >= 18
// npm install @google/generative-ai


async function run(data) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.4,
    topK: 32,
    topP: 1,
    maxOutputTokens: 4096,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  if (!fs.existsSync("image.jpg")) {
    throw new Error("Could not find images in current directory.");
  }

  // console.log(data.toString("base64"));
  const result = await model.generateContent({
    contents: [{
      role: "user", parts: [
        { text: "Describe this image:\n" },
        {
          inlineData: {
            mimeType: "image/jpeg",
            data: data.toString("base64")
          }
        },
      ]
    }]
  });

  const response = result.response;
  console.log(response.text());
  return response.text();
}

module.exports = router;