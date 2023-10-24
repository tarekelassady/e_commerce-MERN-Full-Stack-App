import multer from "multer";

const storage=multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,"upload/");
    },
    filename: (req,file,cb)=>{
        const uniqueSuffix=Date.now()+file.originalname.replace(/\s+/g, '-').toLowerCase();
        const filename=file.originalname.split(".")[0];
        cb(null,filename + "-" + uniqueSuffix + ".webp");
    }
});

export const upload=multer({storage:storage});
