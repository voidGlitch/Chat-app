

# **Chat App**

**A feature-rich, real-time chat application** with support for chat rooms, message reactions, social media authentication, role-based access control, file uploads, audio messages, and instant notifications.
<p style="text-align: center;">
  <a href="https://chat-web-app-9eb34.firebaseapp.com/signin" target="_blank" style="background-color: #1D4ED8; color: white; padding: 15px 25px; border-radius: 5px; text-decoration: none; font-size: 18px;">
    Live Demo !
  </a>
</p>

<p style="text-align: center; font-size: 16px; margin-top: 20px;">
  🌟 Your next adventure is just a click away! 🌟
</p>
## **Features**
- **Real-time messaging** with Firebase Realtime Database
- **Like messages** and engage with your chat
- **Social media authentication** (Google and Facebook)
- **Role-based permissions** for users
- **File uploads** and sharing within chat
- **Audio messages** for voice communication
- **Instant notifications** via Firebase Cloud Messaging (FCM)
  
## **Tech Stack**
- **Frontend**: React
- **Backend**: Firebase (Realtime Database, Cloud Functions)
- **Push Notifications**: Firebase Cloud Messaging (FCM)
- **Styles**: SASS, RSuite (React Suite)

---

## **Getting Started**

### **1. Clone the repository**

```bash
git clone https://github.com/voidGlitch/Chat-app.git
```

### **2. Install dependencies**
Navigate to the project directory and install dependencies for both the React frontend and Firebase Cloud Functions:

```bash
npm install && cd functions && npm install
```

### **Development Setup**
#### **Node Version Management**
This project uses Node v10 to avoid deployment issues with Firebase Cloud Functions. For an optimal development experience, we recommend using Node Version Manager (NVM) to switch between Node versions easily.

### **Running the Frontend Locally**
- **Firebase configuration**: Replace the placeholder Firebase configuration inside `src/misc/firebase.js` with your own Firebase project details.
  
- **FCM VAPID Key**: Obtain your VAPID key from the Firebase Console:

  ```text
  Go to Firebase Dashboard > Project Settings > Cloud Messaging > Web Push Certificates > Key Pair.
  Place it as `fcmVapidKey` in `src/misc/firebase.js`.
  ```

- **Start the development server**:

  ```bash
  npm run start
  ```

- **Note**: If you encounter issues with `node-sass`, update it to a compatible version to resolve conflicts.

### **Running Cloud Functions Locally**
- **Service Account Setup**: Download the service account key from:

  ```text
  Firebase Dashboard > Project Settings > Service Accounts > Generate new private key.
  Save it as `functions/service-account.json`.
  ```

- **Run functions**:

  ```bash
  npm run start
  ```

### **Deployment**
#### **Firebase Hosting and Cloud Functions**
To deploy the project to Firebase:

- Install Firebase CLI:

  ```bash
  npm install -g firebase-tools
  ```

- Deploy to Firebase:

  ```bash
  firebase deploy
  ```

- The project is live at `chat-web-app-9eb34.web.app`.

---

## **Project Structure**
The project consists of the following key dependencies:

- **React**: v18.3.1
- **Firebase**: v10.12.1
- **RSuite (React Suite)**: v5.62.1 for UI components
- **SASS**: v9.0.0 for styling
- **React Router**: v6.23.1 for routing
- **React-Mic**: v12.4.6 for audio messages
- **Timeago-react**: v3.0.6 for displaying human-readable timestamps

---

## **Developer Tools**
- **Prettier**: Code formatting
- **ESLint**: Code linting following Airbnb's JavaScript style guide

For a full list of dependencies and scripts, refer to the `package.json` file.

---

## **Contributors**
This project was created by voidGlitch. Contributions are welcome!
```

This is how the chat app description and setup would look with proper markdown and code blocks formatting.
