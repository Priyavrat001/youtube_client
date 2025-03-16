# YouTube API Mini-App Backend

This is the backend for a YouTube API mini-app built with **Express.js** and **MongoDB**. It allows users to fetch video details, add comments, and track events.

🔗 Backend Repository: GitHub - youtube_server

## Features

- Fetch video details from YouTube API
- Simulate adding and deleting comments
- Log events in MongoDB

## Setup Instructions

### 1. Clone the Repository

```sh
git clone https://github.com/your-repo/youtube-api-miniapp.git
cd youtube-api-miniapp/backend
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
YOUTUBE_API_KEY=your_youtube_api_key
YOUTUBE_VIDEO_ID=your_video_id
```

### 4. Run the Server

```sh
npm start
```

---

## API Endpoints

### 1. Get Video Details

**Endpoint:** `GET /video`

**Description:** Fetches video details from YouTube API.

**Response:**

```json
{
  "items": [
    {
      "id": "0ZEkCJ0UOnk",
      "snippet": {
        "title": "Sample Video",
        "description": "This is a test video.",
        "thumbnails": {
          "default": { "url": "https://img.youtube.com/..." }
        }
      }
    }
  ]
}
```

---

### 2. Update Video Title (Not Working)

**Endpoint:** `PUT /video/title`

**Description:** Attempts to update the YouTube video title.

🚨 **Note:** This does not work because updating a video title requires **OAuth 2.0 authentication** instead of just an API key.

**Request Body:**

```json
{
  "title": "New Video Title"
}
```

**Response:**

```json
{
  "error": "Updating video title requires OAuth authentication."
}
```

---

### 3. Add a Comment (Simulated)

**Endpoint:** `POST /comment`

**Description:** Logs a comment action in MongoDB (does not actually post to YouTube).

**Request Body:**

```json
{
  "comment": "Great video!"
}
```

**Response:**

```json
{
  "message": "Comment added successfully"
}
```

---

### 4. Delete a Comment (Simulated)

**Endpoint:** `DELETE /comment`

**Description:** Logs a comment deletion action in MongoDB.

**Response:**

```json
{
  "message": "Comment deleted successfully"
}
```

---

## Database Schema (MongoDB)

```js
const LogSchema = new mongoose.Schema({
  action: String,
  timestamp: Date
});
```

---

## Known Issues

- **Cannot update video title**: Requires OAuth 2.0 authentication.
- **Comments are not actually posted to YouTube**: This is a simulation using MongoDB logs.

---


