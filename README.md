# 🧠 AI Image Metadata and Caption Generator

A modern, full-stack web application that allows users to upload images, automatically extract AI-generated metadata and captions, and manage them through a clean, responsive gallery interface.

Built as a **demo-ready, production-style project** using React, Node.js, MongoDB GridFS, and AI Vision models.


## 📸 Preview

### 🏠 Landing Page
<img width="1901" height="909" alt="image" src="https://github.com/user-attachments/assets/a289281f-867d-4b8c-8de8-8fb24ad2b3e8" />


### 🤖 AI Processing & Gallery
<img width="1900" height="913" alt="image" src="https://github.com/user-attachments/assets/d6b57a9f-226f-450b-850e-fb751c955157" />
<img width="1901" height="843" alt="image" src="https://github.com/user-attachments/assets/7d884034-d97c-4c92-bf5f-4a35e920f3c3" />



### ℹ️ About Page
<img width="1904" height="911" alt="image" src="https://github.com/user-attachments/assets/44c6eece-3f4d-4db5-ad66-fc5145c0c337" />

### MongoDB Database 

<img width="1858" height="788" alt="image" src="https://github.com/user-attachments/assets/fc333b56-ef4d-482d-8670-cf978abc1b07" />

<img width="1815" height="788" alt="image" src="https://github.com/user-attachments/assets/ab89d16a-2cc2-4ba3-9308-ab4d4bb82f24" />

<img width="1855" height="788" alt="image" src="https://github.com/user-attachments/assets/ab910277-5c19-4d8b-86c6-142bb5702983" />


---

## 🚀 Key Features

- 📤 Upload images via a modern drag-and-drop gallery
- 🗄️ Store images efficiently using **MongoDB GridFS**
- 🤖 Generate **AI-based captions and metadata (tags)**
- 🏷️ Display tags and captions below each image
- ✏️ Edit and re-save captions without re-running AI
- ⏳ Skeleton loaders while AI is processing
- 📱 Fully responsive UI (desktop & mobile)
- 🧭 Clean navigation with landing, gallery, and about pages

---


## 🏗️ System Architecture

<img width="978" height="469" alt="image" src="https://github.com/user-attachments/assets/2e687caf-c5bf-40bf-83c3-e8a3cb289a8a" />

---

## 🗂️ Project Structure

### Backend
<img width="821" height="543" alt="image" src="https://github.com/user-attachments/assets/399b871b-51af-447f-b5a0-cd8748b440bf" />


### Frontend
<img width="821" height="847" alt="image" src="https://github.com/user-attachments/assets/54a493ee-28d0-479f-8871-22e9e49a6b96" />

---

## 🧪 Unit Testing

Basic unit tests are included for:

- Image upload API
- AI processing flow
- Metadata and caption storage

Run tests with:

```bash
npm test
```

<img width="1106" height="464" alt="image" src="https://github.com/user-attachments/assets/00073471-50a4-4f8a-85d8-25c7d81b9d37" />

---

## Environment Variable Setup
```bash
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<your db name>
GEMINI_API_KEY=<your API Key>
PORT=5000
```

### ▶️ Running the Project Locally
```bash
cd backend
npm install
npm start
```

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/images/upload` | Upload image, generate AI caption |
| GET | `/api/images` | Get all images with metadata |
| GET | `/api/images/:id` | Stream image from GridFS |
| PUT | `/api/images/:id/caption` | Update caption only |

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- **Ant Design**
- Axios
- React Router

### Backend
- **Node.js**
- **Express.js**
- **Multer** (file uploads)
- MongoDB Native Driver / Mongoose

### Database
- **MongoDB Atlas**
- **GridFS** for image storage

### AI
- **Google Gemini Vision API**  
  *(Architecture supports Google Vision API / OpenAI Vision as alternatives)*

### Testing
- Jest
- Supertest

---

## 🧩 How the App Works

1. User uploads an image from the gallery UI
2. Image is stored in MongoDB using **GridFS**
3. Image is sent to the AI Vision model
4. AI returns:
   - A human-readable caption
   - 5–8 descriptive tags
5. Caption & metadata are saved in MongoDB
6. UI displays image, caption, and tags
7. User can edit and re-save the caption

### 📦 Deliverables Covered

✔ Full source code hosted on GitHub  
✔ AI-generated captions and metadata  
✔ MongoDB GridFS image storage  
✔ Demo-ready UI with sample images  
✔ Unit tests for upload & processing  
✔ Clean README and documentation  

---

### 🔮 Future Enhancements

- Authentication & user profiles  
- Image search by tags  
- Pagination & infinite scrolling  
- Cloud storage (AWS S3 / GCS)  
- AI model switching (Gemini ↔ OpenAI ↔ Vision API)  

---

### 👨‍💻 Author

**Abdul Muid**  

📧 Email: [amuid677@gmail.com](mailto:amuid677@gmail.com)  

🔗 LinkedIn: https://www.linkedin.com/in/abdul-muid-00973b264/  

💻 GitHub: https://github.com/Abdul8081  

---

### 📜 License

This project is made for **learning purposes**.





