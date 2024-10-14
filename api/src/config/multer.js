import dotenv from 'dotenv';
dotenv.config();

import { S3Client } from '@aws-sdk/client-s3';
import multerS3, { AUTO_CONTENT_TYPE } from 'multer-s3';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';

// Credenciais da AWS
const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, // chave de acesso
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // chave secreta
  },
  region: process.env.AWS_REGION, // Região do bucket
});

// Configuração do multer para armazenamento de arquivos no S3
export default {
  storage: multerS3({
    s3,
    bucket: process.env.AWS_S3_BUCKET_NAME, // Nome do bucket no S3
    contentType: AUTO_CONTENT_TYPE, // Para definir o tipo MIME automaticamente
    key: (_, file, callback) => {
      const fileName = `${uuidv4()}${extname(file.originalname)}`; // Nome único com uuid
      callback(null, fileName);
    },
  }),
};
