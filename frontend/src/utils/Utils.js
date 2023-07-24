import resolveConfig from 'tailwindcss/resolveConfig';
import axios from 'axios'
import { cloudinaryConfig } from './config';

export const tailwindConfig = () => {
  // Tailwind config
  return resolveConfig('./src/css/tailwind.config.js')
}

export const hexToRGB = (h) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};

export const formatValue = (value) => Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: 3,
  notation: 'compact',
}).format(value);



export async function uploadToCloudinary(pdfFile) {
  const { cloud_name } = cloudinaryConfig;

  const formData = new FormData();
  formData.append('file', pdfFile);
  formData.append('upload_preset', 'my-class');

  try {
    const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData);
    return response.data.url;
  } catch (error) {
    console.error('Error uploading PDF to Cloudinary:', error.message);
    return null;
  }
}
