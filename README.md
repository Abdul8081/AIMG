# AI Image Metadata and Caption Generator

A full-stack web application that allows users to upload images and automatically generates AI-powered captions and tags using Google Gemini Vision API.

![Tech Stack](https://img.shields.io/badge/React-18-blue) ![Node.js](https://img.shields.io/badge/Node.js-Express-green) ![MongoDB](https://img.shields.io/badge/MongoDB-GridFS-brightgreen) ![AI](https://img.shields.io/badge/AI-Gemini_Vision-orange)

## Features

- 🖼️ **Image Upload** - Drag and drop or click to upload JPEG/PNG images
- 🤖 **AI-Powered Captions** - Automatic caption generation using Google Gemini Vision API
- 🏷️ **Smart Tags** - 5-8 descriptive tags generated for each image
- 📝 **Editable Captions** - Modify captions without re-running AI analysis
- 💾 **GridFS Storage** - Images stored efficiently in MongoDB GridFS
- 🎨 **Modern UI** - Beautiful dark theme with glassmorphism effects

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js, Ant Design |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, GridFS |
| AI | Google Gemini Vision API |
| Upload | Multer |

## Project Structure

```
AIMG/
├── backend/
│   ├── config/
│   │   ├── db.js           # MongoDB connection
│   │   └── gridfs.js       # GridFS configuration
│   ├── controllers/
│   │   └── images.controller.js
│   ├── models/
│   │   └── Image.js
│   ├── routes/
│   │   └── images.js
│   ├── services/
│   │   └── gemini.service.js
│   ├── tests/
│   │   └── images.test.js
│   ├── app.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ImageUpload.jsx
│   │   │   ├── ImageCard.jsx
│   │   │   └── EditCaptionModal.jsx
│   │   ├── pages/
│   │   │   └── Gallery.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── .env
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account
- Google Cloud account with Gemini API access

### Environment Configuration

Create a `.env` file in the project root:

```env
MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/aimg
GEMINI_API_KEY=your-gemini-api-key
PORT=5000
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

Server will start on http://localhost:5000

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend will open on http://localhost:3000

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/images/upload` | Upload image, generate AI caption |
| GET | `/api/images` | Get all images with metadata |
| GET | `/api/images/:id` | Stream image from GridFS |
| PUT | `/api/images/:id/caption` | Update caption only |

## Running Tests

```bash
cd backend
npm test
```

## Demo Instructions

1. Start both backend and frontend servers
2. Open http://localhost:3000 in your browser
3. Drag and drop a JPEG or PNG image onto the upload area
4. Wait for the AI to generate caption and tags
5. View the image in the gallery with its caption and tags
6. Click "Edit Caption" to modify the caption
7. Save changes - caption updates without re-running AI

## Sample Images

Use any JPEG or PNG images for testing. The AI works best with:
- Landscape/nature photos
- People and portraits
- Objects and products
- Architecture and buildings
- Food and cuisine

## License

MIT License
