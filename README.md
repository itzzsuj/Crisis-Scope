# Crisis Scope

Crisis Scope is a comprehensive disaster management platform designed to streamline the process of collecting, organizing, and addressing rescue, aid, and food requests during a crisis. The platform leverages real-time data and analytics to optimize disaster response efforts, improve efficiency, and ensure effective coordination among rescue teams and volunteers.

## Small Preview
<img width="1422" alt="Screenshot 2024-12-11 at 1 37 50 PM" src="https://github.com/user-attachments/assets/ba0d55f5-20e1-49ab-80c8-ba399bb75309">


## Features

### Core Functionalities

- **Food Requests Management**: View, update, and delete food requests categorized by urgency levels (Critical, High, Medium, Low).
- **Aid Requests Management**: Track and manage aid-related requests to ensure timely assistance.
- **Rescue Requests Management**: Organize rescue operations with real-time updates on pending requests.
- **Real-Time Analytics**: Visualize the urgency levels of food requests using dynamic pie charts powered by Chart.js.

### Advanced Features

- **Firebase Integration**: Data storage and retrieval are handled using Firebase Firestore for seamless synchronization.
- **Urgency-Based Sorting**: Requests are automatically sorted based on urgency levels to prioritize critical actions.
- **Interactive Dashboard**: A user-friendly interface to navigate through different request categories and analytics.
- **Responsive Design**: Optimized for various devices, ensuring accessibility for all users.

## Technology Stack

- **Frontend**: React.js
- **Backend**: Firebase Firestore
- **Visualization**: Python(Streamlit)
- **Styling**: Tailwind CSS

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js (version 16 or later)
- Firebase CLI
- A Firebase project with Firestore configured

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/crisis-scope.git
cd crisis-scope
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Firebase

- Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
- Enable Firestore Database.
- Replace the Firebase configuration in `firebase/firebase.js` with your project credentials:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

### 4. Run the Application

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
crisis-scope/
├── public/
├── src/
│   ├── components/
│   │   ├── FoodRequests.js
│   │   ├── AidRequests.js
│   │   ├── RescueRequests.js
│   │   ├── Analytics.js
│   ├── firebase/
│   │   └── firebase.js
│   ├── App.js
│   ├── index.js
├── README.md
├── package.json
```

## How It Works

1. **Requests Management**: Each category (Food, Aid, Rescue) fetches data from Firebase Firestore and displays it in an organized manner.
2. **Real-Time Updates**: Any changes made to the requests are instantly reflected across all connected users.
3. **Analytics**: Food request urgency levels are visualized in a pie chart for better decision-making.
4. **Interactive UI**: Navigate through requests and analytics seamlessly.

## Future Enhancements

- Add geolocation-based request mapping.
- Enable user authentication and role-based access.
- Integrate AI-based prediction models for disaster impact assessment.
- Expand analytics to include aid and rescue requests.




Thank you for using Crisis Scope to make disaster management more effective and efficient!
