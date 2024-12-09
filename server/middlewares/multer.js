import multer from "multer";
const MAX_SIZE = 1024 * 1024 * 5;
const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

const uploadimage = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: MAX_SIZE,
  },
  fileFilter: (req, file, cb) => {
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
});

const MAX_VIDEO_SIZE = 1024 * 1024 * 1024;
const uploadVideo = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: MAX_VIDEO_SIZE,
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "video/mp4",
      "video/webm",
      "video/ogg",
      "video/avi",
      "video/mov",
    ];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error(
          "Invalid file type. Only MP4, MOV, and AVI files are allowed."
        )
      );
      false;
    }
  },
});

const uploadMediaBoth = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    if (file.fieldname === "images") {
      const allowedImageTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
      ];
      if (allowedImageTypes.includes(file.mimetype)) {
        if (file.size > MAX_SIZE) {
          return cb(
            new Error("Image size exceeds the maximum allowed size of 5MB.")
          );
        }
        cb(null, true);
      } else {
        cb(
          new Error("Invalid image file type. Only JPEG, PNG, and JPG allowed.")
        );
        false;
      }
    } else if (file.fieldname === "video") {
      const allowedVideoTypes = [
        "video/mp4",
        "video/webm",
        "video/ogg",
        "video/avi",
        "video/mov",
      ];
      if (allowedVideoTypes.includes(file.mimetype)) {
        if (file.size > MAX_VIDEO_SIZE) {
          return cb(
            new Error("Video size exceeds the maximum allowed size of 1GB.")
          );
        }
        cb(null, true);
      } else {
        cb(
          new Error(
            "Invalid video file type. Only MP4, MOV, and AVI files are allowed."
          )
        );
        false;
      }
    }
  },
});

export { uploadimage, uploadVideo, uploadMediaBoth };
