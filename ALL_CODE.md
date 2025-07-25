# All Project Files

## `.env`

```
REACT_APP_BASE_URL=http://localhost:4000/api/v1
RAZORPAY_KEY=rzp_test_bQqVvJFQjEv43K
RAZORPAY_SECRET=EGS6XmeRyit8fqgdNgx0OvXn
```

---

## `README.md`

```markdown
EduFy Fullstack MERN project for an edtech platform

```

---

## `package.json`

```json
{
  "name": "react-tailwind-css-starter-pack",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.0",
    "@mui/material": "^7.1.1",
    "@ramonak/react-progress-bar": "^5.4.0",
    "@reduxjs/toolkit": "^2.8.2",
    "axios": "^1.9.0",
    "chart.js": "^4.4.9",
    "concurrently": "^9.1.2",
    "copy-to-clipboard": "^3.3.3",
    "dotenv": "^16.5.0",
    "live-server": "^1.2.2",
    "react": "^18.2.0",
    "react-chartjs-2": "^5.3.0",
    "react-dom": "^18.2.0",
    "react-dropzone": "^14.3.8",
    "react-hook-form": "^7.57.0",
    "react-hot-toast": "^2.5.2",
    "react-icons": "^5.5.0",
    "react-markdown": "^10.1.0",
    "react-otp-input": "^3.1.1",
    "react-rating-stars-component": "^2.2.0",
    "react-redux": "^9.2.0",
    "react-router-dom": "^7.6.2",
    "react-scripts": "5.0.1",
    "react-super-responsive-table": "^6.0.2",
    "react-type-animation": "^3.2.0",
    "redux-toolkit": "^1.1.2",
    "style-loader": "^4.0.0",
    "swiper": "^11.2.8",
    "video-react": "^0.16.0",
    "web-vitals": "^2.1.4"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/thepranaygupta/react-tailwind-css-starter-pack.git"
  },
  "author": "Pranay Gupta",
  "bugs": {
    "url": "https://github.com/thepranaygupta/react-tailwind-css-starter-pack/issues"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "eject": "react-scripts eject",
    "server": "cd Edufy && npm run dev",
    "dev": "concurrently -n \"client,server\" -c \"bgBlue,bgYellow\" \"npm start\" \"npm run server\""
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "concurrently": "^9.1.2",
    "tailwindcss": "^3.2.7"
  }
}

```

---

## `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
    },
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "#ffffff00",
      richblack: {
        5: "#F1F2FF",
        25: "#DBDDEA",
        50: "#C5C7D4",
        100: "#AFB2BF",
        200: "#999DAA",
        300: "#838894",
        400: "#6E727F",
        500: "#585D69",
        600: "#424854",
        700: "#2C333F",
        800: "#161D29",
        900: "#000814",
      },
      richblue: {
        5: "#ECF5FF",
        25: "#C6D6E1",
        50: "#A0B7C3",
        100: "#7A98A6",
        200: "#537988",
        300: "#2D5A6A",
        400: "#073B4C",
        500: "#063544",
        600: "#042E3B",
        700: "#032833",
        800: "#01212A",
        900: "#001B22",
      },
      blue: {
        5: "#EAF5FF",
        25: "#B4DAEC",
        50: "#7EC0D9",
        100: "#47A5C5",
        200: "#118AB2",
        300: "#0F7A9D",
        400: "#0C6A87",
        500: "#0A5A72",
        600: "#074B5D",
        700: "#053B48",
        800: "#022B32",
        900: "#001B1D",
      },
      caribbeangreen: {
        5: "#C1FFFD",
        25: "#83F1DE",
        50: "#44E4BF",
        100: "#06D6A0",
        200: "#05BF8E",
        300: "#05A77B",
        400: "#049069",
        500: "#037957",
        600: "#026144",
        700: "#014A32",
        800: "#01321F",
        900: "#001B0D",
      },
      brown: {
        5: "#FFF4C4",
        25: "#FFE395",
        50: "#FFD166",
        100: "#E7BC5B",
        200: "#CFA64F",
        300: "#B89144",
        400: "#A07C39",
        500: "#88662D",
        600: "#705122",
        700: "#593C17",
        800: "#41260B",
        900: "#291100",
      },
      pink: {
        5: "#FFF1F1",
        25: "#FBC7D1",
        50: "#F79CB0",
        100: "#F37290",
        200: "#EF476F",
        300: "#D43D63",
        400: "#BA3356",
        500: "#9F294A",
        600: "#841E3E",
        700: "#691432",
        800: "#4F0A25",
        900: "#340019",
      },
      yellow: {
        5: "#FFF970",
        25: "#FFE83D",
        50: "#FFD60A",
        100: "#E7C009",
        200: "#CFAB08",
        300: "#B69507",
        400: "#9E8006",
        500: "#866A04",
        600: "#6E5503",
        700: "#553F02",
        800: "#3D2A01",
        900: "#251400",
      },
      "pure-greys": {
        5: "#F9F9F9",
        25: "#E2E2E2",
        50: "#CCCCCC",
        100: "#B5B5B5",
        200: "#9E9E9E",
        300: "#888888",
        400: "#717171",
        500: "#5B5B5B",
        600: "#444444",
        700: "#2D2D2D",
        800: "#171717",
        900: "#141414",
      },
    },
    extend: {
      dropShadow:{
        'video':'18px 18px white',
        'madam':'-18px -18px white',
        'madamSmall':'-10px -10px white',
        'Course_Card':'10px 10px yellow',
        'Timeline':'0 0 10px  rgba(0,0,0,0.2)'
      },
      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px"
      }
      
    },
  },
  plugins: [],
};
```

---

## `public\index.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>React & Tailwind CSS Starter Pack</title>
</head>

<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
  <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
</body>

</html>
```

---

## `public\robots.txt`

```
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:

```

---

## `src\App.css`

```css
/* write your css here */
/* write your css here */
@tailwind base;
@tailwind components;
@tailwind utilities; 


html,body{
  overflow-x:hidden;
}


.homepage_bg{
  background:url("../src/assets/Images/bghome.svg");
}

.codesection1_gradient{
  background: linear-gradient(123.77deg, #8A2BE2 -6.46%, #FFA500 59.04%, #F8F8FF 124.53%);
  
  
}

.grad1{
  background: linear-gradient(118.19deg, #1FA2FF -3.62%, #12D8FA 50.44%, #A6FFCB 104.51%);
;

}
.spinner {
  width: 56px;

  height: 56px;
  display: grid;
  color: white;
  background: radial-gradient(farthest-side, currentColor calc(100% - 6.7px),#0000 calc(100% - 5.6px) 0);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 14.6px),#000 calc(100% - 13.4px));
  border-radius: 50%;
  animation: spinner-sm4bhi 2s infinite linear;
}

.spinner::before,
.spinner::after {
  content: "";
  grid-area: 1/1;
  background: linear-gradient(currentColor 0 0) center,
         linear-gradient(currentColor 0 0) center;
  background-size: 100% 11.2px,11.2px 100%;
  background-repeat: no-repeat;
}

.spinner::after {
  transform: rotate(45deg);
}

@keyframes spinner-sm4bhi {
  100% {
     transform: rotate(1turn);
  }
}

.aboutg1{
  background: linear-gradient(117.83deg, #FF512F -4.8%, #F09819 107.46%);
  -webkit-text-fill-color: transparent; 
  -webkit-background-clip: text; 
  background-clip:text;
}

.aboutg2{
  background: linear-gradient(118.41deg, #E65C00 -6.05%, #F9D423 106.11%);
  -webkit-text-fill-color: transparent; 
  -webkit-background-clip: text; 
  background-clip:text;
}

.aboutg3{
  background: linear-gradient(118.41deg, #E65C00 -6.05%, #F9D423 106.11%);

}

.aboutg4{
  background: linear-gradient(117.95deg, #833AB4 -2.4%, #FD1D1D 52.25%, #FCB045 106.89%);
  -webkit-text-fill-color: transparent; 
  -webkit-background-clip: text; 
  background-clip:text;
}

.aboutg5{
  background: linear-gradient(118.47deg, #EC008C -0.91%, #FC6767 104.91%);
  
}

.aboutg6{
  background: linear-gradient(118.41deg, #E65C00 -6.05%, #F9D423 106.11%);
  -webkit-text-fill-color: transparent; 
  -webkit-background-clip: text; 
  background-clip:text;
}

.aboutg7{
  background: linear-gradient(118.19deg, #1FA2FF -3.62%, #12D8FA 50.44%, #A6FFCB 104.51%);
;
-webkit-text-fill-color: transparent; 
  -webkit-background-clip: text; 
  background-clip:text;
}



input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 1;
  display: block;
  background-repeat:  no-repeat;
  width: 18px;
  height: 18px;
  color:white;
  position:absolute;
  left: 91%;
  top:27%;
  
}


input::-webkit-datetime-edit-fields-wrapper {
  position: relative;
  left: 0;
}
input::-webkit-datetime-edit {
  position: relative;
  left: 0;
}



/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: auto;
  scrollbar-color: #afb2bf;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 3px;
}

*::-webkit-scrollbar-track {
  background: #000814;
}

*::-webkit-scrollbar-thumb {
  background-color: #afb2bf;
  border-radius: 10px;
  visibility: hidden;
}

*:active::-webkit-scrollbar-thumb,
*:focus::-webkit-scrollbar-thumb,
*:hover::-webkit-scrollbar-thumb {
  visibility: visible;
}

/* Hide default styling of details/summary */
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}

/* https://10015.io/tools/css-loader-generator */
.spinner {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 9px solid #f1f2ff;
  animation: spinner-bulqg1 0.8s infinite linear alternate,
    spinner-oaa3wk 1.6s infinite linear;
}

.codeblock1 {
  width: 372.95px;
  height: 257.05px;
  border-radius: 100%;
  left: calc(50% - 372.95px / 2 - 76.53px);
  top: calc(50% - 257.05px / 2 - 47.47px);
  background: linear-gradient(
    123.77deg,
    #8a2be2 -6.46%,
    #ffa500 59.04%,
    #f8f8ff 124.53%
  );
  opacity: 0.2;
  filter: blur(34px);
  transform: matrix(1, 0, -0.03, 1, 0, 0);
}
.codeblock2 {
  position: absolute;
  width: 372.95px;
  height: 257.05px;
  left: calc(50% - 372.95px / 2 - 76.53px);
  top: calc(50% - 257.05px / 2 - 47.47px);
  border-radius: 100%;
  background: linear-gradient(
    118.19deg,
    #1fa2ff -3.62%,
    #12d8fa 50.44%,
    #a6ffcb 104.51%
  );
  opacity: 0.2;
  filter: blur(34px);
  transform: matrix(1, 0, -0.03, 1, 0, 0);
}
.code-border {
  border: 2px solid;
  border-image-slice: 1;
  border-width: 2px;
  border-image-source: linear-gradient(to right bottom, #ffffff38, #ffffff00);
  background: linear-gradient(
    111.93deg,
    rgba(14, 26, 45, 0.24) -1.4%,
    rgba(17, 30, 50, 0.38) 104.96%
  );
  /* backdrop-filter: blur(26px); */
}
.homepage_bg {
  background: url("../src/assets/Images/bghome.svg");
  /* background-size: contain; */
}

@keyframes spinner-bulqg1 {
  0% {
    clip-path: polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0%);
  }

  12.5% {
    clip-path: polygon(
      50% 50%,
      0 0,
      50% 0%,
      100% 0%,
      100% 0%,
      100% 0%,
      100% 0%
    );
  }

  25% {
    clip-path: polygon(
      50% 50%,
      0 0,
      50% 0%,
      100% 0%,
      100% 100%,
      100% 100%,
      100% 100%
    );
  }

  50% {
    clip-path: polygon(
      50% 50%,
      0 0,
      50% 0%,
      100% 0%,
      100% 100%,
      50% 100%,
      0% 100%
    );
  }

  62.5% {
    clip-path: polygon(
      50% 50%,
      100% 0,
      100% 0%,
      100% 0%,
      100% 100%,
      50% 100%,
      0% 100%
    );
  }

  75% {
    clip-path: polygon(
      50% 50%,
      100% 100%,
      100% 100%,
      100% 100%,
      100% 100%,
      50% 100%,
      0% 100%
    );
  }

  100% {
    clip-path: polygon(
      50% 50%,
      50% 100%,
      50% 100%,
      50% 100%,
      50% 100%,
      50% 100%,
      0% 100%
    );
  }
}

@keyframes spinner-oaa3wk {
  0% {
    transform: scaleY(1) rotate(0deg);
  }

  49.99% {
    transform: scaleY(1) rotate(135deg);
  }

  50% {
    transform: scaleY(-1) rotate(0deg);
  }

  100% {
    transform: scaleY(-1) rotate(-135deg);
  }
}

/* For conditional coloring of icons in dashboard sidebar */
.active-icon {
  fill: #ffd60a !important;
  color: #ffd60a !important;
}

.inactive-icon {
  fill: #838894;
  color: #838894;
}

/* Buttons */
.yellowButton {
  @apply cursor-pointer rounded-md bg-yellow-50 px-[20px] py-[8px] font-semibold text-richblack-900;
}

/* Swiper CSS Starts */
/* .swiper {
  max-width: 1200px;
  width: 91.66%;
  height: 185px;
  margin: 50px 0px;
} */

.swiper-slide {
  width: 100%;
  height: 100%;
}
/* .swiper-slide {
  @apply bg-richblack-800 text-richblack-25 p-3 text-[14px];
} */
/* Swiper CSS Ends */

.blackButton {
  @apply cursor-pointer rounded-md bg-richblack-800 px-[20px] py-[8px] font-semibold text-richblack-5;
}
.lable-style {
  @apply text-[14px] text-richblack-5;
}
.form-style {
  @apply rounded-lg bg-richblack-700 p-3 text-[16px] leading-[24px] text-richblack-5 shadow-[0_1px_0_0] shadow-white/50 placeholder:text-richblack-400 focus:outline-none;
}
.section_heading {
  @apply text-2xl font-bold text-richblack-5 lg:text-4xl;
}
```

---

## `src\App.jsx`

```javascript
import "./App.css";
import {Route,Routes} from "react-router-dom";
import Home from "../src/pages/Home"
import Navbar from "./components/common/Navbar";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail"
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import MyProfile from "./components/core/Dashboard/MyProfile";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error"
import OpenRoute from "./components/core/Auth/OpenRoute";
import Settings from "./components/core/Dashboard/Settings/index";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/Cart/index";
import {ACCOUNT_TYPE} from "./utils/constants";
import { useSelector } from "react-redux";
import MyCourses from "./components/core/Dashboard/MyCourses/index"
import AddCourse from "./components/core/Dashboard/AddCourse";
import EditCourse from "./components/core/Dashboard/EditCourse/index";
import Catalog from "./pages/Catalog"
import CourseDetails from "./pages/CourseDetails";
import VideoDetailsSidebar from "./components/core/ViewCourse/VideoDetailsSidebar";
import VideoDetails from "./components/core/ViewCourse/VideoDetails";
import ViewCourse from "./pages/ViewCourse";
import Instructor from "./components/core/Dashboard/InstructorDashboard/Instructor";


function App() {
  const {user}=useSelector((state)=>state.profile);
  return (
      <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
        <Navbar/>
        <Routes>
          <Route path="/" element={<OpenRoute><Home/></OpenRoute>}/>
          <Route path="/catalog/:catalogName" element={<Catalog/>}/>
          <Route path="/courses/:courseId" element={<CourseDetails/>}/>
          <Route path="/login" element={<OpenRoute><Login/></OpenRoute>}/>
          <Route path="/signup" element={<OpenRoute><Signup/></OpenRoute>}/>
          <Route path="/verify-email" element={<OpenRoute><VerifyEmail/></OpenRoute>}/>
          <Route path="/forgot-password" element={<OpenRoute><ForgotPassword/></OpenRoute>}/>
          <Route path="/update-password/:token" element={<OpenRoute><UpdatePassword/></OpenRoute>}/>
          <Route path="/about" element={<OpenRoute><About/></OpenRoute>}/>
          <Route path="/contact" element={<OpenRoute><ContactUs/></OpenRoute>}/>  
          <Route element={
            <PrivateRoute>
               <Dashboard/>
            </PrivateRoute>
          }>
            <Route path="/dashboard/my-profile" element={<MyProfile/>}/> 
            <Route path="/dashboard/settings" element={<Settings/>}/> 
            
            {
              user?.accountType===ACCOUNT_TYPE.STUDENT && (
                <>
                    <Route path="/dashboard/enrolled-courses" element={<EnrolledCourses/>}/>
                    <Route path="/dashboard/cart" element={<Cart/>}/>
                </>
              )
            }
            {
              user?.accountType===ACCOUNT_TYPE.INSTRUCTOR && (
                <>
                    <Route path="/dashboard/my-courses" element={<MyCourses/>}/>
                    <Route path="/dashboard/add-course" element={<AddCourse/>}/>
                    <Route path="/dashboard/edit-course/:courseId" element={<EditCourse/>}/>
                    <Route path="/dashboard/instructor" element={<Instructor/>}/>
                  
                </>
              )
            }
          </Route>   

            {/* Nested Route for View Course */}

            <Route element={
              <PrivateRoute>
                <ViewCourse/>
              </PrivateRoute>

            }>
              {
                user?.accountType===ACCOUNT_TYPE.STUDENT && (
                  <>
                    <Route path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                    element={<VideoDetails/>}
                    />
                  </>
                )
              }



            </Route>

          <Route path="*" element={<Error/>}/>
        </Routes>
      </div>

  );
}

export default App;

```

---

## `src\gradient.css`

```css
.grad{
  background: linear-gradient(111.93deg, rgba(14, 26, 45, 0.24) -1.4%, rgba(17, 30, 50, 0.38) 104.96%),
linear-gradient(121.74deg, rgba(255, 255, 255, 0.22) -7.75%, rgba(255, 255, 255, 0) 37.38%);
  border-radius:2%;
}
```

---

## `src\index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

```

---

## `src\index.js`

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "./reducer";
import {configureStore} from "@reduxjs/toolkit"
import { Toaster } from "react-hot-toast";
const store=configureStore({
  reducer:rootReducer,
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App />
      <Toaster/>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>
);
```

---

## `src\package.json`

```json
{
  "name": "react-tailwind-css-starter-pack",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "concurrently": "^9.1.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/thepranaygupta/react-tailwind-css-starter-pack.git"
  },
  "author": "Pranay Gupta",
  "bugs": {
    "url": "https://github.com/thepranaygupta/react-tailwind-css-starter-pack/issues"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "eject": "react-scripts eject",
    "server": "cd Edufy && npm run dev",
    "dev": "concurrently -n \"client,server\" -c \"bgBlue,bgYellow\" \"npm start\" \"npm run server\""
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "tailwindcss": "^3.2.7",
    "concurrently": "^9.1.2"
  }
}

```

---

## `src\components\common\ConfirmationModal.jsx`

```javascript
import IconBtn from "./IconBtn"

export default function ConfirmationModal({ modalData }) {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-richblack-800 p-6">
        <p className="text-2xl font-semibold text-richblack-5">
          {modalData?.text1}
        </p>
        <p className="mt-3 mb-5 leading-6 text-richblack-200">
          {modalData?.text2}
        </p>
        <div className="flex items-center gap-x-4">
          <IconBtn
          customClasses="bg-yellow-100 text-black rounded-md px-4 py-2 font-semibold "
            onclick={modalData?.btn1Handler}
            text={modalData?.btn1Text}
          />
          <button
            className="cursor-pointer rounded-md bg-richblack-200 py-[8px] px-[20px] font-semibold text-richblack-900"
            onClick={modalData?.btn2Handler}
          >
            {modalData?.btn2Text}
          </button>
        </div>
      </div>
    </div>
  )
}
```

---

## `src\components\common\Footer.jsx`

```javascript
import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/Logo/Logo-Full-Light.png";

// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <div className="bg-richblack-800">
      <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
          {/* Section 1 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
            <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
              <img src={Logo} alt="" className="object-contain" />
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Company
              </h1>
              <div className="flex flex-col gap-2">
                {["About", "Careers", "Affiliates"].map((ele, i) => {
                  return (
                    <div
                      key={i}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.toLowerCase()}>{ele}</Link>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-3 text-lg">
                <FaFacebook />
                <FaGoogle />
                <FaTwitter />
                <FaYoutube />
              </div>
              <div></div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Resources
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Resources.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>

              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Support
              </h1>
              <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
                <Link to={"/help-center"}>Help Center</Link>
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Plans
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Plans.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Community
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Community.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
            {FooterLink2.map((ele, i) => {
              return (
                <div key={i} className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                  <h1 className="text-richblack-50 font-semibold text-[16px]">
                    {ele.title}
                  </h1>
                  <div className="flex flex-col gap-2 mt-2">
                    {ele.links.map((link, index) => {
                      return (
                        <div
                          key={index}
                          className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                        >
                          <Link to={link.link}>{link.title}</Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm">
        {/* Section 1 */}
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
            {BottomFooter.map((ele, i) => {
              return (
                <div
                  key={i}
                  className={` ${
                    BottomFooter.length - 1 === i
                      ? ""
                      : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  } px-3 `}
                >
                  <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                    {ele}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center">Made with ❤️ for our users everywhere! © 2025 EduFy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
```

---

## `src\components\common\IconBtn.jsx`

```javascript
export default function IconBtn({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  customClasses,
  type,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className={`flex items-center ${
        outline ? "border border-yellow-50 bg-transparent" : "bg-yellow-50"
      } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 ${customClasses}`}
      type={type}
    >
      {children ? (
        <>
          <span className={`${outline && "text-yellow-50"}`}>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  )
}
```

---

## `src\components\common\Navbar.jsx`

```javascript
import { useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"

import logo from "../../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from "../../data/navbar-links"
import { apiConnector } from "../../services/apiconnector"
import { categories } from "../../services/apis"
import { ACCOUNT_TYPE } from "../../utils/constants"
import ProfileDropdown from "../core/Auth/ProfileDropDown"
import { BottomNavigation } from "@mui/material"



function Navbar() {
  const [showDropDown,setShowDropDown]=useState(false);
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const { totalItems } = useSelector((state) => state.cart)
  const location = useLocation()

  const [subLinks, setSubLinks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        setSubLinks(res.data.data)
      } catch (error) {
        console.log("Could not fetch Categories.", error)
      }
      setLoading(false)
    })()
  }, [])

  // console.log("sub links", subLinks)

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div
      className={`flex h-16 relative items-center justify-center border-b-[1px] border-b-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      } transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
         <img
      src={logo}
      alt="EduFy Logo"
      loading="lazy"
      className="
        h-12      /* max-height: 32px */
        w- 100   /* auto width to maintain aspect ratio */
        rounded-md /* medium corner radius */
        bg-richblack-900   /* white background behind logo */
        p-0.25        /* small padding */
      "
    />
        </Link>
        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <>
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      <p>{link.title}</p>
                      <BsChevronDown />
                      <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                        {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : subLinks.length ? (
                          <>
                            {subLinks
                              ?.filter(
                                (subLink) => subLink?.courses?.length > 0
                              )
                              ?.map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                  key={i}
                                >
                                  <p>{subLink.name}</p>
                                </Link>
                              ))}
                          </>
                        ) : (
                          <p className="text-center">No Courses Found</p>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Login / Signup / Dashboard */}
        <div className="hidden items-center gap-x-4 md:flex">
          {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
        </div>
        <button className="mr-4 md:hidden">
              <AiOutlineMenu onClick={()=>setShowDropDown(!showDropDown)} color="white" fontSize={24}/>
        </button>
      </div>
    <div className={`w-[100vw] md:hidden p-4 h-fit bg-richblack-800 z-50 absolute top-[55px] text-white ${showDropDown?("block"):("hidden")}  border border-white`}> 
    <ul className="flex  flex-col w-full gap-y-2 items-center gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div >
                    <div
                      className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoute("/catalog/:catalogName")
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      <p>{link.title}</p>
                      <BsChevronDown />
                      <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                        <div className="absolute  left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                        {loading ? (
                          <p className="text-center">Loading...</p>
                        ) : subLinks.length ? (
                          <>
                            {subLinks
                              ?.filter(
                                (subLink) => subLink?.courses?.length > 0
                              )
                              ?.map((subLink, i) => (
                                <Link
                                  to={`/catalog/${subLink.name
                                    .split(" ")
                                    .join("-")
                                    .toLowerCase()}`}
                                  className={`rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50`}
                                  key={i}
                                >
                                  <p>{subLink.name}</p>
                                </Link>
                              ))}
                          </>
                        ) : (
                          <p className="text-center">No Courses Found</p>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
            {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                  {totalItems}
                </span>
              )}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className={`group relative flex cursor-pointer items-center gap-1 ${
                        matchRoute("/login")
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}>
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup" 
            className={`group relative flex cursor-pointer items-center gap-1 ${
              matchRoute("/signup")
                ? "text-yellow-25"
                : "text-richblack-25"
            }`}>
              <button >
                Sign up
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropdown />}
          </ul>
          
          
    </div>
    </div>
  )
}

export default Navbar
```

---

## `src\components\common\RatingStars.jsx`

```javascript
import React, { useEffect, useState } from "react"
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti"

function RatingStars({ Review_Count, Star_Size }) {
  const [starCount, SetStarCount] = useState({
    full: 0,
    half: 0,
    empty: 0,
  })

  useEffect(() => {
    const wholeStars = Math.floor(Review_Count) || 0
    SetStarCount({
      full: wholeStars,
      half: Number.isInteger(Review_Count) ? 0 : 1,
      empty: Number.isInteger(Review_Count) ? 5 - wholeStars : 4 - wholeStars,
    })
  }, [Review_Count])
  return (
    <div className="flex gap-1 text-yellow-100">
      {[...new Array(starCount.full)].map((_, i) => {
        return <TiStarFullOutline key={i} size={Star_Size || 20} />
      })}
      {[...new Array(starCount.half)].map((_, i) => {
        return <TiStarHalfOutline key={i} size={Star_Size || 20} />
      })}
      {[...new Array(starCount.empty)].map((_, i) => {
        return <TiStarOutline key={i} size={Star_Size || 20} />
      })}
    </div>
  )
}

export default RatingStars
```

---

## `src\components\common\ReviewSlider.jsx`

```javascript
import React, { useEffect, useState } from "react"
import ReactStars from "react-rating-stars-component"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Pagination, Autoplay } from 'swiper/modules'; 

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "../../App.css"
// Icons
import { FaStar } from "react-icons/fa"
// Import required modules


// Get apiFunction and the endpoint
import { apiConnector } from "../../services/apiconnector"
import { ratingsEndpoints } from "../../services/apis"

function ReviewSlider() {
  const [reviews, setReviews] = useState([])
  const truncateWords = 15
  const [slides,setSlides]=useState(3);
  useEffect(() => {
    ;(async () => {
      const { data } = await apiConnector(
        "GET",
        ratingsEndpoints.REVIEWS_DETAILS_API
      )
      if (data?.success) {
        setReviews(data?.data)
      }
    })()
  }, [])

  useEffect(()=>{
    if(window.innerHeight<=768){
      setSlides(1);
    }
    else if(window.innerWidth<=1024 && window.innerWidth>768){
      setSlides(2);
    }
    else if(window.innerWidth>1024){
      setSlides(3);
    }
  },[]);
  
  // console.log(reviews)

  return (
    <div className="text-white">
      <div className="my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent ">
        <Swiper
          slidesPerView={slides}
          spaceBetween={25}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="w-full "
        >
          {reviews.map((review, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="flex items-center flex-col gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25 h-fit rounded-md ">
                  <div className="flex items-center gap-4">
                    <img
                      src={
                        review?.user?.image
                          ? review?.user?.image
                          : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                      }
                      alt=""
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-richblack-5">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
                      <h2 className="text-[12px] font-medium text-richblack-500">
                        {review?.course?.courseName}
                      </h2>
                    </div>
                  </div>
                  <p className="font-medium text-richblack-25">
                    {review?.review.split(" ").length > truncateWords
                      ? `${review?.review
                          .split(" ")
                          .slice(0, truncateWords)
                          .join(" ")} ...`
                      : `${review?.review}`}
                  </p>
                  <div className="flex items-center gap-2 ">
                    <h3 className="font-semibold text-yellow-100">
                      {review.rating.toFixed(1)}
                    </h3>
                    <ReactStars
                      count={5}
                      value={review.rating}
                      size={20}
                      edit={false}
                      activeColor="#ffd700"
                      emptyIcon={<FaStar />}
                      fullIcon={<FaStar />}
                    />
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
          {/* <SwiperSlide>Slide 1</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  )
}

export default ReviewSlider
```

---

## `src\components\common\Spinner.jsx`

```javascript
import "../../App.css";
const Spinner=()=>{
  return(
    <div className="text-white spinner"></div>
  )
}

export default Spinner
```

---

## `src\components\common\Tab.jsx`

```javascript
export default function Tab({ tabData, field, setField }) {
    return (
      <div
        style={{
          boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
        }}
        className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max"
      >
        {tabData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setField(tab.type)}
            className={`${
              field === tab.type
                ? "bg-richblack-900 text-richblack-5"
                : "bg-transparent text-richblack-200"
            } py-2 px-5 rounded-full transition-all duration-200`}
          >
            {tab?.tabName}
          </button>
        ))}
      </div>
    );
  }
```

---

## `src\components\Contact\ContactUsForm.jsx`

```javascript
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../services/apiconnector";
import { contactusEndpoint } from "../../services/apis";
import CountryCode from "../../data/countrycode.json";

const ContactUsForm = () =>{
  
  const [loading,setLoading]=useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState:{errors,isSubmitSuccessful}
    }=useForm();
    
    const submitContactForm=async(data)=>{
        console.log("Logging Data:",data);
        try{
          setLoading(true);
          // const response=await apiConnector("POST",contactusEndpoint.CONTACT_US_API,data);
          const response={status:"OK"};
          console.log(response);
          setLoading(false);
        }
        catch(error){
          console.log("Error:",error.message);
          setLoading(false);
        }
    }

    useEffect(()=>{
      if(isSubmitSuccessful){
        reset({
          email:"",
          firstname:"",
          lastname:"",
          message:"",
          phoneno:"",
        })
      }
    },[isSubmitSuccessful,reset]);

  return (
    <form onSubmit={handleSubmit(submitContactForm)}>
      
      <div className="flex-col gap-5  flex">
    
      <div className="flex flex-col md:flex-row w-full gap-5">
        {/* firstname */}
        <div className="flex w-full flex-col">
          <label className="text-[14px] leading-[22px] text-[#F1F2FF] font-medium " htmlFor="firstname">
            First Name
          </label>
          <input 
          className="bg-[#161D29]  text-sm mt-1 text-[#999DAA] font-medium w-full p-3 rounded-lg"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          type="text" 
          name="firstname" 
          id="firstname"
          placeholder="Enter first name"
          {...register("firstname",{required:true})}
           />
           {
            errors.firstname && (
              <span>
                Firstname error
              </span>
            )
           }
        </div>


        {/* lastname */}
        <div className="flex w-full flex-col">
          <label className="text-[14px] leading-[22px] text-[#F1F2FF] font-medium " htmlFor="lastname">
            Last Name
          </label>
          <input
          className="bg-[#161D29]  text-sm mt-1 text-[#999DAA] font-medium w-full p-3 rounded-lg"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }} 
          type="text" 
          name="lastname" 
          id="lastname"
          placeholder="Enter last name"
          {...register("lastname")}
           />
      
        </div>

      </div>

       {/* email */}
       <div className="flex flex-col">
           <label className="text-[14px] leading-[22px] text-[#F1F2FF] font-medium " htmlFor="email">
            Email Address
           </label>
           <input 
           className="bg-[#161D29]  text-sm mt-1 text-[#999DAA] font-medium w-full p-3 rounded-lg"
           style={{
             boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
           }}
           type="email"
           name="email"
           id="email"
           placeholder="Enter email Address"
           {...register("email",{required:true})} 
           />
           {
            errors.email && (
              <span>
                Please enter your email address
              </span>
            )
           }
        </div>

        {/* phone no */}
        <div className="flex w-full flex-col gap-2">
           <label className="text-[14px] leading-[22px] text-[#F1F2FF] font-medium " htmlFor="phoneno">Phone Number</label>
           

           <div className="flex flex-col md:flex-row gap-5">
              {/* dropdown */}
              <select 
              className="bg-[#161D29]  text-sm mt-1 text-[#999DAA] font-medium  p-3 rounded-lg md:w-[15%] "
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              name="dropdown"
               id="dropdown"
              {...register("countrycode",{required:true})}
              >
                {
                  CountryCode.map((element,index)=>{
                    return (
                      <option className="text-[#999DAA]" value={element.code} key={index}>
                        {element.code} - {element.country}
                      </option>
                    )
                  })
                }
              </select>

              <div className="w-[100%]">
                <input type="number"
                className="bg-[#161D29]  text-sm mt-1 text-[#999DAA] font-medium w-full p-3 rounded-lg"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                name="phoneno"
                id="phoneno"
                placeholder="Enter your phone number please" 
               
                {...register("phoneno",{
                  required:{value:true,message:"Please Enter Your Phone Number"},
                  maxLength:{value:10,message:"Invalid Phone Number"},
                  minLength:{value:8,message:"Invalid Phone Number"}
                })}
                />
                {
                  errors.phoneno&&(
                    <span>
                     { errors.phoneno.message}
                    </span>
                  )
                }
              </div>
           </div>
        </div>


        {/* message */}
        <div className="flex flex-col">
           <label className="text-[14px] leading-[22px] text-[#F1F2FF] font-medium " htmlFor="message">Message</label>
          <textarea 
          className="bg-[#161D29]  text-sm mt-1 text-[#999DAA] font-medium w-full p-3 rounded-lg"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          name="message" 
          id="message" 
          cols="30"
           rows="10"
           placeholder="Enter Your Message Here"
           {...register("message",{required:true})}
           />
           {
            errors.message && <span>
              Please enter your message
            </span>
           }
        </div>

        {/* submit */}
        <button className="rounded-md bg-yellow-50 text-center text-sm   px-6 py-3 font-semibold text-[#000814] " type="submit">
            Send Message
        </button>

      </div>
    </form>
  );
}

export default ContactUsForm;
```

---

## `src\components\core\About\ContactFormSection.jsx`

```javascript
import React from "react";
import ContactUsForm from "../../Contact/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className="mx-auto">
      <h1 className="text-center text-4xl font-semibold">Get in Touch</h1>
      <p className="text-center text-richblack-300 mt-3">
        We&apos;d love to here for you, Please fill out this form.
      </p>
      <div className="mt-12 mx-auto">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactFormSection;
```

---

## `src\components\core\About\LearningGrid.jsx`

```javascript
import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highliteText: "Anyone, Anywhere",
    description:
      "EduFy partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "EduFy partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "EduFy partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "EduFy partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "EduFy partners with more than 275+ leading universities and companies to bring",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : card.order % 2 === 0
                ? "bg-richblack-800 h-[294px]"
                : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighlightText text={card.highliteText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
```

---

## `src\components\core\About\Quote.jsx`

```javascript
import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className=" text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
        We are passionate about revolutionizing the way we learn. Our
        innovative platform <HighlightText text={"combines technology"} />,{" "}
        <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
            {" "}
            expertise
        </span>
        , and community to create an
        <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
            {" "}
            unparalleled educational
        experience.
        </span> 
    </div>
  )
}

export default Quote
```

---

## `src\components\core\About\Stats.jsx`

```javascript
import React from "react";

const Stats = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];

const StatsComponenet = () => {
  return (
    <div className="bg-richblack-700">
      {/* Stats */}
      <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center">
          {Stats.map((data, index) => {
            return (
              <div className="flex flex-col py-10" key={index}>
                <h1 className="text-[30px] font-bold text-richblack-5">
                  {data.count}
                </h1>
                <h2 className="font-semibold text-[16px] text-richblack-500">
                  {data.label}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsComponenet;
```

---

## `src\components\core\About\StatsComponent.jsx`

```javascript

const Stats=[
  {
    count:"5K",
    label:"Active Students"
  }
  ,
  {
    count:"10+",
    label:"Mentors"
  }
  ,
  {
    count:"200+",
    label:"Courses"
  }
  ,
  {
    count:"50+",
    label:"Awards"
  }
];

const StatsComponent=()=>{
  return (
      <section className=" w-full ">
        <div className=" w-full ">
          <div className="flex flex-col md:flex-row text-center gap-10 md:gap-0 justify-evenly  mx-auto w-full">
            {
              Stats.map((data,index)=>(
                <div key={index}>
                  <h1 className="text-[30px] font-semibold leading-[38px]">
                    {data.count}
                  </h1>
                  <h2 className="text-[12px] font-semibold text-[#585D69] leading-[24px] ">
                    {data.label}
                  </h2>
                </div>
              ))
            }
          </div>
        </div>
      </section>
  );

}

export default StatsComponent;
```

---

## `src\components\core\Auth\LoginForm.jsx`

```javascript
import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { login } from "../../../services/operations/authAPI"

function LoginForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }

  return (
    <form
      onSubmit={handleOnSubmit}
      className="mt-6 flex w-full flex-col gap-y-4"
    >
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
        />
      </label>
      <label className="relative">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Password <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter Password"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] z-[10] cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="/forgot-password">
          <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
            Forgot Password
          </p>
        </Link>
      </label>
      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
      >
        Sign In
      </button>
    </form>
  )
}

export default LoginForm
```

---

## `src\components\core\Auth\OpenRoute.jsx`

```javascript
// This will prevent authenticated users from accessing this route
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function OpenRoute({ children }) {
  const { token } = useSelector((state) => state.auth)

  if (token === null) {
    return children
  } else {
    return <Navigate to="/dashboard/my-profile" />
  }
}

export default OpenRoute
```

---

## `src\components\core\Auth\PrivateRoute.jsx`

```javascript
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute=({children})=>{
  const {token}=useSelector((state)=>state.auth);
  if(token!=null){
    return children;
    
  }
  else{
    return <Navigate to="/login"/>
  }

}


export default PrivateRoute;
```

---

## `src\components\core\Auth\ProfileDropDown.jsx`

```javascript
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconBtn from "../../common/IconBtn";
import { IoIosArrowDown } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../services/operations/authAPI";

const ProfileDropDown=()=>{
  const {user}=useSelector((state)=>state.profile);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  return (
    <div className="relative group">
      
      
      <div className="flex  text-white flex-row items-center gap-x-2"> 
      <img src={user?.image} className="rounded-full w-9 h-9" />
      {/* <IoIosArrowDown/> */}
      </div>



      <div className="absolute  opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg  flex-col px-6 py-3  text-white z-50 -right-4 top-14   bg-richblack-700 border border-richblack-300   ">
          <IconBtn
          onclick={()=>{
            navigate("/dashboard/my-profile");
          }}
          text="Dashboard"
          children={<MdSpaceDashboard   fontSize={20} />}
          customClasses="flex gap-2 justify-center  w-full align-middle flex-row-reverse"
          /> 
          <IconBtn
          onclick={()=>dispatch(logout(navigate))}
          text="Logout"
          children={<RiLogoutBoxLine fontSize={20} />    }
          customClasses="flex mt-2 gap-2 justify-center align-middle flex-row-reverse"
          /> 
          <div className="h-4 w-4 absolute -top-[9px] z-50 rounded-sm border-t border-l right-6 rotate-45 bg-richblack-700"></div>
      </div>


    </div>
  )
}

export default ProfileDropDown;
```

---

## `src\components\core\Auth\ProfileDrop_Down.jsx`

```javascript
import { useRef, useState } from "react"
import { AiOutlineCaretDown } from "react-icons/ai"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import useOnClickOutside from "../../../hooks/useOnClickOutside"
import { logout } from "../../../services/operations/authAPI"

export default function ProfileDropdown() {
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setOpen(false))

  if (!user) return null

  return (
    <button className="relative" onClick={() => setOpen(true)}>
      <div className="flex items-center gap-x-1">
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-[30px] rounded-full object-cover"
        />
        <AiOutlineCaretDown className="text-sm text-richblack-100" />
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800"
          ref={ref}
        >
          <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
              <VscDashboard className="text-lg" />
              Dashboard
            </div>
          </Link>
          <div
            onClick={() => {
              dispatch(logout(navigate))
              setOpen(false)
            }}
            className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
          >
            <VscSignOut className="text-lg" />
            Logout
          </div>
        </div>
      )}
    </button>
  )
}
```

---

## `src\components\core\Auth\SignupForm.jsx`

```javascript
import { useState } from "react"
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { sendOtp } from "../../../services/operations/authAPI"
import { setSignupData } from "../../../slices/authSlice"
import { ACCOUNT_TYPE } from "../../../utils/constants"
import Tab from "../../common/Tab"

function SignupForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // student or instructor
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { firstName, lastName, email, password, confirmPassword } = formData

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match")
      return
    }
    const signupData = {
      ...formData,
      accountType,
    }

    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData))
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate))

    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    setAccountType(ACCOUNT_TYPE.STUDENT)
  }

  // data to pass to Tab component
  const tabData = [
    {
      id: 1,
      tabName: "Student",
      type: ACCOUNT_TYPE.STUDENT,
    },
    {
      id: 2,
      tabName: "Instructor",
      type: ACCOUNT_TYPE.INSTRUCTOR,
    },
  ]

  return (
    <div>
      {/* Tab */}
      <Tab tabData={tabData} field={accountType} setField={setAccountType} />
      {/* Form */}
      <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
        <div className="flex gap-x-4">
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
        </div>
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>
        <div className="flex gap-x-4">
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm
```

---

## `src\components\core\Auth\Template.jsx`

```javascript
import { FcGoogle } from "react-icons/fc"
import { useSelector } from "react-redux"

import frameImg from "../../../assets/Images/frame.png"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
              {title}
            </h1>
            <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
              <span className="text-richblack-100">{description1}</span>{" "}
              <span className="font-edu-sa font-bold italic text-blue-100">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
            <img
              src={frameImg}
              alt="Pattern"
              width={558}
              height={504}
              loading="lazy"
            />
            <img
              src={image}
              alt="Students"
              width={558}
              height={504}
              loading="lazy"
              className="absolute -top-4 right-4 z-10"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Template
```

---

## `src\components\core\Catalog\CourseCard.jsx`

```javascript
import React, { useEffect, useState } from 'react'
import RatingStars from '../../common/RatingStars'
import GetAvgRating from '../../../utils/avgRating';
import { Link } from 'react-router-dom';
import "../../../../src/App.css";
const Course_Card = ({course, Height}) => {


    const [avgReviewCount, setAvgReviewCount] = useState(0);

    useEffect(()=> {
        const count = GetAvgRating(course.ratingAndReviews);
        setAvgReviewCount(count);
    },[course])


    
  return (
    <>
      <Link to={`/courses/${course._id}`}>
        <div className="">
          <div className="rounded-lg">
            <img
              src={course?.thumbnail}
              alt="course thumnail"
              className={`${Height} w-full rounded-xl object-cover `}
            />
          </div>
          <div className="flex flex-col gap-2 px-1 py-3">
            <p className="text-xl text-richblack-5">{course?.courseName}</p>
            <p className="text-sm text-richblack-50">
              {course?.instructor?.firstName} {course?.instructor?.lastName}
            </p>
            <div className="flex  items-center gap-2">
              <span className="text-yellow-50">{avgReviewCount || 0}</span>
              <RatingStars Review_Count={avgReviewCount} />
              <span className="text-richblack-400">
                {course?.ratingAndReviews?.length} Ratings
              </span>
            </div>
            <p className="text-xl text-richblack-5">Rs. {course?.price}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Course_Card
```

---

## `src\components\core\Catalog\CourseSlider.jsx`

```javascript
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import { FreeMode, Pagination, } from 'swiper/modules'; 

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"


import CourseCard from './CourseCard'

const CourseSlider = ({Courses}) => {
  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          className="max-h-[30rem]"
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <CourseCard course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  )
}

export default CourseSlider
```

---

## `src\components\core\Course\CourseAccordionBar.jsx`

```javascript
import { useEffect, useRef, useState } from "react"
import { AiOutlineDown } from "react-icons/ai"

import CourseSubSectionAccordion from "./CourseSubSectionAccordion"

export default function CourseAccordionBar({ course, isActive, handleActive }) {
  const contentEl = useRef(null)

  // Accordian state
  const [active, setActive] = useState(false)
  useEffect(() => {
    setActive(isActive?.includes(course._id))
  }, [isActive])
  const [sectionHeight, setSectionHeight] = useState(0)
  useEffect(() => {
    setSectionHeight(active ? contentEl.current.scrollHeight : 0)
  }, [active])

  return (
    <div className="overflow-hidden border border-solid border-richblack-600 bg-richblack-700 text-richblack-5 last:mb-0">
      <div>
        <div
          className={`flex cursor-pointer items-start justify-between bg-opacity-20 px-7  py-6 transition-[0.3s]`}
          onClick={() => {
            handleActive(course._id)
          }}
        >
          <div className="flex items-center gap-2">
            <i
              className={
                isActive.includes(course._id) ? "rotate-180" : "rotate-0"
              }
            >
              <AiOutlineDown />
            </i>
            <p>{course?.sectionName}</p>
          </div>
          <div className="space-x-4">
            <span className="text-yellow-25">
              {`${course.subSection.length || 0} lecture(s)`}
            </span>
          </div>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`relative h-0 overflow-hidden bg-richblack-900 transition-[height] duration-[0.35s] ease-[ease]`}
        style={{
          height: sectionHeight,
        }}
      >
        <div className="text-textHead flex flex-col gap-2 px-7 py-6 font-semibold">
          {course?.subSection?.map((subSec, i) => {
            return <CourseSubSectionAccordion subSec={subSec} key={i} />
          })}
        </div>
      </div>
    </div>
  )
}
```

---

## `src\components\core\Course\CourseDetailsCard.js`

```javascript
import React from "react"
import copy from "copy-to-clipboard"
import { toast } from "react-hot-toast"
import { BsFillCaretRightFill } from "react-icons/bs"
import { FaShareSquare } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { addToCart } from "../../../slices/cartSlice"
import { ACCOUNT_TYPE } from "../../../utils/constants"

// const CourseIncludes = [
//   "8 hours on-demand video",
//   "Full Lifetime access",
//   "Access on Mobile and TV",
//   "Certificate of completion",
// ]

function CourseDetailsCard({ course, setConfirmationModal, handleBuyCourse }) {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    thumbnail: ThumbnailImage,
    price: CurrentPrice,
    _id: courseId,
  } = course

  const handleShare = () => {
    copy(window.location.href)
    toast.success("Link copied to clipboard")
  }

  const handleAddToCart = () => {
    if (user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
      toast.error("You are an Instructor. You can't buy a course.")
      return
    }
    if (token) {
      dispatch(addToCart(course))
      return
    }
    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to add To Cart",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    })
  }

  // console.log("Student already enrolled ", course?.studentsEnrolled, user?._id)

  return (
    <>
      <div
        className={`flex flex-col gap-4 rounded-md bg-richblack-700 p-4 text-richblack-5`}
      >
        {/* Course Image */}
        <img
          src={ThumbnailImage}
          alt={course?.courseName}
          className="max-h-[300px] min-h-[180px] w-[400px] overflow-hidden rounded-2xl object-cover md:max-w-full"
        />

        <div className="px-4">
          <div className="space-x-3 pb-4 text-3xl font-semibold">
            Rs. {CurrentPrice}
          </div>
          <div className="flex flex-col gap-4">
            <button
              className="yellowButton"
              onClick={
                user && course?.studentsEnrolled.includes(user?._id)
                  ? () => navigate("/dashboard/enrolled-courses")
                  : handleBuyCourse
              }
            >
              {user && course?.studentsEnrolled.includes(user?._id)
                ? "Go To Course"
                : "Buy Now"}
            </button>
            {(!user || !course?.studentsEnrolled.includes(user?._id)) && (
              <button onClick={handleAddToCart} className="blackButton">
                Add to Cart
              </button>
            )}
          </div>
          <div>
            <p className="pb-3 pt-6 text-center text-sm text-richblack-25">
              30-Day Money-Back Guarantee
            </p>
          </div>

          <div className={``}>
            <p className={`my-2 text-xl font-semibold `}>
              This Course Includes :
            </p>
            <div className="flex flex-col gap-3 text-sm text-caribbeangreen-100">
              {course?.instructions?.map((item, i) => {
                return (
                  <p className={`flex gap-2`} key={i}>
                    <BsFillCaretRightFill />
                    <span>{item}</span>
                  </p>
                )
              })}
            </div>
          </div>
          <div className="text-center">
            <button
              className="mx-auto flex items-center gap-2 py-6 text-yellow-100 "
              onClick={handleShare}
            >
              <FaShareSquare size={15} /> Share
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseDetailsCard
```

---

## `src\components\core\Course\CourseDetailsCard.jsx`

```javascript
import React from "react"
import copy from "copy-to-clipboard"
import { toast } from "react-hot-toast"
import { BsFillCaretRightFill } from "react-icons/bs"
import { FaShareSquare } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { addToCart } from "../../../slices/cartSlice"
import { ACCOUNT_TYPE } from "../../../utils/constants"

// const CourseIncludes = [
//   "8 hours on-demand video",
//   "Full Lifetime access",
//   "Access on Mobile and TV",
//   "Certificate of completion",
// ]

function CourseDetailsCard({ course, setConfirmationModal, handleBuyCourse }) {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    thumbnail: ThumbnailImage,
    price: CurrentPrice,
    _id: courseId,
  } = course

  const handleShare = () => {
    copy(window.location.href)
    toast.success("Link copied to clipboard")
  }

  const handleAddToCart = () => {
    if (user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
      toast.error("You are an Instructor. You can't buy a course.")
      return
    }
    if (token) {
      dispatch(addToCart(course))
      return
    }
    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to add To Cart",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    })
  }

  // console.log("Student already enrolled ", course?.studentsEnrolled, user?._id)

  return (
    <>
      <div
        className={`flex flex-col gap-4 rounded-md bg-richblack-700 p-4 text-richblack-5`}
      >
        {/* Course Image */}
        <img
          src={ThumbnailImage}
          alt={course?.courseName}
          className="max-h-[300px] min-h-[180px] w-[400px] overflow-hidden rounded-2xl object-cover md:max-w-full"
        />

        <div className="px-4">
          <div className="space-x-3 pb-4 text-3xl font-semibold">
            Rs. {CurrentPrice}
          </div>
          <div className="flex flex-col gap-4">
            <button
              className="yellowButton"
              onClick={
                user && course?.studentsEnrolled.includes(user?._id)
                  ? () => navigate("/dashboard/enrolled-courses")
                  : handleBuyCourse
              }
            >
              {user && course?.studentsEnrolled.includes(user?._id)
                ? "Go To Course"
                : "Buy Now"}
            </button>
            {(!user || !course?.studentsEnrolled.includes(user?._id)) && (
              <button onClick={handleAddToCart} className="blackButton">
                Add to Cart
              </button>
            )}
          </div>
          <div>
            <p className="pb-3 pt-6 text-center text-sm text-richblack-25">
              30-Day Money-Back Guarantee
            </p>
          </div>

          <div className={``}>
            <p className={`my-2 text-xl font-semibold `}>
              This Course Includes :
            </p>
            <div className="flex flex-col gap-3 text-sm text-caribbeangreen-100">
              {course?.instructions?.map((item, i) => {
                return (
                  <p className={`flex gap-2`} key={i}>
                    <BsFillCaretRightFill />
                    <span>{item}</span>
                  </p>
                )
              })}
            </div>
          </div>
          <div className="text-center">
            <button
              className="mx-auto flex items-center gap-2 py-6 text-yellow-100 "
              onClick={handleShare}
            >
              <FaShareSquare size={15} /> Share
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseDetailsCard
```

---

## `src\components\core\Course\CourseSubSectionAccordion.jsx`

```javascript
import React, { useEffect, useRef, useState } from "react"
import { AiOutlineDown } from "react-icons/ai"
import { HiOutlineVideoCamera } from "react-icons/hi"

function CourseSubSectionAccordion({ subSec }) {
  return (
    <div>
      <div className="flex justify-between py-2">
        <div className={`flex items-center gap-2`}>
          <span>
            <HiOutlineVideoCamera />
          </span>
          <p>{subSec?.title}</p>
        </div>
      </div>
    </div>
  )
}

export default CourseSubSectionAccordion
```

---

## `src\components\core\Dashboard\EnrolledCourses.jsx`

```javascript
import { useEffect, useState } from "react"
import ProgressBar from "@ramonak/react-progress-bar"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { getUserEnrolledCourses } from "../../../services/operations/profileAPI"

export default function EnrolledCourses() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const [enrolledCourses, setEnrolledCourses] = useState(null)
  const getEnrolledCourses = async () => {
    try {
      const res = await getUserEnrolledCourses(token);
      console.log(res);
      setEnrolledCourses(res);
    } catch (error) {
      console.log("Could not fetch enrolled courses.")
    }
  };
  useEffect(() => {
    getEnrolledCourses();
  }, [])

  return (
    <>
      <div className="text-3xl text-richblack-50">Enrolled Courses</div>
      {!enrolledCourses ? (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
          <div className="spinner"></div>
        </div>
      ) : !enrolledCourses.length ? (
        <p className="grid h-[10vh] w-full place-content-center text-richblack-5">
          You have not enrolled in any course yet.
          {/* TODO: Modify this Empty State */}
        </p>
      ) : (
        <div className="my-8 text-richblack-5">
          {/* Headings */}
          <div className="flex rounded-t-lg bg-richblack-500 ">
            <p className="w-[45%] px-5 py-3">Course Name</p>
            <p className="w-1/4 px-2 py-3">Duration</p>
            <p className="flex-1 px-2 py-3">Progress</p>
          </div>
          {/* Course Names */}
          {enrolledCourses.map((course, i, arr) => (
            
            <div
              className={`flex items-center border border-richblack-700 ${
                i === arr.length - 1 ? "rounded-b-lg" : "rounded-none"
              }`}
              key={i}
            >
              <div
                className="flex w-[45%] cursor-pointer items-center gap-4 px-5 py-3"
                onClick={() => {
                  navigate(
                    `/view-course/${course?._id}/section/${course.courseContent?.[0]?._id}/sub-section/${course.courseContent?.[0]?.subSection?.[0]?._id}`
                  )
                  console.log(course);
                }}
              >
                <img
                  src={course.thumbnail}
                  alt="course_img"
                  className="h-14 w-14 rounded-lg object-cover"
                />
                <div className="flex max-w-xs flex-col gap-2">
                  <p className="font-semibold">{course.courseName}</p>
                  <p className="text-xs text-richblack-300">
                    {course.courseDescription.length > 50
                      ? `${course.courseDescription.slice(0, 50)}...`
                      : course.courseDescription}
                  </p>
                </div>
              </div>
              <div className="w-1/4 px-2 py-3">{course?.totalDuration}</div>
              <div className="flex w-1/5 flex-col gap-2 px-2 py-3">
                <p>Progress: {course.progressPercentage || 0}%</p>
                <ProgressBar
                  completed={course.progressPercentage || 0}
                  height="8px"
                  isLabelVisible={false}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
```

---

## `src\components\core\Dashboard\MyProfile.jsx`

```javascript
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../common/IconBtn";
import { FaEdit } from "react-icons/fa";

const MyProfile=()=>{
  const {user}=useSelector((state)=>state.profile);
  const navigate=useNavigate();
  return (
    <div className="text-white w-full">


      <h1 className="font-inter font-[600] text-[30px] leading-[38px]">
        My Profile
      </h1>

      {/* Section 1 */}
      <div className="mt-10 md:flex-row gap-8 md:gap-0 rounded-lg border border-[#2C333F] bg-[#161D29] p-8  mx-auto flex flex-col w-11/12 justify-between ">
        <div className="flex  gap-4 items-center  ">
          <img src={user?.image} alt={`profile-${user?.firstName}`} 
          className="aspect-square w-[78px] rounded-full object-cover"/>
          
          <div>
            <p className="text-[18px] leading-[26px] font-[500] font-inter ">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-[14px] leading-[22px] font-[400] text-[#838894] font-inter ">
              {user?.email}
            </p>
          </div>
        </div>

        <div className="flex flex-row md:flex-col justify-center">
         <button
          className="text-black hover:scale-95 transition-all duration-200  w-fit rounded-lg bg-[#FFD60A] h-fit py-3 px-6 flex gap-x-2 align-middle "      
          onClick={()=>{
            navigate("/dashboard/settings")
          }}>
          <FaEdit  fontSize={20} />
          <div className="text-[16px] leading-[24px]  font-[600]">Edit</div>
        </button> 
        </div>
       

          

      </div>

      {/* Section 2 */}
      <div className="mt-10 gap-3 sm:gap-0  rounded-lg border border-[#2C333F] bg-[#161D29] p-8  mx-auto flex flex-col w-11/12 justify-between ">
        <div className="flex items-center sm:items-start justify-between ">
          <p className="font-[600] text-[18px] leading-[26px] ">About</p>
          <IconBtn
          customClasses="text-black font-[600] flex-row-reverse hover:scale-95 transition-all duration-200  w-fit rounded-lg bg-[#FFD60A] h-fit py-3 px-6 flex gap-x-2 align-middle "
          children={<FaEdit fontSize={20}/>}
          text="Edit"
          onclick={()=>{
            navigate("/dashboard/settings")
          }}/>
        </div>
        <p className="text-[14px] leading-[22px] text-[#838894] ">{user?.additionalDetails?.about ?? "Write Something about Yourself"}</p>
      </div>

      {/* Section 3 */}
      <div className="mt-10 gap-3 sm:gap-0  rounded-lg border border-[#2C333F] bg-[#161D29] p-8  mx-auto flex flex-col w-11/12 justify-between">
        <div className="flex flex-row justify-between">
          <p className="font-[600] w-[20px] sm:w-fit  text-[18px] leading-[26px]">
            Personal Details
          </p>
          <IconBtn
          customClasses="text-black font-[600] flex-row-reverse hover:scale-95 transition-all duration-200  w-fit rounded-lg bg-[#FFD60A] h-fit py-3 px-6 flex gap-x-2 align-middle "
          children={<FaEdit fontSize={20}/>}
          text="Edit"
          onclick={()=>{
            navigate("/dashboard/settings")
          }}/>
        </div>
        <div className="mt-5 grid  sm:grid-cols-2 sm:grid-rows-3 gap-5">
          <div>
            <p className="text-[14px] font-[400] leading-[22px] text-[#838894] ">First Name</p>
            <p className="font-[500] text-[14px] leading-[22px] ">{user?.firstName}</p>
          </div>
          <div>
            <p className="text-[14px] leading-[22px] text-[#838894] ">Email</p>
            <p className="font-[500] text-[14px] leading-[22px] ">{user?.email}</p>
          </div>
          <div>
            <p className="text-[14px] leading-[22px] text-[#838894] ">Gender</p>
            <p className="font-[500] text-[14px] leading-[22px] ">{user?.additionalDetails?.gender ?? "Add Gender"}</p>
          </div>
          <div>
            <p className="text-[14px] leading-[22px] text-[#838894] ">Last Name</p>
            <p className="font-[500] text-[14px] leading-[22px] ">{user?.lastName}</p>
          </div>
          <div>
            <p className="text-[14px] leading-[22px] text-[#838894] ">Phone number</p>
            <p className="font-[500] text-[14px] leading-[22px] ">{user?.additionalDetails?.contactNumber ?? "Add Contact Number"}</p>
          </div>
          <div>
            <p className="text-[14px] leading-[22px] text-[#838894] ">Date of Birth</p>
            <p className="font-[500] text-[14px] leading-[22px] ">{user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}</p>
          </div>
        </div>
      </div>


    </div>
  );

}

export default MyProfile;
```

---

## `src\components\core\Dashboard\Sidebar.jsx`

```javascript
import { useDispatch, useSelector } from "react-redux";
import { sidebarLinks } from "../../../data/dashboard-links";
import { logout } from "../../../services/operations/authAPI";
import { useNavigate } from "react-router-dom";
import SidebarLink from "./SidebarLink";
import { VscSignOut } from "react-icons/vsc";
import { useState } from "react";
import Spinner from "../../common/Spinner";
import ConfirmationModal from "../../common/ConfirmationModal";

const Sidebar=()=>{
  const {user,loading:profileLoading}=useSelector((state)=>state.profile);
  const {loading:authLoading}=useSelector((state)=>state.auth);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [confirmationModal,setConfirmationModal]=useState(null);
  
  if(profileLoading || authLoading){
    return (
      <div>
        <Spinner/>
      </div>
    )
  }
  
  return (
    <div className="relative flex min-w-[222px] flex-col border-r-[1px] border-r-richblack-700
    h-[calc(100vh-3.5rem)] text-white font-bold bg-richblack-800 py-10">
      <div className="flex relative  flex-col">
        {
          sidebarLinks.map((link)=>{
            if(link.type && user?.accountType!==link.type) return null;
            return (
              <SidebarLink key={link.id} link={link} iconName={link.icon}/>
            )
            })
        }
      </div>

      <div className="mx-auto  mt-6 mb-6 h-[1px] w-10/12 bg-richblack-600 "></div>

      <div className="flex relative flex-col ">
        <SidebarLink
        link={{name:"Settings",path:"dashboard/settings"}}
        iconName={"VscSettingsGear"}
        />
        <button onClick={()=>setConfirmationModal({
          text1:"Are You Sure?",
          text2:"You will be logged out of your Account",
          btn1Text:"Logout",
          btn2Text:"Cancel",
          btn1Handler:()=>dispatch(logout(navigate)),
          btn2Handler: ()=>setConfirmationModal(null),
        })}
        className="text-sm mt-2 font-medium text-richblack-300"
        >
        

        <div className="flex text-white ml-8 items-center gap-x-2">
          <VscSignOut className="text-lg" />
          <span>Logout</span>
        </div>
        </button>

    
      </div>


      {confirmationModal && <ConfirmationModal modalData={confirmationModal}/>}
    </div>
  );
}

export default Sidebar;
```

---

## `src\components\core\Dashboard\SidebarLink.jsx`

```javascript
import * as Icons from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { NavLink, matchPath, useLocation } from "react-router-dom";

const SidebarLink=({link,iconName})=>{
  
  const Icon= Icons[iconName];
  const location=useLocation();
  const dispatch=useDispatch();


  const matchRoute=(route)=>{
    return matchPath({path:route},location.pathname);
  }
  if(link.name==="Purchase History"){
    return ;
  }
  return(

      <NavLink
      to={link.path}
      className={`relative px-8 py-2 text-sm font-medium ${matchRoute(link.path)?(" bg-yellow-800 "):("bg-opacity-0")}`}
      >
        <span className={`absolute left-0 top-0 h-full w-[0.2rem] bg-yellow-50 ${
          matchRoute(link.path)?("opacity-100"):("opacity-0")} `}>
        </span>
        
        <div className="flex item-center gap-x-2">
          <Icon className="text-lg"/>
          <span>{link.name}</span>
        </div>

      </NavLink>
   
  );
}

export default SidebarLink;
```

---

## `src\components\core\Dashboard\AddCourse\RenderSteps.jsx`

```javascript
import { FaCheck } from "react-icons/fa"
import { useSelector } from "react-redux"

import CourseBuilderForm from "./CourseBuilder/CourseBuilderForm"
import CourseInformationForm from "./CourseInformation/CourseInformationForm"
import PublishCourse from "./PublishCourse"


export default function RenderSteps() {
  const { step } = useSelector((state) => state.course)

  const steps = [
    {
      id: 1,
      title: "Course Information",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Publish",
    },
  ]

  return (
    <>
      <div className="relative mb-2 flex w-full justify-center">
        {steps.map((item) => (
          <>
            <div
              className="flex flex-col items-center "
              key={item.id}
            >
              <button
                className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${
                  step === item.id
                    ? "border-yellow-50 bg-yellow-900 text-yellow-50"
                    : "border-richblack-700 bg-richblack-800 text-richblack-300"
                } ${step > item.id && "bg-yellow-50 text-yellow-50"}} `}
              >
                {step > item.id ? (
                  <FaCheck className="font-bold text-richblack-900" />
                ) : (
                  item.id
                )}
              </button>
              
            </div>
            {item.id !== steps.length && (
              <>
                <div
                  className={`h-[calc(34px/2)] w-[33%]  border-dashed border-b-2 ${
                  step > item.id  ? "border-yellow-50" : "border-richblack-500"
                } `}
                ></div>
              </>
            )}
          </>
        ))}
      </div>

      <div className="relative mb-16 flex w-full select-none justify-between">
        {steps.map((item) => (
          <>
            <div
              className="flex min-w-[130px] flex-col items-center gap-y-2"
              key={item.id}
            >
              
              <p
                className={`text-sm ${
                  step >= item.id ? "text-richblack-5" : "text-richblack-500"
                }`}
              >
                {item.title}
              </p>
            </div>
            
          </>
        ))}
      </div>
      {/* Render specific component based on current step */}
      {step === 1 && <CourseInformationForm />}
      {step === 2 && <CourseBuilderForm />}
      {step === 3 &&  <PublishCourse /> }
    </>
  )
}
```

---

## `src\components\core\Dashboard\AddCourse\index.jsx`

```javascript
import RenderSteps from "./RenderSteps"

export default function AddCourse() {
  return (
    <>
      <div className="flex w-full items-start gap-x-6">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-14 text-3xl font-medium text-richblack-5">
            Add Course
          </h1>
          <div className="flex-1">
            <RenderSteps />
          </div>
        </div>
        {/* Course Upload Tips */}
        <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 xl:block">
          <p className="mb-8 text-lg text-richblack-5">⚡ Course Upload Tips</p>
          <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
            <li>Set the Course Price option or make it free.</li>
            <li>Standard size for the course thumbnail is 1024x576.</li>
            <li>Video section controls the course overview video.</li>
            <li>Course Builder is where you create & organize a course.</li>
            <li>
              Add Topics in the Course Builder section to create lessons,
              quizzes, and assignments.
            </li>
            <li>
              Information from the Additional Data section shows up on the
              course single page.
            </li>
            <li>Make Announcements to notify any important</li>
            <li>Notes to all enrolled students at once.</li>
          </ul>
        </div>
      </div>
    </>
  )
}
```

---

## `src\components\core\Dashboard\AddCourse\CourseBuilder\CourseBuilderForm.jsx`

```javascript
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { IoAddCircleOutline } from "react-icons/io5"
import { MdNavigateNext } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"

import {
  createSection,
  updateSection,
} from "../../../../../services/operations/courseDetailsAPI"
import {
  setCourse,
  setEditCourse,
  setStep,
} from "../../../../../slices/courseSlice"
import IconBtn from "../../../../common/IconBtn"
import NestedView from "./NestedView"

export default function CourseBuilderForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const { course } = useSelector((state) => state.course)
  const { token } = useSelector((state) => state.auth)
  const [loading, setLoading] = useState(false)
  const [editSectionName, setEditSectionName] = useState(null)
  const dispatch = useDispatch()

  // handle form submission
  const onSubmit = async (data) => {
    // console.log(data)
    setLoading(true)

    let result

    if (editSectionName) {
      result = await updateSection(
        {
          sectionName: data.sectionName,
          sectionId: editSectionName,
          courseId: course._id,
        },
        token
      )
      // console.log("edit", result)
    } else {
      result = await createSection(
        {
          sectionName: data.sectionName,
          courseId: course._id,
        },
        token
      )
    }
    if (result) {
      // console.log("section result", result)
      dispatch(setCourse(result))
      setEditSectionName(null)
      setValue("sectionName", "")
    }
    setLoading(false)
  }

  const cancelEdit = () => {
    setEditSectionName(null)
    setValue("sectionName", "")
  }

  const handleChangeEditSectionName = (sectionId, sectionName) => {
    if (editSectionName === sectionId) {
      cancelEdit()
      return
    }
    setEditSectionName(sectionId)
    setValue("sectionName", sectionName)
  }

  const goToNext = () => {
    if (course.courseContent.length === 0) {
      toast.error("Please add atleast one section")
      return
    }
    if (
      course.courseContent.some((section) => section.subSection.length === 0)
    ) {
      toast.error("Please add atleast one lecture in each section")
      return
    }
    dispatch(setStep(3))
  }

  const goBack = () => {
    dispatch(setStep(1))
    dispatch(setEditCourse(true))
  }

  return (
    <div className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
      <p className="text-2xl font-semibold text-richblack-5">Course Builder</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label className="text-sm text-richblack-5" htmlFor="sectionName">
            Section Name <sup className="text-pink-200">*</sup>
          </label>
          <input
            id="sectionName"
            disabled={loading}
            placeholder="Add a section to build your course"
            {...register("sectionName", { required: true })}
            className="form-style w-full"
          />
          {errors.sectionName && (
            <span className="ml-2 text-xs tracking-wide text-pink-200">
              Section name is required
            </span>
          )}
        </div>
        <div className="flex items-end gap-x-4">
          <IconBtn
            type="submit"
            disabled={loading}
            customClasses="flex items-center text-white gap-2 "
            text={editSectionName ? "Edit Section Name" : "Create Section"}
            outline={true}
          >
            <IoAddCircleOutline size={20} className="text-yellow-50" />
          </IconBtn>
          {editSectionName && (
            <button
              type="button"
              onClick={cancelEdit}
              className="text-sm text-richblack-300 underline"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>
      {course.courseContent.length > 0 && (
        <NestedView handleChangeEditSectionName={handleChangeEditSectionName} />
      )}
      {/* Next Prev Button */}
      <div className="flex justify-end gap-x-3">
        <button
          onClick={goBack}
          className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
        >
          Back
        </button>
        <IconBtn disabled={loading} customClasses="bg-yellow-100 px-4 py-2 rounded-md text-black font-semibold flex gap-2 items-center" text="Next" onclick={goToNext}>
          <MdNavigateNext />
        </IconBtn>
      </div>
    </div>
  )
}
```

---

## `src\components\core\Dashboard\AddCourse\CourseBuilder\NestedView.jsx`

```javascript
import { useState } from "react"
import { AiFillCaretDown } from "react-icons/ai"
import { FaPlus } from "react-icons/fa"
import { MdEdit } from "react-icons/md"
import { RiDeleteBin6Line } from "react-icons/ri"
import { RxDropdownMenu } from "react-icons/rx"
import { useDispatch, useSelector } from "react-redux"

import {
  deleteSection,
  deleteSubSection,
} from "../../../../../services/operations/courseDetailsAPI"
import { setCourse } from "../../../../../slices/courseSlice"
import ConfirmationModal from "../../../../common/ConfirmationModal"
import SubSectionModal from "./SubSectionModal"

export default function NestedView({ handleChangeEditSectionName }) {
  const { course } = useSelector((state) => state.course)
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  // States to keep track of mode of modal [add, view, edit]
  const [addSubSection, setAddSubsection] = useState(null)
  const [viewSubSection, setViewSubSection] = useState(null)
  const [editSubSection, setEditSubSection] = useState(null)
  // to keep track of confirmation modal
  const [confirmationModal, setConfirmationModal] = useState(null)

  const handleDeleleSection = async (sectionId) => {
    const result = await deleteSection({
      sectionId,
      courseId: course._id,
      token,
    })
    if (result) {
      dispatch(setCourse(result))
    }
    setConfirmationModal(null)
  }

  const handleDeleteSubSection = async (subSectionId, sectionId) => {
    const result = await deleteSubSection({ subSectionId, sectionId, token })
    if (result) {
      // update the structure of course
      const updatedCourseContent = course.courseContent.map((section) =>
        section._id === sectionId ? result : section
      )
      const updatedCourse = { ...course, courseContent: updatedCourseContent }
      dispatch(setCourse(updatedCourse))
    }
    setConfirmationModal(null)
  }

  return (
    <>
      <div
        className="rounded-lg bg-richblack-700 p-6 px-8"
        id="nestedViewContainer"
      >
        {course?.courseContent?.map((section) => (
          // Section Dropdown
          <details key={section._id} open>
            {/* Section Dropdown Content */}
            <summary className="flex cursor-pointer items-center justify-between border-b-2 border-b-richblack-600 py-2">
              <div className="flex items-center gap-x-3">
                <RxDropdownMenu className="text-2xl text-richblack-50" />
                <p className="font-semibold text-richblack-50">
                  {section.sectionName}
                </p>
              </div>
              <div className="flex items-center gap-x-3">
                <button
                  onClick={() =>
                    handleChangeEditSectionName(
                      section._id,
                      section.sectionName
                    )
                  }
                >
                  <MdEdit className="text-xl text-richblack-300" />
                </button>
                <button
                  onClick={() =>
                    setConfirmationModal({
                      text1: "Delete this Section?",
                      text2: "All the lectures in this section will be deleted",
                      btn1Text: "Delete",
                      btn2Text: "Cancel",
                      btn1Handler: () => handleDeleleSection(section._id),
                      btn2Handler: () => setConfirmationModal(null),
                    })
                  }
                >
                  <RiDeleteBin6Line className="text-xl text-richblack-300" />
                </button>
                <span className="font-medium text-richblack-300">|</span>
                <AiFillCaretDown className={`text-xl text-richblack-300`} />
              </div>
            </summary>
            <div className="px-6 pb-4">
              {/* Render All Sub Sections Within a Section */}
              {section.subSection.map((data) => (
                <div
                  key={data?._id}
                  onClick={() => setViewSubSection(data)}
                  className="flex cursor-pointer items-center justify-between gap-x-3 border-b-2 border-b-richblack-600 py-2"
                >
                  <div className="flex items-center gap-x-3 py-2 ">
                    <RxDropdownMenu className="text-2xl text-richblack-50" />
                    <p className="font-semibold text-richblack-50">
                      {data.title}
                    </p>
                  </div>
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-x-3"
                  >
                    <button
                      onClick={() =>
                        setEditSubSection({ ...data, sectionId: section._id })
                      }
                    >
                      <MdEdit className="text-xl text-richblack-300" />
                    </button>
                    <button
                      onClick={() =>
                        setConfirmationModal({
                          text1: "Delete this Sub-Section?",
                          text2: "This lecture will be deleted",
                          btn1Text: "Delete",
                          btn2Text: "Cancel",
                          btn1Handler: () =>
                            handleDeleteSubSection(data._id, section._id),
                          btn2Handler: () => setConfirmationModal(null),
                        })
                      }
                    >
                      <RiDeleteBin6Line className="text-xl text-richblack-300" />
                    </button>
                  </div>
                </div>
              ))}
              {/* Add New Lecture to Section */}
              <button
                onClick={() => setAddSubsection(section._id)}
                className="mt-3 flex items-center gap-x-1 text-yellow-50"
              >
                <FaPlus className="text-lg" />
                <p>Add Lecture</p>
              </button>
            </div>
          </details>
        ))}
      </div>
      {/* Modal Display */}
      {addSubSection ? (
        <SubSectionModal
          modalData={addSubSection}
          setModalData={setAddSubsection}
          add={true}
        />
      ) : viewSubSection ? (
        <SubSectionModal
          modalData={viewSubSection}
          setModalData={setViewSubSection}
          view={true}
        />
      ) : editSubSection ? (
        <SubSectionModal
          modalData={editSubSection}
          setModalData={setEditSubSection}
          edit={true}
        />
      ) : (
        <></>
      )}
      {/* Confirmation Modal */}
      {confirmationModal ? (
        <ConfirmationModal modalData={confirmationModal} />
      ) : (
        <></>
      )}
    </>
  )
}
```

---

## `src\components\core\Dashboard\AddCourse\CourseBuilder\SubSectionModal.jsx`

```javascript
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { RxCross2 } from "react-icons/rx"
import { useDispatch, useSelector } from "react-redux"

import {
  createSubSection,
  updateSubSection,
} from "../../../../../services/operations/courseDetailsAPI"
import { setCourse } from "../../../../../slices/courseSlice"
import IconBtn from "../../../../common/IconBtn"
import Upload from "../CourseInformation/Upload"

export default function SubSectionModal({
  modalData,
  setModalData,
  add = false,
  view = false,
  edit = false,
}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    getValues,
  } = useForm()

  // console.log("view", view)
  // console.log("edit", edit)
  // console.log("add", add)

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const { token } = useSelector((state) => state.auth)
  const { course } = useSelector((state) => state.course)

  useEffect(() => {
    if (view || edit) {
      // console.log("modalData", modalData)
      setValue("lectureTitle", modalData.title)
      setValue("lectureDesc", modalData.description)
      setValue("lectureVideo", modalData.videoUrl)
    }
  }, [])

  // detect whether form is updated or not
  const isFormUpdated = () => {
    const currentValues = getValues()
    // console.log("changes after editing form values:", currentValues)
    if (
      currentValues.lectureTitle !== modalData.title ||
      currentValues.lectureDesc !== modalData.description ||
      currentValues.lectureVideo !== modalData.videoUrl
    ) {
      return true
    }
    return false
  }

  // handle the editing of subsection
  const handleEditSubsection = async () => {
    const currentValues = getValues()
    // console.log("changes after editing form values:", currentValues)
    const formData = new FormData()
    // console.log("Values After Editing form values:", currentValues)
    formData.append("sectionId", modalData.sectionId)
    formData.append("subSectionId", modalData._id)
    if (currentValues.lectureTitle !== modalData.title) {
      formData.append("title", currentValues.lectureTitle)
    }
    if (currentValues.lectureDesc !== modalData.description) {
      formData.append("description", currentValues.lectureDesc)
    }
    if (currentValues.lectureVideo !== modalData.videoUrl) {
      formData.append("video", currentValues.lectureVideo)
    }
    setLoading(true)
    const result = await updateSubSection(formData, token)
    if (result) {
      // console.log("result", result)
      // update the structure of course
      const updatedCourseContent = course.courseContent.map((section) =>
        section._id === modalData.sectionId ? result : section
      )
      const updatedCourse = { ...course, courseContent: updatedCourseContent }
      dispatch(setCourse(updatedCourse))
    }
    setModalData(null)
    setLoading(false)
  }

  const onSubmit = async (data) => {
    // console.log(data)
    if (view) return

    if (edit) {
      if (!isFormUpdated()) {
        toast.error("No changes made to the form")
      } else {
        handleEditSubsection()
      }
      return
    }

    const formData = new FormData()
    formData.append("sectionId", modalData)
    formData.append("title", data.lectureTitle)
    formData.append("description", data.lectureDesc)
    formData.append("video", data.lectureVideo)
    setLoading(true)
    const result = await createSubSection(formData, token)
    if (result) {
      // update the structure of course
      const updatedCourseContent = course.courseContent.map((section) =>
        section._id === modalData ? result : section
      )
      const updatedCourse = { ...course, courseContent: updatedCourseContent }
      dispatch(setCourse(updatedCourse))
    }
    setModalData(null)
    setLoading(false)
  }

  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="my-10 w-11/12 max-w-[700px] rounded-lg border border-richblack-400 bg-richblack-800">
        {/* Modal Header */}
        <div className="flex items-center justify-between rounded-t-lg bg-richblack-700 p-5">
          <p className="text-xl font-semibold text-richblack-5">
            {view && "Viewing"} {add && "Adding"} {edit && "Editing"} Lecture
          </p>
          <button onClick={() => (!loading ? setModalData(null) : {})}>
            <RxCross2 className="text-2xl text-richblack-5" />
          </button>
        </div>
        {/* Modal Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 px-8 py-10"
        >
          {/* Lecture Video Upload */}
          <Upload
            name="lectureVideo"
            label="Lecture Video"
            register={register}
            setValue={setValue}
            errors={errors}
            video={true}
            viewData={view ? modalData.videoUrl : null}
            editData={edit ? modalData.videoUrl : null}
          />
          {/* Lecture Title */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm text-richblack-5" htmlFor="lectureTitle">
              Lecture Title {!view && <sup className="text-pink-200">*</sup>}
            </label>
            <input
              disabled={view || loading}
              id="lectureTitle"
              placeholder="Enter Lecture Title"
              {...register("lectureTitle", { required: true })}
              className="form-style w-full"
            />
            {errors.lectureTitle && (
              <span className="ml-2 text-xs tracking-wide text-pink-200">
                Lecture title is required
              </span>
            )}
          </div>
          {/* Lecture Description */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm text-richblack-5" htmlFor="lectureDesc">
              Lecture Description{" "}
              {!view && <sup className="text-pink-200">*</sup>}
            </label>
            <textarea
              disabled={view || loading}
              id="lectureDesc"
              placeholder="Enter Lecture Description"
              {...register("lectureDesc", { required: true })}
              className="form-style resize-x-none min-h-[130px] w-full"
            />
            {errors.lectureDesc && (
              <span className="ml-2 text-xs tracking-wide text-pink-200">
                Lecture Description is required
              </span>
            )}
          </div>
          {!view && (
            <div className="flex justify-end">
              <IconBtn
                type="submit"
                customClasses="bg-yellow-100 px-4 py-2 rounded-md text-black font-semibold"
                disabled={loading}
                text={loading ? "Loading.." : edit ? "Save Changes" : "Save"}
              />
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
```

---

## `src\components\core\Dashboard\AddCourse\CourseInformation\ChipInput.jsx`

```javascript
import { useEffect, useState } from "react"
import { MdClose } from "react-icons/md"
import { useSelector } from "react-redux"

export default function ChipInput({
  label,
  name,
  placeholder,
  register,
  errors,
  setValue,
  getValues,
}) {
  const { editCourse, course } = useSelector((state) => state.course)
  const [chips, setChips] = useState([])

  useEffect(() => {
    if (editCourse) {
      setChips(course?.tag || [])
    }
    register(name, { 
      required: true, 
      validate: (value) => value.length > 0 
    })
  }, [])

  useEffect(() => {
    setValue(name, chips)
  }, [chips])

  const handleKeyDown = (event) => {
    // Check if user presses "Enter" or ","
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault()
      const chipValue = event.target.value.trim()
      
      if (chipValue && !chips.includes(chipValue)) {
        const newChips = [...chips, chipValue]
        setChips(newChips)
        event.target.value = ""
      }
    }
  }

  const handleDeleteChip = (chipIndex) => {
    const newChips = chips.filter((_, index) => index !== chipIndex)
    setChips(newChips)
  }

  const handleAddChip = () => {
    const input = document.getElementById(name)
    const chipValue = input.value.trim()
    
    if (chipValue && !chips.includes(chipValue)) {
      const newChips = [...chips, chipValue]
      setChips(newChips)
      input.value = ""
    }
  }

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor={name}>
        {label} <sup className="text-pink-200">*</sup>
      </label>
      
      {/* Display existing chips */}
      {chips.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {chips.map((chip, index) => (
            <div
              key={index}
              className="flex items-center rounded-full bg-yellow-400 px-3 py-1 text-sm text-richblack-5"
            >
              {chip}
              <button
                type="button"
                className="ml-2 focus:outline-none"
                onClick={() => handleDeleteChip(index)}
              >
                <MdClose className="text-sm" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Input for adding new chips */}
      <div className="flex gap-2">
        <input
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          className="form-style flex-1"
        />
        <button
          type="button"
          onClick={handleAddChip}
          className="px-3 py-2 bg-yellow-50 text-richblack-900 rounded-md hover:bg-yellow-100 transition-colors"
        >
          Add
        </button>
      </div>

      <p className="text-xs text-richblack-300">
        Press Enter or comma to add tags
      </p>

      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required
        </span>
      )}
    </div>
  )
}
```

---

## `src\components\core\Dashboard\AddCourse\CourseInformation\CourseInformationForm.jsx`

```javascript
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { HiOutlineCurrencyRupee } from "react-icons/hi"
import { MdNavigateNext } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"

import {
  addCourseDetails,
  editCourseDetails,
  fetchCourseCategories,
} from "../../../../../services/operations/courseDetailsAPI"
import { setCourse, setStep } from "../../../../../slices/courseSlice"
import { COURSE_STATUS } from "../../../../../utils/constants"
import IconBtn from "../../../../common/IconBtn"
import Upload from "./Upload"
import ChipInput from "./ChipInput"
import RequirementsField from "./RequirementsField"

export default function CourseInformationForm() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm()

  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth)
  const { course, editCourse } = useSelector((state) => state.course)
  const [loading, setLoading] = useState(false)
  const [courseCategories, setCourseCategories] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true)
      const categories = await fetchCourseCategories()
      if (categories.length > 0) {
        console.log("categories", categories)
        setCourseCategories(categories)
      }
      setLoading(false)
    }
    
    // if form is in edit mode
    if (editCourse) {
      console.log("data populated", editCourse)
      setValue("courseTitle", course.courseName)
      setValue("courseShortDesc", course.courseDescription)
      setValue("coursePrice", course.price)
      setValue("courseTags", course.tag)
      setValue("courseBenefits", course.whatYouWillLearn)
      setValue("courseCategory", course.category)
      setValue("courseRequirements", course.instructions)
      setValue("courseImage", course.thumbnail)
    }
    getCategories()
  }, [])

  const isFormUpdated = () => {
    const currentValues = getValues()
    console.log("changes after editing form values:", currentValues)
    if (
      currentValues.courseTitle !== course.courseName ||
      currentValues.courseShortDesc !== course.courseDescription ||
      currentValues.coursePrice !== course.price ||
      currentValues.courseTags.toString() !== course.tag.toString() ||
      currentValues.courseBenefits !== course.whatYouWillLearn ||
      currentValues.courseCategory._id !== course.category._id ||
      currentValues.courseRequirements.toString() !==
        course.instructions.toString() ||
      currentValues.courseImage !== course.thumbnail
    ) {
      return true
    }
    return false
  }

  // handle next button click
  const onSubmit = async (data) => {
    console.log("Form Data - ", data)

    if (editCourse) {
      console.log("changes after editing form values:", getValues())
      console.log("now course:", course)
      console.log("Has Form Changed:", isFormUpdated())
      if (isFormUpdated()) {
        const currentValues = getValues()
        const formData = new FormData()
        console.log(data)
        formData.append("courseId", course._id)
        if (currentValues.courseTitle !== course.courseName) {
          formData.append("courseName", data.courseTitle)
        }
        if (currentValues.courseShortDesc !== course.courseDescription) {
          formData.append("courseDescription", data.courseShortDesc)
        }
        if (currentValues.coursePrice !== course.price) {
          formData.append("price", data.coursePrice)
        }
        if (currentValues.courseTags.toString() !== course.tag.toString()) {
          formData.append("tag", JSON.stringify(data.courseTags))
        }
        if (currentValues.courseBenefits !== course.whatYouWillLearn) {
          formData.append("whatYouWillLearn", data.courseBenefits)
        }
        if (currentValues.courseCategory._id !== course.category._id) {
          formData.append("category", data.courseCategory)
        }
        if (
          currentValues.courseRequirements.toString() !==
          course.instructions.toString()
        ) {
          formData.append(
            "instructions",
            JSON.stringify(data.courseRequirements)
          )
        }
        if (currentValues.courseImage !== course.thumbnail) {
          formData.append("thumbnail", data.courseImage)
        }
        console.log("Edit Form data: ", formData)
        setLoading(true)
        const result = await editCourseDetails(formData, token)
        setLoading(false)
        if (result) {
          dispatch(setStep(2))
          dispatch(setCourse(result))
        }
      } else {
        toast.error("No changes made to the form")
      }
      return
    }

    const formData = new FormData()
    formData.append("courseName", data.courseTitle)
    formData.append("courseDescription", data.courseShortDesc)
    formData.append("price", data.coursePrice)
    formData.append("tag", JSON.stringify(data.courseTags))
    formData.append("whatYouWillLearn", data.courseBenefits)
    formData.append("category", data.courseCategory)
    formData.append("status", COURSE_STATUS.DRAFT)
    formData.append("instructions", JSON.stringify(data.courseRequirements))
    formData.append("thumbnail", data.courseImage)
    
    setLoading(true)
    const result = await addCourseDetails(formData, token)
    if (result) {
      dispatch(setStep(2))
      dispatch(setCourse(result))
    }
    setLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6"
    >
      {/* Course Title */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="courseTitle">
          Course Title <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="courseTitle"
          placeholder="Enter Course Title"
          {...register("courseTitle", { required: true })}
          className="form-style w-full"
        />
        {errors.courseTitle && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Course title is required
          </span>
        )}
      </div>
      
      {/* Course Short Description */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="courseShortDesc">
          Course Short Description <sup className="text-pink-200">*</sup>
        </label>
        <textarea
          id="courseShortDesc"
          placeholder="Enter Description"
          {...register("courseShortDesc", { required: true })}
          className="form-style resize-x-none min-h-[130px] w-full"
        />
        {errors.courseShortDesc && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Course Description is required
          </span>
        )}
      </div>
      
      {/* Course Price */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="coursePrice">
          Course Price <sup className="text-pink-200">*</sup>
        </label>
        <div className="relative">
          <input
            id="coursePrice"
            placeholder="Enter Course Price"
            {...register("coursePrice", {
              required: true,
              valueAsNumber: true,
              pattern: {
                value: /^(0|[1-9]\d*)(\.\d+)?$/,
              },
            })}
            className="form-style w-full !pl-12"
          />
          <HiOutlineCurrencyRupee className="absolute left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-richblack-400" />
        </div>
        {errors.coursePrice && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Course Price is required
          </span>
        )}
      </div>
      
      {/* Course Category */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="courseCategory">
          Course Category <sup className="text-pink-200">*</sup>
        </label>
        <select
          {...register("courseCategory", { required: true })}
          defaultValue=""
          id="courseCategory"
          className="form-style w-full"
        >
          <option value="" disabled>
            Choose a Category
          </option>
          {!loading &&
            courseCategories?.map((category, indx) => (
              <option key={indx} value={category?._id}>
                {category?.name}
              </option>
            ))}
        </select>
        {errors.courseCategory && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Course Category is required
          </span>
        )}
      </div>
      
      {/* Course Tags */}
      <ChipInput
        label="Tags"
        name="courseTags"
        placeholder="Enter Tags and press Enter"
        register={register}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      />
      
      {/* Course Thumbnail Image */}
      <Upload
        name="courseImage"
        label="Course Thumbnail"
        register={register}
        setValue={setValue}
        errors={errors}
        editData={editCourse ? course?.thumbnail : null}
      />
      
      {/* Benefits of the course */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="courseBenefits">
          Benefits of the course <sup className="text-pink-200">*</sup>
        </label>
        <textarea
          id="courseBenefits"
          placeholder="Enter benefits of the course"
          {...register("courseBenefits", { required: true })}
          className="form-style resize-x-none min-h-[130px] w-full"
        />
        {errors.courseBenefits && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Benefits of the course is required
          </span>
        )}
      </div>
      
      {/* Requirements/Instructions */}
      <RequirementsField
        name="courseRequirements"
        label="Requirements/Instructions"
        register={register}
        setValue={setValue}
        errors={errors}
        getValues={getValues}
      />
      
      {/* Next Button */}
      <div className="flex justify-end gap-x-2">
        {editCourse && (
          <button
            onClick={() => dispatch(setStep(2))}
            disabled={loading}
            className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
          >
            Continue Without Saving
          </button>
        )}
        <IconBtn
          type="submit"
          customClasses="bg-yellow-100 px-4 py-2 flex text-black items-center gap-2 font-semibold rounded-md"
          disabled={loading}
          text={!editCourse ? "Next" : "Save Changes"}
        >
          <MdNavigateNext />
        </IconBtn>
      </div>
    </form>
  )
}
```

---

## `src\components\core\Dashboard\AddCourse\CourseInformation\RequirementField.jsx`

```javascript
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function RequirementsField({
  name,
  label,
  register,
  setValue,
  errors,
  getValues,
}) {
  const { editCourse, course } = useSelector((state) => state.course)
  const [requirement, setRequirement] = useState("")
  const [requirementsList, setRequirementsList] = useState([])

  useEffect(() => {
    if (editCourse) {
      setRequirementsList(course?.instructions)
    }
    register(name, { required: true, validate: (value) => value.length > 0 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setValue(name, requirementsList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requirementsList])

  const handleAddRequirement = () => {
    if (requirement) {
      setRequirementsList([...requirementsList, requirement])
      setRequirement("")
    }
  }

  const handleRemoveRequirement = (index) => {
    const updatedRequirements = [...requirementsList]
    updatedRequirements.splice(index, 1)
    setRequirementsList(updatedRequirements)
  }

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor={name}>
        {label} <sup className="text-pink-200">*</sup>
      </label>
      <div className="flex flex-col items-start space-y-2">
        <input
          type="text"
          id={name}
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          className="form-style w-full"
        />
        <button
          type="button"
          onClick={handleAddRequirement}
          className="font-semibold text-yellow-50"
        >
          Add
        </button>
      </div>
      {requirementsList.length > 0 && (
        <ul className="mt-2 list-inside list-disc">
          {requirementsList.map((requirement, index) => (
            <li key={index} className="flex items-center text-richblack-5">
              <span>{requirement}</span>
              <button
                type="button"
                className="ml-2 text-xs text-pure-greys-300 "
                onClick={() => handleRemoveRequirement(index)}
              >
                clear
              </button>
            </li>
          ))}
        </ul>
      )}
      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required
        </span>
      )}
    </div>
  )
}
```

---

## `src\components\core\Dashboard\AddCourse\CourseInformation\RequirementsField.jsx`

```javascript
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function RequirementsField({
  name,
  label,
  register,
  setValue,
  errors,
  getValues,
}) {
  const { editCourse, course } = useSelector((state) => state.course)
  const [requirement, setRequirement] = useState("")
  const [requirementsList, setRequirementsList] = useState([])

  useEffect(() => {
    if (editCourse) {
      setRequirementsList(course?.instructions)
    }
    register(name, { required: true, validate: (value) => value.length > 0 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setValue(name, requirementsList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requirementsList])

  const handleAddRequirement = () => {
    if (requirement) {
      setRequirementsList([...requirementsList, requirement])
      setRequirement("")
    }
  }

  const handleRemoveRequirement = (index) => {
    const updatedRequirements = [...requirementsList]
    updatedRequirements.splice(index, 1)
    setRequirementsList(updatedRequirements)
  }

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor={name}>
        {label} <sup className="text-pink-200">*</sup>
      </label>
      <div className="flex flex-col items-start space-y-2">
        <input
          type="text"
          id={name}
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          className="form-style w-full"
        />
        <button
          type="button"
          onClick={handleAddRequirement}
          className="font-semibold text-yellow-50"
        >
          Add
        </button>
      </div>
      {requirementsList.length > 0 && (
        <ul className="mt-2 list-inside list-disc">
          {requirementsList.map((requirement, index) => (
            <li key={index} className="flex items-center text-richblack-5">
              <span>{requirement}</span>
              <button
                type="button"
                className="ml-2 text-xs text-pure-greys-300 "
                onClick={() => handleRemoveRequirement(index)}
              >
                clear
              </button>
            </li>
          ))}
        </ul>
      )}
      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required
        </span>
      )}
    </div>
  )
}

```

---

## `src\components\core\Dashboard\AddCourse\CourseInformation\Upload.jsx`

```javascript
import { useEffect, useRef, useState } from "react"
import { useDropzone } from "react-dropzone"
import { FiUploadCloud } from "react-icons/fi"
import { useSelector } from "react-redux"

import "video-react/dist/video-react.css"
import { Player } from "video-react"

export default function Upload({
  name,
  label,
  register,
  setValue,
  errors,
  video = false,
  viewData = null,
  editData = null,
}) {
  const { course } = useSelector((state) => state.course)
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewSource, setPreviewSource] = useState(
    viewData ? viewData : editData ? editData : ""
  )
  const inputRef = useRef(null)

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0]
    if (file) {
      console.log("File selected:", file.name)
      previewFile(file)
      setSelectedFile(file)
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: !video
      ? { 
          "image/jpeg": [".jpeg", ".jpg"],
          "image/png": [".png"],
          "image/gif": [".gif"]
        }
      : { "video/mp4": [".mp4"] },
    onDrop,
    maxSize: video ? 100 * 1024 * 1024 : 5 * 1024 * 1024, // 100MB for video, 5MB for image
    multiple: false
  })

  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
    reader.onerror = () => {
      console.error("Error reading file")
    }
  }

  const handleFileSelect = () => {
    inputRef.current?.click()
  }

  const handleRemoveFile = () => {
    setPreviewSource("")
    setSelectedFile(null)
    setValue(name, null)
    if (inputRef.current) {
      inputRef.current.value = ""
    }
  }

  useEffect(() => {
    register(name, { required: true })
  }, [register, name])

  useEffect(() => {
    setValue(name, selectedFile)
  }, [selectedFile, setValue, name])

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor={name}>
        {label} {!viewData && <sup className="text-pink-200">*</sup>}
      </label>
      
      <div
        className={`${
          isDragActive ? "bg-richblack-600" : "bg-richblack-700"
        } flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted border-richblack-500`}
      >
        {previewSource ? (
          <div className="flex w-full flex-col p-6">
            {!video ? (
              <img
                src={previewSource}
                alt="Preview"
                className="h-full w-full rounded-md object-cover max-h-[300px]"
              />
            ) : (
              <Player aspectRatio="16:9" playsInline src={previewSource} />
            )}
            {!viewData && (
              <div className="flex gap-2 mt-3">
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="text-richblack-400 underline hover:text-richblack-200"
                >
                  Remove
                </button>
                <button
                  type="button"
                  onClick={handleFileSelect}
                  className="text-yellow-50 underline hover:text-yellow-25"
                >
                  Replace
                </button>
              </div>
            )}
          </div>
        ) : (
          <div
            className="flex w-full flex-col items-center p-6"
            {...getRootProps()} 
          >
            <input 
              {...getInputProps()} 
              ref={inputRef}
              style={{ display: 'none' }}
            />
            <div className="grid aspect-square w-14 place-items-center rounded-full bg-pure-greys-800">
              <FiUploadCloud className="text-2xl text-yellow-50" />
            </div>
            <p className="mt-2 max-w-[200px] text-center text-sm text-richblack-200">
              Drag and drop an {!video ? "image" : "video"}, or{" "}
              <span 
                className="font-semibold text-yellow-50 cursor-pointer hover:text-yellow-25"
                onClick={handleFileSelect}
              >
                click to browse
              </span>
            </p>
            <ul className="mt-10 flex list-disc justify-between space-x-12 text-center text-xs text-richblack-200">
              <li>Aspect ratio 16:9</li>
              <li>Recommended size 1024x576</li>
              <li>Max size: {video ? "100MB" : "5MB"}</li>
            </ul>
          </div>
        )}
      </div>
      
      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required
        </span>
      )}
    </div>
  )
}
```

---

## `src\components\core\Dashboard\AddCourse\PublishCourse\index.jsx`

```javascript
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"

import { editCourseDetails } from "../../../../../services/operations/courseDetailsAPI"
import { resetCourseState, setStep } from "../../../../../slices/courseSlice"
import { COURSE_STATUS } from "../../../../../utils/constants"
import IconBtn from "../../../../common/IconBtn"

export default function PublishCourse() {
  const { register, handleSubmit, setValue, getValues } = useForm()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)
  const { course } = useSelector((state) => state.course)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (course?.status === COURSE_STATUS.PUBLISHED) {
      setValue("public", true)
    }
  }, [course, setValue])

  const goBack = () => {
    dispatch(setStep(2))
  }

  const goToCourses = () => {
    dispatch(resetCourseState())
    navigate("/dashboard/my-courses")
  }

  const handleCoursePublish = async () => {
    const isPublic = getValues("public")
    
    // Check if form has been updated or not
    if (
      (course?.status === COURSE_STATUS.PUBLISHED && isPublic === true) ||
      (course?.status === COURSE_STATUS.DRAFT && isPublic === false)
    ) {
      // No need to make API call, just go to courses
      goToCourses()
      return
    }

    const formData = new FormData()
    formData.append("courseId", course._id)
    const courseStatus = isPublic ? COURSE_STATUS.PUBLISHED : COURSE_STATUS.DRAFT
    formData.append("status", courseStatus)
    
    setLoading(true)
    
    try {
      const result = await editCourseDetails(formData, token)
      if (result) {
        toast.success(`Course ${isPublic ? 'published' : 'saved as draft'} successfully!`)
        goToCourses()
      }
    } catch (error) {
      console.error("Publishing error:", error)
      toast.error("Failed to publish course")
    }
    
    setLoading(false)
  }

  const onSubmit = (data) => {
    console.log("Publish form data:", data)
    handleCoursePublish()
  }

  return (
    <div className="rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
      <p className="text-2xl font-semibold text-richblack-5">
        Publish Settings
      </p>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Checkbox */}
        <div className="my-6 mb-8">
          <label htmlFor="public" className="inline-flex items-center text-lg">
            <input
              type="checkbox"
              id="public"
              {...register("public")}
              className="border-gray-300 h-4 w-4 rounded bg-richblack-500 text-richblack-400 focus:ring-2 focus:ring-richblack-5"
            />
            <span className="ml-2 text-richblack-400">
              Make this course as public
            </span>
          </label>
        </div>

        {/* Course Info Display */}
        <div className="mb-6 p-4 bg-richblack-700 rounded-md">
          <h3 className="text-lg font-semibold text-richblack-5 mb-2">Course Summary:</h3>
          <p className="text-richblack-200"><strong>Title:</strong> {course?.courseName}</p>
          <p className="text-richblack-200"><strong>Price:</strong> ₹{course?.price}</p>
          <p className="text-richblack-200"><strong>Category:</strong> {course?.category?.name}</p>
          <p className="text-richblack-200"><strong>Current Status:</strong> {course?.status}</p>
        </div>

        {/* Next Prev Button */}
        <div className="ml-auto flex max-w-max items-center gap-x-4">
          <button
            disabled={loading}
            type="button"
            onClick={goBack}
            className="flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900"
          >
            Back
          </button>
          <IconBtn 
            type="submit" 
            customClasses="bg-yellow-100 px-4 py-2 rounded-md text-black font-semibold" 
            disabled={loading} 
            text={loading ? "Publishing..." : "Save Changes"} 
          />
        </div>
      </form>
    </div>
  )
}
```

---

## `src\components\core\Dashboard\Cart\RenderCartCourses.jsx`

```javascript
import { FaStar } from "react-icons/fa"
import { RiDeleteBin6Line } from "react-icons/ri"
import ReactStars from "react-rating-stars-component"
import { useDispatch, useSelector } from "react-redux"

import { removeFromCart } from "../../../../slices/cartSlice"

export default function RenderCartCourses() {
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  return (
    <div className="flex text-white flex-1 flex-col">
      {cart.map((course, indx) => (
        <div
          key={course._id}
          className={`flex w-full flex-wrap items-start justify-between gap-6 ${
            indx !== cart.length - 1 && "border-b border-b-richblack-400 pb-6"
          } ${indx !== 0 && "mt-6"} `}
        >
          <div className="flex flex-1 flex-col gap-4 xl:flex-row">
            <img
              src={course?.thumbnail}
              alt={course?.courseName}
              className="h-[148px] w-[220px] rounded-lg object-cover"
            />
            <div className="flex flex-col space-y-1">
              <p className="text-lg font-medium text-richblack-5">
                {course?.courseName}
              </p>
              <p className="text-sm text-richblack-300">
                {course?.category?.name}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-yellow-5">4.5</span>
                <ReactStars
                  count={5}
                  value={course?.ratingAndReviews?.length}
                  size={20}
                  edit={false}
                  activeColor="#ffd700"
                  emptyIcon={<FaStar />}
                  fullIcon={<FaStar />}
                />
                <span className="text-richblack-400">
                  {course?.ratingAndReviews?.length} Ratings
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <button
              onClick={() => dispatch(removeFromCart(course._id))}
              className="flex items-center gap-x-1 rounded-md border border-richblack-600 bg-richblack-700 py-3 px-[12px] text-pink-200"
            >
              <RiDeleteBin6Line />
              <span>Remove</span>
            </button>
            <p className="mb-6 text-3xl font-medium text-yellow-100">
              ₹ {course?.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

```

---

## `src\components\core\Dashboard\Cart\RenderTotalAmount.jsx`

```javascript
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { buyCourse } from "../../../../services/operations/studentFeaturesAPI"
import IconBtn from "../../../common/IconBtn"

export default function RenderTotalAmount() {
  const { total, cart } = useSelector((state) => state.cart)
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleBuyCourse = () => {
    const courses = cart.map((course) => course._id)
    buyCourse(token, courses, user, navigate, dispatch)
  }

  return (
    <div className="text-white min-w-[280px] rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
      <p className="mb-1 text-sm font-medium text-richblack-300">Total:</p>
      <p className="mb-6 text-3xl font-medium text-yellow-100">₹ {total}</p>
      <div className="">
      <IconBtn
        text="Buy Now"
        onclick={handleBuyCourse}
        customClasses="w-full bg-yellow-100 px-4 py-2  rounded-md text-black justify-center"
      />
      </div>
      
    </div>
  )
}

```

---

## `src\components\core\Dashboard\Cart\index.jsx`

```javascript
import { useSelector } from "react-redux"

import RenderCartCourses from "./RenderCartCourses"
import RenderTotalAmount from "./RenderTotalAmount"

export default function Cart() {
  const { total, totalItems } = useSelector((state) => state.cart)
  const { paymentLoading } = useSelector((state) => state.course)

  if (paymentLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="spinner"></div>
      </div>
    )

  return (
    <>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">Cart</h1>
      <p className="border-b border-b-richblack-400 pb-2 font-semibold text-richblack-400">
        {totalItems} Courses in Cart
      </p>
      {total > 0 ? (
        <div className="mt-8 flex flex-col-reverse items-start gap-x-10 gap-y-6 lg:flex-row">
          <RenderCartCourses />
          <RenderTotalAmount />
        </div>
      ) : (
        <p className="mt-14 text-center text-3xl text-richblack-100">
          Your cart is empty
        </p>
      )}
    </>
  )
}

```

---

## `src\components\core\Dashboard\EditCourse\index.js`

```javascript
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import {
  fetchCourseDetails,
  getFullDetailsOfCourse,
} from "../../../../services/operations/courseDetailsAPI"
import { setCourse, setEditCourse } from "../../../../slices/courseSlice"
import RenderSteps from "../AddCourse/RenderSteps"

export default function EditCourse() {
  const dispatch = useDispatch()
  const { courseId } = useParams()
  const { course } = useSelector((state) => state.course)
  const [loading, setLoading] = useState(false)
  const { token } = useSelector((state) => state.auth)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const result = await getFullDetailsOfCourse(courseId, token)
      if (result?.courseDetails) {
        dispatch(setEditCourse(true))
        dispatch(setCourse(result?.courseDetails))
      }
      setLoading(false)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return (
      <div className="grid flex-1 place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        Edit Course
      </h1>
      <div className="mx-auto max-w-[600px]">
        {course ? (
          <RenderSteps />
        ) : (
          <p className="mt-14 text-center text-3xl font-semibold text-richblack-100">
            Course not found
          </p>
        )}
      </div>
    </div>
  )
}
```

---

## `src\components\core\Dashboard\EditCourse\index.jsx`

```javascript
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import RenderSteps from "../AddCourse/RenderSteps";
import { getFullDetailsOfCourse } from '../../../../services/operations/courseDetailsAPI';
import { setCourse, setEditCourse } from '../../../../slices/courseSlice';

export default function EditCourse(){
  const dispatch=useDispatch();
  const {courseId}=useParams();
  const {course}=useSelector((state)=>state.course);
  const [loading,setLoading]=useState(false);
  const {token}=useSelector((state)=>state.auth);

  useEffect(()=>{
    const populateCourseDetails=async()=>{
      setLoading(true);
     
    
      console.log("Course Id at start :",courseId);

      const result=await getFullDetailsOfCourse(courseId,token);
      if(result?.courseDetails){
        dispatch(setEditCourse(true));
        dispatch(setCourse(result?.courseDetails));
      }
      setLoading(false);
    }
    populateCourseDetails();


  },[]);

  if(loading){
    return (
      <div className='flex w-full justify-center items-center'>
        Loading..
      </div>
    )
  }
  return (
    <div className='text-white'>
      <h1 className='text-white font-bold text-3xl font-inter'>Edit Course</h1>
      <div>
        {
          course?
          (
            <RenderSteps/>
          )
          :(
            <p>Course Not Found</p>
          )
        }
      </div>

    </div>
  )
}


```

---

## `src\components\core\Dashboard\InstructorCourses\CoursesTable.jsx`

```javascript
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {COURSE_STATUS} from "../../../../utils/constants";
import { FaClock } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import {  useNavigate } from 'react-router-dom';
import ConfirmationModal from "../../../common/ConfirmationModal";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { deleteCourse, fetchInstructorCourses } from '../../../../services/operations/courseDetailsAPI';


export default function CoursesTable({courses,setCourses}){

  const dispatch=useDispatch();
  const {token}=useSelector((state)=>state.auth);
  const [loading,setLoading]=useState(false);
  const [confirmationModal,setConfirmationModal]=useState(null);

  const handleCourseDelete=async(courseId)=>{
    setLoading(true);
 
    await deleteCourse({
      courseId:courseId
    },token);
    const result=await fetchInstructorCourses(token);
    if(result){
      setCourses(result);
    }
    setConfirmationModal(null);
    setLoading(false);
  }

  const navigate=useNavigate();


  return (
    <div className='text-white'>
      <Table>
        <Thead>
          <Tr className="flex  gap-x-10 border-richblack-800 p-8">
            <Th className="sm:w-[40%]">
              Courses
            </Th>  
            <Th>
              Duration
            </Th>  
            <Th>
              Prices
            </Th>  
            <Th>
              Actions
            </Th>  
          </Tr>  
          
        </Thead> 

        <Tbody>
          {
            courses.length===0? 
            (
              <Tr>

                <Td>
                  No Courses Found
                </Td>
              </Tr>


            ) 
            :(
              
              courses?.map((course)=>(
                <Tr className="flex gap-x-10 w-full border-richblack-800 p-8"
                key={course?._id}>
                    <Td className="flex sm:w-[40%] gap-x-4">
                      <img src={course?.thumbnail} 
                      className=' w-[270px]  h-[150px] rounded-lg object-cover'
                      />  
                      <div className='flex flex-col'>
                        <p>{course?.courseName}</p>
                        <p>{course?.courseDescription}</p>
                        <p>Created:</p>
                        {
                          course.status===COURSE_STATUS.DRAFT ? (
                            <p className='text-pink-300'>

                              DRAFTED
                            </p>
                          ): (
                            <p className='text-yellow-300'>PUBLISHED </p>
                          )

                        }
                      </div>
                    </Td>   
                    <Td >
                        2 hr 30 min
                      
                    </Td>          
                    <Td>
                    {course?.price}  
                    </Td>

                    <Td>
                        <button
                        disabled={loading}
                        onClick={()=>navigate(`/dashboard/edit-course/${course._id}`)}
                        >
                          <MdEdit/>
                        </button>
                        <button
                        disabled={loading}
                        onClick={()=>setConfirmationModal({
                          text1:"Do you want to delete this course?",
                          text2:"All the data related to this course will be deleted",
                          btn1Text:"Delete",
                          btn2Text:"Cancel",
                          btn1Handler:!loading? (()=>handleCourseDelete(course._id)):(()=>{}),
                          btn2Handler:!loading?(()=>setConfirmationModal(null)):(()=>{}),

                        })}
                        
                        >
                          <MdDelete/>
                        </button>
                    </Td>    


                </Tr>


              ))


            )
          }
        </Tbody> 
        
        
      </Table>  
          {confirmationModal && <ConfirmationModal modalData={confirmationModal}/>  }
    </div>
  )
}
```

---

## `src\components\core\Dashboard\InstructorCourses\studyNotion12\src\components\core\Dashboard\InstructorCourses\._CoursesTable.jsx`

```javascript
    Mac OS X            	   2   q                                            ATTR                                    com.apple.provenance   Q
```

---

## `src\components\core\Dashboard\InstructorDashboard\Instructor.jsx`

```javascript
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { fetchInstructorCourses } from '../../../../services/operations/courseDetailsAPI';
import { getInstructorData } from '../../../../services/operations/profileAPI';
import InstructorChart from './InstructorChart';
import { Link } from 'react-router-dom';

export default function Instructor() {
    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)
    const [loading, setLoading] = useState(false)
    const [instructorData, setInstructorData] = useState(null)
    const [courses, setCourses] = useState([])
  
    useEffect(() => {
      ;(async () => {
        setLoading(true)
        const instructorApiData = await getInstructorData(token)
        const result = await fetchInstructorCourses(token)
        console.log(instructorApiData)
        if (instructorApiData.length) setInstructorData(instructorApiData)
        if (result) {
          setCourses(result)
        }
        setLoading(false)
      })()
    }, [])
  
    const totalAmount = instructorData?.reduce(
      (acc, curr) => acc + curr.totalAmountGenerated,
      0
    )
  
    const totalStudents = instructorData?.reduce(
      (acc, curr) => acc + curr.totalStudentsEnrolled,
      0
    )
  
    return (
      <div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-richblack-5">
            Hi {user?.firstName} 👋
          </h1>
          <p className="font-medium text-richblack-200">
            Let's start something new
          </p>
        </div>
        {loading ? (
          <div className="spinner"></div>
        ) : courses.length > 0 ? (
          <div>
            <div className="my-4 flex gap-y-5 items-center md:items-start flex-col md:flex-row h-fit space-x-4">
              {/* Render chart / graph */}
              {totalAmount > 0 || totalStudents > 0 ? (
                <InstructorChart courses={instructorData} />
              ) : (
                <div className="flex-1 rounded-md bg-richblack-800 p-6">
                  <p className="text-lg font-bold text-richblack-5">Visualize</p>
                  <p className="mt-4 text-xl font-medium text-richblack-50">
                    Not Enough Data To Visualize
                  </p>
                </div>
              )}
              {/* Total Statistics */}
              <div className="flex min-w-[250px] flex-col rounded-md bg-richblack-800 p-6">
                <p className="text-lg font-bold text-richblack-5">Statistics</p>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-lg text-richblack-200">Total Courses</p>
                    <p className="text-3xl font-semibold text-richblack-50">
                      {courses.length}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-richblack-200">Total Students</p>
                    <p className="text-3xl font-semibold text-richblack-50">
                      {totalStudents}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg text-richblack-200">Total Income</p>
                    <p className="text-3xl font-semibold text-richblack-50">
                      Rs. {totalAmount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-md bg-richblack-800 p-6">
              {/* Render 3 courses */}
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-richblack-5">Your Courses</p>
                <Link to="/dashboard/my-courses">
                  <p className="text-xs font-semibold text-yellow-50">View All</p>
                </Link>
              </div>
              <div className="my-4 flex items-start space-x-6">
                {courses.slice(0, 3).map((course) => (
                  <div key={course._id} className="w-1/3">
                    <img
                      src={course.thumbnail}
                      alt={course.courseName}
                      className="h-[201px] w-full rounded-md object-cover"
                    />
                    <div className="mt-3 w-full">
                      <p className="text-sm font-medium text-richblack-50">
                        {course.courseName}
                      </p>
                      <div className="mt-1 flex items-center space-x-2">
                        <p className="text-xs font-medium text-richblack-300">
                          {course.studentsEnrolled.length} students
                        </p>
                        <p className="text-xs font-medium text-richblack-300">
                          |
                        </p>
                        <p className="text-xs font-medium text-richblack-300">
                          Rs. {course.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-20 rounded-md bg-richblack-800 p-6 py-20">
            <p className="text-center text-2xl font-bold text-richblack-5">
              You have not created any courses yet
            </p>
            <Link to="/dashboard/add-course">
              <p className="mt-1 text-center text-lg font-semibold text-yellow-50">
                Create a course
              </p>
            </Link>
          </div>
        )}
      </div>
    )
  }
```

---

## `src\components\core\Dashboard\InstructorDashboard\InstructorChart.jsx`

```javascript
import { useState } from "react"
import { Chart, registerables } from "chart.js"
import { Pie } from "react-chartjs-2"

Chart.register(...registerables)

export default function InstructorChart({ courses }) {
  // State to keep track of the currently selected chart
  const [currChart, setCurrChart] = useState("students")

  // Function to generate random colors for the chart
  const generateRandomColors = (numColors) => {
    const colors = []
    for (let i = 0; i < numColors; i++) {
      const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`
      colors.push(color)
    }
    return colors
  }

  // Data for the chart displaying student information
  const chartDataStudents = {
    labels: courses.map((course) => course.courseName),
    datasets: [
      {
        data: courses.map((course) => course.totalStudentsEnrolled),
        backgroundColor: generateRandomColors(courses.length),
      },
    ],
  }

  // Data for the chart displaying income information
  const chartIncomeData = {
    labels: courses.map((course) => course.courseName),
    datasets: [
      {
        data: courses.map((course) => course.totalAmountGenerated),
        backgroundColor: generateRandomColors(courses.length),
      },
    ],
  }

  // Options for the chart
  const options = {
    maintainAspectRatio: false,
  }

  return (
    <div className="flex flex-1 flex-col gap-y-4 rounded-md bg-richblack-800 p-6">
      <p className="text-lg font-bold text-richblack-5">Visualize</p>
      <div className="space-x-4 font-semibold">
        {/* Button to switch to the "students" chart */}
        <button
          onClick={() => setCurrChart("students")}
          className={`rounded-sm p-1 px-3 transition-all duration-200 ${
            currChart === "students"
              ? "bg-richblack-700 text-yellow-50"
              : "text-yellow-400"
          }`}
        >
          Students
        </button>
        {/* Button to switch to the "income" chart */}
        <button
          onClick={() => setCurrChart("income")}
          className={`rounded-sm p-1 px-3 transition-all duration-200 ${
            currChart === "income"
              ? "bg-richblack-700 text-yellow-50"
              : "text-yellow-400"
          }`}
        >
          Income
        </button>
      </div>
      <div className="relative mx-auto aspect-square  ">
        {/* Render the Pie chart based on the selected chart */}
        <Pie
          
          data={currChart === "students" ? chartDataStudents : chartIncomeData}
          options={options}
        />
      </div>
    </div>
  )
}

```

---

## `src\components\core\Dashboard\MyCourses\index.jsx`

```javascript
import React from "react";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchInstructorCourses } from "../../../../services/operations/courseDetailsAPI";
import { CiCirclePlus } from "react-icons/ci";
import IconBtn from "../../../common/IconBtn";
import CoursesTable from "../InstructorCourses/CoursesTable";
import { useNavigate } from "react-router-dom";

const MyCourses=()=>{

  const {token}=useSelector((state)=>state.auth);
  const navigate=useNavigate();
  const [courses,setCourses]=useState([]); 


  useEffect(()=>{
    const fetchCourses=async()=>{
      const result=await fetchInstructorCourses(token);
      if(result){
        setCourses(result);
      }
    }
    fetchCourses();
  },[])
  return (
    <div>
        <div  className='flex justify-between mb-10 text-white '>
          <h1 className="text-white font-inter font-bold text-2xl ">My Courses</h1>
          <IconBtn
          onclick={()=>navigate("/dashboard/add-course")}
          text="New"
          children={<CiCirclePlus fontSize={24}/>}
          customClasses="flex flex-row-reverse bg-yellow-50 text-black font-[600] px-6 py-3 rounded-lg items-center align-middle gap-x-1"
           />
        </div>


        {courses && <CoursesTable courses={courses} setCourses={setCourses}/>}
    </div>
  )
}

export default MyCourses;







// import React from "react";
// import IconBtn from "../../../common/IconBtn";
// import { CiCirclePlus } from "react-icons/ci";
// import { getUserEnrolledCourses } from "../../../../services/operations/profileAPI";
// import { FaClock } from "react-icons/fa";
// import { MdDone } from "react-icons/md";
// import { MdEdit } from "react-icons/md";
// import { MdDelete } from "react-icons/md";
// import { useState,useEffect } from "react";
// import { useSelector } from "react-redux";


// const MyCourses=()=>{
//   const {token}=useSelector((state)=>state.auth);
//   const [courses,setCourses]=useState([]);
//   console.log("DAte idhar hai:"+  Date().toString().split(" ")[1]);  
//   const getCourses=async()=>{
//     try{
//       const response=await getUserEnrolledCourses(token);
//       console.log(response);
//       setCourses(response);
//       console.log("ALL INSTRUCTOR COURSES FOUND");
//     }
//     catch(err){
//       console.log(err);
//       console.log(err.message);
//       console.log("COULDNT GET COURSES");
//     }
//   }

//   useEffect(()=>{
//     getCourses();
//   },[]);


//   return (
//     <div className="w-full text-white ">

//         <div className="flex flex-row w-11/12 justify-between ">
//           <h1>My Course</h1>
//           <IconBtn
//           text="New"
//           children={<CiCirclePlus fontSize={24}/>}
//           customClasses="flex flex-row-reverse bg-yellow-50 text-black font-[600] px-6 py-3 rounded-lg items-center align-middle gap-x-1"
//           />
//         </div>
    
//         <div className="grid mt-5 rounded-lg border border-richblack-500 grid-cols-9 w-11/12">
//             <div className="col-span-9 grid grid-cols-9 border-b border-richblack-500">
//               <div className=" col-span-6">
//                 COURSES
//               </div>
//               <div className="col-span-1 ">
//                 DURATION
//               </div>
//               <div className="col-span-1 ">
//                 PRICE
//               </div>
//               <div className="col-span-1 ">
//                 ACTIONS
//               </div>

//             </div>


//             {/* CARDS */}
//             {
//               courses.length 
//               ?
//               (
//                 courses.map((course,index)=>(
//                 <div key={index} className="grid col-span-9 grid-cols-9">
//                     <div className="col-span-6">
//                       <div className="flex flex-row gap-4"> 
//                         <img src={course?.thumbnail} className="rounded-md " alt="course thumbnail here" />
//                         <div className="flex flex-col gap-2">
//                           <h2>{course?.courseName}</h2>
//                           <p>{course?.courseDescription}</p>
//                           <p className="font-[600]">
//                             Created: 
//                             {course?.createdAt.toString().split(" ")[1] } {" "}
//                             {course?.createdAt.toString().split(" ")[2] } {" "}
//                             {course?.createdAt.toString().split(" ")[3] } {" "}
//                             |
//                             {" "}
//                             {course?.createdAt.toString().split(" ")[4]}
//                           </p>
//                           <div className="flex flex-row gap-2 rounded-xl" > 
//                             {
//                             course?.status==="Published"?
//                             (<FaClock/> ):
//                             (<MdDone/>)
//                             }
//                             <span>{course?.status}</span>
//                           </div>

//                         </div>
//                       </div>  
//                     </div>

//                     <div className="col-span-1">
//                       duration
//                     </div>

//                     <div className="col-span-1">
//                         Rs {course?.price}
//                     </div>

//                     <div className="flex flex-row gap-2 col-span-1">
//                           <button>
//                             <MdEdit/>
//                           </button>
//                           <button>
//                             <MdDelete/>
//                           </button>
//                     </div>


//                 </div>
                  
//                 ))
//               )
//               :
//               (
//                 <div className="col-span-9 text-center font-semibold">
//                   You have no registered course.Add one to show here.
//                 </div>
//               )
//             }


//         </div>


      

    



//     </div>
    
//   )
// }


// export default MyCourses;
```

---

## `src\components\core\Dashboard\Settings\ChangeProfilePicture.jsx`

```javascript
import { useEffect, useRef, useState } from "react"
import { FiUpload } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"

import { updateDisplayPicture } from "../../../../services/operations/SettingsAPI"
import IconBtn from "../../../common/IconBtn"

export default function ChangeProfilePicture() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [imageFile, setImageFile] = useState(null)
  const [previewSource, setPreviewSource] = useState(null)

  const fileInputRef = useRef(null)

  const handleClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    // console.log(file)
    if (file) {
      setImageFile(file)
      previewFile(file)
    }
  }

  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  const handleFileUpload = () => {
    try {
      console.log("uploading...")
      setLoading(true)
      const formData = new FormData()
      formData.append("displayPicture", imageFile)
      // console.log("formdata", formData)
      dispatch(updateDisplayPicture(token, formData)).then(() => {
        setLoading(false)
      })
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  useEffect(() => {
    if (imageFile) {
      previewFile(imageFile)
    }
  }, [imageFile])
  return (
    <>
      <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 text-richblack-5">
        <div className="flex items-center gap-x-8 sm:gap-x-4">
          <img
            src={previewSource || user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div className="space-y-2">
            <p>Change Profile Picture</p>
            <div className="flex  flex-col sm:flex-row gap-3">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/png, image/gif, image/jpeg"
              />
              <button
                onClick={handleClick}
                disabled={loading}
                className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
              >
                Select
              </button>
              <IconBtn
                customClasses="flex justify-center bg-yellow-100 flex-row items-center gap-2 text-richblack-900 
                px-4 py-2 rounded-lg font-[600]  "
                text={loading ? "Uploading..." : "Upload"}
                onclick={handleFileUpload}
              >
                {!loading && (
                  <FiUpload  fontSize={20} className="text-lg  text-richblack-900" />
                )}
              </IconBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
```

---

## `src\components\core\Dashboard\Settings\DeleteAccount.jsx`

```javascript
import { FiTrash2 } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { deleteProfile } from "../../../../services/operations/SettingsAPI"

export default function DeleteAccount() {
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleDeleteAccount() {
    try {
      dispatch(deleteProfile(token, navigate))
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  return (
    <>
      <div className="my-10 flex flex-row gap-x-5 rounded-md border-[1px] border-pink-700 bg-pink-900 p-8 px-12">
        <div className="flex aspect-square h-14 w-14 items-center justify-center rounded-full bg-pink-700">
          <FiTrash2 className="text-3xl text-pink-200" />
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-semibold text-richblack-5">
            Delete Account
          </h2>
          <div className="w-3/5 text-pink-25">
            <p>Would you like to delete account?</p>
            <p>
              This account may contain Paid Courses. Deleting your account is
              permanent and will remove all the contain associated with it.
            </p>
          </div>
          <button
            type="button"
            className="w-fit cursor-pointer italic text-pink-300"
            onClick={handleDeleteAccount}
          >
            I want to delete my account.
          </button>
        </div>
      </div>
    </>
  )
}
```

---

## `src\components\core\Dashboard\Settings\EditProfile.jsx`

```javascript
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import  "../../../../App.css";
import { updateProfile } from "../../../../services/operations/SettingsAPI"
import IconBtn from "../../../common/IconBtn"

const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"]

export default function EditProfile() {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitProfileForm = async (data) => {
    // console.log("Form Data - ", data)
    try {
      dispatch(updateProfile(token, data))
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(submitProfileForm)}>
        {/* Profile Information */}
        <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
          <h2 className="text-lg font-semibold text-richblack-5">
            Profile Information
          </h2>
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="firstName" className="text-[14px] leading-[22px] font-[400] text-white">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter first name"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full text-[16px] leading-[24px] font-[500] text-[#999DAA] rounded-[0.5rem] bg-[#2C333F] p-[12px] pr-12 "
                {...register("firstName", { required: true })}
                defaultValue={user?.firstName}
              />
              {errors.firstName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your first name.
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="lastName" className="text-[14px] leading-[22px] font-[400] text-white">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter first name"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-[#2C333F] p-[12px] pr-12 text-[16px] leading-[24px] font-[500] text-[#999DAA]"
                {...register("lastName", { required: true })}
                defaultValue={user?.lastName}
              />
              {errors.lastName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your last name.
                </span>
              )}
            </div>
          </div>

          <div className="flex relative flex-col gap-5 lg:flex-row">
            <div className="flex relative flex-col gap-2 lg:w-[48%]">
              <label htmlFor="dateOfBirth" className="text-[14px] leading-[22px] font-[400] text-white">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full relative rounded-[0.5rem] bg-[#2C333F] p-[12px] pr-12 text-[16px] leading-[24px] font-[500] text-[#999DAA]"
                {...register("dateOfBirth", {
                  required: {
                    value: true,
                    message: "Please enter your Date of Birth.",
                  },
                  max: {
                    value: new Date().toISOString().split("T")[0],
                    message: "Date of Birth cannot be in the future.",
                  },
                })}
                defaultValue={user?.additionalDetails?.dateOfBirth}
              />
              {errors.dateOfBirth && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  {errors.dateOfBirth.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="gender" className="text-[14px] leading-[22px] font-[400] text-white">
                Gender
              </label>
              <select
                type="text"
                name="gender"
                id="gender"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-[#2C333F] p-[12px] pr-12 text-[16px] leading-[24px] font-[500] text-[#999DAA]"
                {...register("gender", { required: true })}
                defaultValue={user?.additionalDetails?.gender}
              >
                {genders.map((ele, i) => {
                  return (
                    <option key={i} value={ele}>
                      {ele}
                    </option>
                  )
                })}
              </select>
              {errors.gender && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Date of Birth.
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="contactNumber" className="text-[14px] leading-[22px] font-[400] text-white">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                placeholder="Enter Contact Number"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-[#2C333F] p-[12px] pr-12 text-[16px] leading-[24px] font-[500] text-[#999DAA]"
                {...register("contactNumber", {
                  required: {
                    value: true,
                    message: "Please enter your Contact Number.",
                  },
                  maxLength: { value: 12, message: "Invalid Contact Number" },
                  minLength: { value: 10, message: "Invalid Contact Number" },
                })}
                defaultValue={user?.additionalDetails?.contactNumber}
              />
              {errors.contactNumber && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  {errors.contactNumber.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="about" className="text-[14px] leading-[22px] font-[400] text-white">
                About
              </label>
              <input
                type="text"
                name="about"
                id="about"
                placeholder="Enter Bio Details"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-[#2C333F] p-[12px] pr-12 text-[16px] leading-[24px] font-[500] text-[#999DAA]"
                {...register("about", { required: true })}
                defaultValue={user?.additionalDetails?.about}
              />
              {errors.about && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your About.
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              navigate("/dashboard/my-profile")
            }}
            className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
          >
            Cancel
          </button>
          <IconBtn
            customClasses="flex bg-yellow-100 flex-row items-center gap-2 text-richblack-900 
            px-4 py-2 rounded-lg font-[600] "
           type="submit" text="Save" />
        </div>
      </form>
    </>
  )
}
```

---

## `src\components\core\Dashboard\Settings\UpdatePassword.jsx`

```javascript
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { changePassword } from "../../../../services/operations/SettingsAPI"
import IconBtn from "../../../common/IconBtn"

export default function UpdatePassword() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitPasswordForm = async (data) => {
    // console.log("password Data - ", data)
    try {
      
      await changePassword(token,{...data,"confirmNewPassword":data.newPassword});
     
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(submitPasswordForm)}>
        <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
          <h2 className="text-lg font-semibold text-richblack-5">Password</h2>
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="relative flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="oldPassword" className="text-[14px] leading-[22px] font-[400] text-white">
                Current Password
              </label>
              <input
                type={showOldPassword ? "text" : "password"}
                name="oldPassword"
                id="oldPassword"
                placeholder="Enter Current Password"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-[#2C333F] p-[12px] pr-12 text-[16px] leading-[24px] font-[500] text-[#999DAA]"
                {...register("oldPassword", { required: true })}
              />
              <span
                onClick={() => setShowOldPassword((prev) => !prev)}
                className="absolute right-3 top-[42px] z-[10] cursor-pointer"
              >
                {showOldPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
              {errors.oldPassword && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your Current Password.
                </span>
              )}
            </div>
            <div className="relative flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="newPassword" className="text-[14px] leading-[22px] font-[400] text-white">
                New Password
              </label>
              <input
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                id="newPassword"
                placeholder="Enter New Password"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-[#2C333F] p-[12px] pr-12 text-[16px] leading-[24px] font-[500] text-[#999DAA]"
                {...register("newPassword", { required: true })}
              />
              <span
                onClick={() => setShowNewPassword((prev) => !prev)}
                className="absolute right-3 top-[42px] z-[10] cursor-pointer"
              >
                {showNewPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
              {errors.newPassword && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your New Password.
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => {
              navigate("/dashboard/my-profile")
            }}
            className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
          >
            Cancel
          </button>
          <IconBtn
          customClasses="flex bg-yellow-100 flex-row items-center gap-2 text-richblack-900 
          px-4 py-2 rounded-lg font-[600] "
           type="submit" text="Update" />
        </div>
      </form>
    </>
  )
}
```

---

## `src\components\core\Dashboard\Settings\index.jsx`

```javascript
import ChangeProfilePicture from "./ChangeProfilePicture"
import DeleteAccount from "./DeleteAccount"
import EditProfile from "./EditProfile"
import UpdatePassword from "./UpdatePassword"

export default function Settings() {
  return (
    <>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        Edit Profile
      </h1>
      {/* Change Profile Picture */}
      <ChangeProfilePicture />
      {/* Profile */}
      <EditProfile />
      {/* Password */}
      <UpdatePassword />
      {/* Delete Account */}
      <DeleteAccount />
    </>
  )
}
```

---

## `src\components\core\HomePage\Button.jsx`

```javascript
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${
          active ? "bg-yellow-50 text-black " : "bg-richblack-800"
        } hover:shadow-none hover:scale-95 transition-all duration-200 `}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;

```

---

## `src\components\core\HomePage\CodeBlocks.jsx`

```javascript
import React from "react";
import CTAButton from "./Button";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div className={`flex ${position} my-20 justify-between flex-col lg:gap-10 gap-10`}>


      {/* Section 1  */}
      <div className="w-[100%] lg:w-[50%] flex flex-col gap-8">
        {heading}

        {/* Sub Heading */}
        <div className="text-richblack-300 text-base font-bold w-[85%] -mt-3">
          {subheading}
        </div>

        {/* Button Group */}
        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.link}>
            <div className="flex items-center gap-2">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.link}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* Section 2 */}
      <div className="h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]">
        {backgroundGradient}
        {/* Indexing */}
        <div className="text-center flex flex-col   w-[10%] select-none text-richblack-400 font-inter font-bold ">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>

        {/* Codes */}
        <div
          className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-1`}
        >
          <TypeAnimation
            sequence={[codeblock, 1000, ""]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;

```

---

## `src\components\core\HomePage\CourseCard.jsx`

```javascript
import React from "react";

// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const Course_Card = ({cardData, currentCard, setCurrentCard}) => {
  return (
    <div
      className={`w-[360px] lg:w-[30%] ${
        currentCard === cardData?.heading
          ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
          : "bg-richblack-800"
      }  text-richblack-25 h-[300px] box-border cursor-pointer`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className="border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3">
        <div
          className={` ${
            currentCard === cardData?.heading && "text-richblack-800"
          } font-semibold text-[20px]`}
        >
          {cardData?.heading}
        </div>

        <div className="text-richblack-400">{cardData?.description}</div>
      </div>

      <div
        className={`flex justify-between ${
          currentCard === cardData?.heading ? "text-blue-300" : "text-richblack-300"
        } px-6 py-3 font-medium`}
      >
        {/* Level */}
        <div className="flex items-center gap-2 text-[16px]">
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>

        {/* Flow Chart */}
        <div className="flex items-center gap-2 text-[16px]">
          <ImTree />
          <p>{cardData?.lessionNumber} Lession</p>
        </div>
      </div>
    </div>
  );
};

export default Course_Card;

```

---

## `src\components\core\HomePage\ExploreMore.jsx`

```javascript
import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import CourseCard from "./CourseCard";
import HighlightText from "./HighlightText";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div>
      {/* Explore more section */}
      <div>
        <div className="text-4xl font-semibold text-center my-10">
          Unlock the
          <HighlightText text={"Power of Code"} />
          <p className="text-center text-richblack-300 text-lg font-semibold mt-1">
            Learn to Build Anything You Can Imagine
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="hidden lg:flex gap-5 -mt-5 mx-auto w-max bg-richblack-800 text-richblack-200 p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
        {tabsName.map((ele, index) => {
          return (
            <div
              className={` text-[16px] flex flex-row items-center gap-2 ${
                currentTab === ele
                  ? "bg-richblack-900 text-richblack-5 font-medium"
                  : "text-richblack-200"
              } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}
              key={index}
              onClick={() => setMyCards(ele)}
            >
              {ele}
            </div>
          );
        })}
      </div>
      <div className="hidden lg:block lg:h-[200px]"></div>

      {/* Cards Group */}
      <div className="lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-7 lg:px-0 px-3">
        {courses.map((ele, index) => {
          return (
            <CourseCard
              key={index}
              cardData={ele}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;

```

---

## `src\components\core\HomePage\HighlightText.jsx`

```javascript
import React from "react";

const HighlightText = ({text}) => {
  return (
    <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
      {" "}
      {text}
    </span>
  );
};

export default HighlightText;

```

---

## `src\components\core\HomePage\InstructorSection.jsx`

```javascript
import React from 'react'
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from './HighlightText';

const InstructorSection = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-[50%]">
            <img
              src={Instructor}
              alt=""
              className="shadow-white shadow-[-20px_-20px_0_0]"
            />
          </div>
          <div className="lg:w-[50%] flex gap-10 flex-col">
            <h1 className="lg:w-[50%] text-4xl font-semibold ">
              Become an
              <HighlightText text={"instructor"} />
            </h1>

            <p className="font-medium text-[16px] text-justify w-[90%] text-richblack-300">
              Instructors from around the world teach millions of students on
              StudyNotion. We provide the tools and skills to teach what you
              love.
            </p>

            <div className="w-fit">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Start Teaching Today
                  <FaArrowRight />
                </div>
              </CTAButton>
            </div>
          </div>
        </div>
    </div>
  )
}

export default InstructorSection
```

---

## `src\components\core\HomePage\LearningLanguageSection.jsx`

```javascript
import React from 'react'
import HighlightText from './HighlightText'
import CTAButton from "../../../components/core/HomePage/Button";
import Know_your_progress from "../../../assets/Images/Know_your_progress.png";
import Compare_with_others from "../../../assets/Images/Compare_with_others.svg";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg";

const LearningLanguageSection = () => {
  return (
    <div>
        <div className="text-4xl font-semibold text-center my-10">
            Your swiss knife for
            <HighlightText text={"learning any language"} />
            <div className="text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
              Using spin making learning multiple languages easy. with 20+
              languages realistic voice-over, progress tracking, custom schedule
              and more.
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0">
              <img
                src={Know_your_progress}
                alt=""
                className="object-contain  lg:-mr-32 "
              />
              <img
                src={Compare_with_others}
                alt=""
                className="object-contain lg:-mb-10 lg:-mt-0 -mt-12"
              />
              <img
                src={Plan_your_lessons}
                alt=""
                className="object-contain  lg:-ml-36 lg:-mt-5 -mt-16"
              />
            </div>
          </div>

          <div className="w-fit mx-auto lg:mb-20 mb-8 -mt-5">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="">Learn More</div>
            </CTAButton>
          </div>
    </div>
  )
}

export default LearningLanguageSection
```

---

## `src\components\core\HomePage\Timeline.jsx`

```javascript
import React from "react";
import TimeLineImage from "../../../assets/Images/TimelineImage.png";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

const TimeLine = [
    {
      Logo: Logo1,
      Heading: "Leadership",
      Description: "Fully committed to the success company",
    },
    {
      Logo: Logo2,
      Heading: "Responsibility",
      Description: "Students will always be our top priority",
    },
    {
      Logo: Logo3,
      Heading: "Flexibility",
      Description: "The ability to switch is an important skills",
    },
    {
      Logo: Logo4,
      Heading: "Solve the problem",
      Description: "Code your way to a solution",
    },
  ];


const TimelineSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-20 mb-20 items-center">
        <div className="lg:w-[45%] flex flex-col gap-14 lg:gap-3">
          {TimeLine.map((ele, i) => {
            return (
              <div className="flex flex-col lg:gap-3" key={i}>
                <div className="flex gap-6" key={i}>
                  <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                    <img src={ele.Logo} alt="" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[18px]">{ele.Heading}</h2>
                    <p className="text-base">{ele.Description}</p>
                  </div>
                </div>
                <div
                  className={`hidden ${
                    TimeLine.length - 1 === i ? "hidden" : "lg:block"
                  }  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
          <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-caribbeangreen-700 flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 ">
            {/* Section 1 */}
            <div className="flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14">
              <h1 className="text-3xl font-bold w-[75px]">10</h1>
              <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                Years experiences
              </h1>
            </div>

            {/* Section 2 */}
            <div className="flex gap-5 items-center lg:px-14 px-7">
              <h1 className="text-3xl font-bold w-[75px]">250</h1>
              <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                types of courses
              </h1>
            </div>
            <div></div>
          </div>
          <img
            src={TimeLineImage}
            alt="timelineImage"
            className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;

```

---

## `src\components\core\ViewCourse\CourseReviewModal.jsx`

```javascript
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { RxCross2 } from "react-icons/rx"
import ReactStars from "react-rating-stars-component"
import { useSelector } from "react-redux"

import { createRating } from "../../../services/operations/courseDetailsAPI"
import IconBtn from "../../common/IconBtn"

export default function CourseReviewModal({ setReviewModal }) {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const { courseEntireData } = useSelector((state) => state.viewCourse)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    setValue("courseExperience", "")
    setValue("courseRating", 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const ratingChanged = (newRating) => {
    // console.log(newRating)
    setValue("courseRating", newRating)
  }

  const onSubmit = async (data) => {
    await createRating(
      {
        courseId: courseEntireData._id,
        rating: data.courseRating,
        review: data.courseExperience,
      },
      token
    )
    setReviewModal(false)
  }

  return (
    <div className="fixed  inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="my-10 w-11/12 max-w-[700px] rounded-lg border border-richblack-400 bg-richblack-800">
        {/* Modal Header */}
        <div className="flex items-center justify-between rounded-t-lg bg-richblack-700 p-5">
          <p className="text-xl font-semibold text-richblack-5">Add Review</p>
          <button onClick={() => setReviewModal(false)}>
            <RxCross2 className="text-2xl text-richblack-5" />
          </button>
        </div>
        {/* Modal Body */}
        <div className="p-6">
          <div className="flex items-center justify-center gap-x-4">
            <img
              src={user?.image}
              alt={user?.firstName + "profile"}
              className="aspect-square w-[50px] rounded-full object-cover"
            />
            <div className="">
              <p className="font-semibold text-richblack-5">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-sm text-richblack-5">Posting Publicly</p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 flex flex-col items-center"
          >
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            <div className="flex w-11/12 flex-col space-y-2">
              <label
                className="text-sm text-richblack-5"
                htmlFor="courseExperience"
              >
                Add Your Experience <sup className="text-pink-200">*</sup>
              </label>
              <textarea
                id="courseExperience"
                placeholder="Add Your Experience"
                {...register("courseExperience", { required: true })}
                className="form-style resize-x-none min-h-[130px] w-full"
              />
              {errors.courseExperience && (
                <span className="ml-2 text-xs tracking-wide text-pink-200">
                  Please Add Your Experience
                </span>
              )}
            </div>
            <div className="mt-6 flex w-11/12 justify-end gap-x-2">
              <button
                onClick={() => setReviewModal(false)}
                className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
              >
                Cancel
              </button>
              <IconBtn text="Save" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
```

---

## `src\components\core\ViewCourse\VideoDetails.jsx`

```javascript
import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import "video-react/dist/video-react.css"
import { useLocation } from "react-router-dom"
import { BigPlayButton, Player } from "video-react"

import { markLectureAsComplete } from "../../../services/operations/courseDetailsAPI"
import { updateCompletedLectures } from "../../../slices/viewCourseSlice"
import IconBtn from "../../common/IconBtn"


const VideoDetails = () => {
  const { courseId, sectionId, subSectionId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const playerRef = useRef(null)
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth)
  const { courseSectionData, courseEntireData, completedLectures } =
    useSelector((state) => state.viewCourse)

  const [videoData, setVideoData] = useState([])
  const [previewSource, setPreviewSource] = useState("")
  const [videoEnded, setVideoEnded] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      if (!courseSectionData.length) return
      if (!courseId && !sectionId && !subSectionId) {
        navigate(`/dashboard/enrolled-courses`)
      } else {
        // console.log("courseSectionData", courseSectionData)
        const filteredData = courseSectionData?.filter(
          (course) => course._id === sectionId
        )
        // console.log("filteredData", filteredData)
        const filteredVideoData = filteredData[0]?.subSection?.filter(
          (data) => data._id === subSectionId
        )
        
        if(filteredVideoData.length>0){
            setVideoData(filteredVideoData[0])
            console.log("filteredVideoData:",filteredVideoData);
        }
        
           
            setPreviewSource(courseEntireData.thumbnail)
            setVideoEnded(false)
        
        
      }
    })()
  }, [courseSectionData, courseEntireData, location.pathname])

  // check if the lecture is the first video of the course
  const isFirstVideo = () => {
    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    )

    const currentSubSectionIndx = courseSectionData[
      currentSectionIndx
    ].subSection.findIndex((data) => data._id === subSectionId)

    if (currentSectionIndx === 0 && currentSubSectionIndx === 0) {
      return true
    } else {
      return false
    }
  }

  // go to the next video
  const goToNextVideo = () => {
    // console.log(courseSectionData)

    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    )

    const noOfSubsections =
      courseSectionData[currentSectionIndx].subSection.length

    const currentSubSectionIndx = courseSectionData[
      currentSectionIndx
    ].subSection.findIndex((data) => data._id === subSectionId)

    // console.log("no of subsections", noOfSubsections)

    if (currentSubSectionIndx !== noOfSubsections - 1) {
      const nextSubSectionId =
        courseSectionData[currentSectionIndx].subSection[
          currentSubSectionIndx + 1
        ]._id
      navigate(
        `/view-course/${courseId}/section/${sectionId}/sub-section/${nextSubSectionId}`
      )
    } else {
      const nextSectionId = courseSectionData[currentSectionIndx + 1]._id
      const nextSubSectionId =
        courseSectionData[currentSectionIndx + 1].subSection[0]._id
      navigate(
        `/view-course/${courseId}/section/${nextSectionId}/sub-section/${nextSubSectionId}`
      )
    }
  }

  // check if the lecture is the last video of the course
  const isLastVideo = () => {
    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    )

    const noOfSubsections =
      courseSectionData[currentSectionIndx].subSection.length

    const currentSubSectionIndx = courseSectionData[
      currentSectionIndx
    ].subSection.findIndex((data) => data._id === subSectionId)

    if (
      currentSectionIndx === courseSectionData.length - 1 &&
      currentSubSectionIndx === noOfSubsections - 1
    ) {
      return true
    } else {
      return false
    }
  }

  // go to the previous video
  const goToPrevVideo = () => {
    // console.log(courseSectionData)

    const currentSectionIndx = courseSectionData.findIndex(
      (data) => data._id === sectionId
    )

    const currentSubSectionIndx = courseSectionData[
      currentSectionIndx
    ].subSection.findIndex((data) => data._id === subSectionId)

    if (currentSubSectionIndx !== 0) {
      const prevSubSectionId =
        courseSectionData[currentSectionIndx].subSection[
          currentSubSectionIndx - 1
        ]._id
      navigate(
        `/view-course/${courseId}/section/${sectionId}/sub-section/${prevSubSectionId}`
      )
    } else {
      const prevSectionId = courseSectionData[currentSectionIndx - 1]._id
      const prevSubSectionLength =
        courseSectionData[currentSectionIndx - 1].subSection.length
      const prevSubSectionId =
        courseSectionData[currentSectionIndx - 1].subSection[
          prevSubSectionLength - 1
        ]._id
      navigate(
        `/view-course/${courseId}/section/${prevSectionId}/sub-section/${prevSubSectionId}`
      )
    }
  }

  const handleLectureCompletion = async () => {
    setLoading(true)
    const res = await markLectureAsComplete(
      { courseId: courseId, subsectionId: subSectionId },
      token
    )
    if (res) {
      dispatch(updateCompletedLectures(subSectionId))
    }
    setLoading(false)
  }

  return (
    <div className="flex  w-full flex-col gap-5 text-white">
      {!videoData ? (
        <img
          src={previewSource}
          alt="Preview"
          className="h-full w-full rounded-md object-cover"
        />
      ) : (
        <Player
          ref={playerRef}
          aspectRatio="16:9"
          playsInline
          onEnded={() => setVideoEnded(true)}
          src={videoData?.videoUrl}
        >
          <BigPlayButton position="center" />
          {/* Render When Video Ends */}
          {videoEnded && (
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgb(0, 0, 0), rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(0,0,0,0.1)",
              }}
              className="full absolute inset-0 z-30 grid h-full place-content-center font-inter"
            >
              {!completedLectures.includes(subSectionId) && (
                <IconBtn
                  disabled={loading}
                  onclick={() => handleLectureCompletion()}
                  text={!loading ? "Mark As Completed" : "Loading..."}
                  customClasses="text-xl max-w-max px-4 mx-auto"
                />
              )}
              <IconBtn
                disabled={loading}
                onclick={() => {
                  if (playerRef?.current) {
                    // set the current time of the video to 0
                    playerRef?.current?.seek(0)
                    setVideoEnded(false)
                  }
                }}
                text="Rewatch"
                customClasses="text-xl max-w-max px-4 mx-auto mt-2"
              />
              <div className="mt-10 flex min-w-[250px] justify-center gap-x-4 text-xl">
                {!isFirstVideo() && (
                  <button
                    disabled={loading}
                    onClick={goToPrevVideo}
                    className="blackButton"
                  >
                    Prev
                  </button>
                )}
                {!isLastVideo() && (
                  <button
                    disabled={loading}
                    onClick={goToNextVideo}
                    className="blackButton"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          )}
        </Player>
      )}

      <h1 className="mt-4 text-3xl font-semibold">{videoData?.title}</h1>
      <p className="pt-2 pb-6">{videoData?.description}</p>
    </div>
  )
}

export default VideoDetails
// video
```

---

## `src\components\core\ViewCourse\VideoDetailsSidebar.jsx`

```javascript
import { useEffect, useState } from "react"
import { BsChevronDown } from "react-icons/bs"
import { IoIosArrowBack } from "react-icons/io"
import { useSelector } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import IconBtn from "../../common/IconBtn"

export default function VideoDetailsSidebar({ setReviewModal }) {
  const [activeStatus, setActiveStatus] = useState("")
  const [videoBarActive, setVideoBarActive] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const { sectionId, subSectionId } = useParams()
  const {
    courseSectionData,
    courseEntireData,
    totalNoOfLectures,
    completedLectures,
  } = useSelector((state) => state.viewCourse)

  useEffect(() => {
    ;(() => {
      if (!courseSectionData.length) return
      const currentSectionIndx = courseSectionData.findIndex(
        (data) => data._id === sectionId
      )
      const currentSubSectionIndx = courseSectionData?.[
        currentSectionIndx
      ]?.subSection.findIndex((data) => data._id === subSectionId)
      const activeSubSectionId =
        courseSectionData[currentSectionIndx]?.subSection?.[
          currentSubSectionIndx
        ]?._id
      setActiveStatus(courseSectionData?.[currentSectionIndx]?._id)
      setVideoBarActive(activeSubSectionId)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseSectionData, courseEntireData, location.pathname])

  return (
    <>
      <div className="flex h-[calc(100vh-3.5rem)] w-[320px] max-w-[350px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800">
        <div className="mx-5 flex flex-col items-start justify-between gap-2 gap-y-4 border-b border-richblack-600 py-5 text-lg font-bold text-richblack-25">
          <div className="flex w-full items-center justify-between ">
            <div
              onClick={() => {
                navigate(`/dashboard/enrolled-courses`)
              }}
              className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90"
              title="back"
            >
              <IoIosArrowBack size={30} />
            </div>
            <IconBtn
              text="Add Review"
              customClasses="ml-auto"
              onclick={() => setReviewModal(true)}
            />
          </div>
          <div className="flex flex-col">
            <p>{courseEntireData?.courseName}</p>
            <p className="text-sm font-semibold text-richblack-500">
              {completedLectures?.length} / {totalNoOfLectures}
            </p>
          </div>
        </div>

        <div className="h-[calc(100vh - 5rem)] overflow-y-auto">
          {courseSectionData.map((course, index) => (
            <div
              className="mt-2 cursor-pointer text-sm text-richblack-5"
              onClick={() => setActiveStatus(course?._id)}
              key={index}
            >
              {/* Section */}
              <div className="flex flex-row justify-between bg-richblack-600 px-5 py-4">
                <div className="w-[70%] font-semibold">
                  {course?.sectionName}
                </div>
                <div className="flex items-center gap-3">
                  {/* <span className="text-[12px] font-medium">
                    Lession {course?.subSection.length}
                  </span> */}
                  <span
                    className={`${
                      activeStatus === course?.sectionName
                        ? "rotate-0"
                        : "rotate-180"
                    } transition-all duration-500`}
                  >
                    <BsChevronDown />
                  </span>
                </div>
              </div>

              {/* Sub Sections */}
              {activeStatus === course?._id && (
                <div className="transition-[height] duration-500 ease-in-out">
                  {course.subSection.map((topic, i) => (
                    <div
                      className={`flex gap-3  px-5 py-2 ${
                        videoBarActive === topic._id
                          ? "bg-yellow-200 font-semibold text-richblack-800"
                          : "hover:bg-richblack-900"
                      } `}
                      key={i}
                      onClick={() => {
                        navigate(
                          `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
                        )
                        setVideoBarActive(topic._id)
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={completedLectures.includes(topic?._id)}
                        onChange={() => {}}
                      />
                      {topic.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
```

---

## `src\data\countrycode.json`

```json
[
    {
        "country": "Afghanistan",
        "code": "+93"
    },
    {
        "country": "Albania",
        "code": "+355"
    },
    {
        "country": "Algeria",
        "code": "+213"
    },
    {
        "country": "Andorra",
        "code": "+376"
    },
    {
        "country": "Angola",
        "code": "+244"
    },
    {
        "country": "Antigua and Barbuda",
        "code": "+1-268"
    },
    {
        "country": "Argentina",
        "code": "+54"
    },
    {
        "country": "Armenia",
        "code": "+374"
    },
    {
        "country": "Australia",
        "code": "+61"
    },
    {
        "country": "Austria",
        "code": "+43"
    },
    {
        "country": "Azerbaijan",
        "code": "+994"
    },
    {
        "country": "Bahamas",
        "code": "+1-242"
    },
    {
        "country": "Bahrain",
        "code": "+973"
    },
    {
        "country": "Bangladesh",
        "code": "+880"
    },
    {
        "country": "Barbados",
        "code": "+1-246"
    },
    {
        "country": "Belarus",
        "code": "+375"
    },
    {
        "country": "Belgium",
        "code": "+32"
    },
    {
        "country": "Belize",
        "code": "+501"
    },
    {
        "country": "Benin",
        "code": "+229"
    },
    {
        "country": "Bhutan",
        "code": "+975"
    },
    {
        "country": "Bolivia",
        "code": "+591"
    },
    {
        "country": "Bosnia and Herzegovina",
        "code": "+387"
    },
    {
        "country": "Botswana",
        "code": "+267"
    },
    {
        "country": "Brazil",
        "code": "+55"
    },
    {
        "country": "Brunei",
        "code": "+673"
    },
    {
        "country": "Bulgaria",
        "code": "+359"
    },
    {
        "country": "Burkina Faso",
        "code": "+226"
    },
    {
        "country": "Burundi",
        "code": "+257"
    },
    {
        "country": "Cambodia",
        "code": "+855"
    },
    {
        "country": "Cameroon",
        "code": "+237"
    },
    {
        "country": "Canada",
        "code": "+1"
    },
    {
        "country": "Cape Verde",
        "code": "+238"
    },
    {
        "country": "Central African Republic",
        "code": "+236"
    },
    {
        "country": "Chad",
        "code": "+235"
    },
    {
        "country": "Chile",
        "code": "+56"
    },
    {
        "country": "China",
        "code": "+86"
    },
    {
        "country": "Colombia",
        "code": "+57"
    },
    {
        "country": "Comoros",
        "code": "+269"
    },
    {
        "country": "Congo",
        "code": "+242"
    },
    {
        "country": "Costa Rica",
        "code": "+506"
    },
    {
        "country": "Croatia",
        "code": "+385"
    },
    {
        "country": "Cuba",
        "code": "+53"
    },
    {
        "country": "Cyprus",
        "code": "+357"
    },
    {
        "country": "Czech Republic",
        "code": "+420"
    },
    {
        "country": "Denmark",
        "code": "+45"
    },
    {
        "country": "Djibouti",
        "code": "+253"
    },
    {
        "country": "Dominica",
        "code": "+1-767"
    },
    {
        "country": "Dominican Republic",
        "code": "+1-809, +1-829, +1-849"
    },
    {
        "country": "East Timor",
        "code": "+670"
    },
    {
        "country": "Ecuador",
        "code": "+593"
    },
    {
        "country": "Egypt",
        "code": "+20"
    },
    {
        "country": "El Salvador",
        "code": "+503"
    },
    {
        "country": "Equatorial Guinea",
        "code": "+240"
    },
    {
        "country": "Eritrea",
        "code": "+291"
    },
    {
        "country": "Estonia",
        "code": "+372"
    },
    {
        "country": "Ethiopia",
        "code": "+251"
    },
    {
        "country": "Fiji",
        "code": "+679"
    },
    {
        "country": "Finland",
        "code": "+358"
    },
    {
        "country": "France",
        "code": "+33"
    },
    {
        "country": "Gabon",
        "code": "+241"
    },
    {
        "country": "Gambia",
        "code": "+220"
    },
    {
        "country": "Georgia",
        "code": "+995"
    },
    {
        "country": "Germany",
        "code": "+49"
    },
    {
        "country": "Ghana",
        "code": "+233"
    },
    {
        "country": "Greece",
        "code": "+30"
    },
    {
        "country": "Grenada",
        "code": "+1-473"
    },
    {
        "country": "Guatemala",
        "code": "+502"
    },
    {
        "country": "Guinea",
        "code": "+224"
    },
    {
        "country": "Guinea-Bissau",
        "code": "+245"
    },
    {
        "country": "Guyana",
        "code": "+592"
    },
    {
        "country": "Haiti",
        "code": "+509"
    },
    {
        "country": "Honduras",
        "code": "+504"
    },
    {
        "country": "Hungary",
        "code": "+36"
    },
    {
        "country": "Iceland",
        "code": "+354"
    },
    {
        "country": "India",
        "code": "+91"
    },
    {
        "country": "Indonesia",
        "code": "+62"
    },
    {
        "country": "Iran",
        "code": "+98"
    },
    {
        "country": "Iraq",
        "code": "+964"
    },
    {
        "country": "Ireland",
        "code": "+353"
    },
    {
        "country": "Israel",
        "code": "+972"
    },
    {
        "country": "Italy",
        "code": "+39"
    },
    {
        "country": "Jamaica",
        "code": "+1-876"
    },
    {
        "country": "Japan",
        "code": "+81"
    },
    {
        "country": "Jordan",
        "code": "+962"
    },
    {
        "country": "Kazakhstan",
        "code": "+7"
    },
    {
        "country": "Kenya",
        "code": "+254"
    },
    {
        "country": "Kiribati",
        "code": "+686"
    },
    {
        "country": "Kosovo",
        "code": "+383"
    },
    {
        "country": "Kuwait",
        "code": "+965"
    },
    {
        "country": "Kyrgyzstan",
        "code": "+996"
    },
    {
        "country": "Laos",
        "code": "+856"
    },
    {
        "country": "Latvia",
        "code": "+371"
    },
    {
        "country": "Lebanon",
        "code": "+961"
    },
    {
        "country": "Lesotho",
        "code": "+266"
    },
    {
        "country": "Liberia",
        "code": "+231"
    },
    {
        "country": "Libya",
        "code": "+218"
    },
    {
        "country": "Liechtenstein",
        "code": "+423"
    },
    {
        "country": "Lithuania",
        "code": "+370"
    },
    {
        "country": "Luxembourg",
        "code": "+352"
    },
    {
        "country": "Macedonia",
        "code": "+389"
    },
    {
        "country": "Madagascar",
        "code": "+261"
    },
    {
        "country": "Malawi",
        "code": "+265"
    },
    {
        "country": "Malaysia",
        "code": "+60"
    },
    {
        "country": "Maldives",
        "code": "+960"
    },
    {
        "country": "Mali",
        "code": "+223"
    },
    {
        "country": "Malta",
        "code": "+356"
    },
    {
        "country": "Marshall Islands",
        "code": "+692"
    },
    {
        "country": "Mauritania",
        "code": "+222"
    },
    {
        "country": "Mauritius",
        "code": "+230"
    },
    {
        "country": "Mexico",
        "code": "+52"
    },
    {
        "country": "Micronesia",
        "code": "+691"
    },
    {
        "country": "Moldova",
        "code": "+373"
    },
    {
        "country": "Monaco",
        "code": "+377"
    },
    {
        "country": "Mongolia",
        "code": "+976"
    },
    {
        "country": "Montenegro",
        "code": "+382"
    },
    {
        "country": "Morocco",
        "code": "+212"
    },
    {
        "country": "Mozambique",
        "code": "+258"
    },
    {
        "country": "Myanmar",
        "code": "+95"
    },
    {
        "country": "Namibia",
        "code": "+264"
    },
    {
        "country": "Nauru",
        "code": "+674"
    },
    {
        "country": "Nepal",
        "code": "+977"
    },
    {
        "country": "Netherlands",
        "code": "+31"
    },
    {
        "country": "New Zealand",
        "code": "+64"
    },
    {
        "country": "Nicaragua",
        "code": "+505"
    },
    {
        "country": "Niger",
        "code": "+227"
    },
    {
        "country": "Nigeria",
        "code": "+234"
    },
    {
        "country": "North Korea",
        "code": "+850"
    },
    {
        "country": "Norway",
        "code": "+47"
    },
    {
        "country": "Oman",
        "code": "+968"
    },
    {
        "country": "Pakistan",
        "code": "+92"
    },
    {
        "country": "Palau",
        "code": "+680"
    },
    {
        "country": "Palestine",
        "code": "+970"
    },
    {
        "country": "Panama",
        "code": "+507"
    },
    {
        "country": "Papua New Guinea",
        "code": "+675"
    },
    {
        "country": "Paraguay",
        "code": "+595"
    },
    {
        "country": "Peru",
        "code": "+51"
    },
    {
        "country": "Philippines",
        "code": "+63"
    },
    {
        "country": "Poland",
        "code": "+48"
    },
    {
        "country": "Portugal",
        "code": "+351"
    },
    {
        "country": "Qatar",
        "code": "+974"
    },
    {
        "country": "Romania",
        "code": "+40"
    },
    {
        "country": "Russia",
        "code": "+7"
    },
    {
        "country": "Rwanda",
        "code": "+250"
    },
    {
        "country": "Saint Kitts and Nevis",
        "code": "+1-869"
    },
    {
        "country": "Saint Lucia",
        "code": "+1-758"
    },
    {
        "country": "Saint Vincent and the Grenadines",
        "code": "+1-784"
    },
    {
        "country": "Samoa",
        "code": "+685"
    },
    {
        "country": "San Marino",
        "code": "+378"
    },
    {
        "country": "Sao Tome and Principe",
        "code": "+239"
    },
    {
        "country": "Saudi Arabia",
        "code": "+966"
    },
    {
        "country": "Senegal",
        "code": "+221"
    },
    {
        "country": "Serbia",
        "code": "+381"
    },
    {
        "country": "Seychelles",
        "code": "+248"
    },
    {
        "country": "Sierra Leone",
        "code": "+232"
    },
    {
        "country": "Singapore",
        "code": "+65"
    },
    {
        "country": "Slovakia",
        "code": "+421"
    },
    {
        "country": "Slovenia",
        "code": "+386"
    },
    {
        "country": "Solomon Islands",
        "code": "+677"
    },
    {
        "country": "Somalia",
        "code": "+252"
    },
    {
        "country": "South Africa",
        "code": "+27"
    },
    {
        "country": "South Korea",
        "code": "+82"
    },
    {
        "country": "South Sudan",
        "code": "+211"
    },
    {
        "country": "Spain",
        "code": "+34"
    },
    {
        "country": "Sri Lanka",
        "code": "+94"
    },
    {
        "country": "Sudan",
        "code": "+249"
    },
    {
        "country": "Suriname",
        "code": "+597"
    },
    {
        "country": "Swaziland",
        "code": "+268"
    },
    {
        "country": "Sweden",
        "code": "+46"
    },
    {
        "country": "Switzerland",
        "code": "+41"
    },
    {
        "country": "Syria",
        "code": "+963"
    },
    {
        "country": "Taiwan",
        "code": "+886"
    },
    {
        "country": "Tajikistan",
        "code": "+992"
    },
    {
        "country": "Tanzania",
        "code": "+255"
    },
    {
        "country": "Thailand",
        "code": "+66"
    },
    {
        "country": "Togo",
        "code": "+228"
    },
    {
        "country": "Tonga",
        "code": "+676"
    },
    {
        "country": "Trinidad and Tobago",
        "code": "+1-868"
    },
    {
        "country": "Tunisia",
        "code": "+216"
    },
    {
        "country": "Turkey",
        "code": "+90"
    },
    {
        "country": "Turkmenistan",
        "code": "+993"
    },
    {
        "country": "Tuvalu",
        "code": "+688"
    },
    {
        "country": "Uganda",
        "code": "+256"
    },
    {
        "country": "Ukraine",
        "code": "+380"
    },
    {
        "country": "United Arab Emirates",
        "code": "+971"
    },
    {
        "country": "United Kingdom",
        "code": "+44"
    },
    {
        "country": "United States",
        "code": "+1"
    },
    {
        "country": "Uruguay",
        "code": "+598"
    },
    {
        "country": "Uzbekistan",
        "code": "+998"
    },
    {
        "country": "Vanuatu",
        "code": "+678"
    },
    {
        "country": "Vatican City",
        "code": "+39-06, +379"
    },
    {
        "country": "Venezuela",
        "code": "+58"
    },
    {
        "country": "Vietnam",
        "code": "+84"
    },
    {
        "country": "Yemen",
        "code": "+967"
    },
    {
        "country": "Zambia",
        "code": "+260"
    },
    {
        "country": "Zimbabwe",
        "code": "+263"
    }
]
```

---

## `src\data\dashboard-links.js`

```javascript
import { ACCOUNT_TYPE } from "../utils/constants";
export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/instructor",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "My Courses",
    path: "/dashboard/my-courses",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Add Course",
    path: "/dashboard/add-course",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscAdd",
  },
  {
    id: 5,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscMortarBoard",
  },
  {
    id: 6,
    name: "Purchase History",
    path: "/dashboard/purchase-history",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscHistory",
  },
];

```

---

## `src\data\footer-links.js`

```javascript
export const FooterLink2 = [
  {
    title: "Subjects",
    links: [
      { title: "Al", link: "/al" },
      { title: "Cloud Computing", link: "/cloud-computing" },
      { title: "Code Foundations", link: "/code-foundations" },
      { title: "Computer Science", link: "/computer-science" },
      { title: "Cybersecurity", link: "/cybersecurity" },
      { title: "Data Analytics", link: "/data-analytics" },
      { title: "Data Science", link: "/data-science" },
      { title: "Data Visualization", link: "/data-visualization" },
      { title: "Developer Tools", link: "/developer-tools" },
      { title: "DevOps", link: "/devops" },
      { title: "Game Development", link: "/game-development" },
      { title: "IT", link: "/it" },
      { title: "Machine Learning", link: "/machine-learning" },
      { title: "Math", link: "/math" },
      { title: "Mobile Development", link: "/mobile-development" },
      { title: "Web Design", link: "/web-design" },
      { title: "Web Development", link: "/web-development" },
    ],
  },
  {
    title: "Languages",
    links: [
      { title: "Bash", link: "/bash" },
      { title: "C++", link: "/c++" },
      { title: "C#", link: "/csharp" },
      { title: "Go", link: "/go" },
      { title: "HTML & CSS", link: "/html-css" },
      { title: "Java", link: "/java" },
      { title: "JavaScript", link: "/javascript" },
      { title: "Kotlin", link: "/kotlin" },
      { title: "PHP", link: "/php" },
      { title: "Python", link: "/python" },
      { title: "R", link: "/r" },
      { title: "Ruby", link: "/ruby" },
      { title: "SQL", link: "/sql" },
      { title: "Swift", link: "/swift" },
    ],
  },
  {
    title: "Career building",
    links: [
        {title: "Career paths", link: "/career-paths"},
        {title: "Career services", link: "/career-services"},
        {title: "Interview prep", link: "/interview-prep"},
        {title: "Professional certification", link: "/professional-certification"},
        {title: "-", link: "/hi"},
        {title: "Full Catalog", link: "/full-catalog"},
        {title: "Beta Content", link: "/beta-content"}
    ]
  }
];

```

---

## `src\data\homepage-explore.js`

```javascript
export const HomePageExplore = [
    {
        tag: 'Free',
        courses : [
            {
                heading : "Learn HTML",
                description : "This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.",
                level : 'Beginner',
                lessionNumber : 6
            },
            {
                heading : "Learn CSS",
                description : "This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques",
                level : 'Beginner',
                lessionNumber : 6
            },
            {
                heading : "Responsive Web design",
                description : "This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes",
                level : 'Beginner',
                lessionNumber : 6
            },
        ]
    },
    {
        tag: 'New to coding',
        courses : [
            {
                heading : "HTML",
                description : "This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.",
                level : 'Beginner',
                lessionNumber : 6
            },
            {
                heading : "CSS",
                description : "This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques",
                level : 'Beginner',
                lessionNumber : 6
            },
            {
                heading : "Responsive ",
                description : "This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes",
                level : 'Beginner',
                lessionNumber : 6
            },
        ]
    },
    {
        tag: 'Most popular',
        courses : [
            {
                heading : "Java",
                description : "This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.",
                level : 'Beginner',
                lessionNumber : 6
            },
            {
                heading : "Python",
                description : "This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques",
                level : 'Beginner',
                lessionNumber : 6
            },
            {
                heading : "SCSS",
                description : "This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes",
                level : 'Beginner',
                lessionNumber : 6
            },
        ]
    },
    {
        tag: 'Skills paths',
        courses : [
            {
                heading : "Flask",
                description : "This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.",
                level : 'Beginner',
                lessionNumber : 6
            },
            {
                heading : "Django",
                description : "This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques",
                level : 'Beginner',
                lessionNumber : 6
            },
            {
                heading : "Fast API",
                description : "This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes",
                level : 'Beginner',
                lessionNumber : 6
            },
        ]
    },
    {
        tag: 'Career paths',
        courses : [
            {
                heading : "Next.js",
                description : "This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more.",
                level : 'Beginner',
                lessionNumber : 6
            },
            {
                heading : "Nuxt.js",
                description : "This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques",
                level : 'Beginner',
                lessionNumber : 6
            },
            {
                heading : "Sanity",
                description : "This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes",
                level : 'Beginner',
                lessionNumber : 6
            },
        ]
    },
]
```

---

## `src\data\navbar-links.js`

```javascript
export const NavbarLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Catalog",
    // path: '/catalog',
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];

```

---

## `src\hooks\useOnClickOutside.js`

```javascript
import { useEffect } from "react";

// This hook detects clicks outside of the specified component and calls the provided handler function.
export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    // Define the listener function to be called on click/touch events
    const listener = (event) => {
      // If the click/touch event originated inside the ref element, do nothing
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      // Otherwise, call the provided handler function
      handler(event);
    };

    
    // Add event listeners for mousedown and touchstart events on the document
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Cleanup function to remove the event listeners when the component unmounts or when the ref/handler dependencies change
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); // Only run this effect when the ref or handler function changes
}
```

---

## `src\hooks\useOnClickOutsideProfile.js`

```javascript
import { useEffect } from "react";

// This hook detects clicks outside of the specified component and calls the provided handler function.
export default function useOnClickOutside(ref,ref1,handler) {
  useEffect(() => {
    // Define the listener function to be called on click/touch events
    const listener = (event) => {
      // If the click/touch event originated inside the ref element, do nothing
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      
     
      if(ref1.current.contains(event.target)){
        
        return;
      }
      // Otherwise, call the provided handler function
      handler(event);
    };

    // Add event listeners for mousedown and touchstart events on the document
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Cleanup function to remove the event listeners when the component unmounts or when the ref/handler dependencies change
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); // Only run this effect when the ref or handler function changes
}
```

---

## `src\pages\About.jsx`

```javascript
import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Footer from "../components/common/Footer"
import ReviewSlider from "../components/common/ReviewSlider"
import ContactFormSection from "../components/core/About/ContactFormSection"
import LearningGrid from "../components/core/About/LearningGrid"
import Quote from "../components/core/About/Quote"
import StatsComponenet from "../components/core/About/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"

const About = () => {
  return (
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Driving Innovation in Online Education for a
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
              Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  )
}

export default About
```

---

## `src\pages\Catalog.jsx`

```javascript
import React, { useEffect, useState } from 'react'
import Footer from '../components/common/Footer'
import { useParams } from 'react-router-dom'
import { apiConnector } from '../services/apiconnector';
import { categories } from '../services/apis';
import { getCatalogPageData } from '../services/operations/pageAndComponentData';
import CourseCard from '../components/core/Catalog/CourseCard';
import CourseSlider from '../components/core/Catalog/CourseSlider';
import { useSelector } from "react-redux"
import Error from "./Error"

const Catalog = () => {

    const { loading } = useSelector((state) => state.profile)
  const { catalogName } = useParams()
  const [active, setActive] = useState(1)
    const [catalogPageData, setCatalogPageData] = useState(null);
    const [categoryId, setCategoryId] = useState("");

    //Fetch all categories
    useEffect(()=> {
        const getCategories = async() => {
            const res = await apiConnector("GET", categories.CATEGORIES_API);
            const category_id = 
            res?.data?.data?.filter((ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName)[0]._id;
            setCategoryId(category_id);
        }
        getCategories();
    },[catalogName]);

    useEffect(() => {
        const getCategoryDetails = async() => {
            try{
                const res = await getCatalogPageData(categoryId);
                console.log("PRinting res: ", res);
                setCatalogPageData(res);
            }
            catch(error) {
                console.log(error)
            }
        }
        if(categoryId) {
            getCategoryDetails();
        }
        
    },[categoryId]);


    if (loading || !catalogPageData) {
        return (
          <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
            <div className="spinner"></div>
          </div>
        )
      }
      if (!loading && !catalogPageData.success) {
        return <Error />
      }
    
      return (
        <>
          {/* Hero Section */}
          <div className=" box-content bg-richblack-800 px-4">
            <div className="mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent ">
              <p className="text-sm text-richblack-300">
                {`Home / Catalog / `}
                <span className="text-yellow-25">
                  {catalogPageData?.data?.selectedCategory?.name}
                </span>
              </p>
              <p className="text-3xl text-richblack-5">
                {catalogPageData?.data?.selectedCategory?.name}
              </p>
              <p className="max-w-[870px] text-richblack-200">
                {catalogPageData?.data?.selectedCategory?.description}
              </p>
            </div>
          </div>
    
          {/* Section 1 */}
          <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
            <div className="section_heading text-3xl font-bold text-white">Courses to get you started</div>
            <div className="my-4 flex border-b border-b-richblack-600 text-sm">
              <p
                className={`px-4 py-2 ${
                  active === 1
                    ? "border-b border-b-yellow-25 text-yellow-25"
                    : "text-richblack-50"
                } cursor-pointer`}
                onClick={() => setActive(1)}
              >
                Most Populer
              </p>
              <p
                className={`px-4 py-2 ${
                  active === 2
                    ? "border-b border-b-yellow-25 text-yellow-25"
                    : "text-richblack-50"
                } cursor-pointer`}
                onClick={() => setActive(2)}
              >
                New
              </p>
            </div>
            <div>
              <CourseSlider
                Courses={catalogPageData?.data?.selectedCategory?.courses}
              />
            </div>
          </div>
          {/* Section 2 */}
          <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
            <div className="section_heading text-3xl font-bold text-white">
              Top courses in {catalogPageData?.data?.differentCategory?.name}
            </div>
            <div className="py-8">
              <CourseSlider
                Courses={catalogPageData?.data?.differentCategory?.courses}
              />
            </div>
          </div>
    
          {/* Section 3 */}
          <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
            <div className="section_heading text-3xl font-bold text-white">Frequently Bought</div>
            <div className="py-8">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {catalogPageData?.data?.mostSellingCourses
                  ?.slice(0, 4)
                  .map((course, i) => (
                    <CourseCard course={course} key={i} Height={"h-[400px]"} />
                  ))}
              </div>
            </div>
          </div>
    
          <Footer />
        </>
      )
    }
    
    export default Catalog
```

---

## `src\pages\ContactUs.jsx`

```javascript
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { HiMiniGlobeEuropeAfrica } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";
import ContactFormSection from "../components/core/About/ContactFormSection";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";
const ContactWays=[
  {
    method:"Chat on us",
    description:"Our friendly team is here to help",
    contact:"@email address"
  },
  {
    method:"Visit us",
    description:"Come and say hello at our office HQ. ",
    contact:"Here is the location/address"
  },
  {
    method:"Call us",
    description:"Mon - Fri From 8am to 5pm ",
    contact:"+123 456 7890"
  },
]


const ContactUs=()=>{
  return (
    
    <div>

        <div className="w-11/12 mb-24 max-w-maxContent mx-auto">

{/* Section 1 */}
<section className="flex flex-col lg:flex-row mt-20 mx-auto gap-10 w-full  justify-between">

  {/* Contact Ways */}
  <div className="bg-[#161D29] md:w-fit mx-auto lg:m-0 lg:w-[40%] h-fit p-10 flex flex-col gap-12 rounded-lg">
  {
    ContactWays.map((element,index)=>(
      <div className="flex  gap-2">
        {
          index===0 && (
            <HiMiniChatBubbleLeftRight color="white" fontSize={24}/>
          )
        }

        {
          index===1 && (
            <HiMiniGlobeEuropeAfrica fontSize={24} color="white"/>
          )
        }

        {
          index===2 && (
            <IoCall  fontSize={24} color="white"/>
          )
        }

        <div className="flex flex-col gap-1">
          <h2 className="text-[18px] leading-[26px] font-semibold text-[#F1F2FF]">
            {element.method}
          </h2>
          <p className="text-[14px] leading-[22px] font-medium text-[#999DAA]">
            {element.description}
          </p>
          <p className="text-[14px] leading-[22px] font-medium text-[#999DAA]">
            {element.contact}
          </p>
        </div>
       
      </div>
    ))
  }
  </div>


  {/* Contact Form */}
  <div className="text-white border border-[#424854] px-5 md:px-10 py-5 rounded-lg ">
    <ContactFormSection 
    heading={"Got a Idea? We’ve got the skills. Let’s team up"} 
    caption={"Tall us more about yourself and what you’re got in mind."} />
  </div>
</section>

{/* Section 2 */}
<section>
<h2 className=" mt-10 mb-5 text-center text-3xl font-bold text-white mb-5">Review From Other Learners</h2>
<ReviewSlider/>
  {/* Review SLider here */}
</section>


        </div>

        {/* Footer */}
        <Footer  />
    </div>
    
    );
}

export default ContactUs;
```

---

## `src\pages\CourseDetails.jsx`

```javascript
import React, { useEffect, useState } from "react"
import { BiInfoCircle } from "react-icons/bi"
import { HiOutlineGlobeAlt } from "react-icons/hi"
import {defaultUrlTransform} from "react-markdown"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import ConfirmationModal from "../components/common/ConfirmationModal"
import Footer from "../components/common/Footer"
import RatingStars from "../components/common/RatingStars"
import CourseAccordionBar from "../components/core/Course/CourseAccordionBar"
import CourseDetailsCard from "../components/core/Course/CourseDetailsCard"
import { formatDate } from "../services/formatDate"
import { fetchCourseDetails } from "../services/operations/courseDetailsAPI"
import {buyCourse } from "../services/operations/studentFeaturesAPI"
import GetAvgRating from "../utils/avgRating"
import Error from "./Error"

function CourseDetails() {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const { loading } = useSelector((state) => state.profile)
  const { paymentLoading } = useSelector((state) => state.course)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Getting courseId from url parameter
  const { courseId } = useParams()
  // console.log(`course id: ${courseId}`)

  // Declear a state to save the course details
  const [response, setResponse] = useState(null)
  const [confirmationModal, setConfirmationModal] = useState(null)
  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    ;(async () => {
      try {
        const res = await fetchCourseDetails(courseId)
        // console.log("course details res: ", res)
        setResponse(res)
      } catch (error) {
        console.log("Could not fetch Course Details")
      }
    })()
  }, [courseId])

  // console.log("response: ", response)

  // Calculating Avg Review count
  const [avgReviewCount, setAvgReviewCount] = useState(0)
  useEffect(() => {
    const count = GetAvgRating(response?.data?.courseDetails.ratingAndReviews)
    setAvgReviewCount(count)
  }, [response])
  // console.log("avgReviewCount: ", avgReviewCount)

  // // Collapse all
  // const [collapse, setCollapse] = useState("")
  const [isActive, setIsActive] = useState(Array(0))
  const handleActive = (id) => {
    // console.log("called", id)
    setIsActive(
      !isActive.includes(id)
        ? isActive.concat([id])
        : isActive.filter((e) => e != id)
    )
  }

  // Total number of lectures
  const [totalNoOfLectures, setTotalNoOfLectures] = useState(0)
  useEffect(() => {
    let lectures = 0
    response?.data?.courseDetails?.courseContent?.forEach((sec) => {
      lectures += sec.subSection?.length || 0
    })
    setTotalNoOfLectures(lectures)
  }, [response])

  if (loading || !response) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }
  if (!response.success) {
    return <Error />
  }

  const {
    _id: course_id,
    courseName,
    courseDescription,
    thumbnail,
    price,
    whatYouWillLearn,
    courseContent,
    ratingAndReviews,
    instructor,
    studentsEnrolled,
    createdAt,
  } = response.data?.courseDetails

  const handleBuyCourse = () => {
    if (token) {
      buyCourse(token, [courseId], user, navigate, dispatch)
      return
    }
    setConfirmationModal({
      text1: "You are not logged in!",
      text2: "Please login to Purchase Course.",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1Handler: () => navigate("/login"),
      btn2Handler: () => setConfirmationModal(null),
    })
  }

  if (paymentLoading) {
    // console.log("payment loading")
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <>
      <div className={`relative w-full bg-richblack-800`}>
        {/* Hero Section */}
        <div className="mx-auto box-content px-4 lg:w-[1260px] 2xl:relative ">
          <div className="mx-auto grid min-h-[450px] max-w-maxContentTab justify-items-center py-8 lg:mx-0 lg:justify-items-start lg:py-0 xl:max-w-[810px]">
            <div className="relative block max-h-[30rem] lg:hidden">
              <div className="absolute bottom-0 left-0 h-full w-full shadow -[#161D29_0px_-64px_36px_-28px_inset]"></div>
              <img
                src={thumbnail}
                alt="course thumbnail"
                className="aspect-auto w-full"
              />
            </div>
            <div
              className={`z-30 my-5 flex flex-col justify-center gap-4 py-5 text-lg text-richblack-5`}  
            >
              <div>
                <p className="text-4xl font-bold text-richblack-5 sm:text-[42px]">
                  {courseName}
                </p>
              </div>
              <p className={`text-richblack-200`}>{courseDescription}</p>
              <div className="text-md flex flex-wrap items-center gap-2">
                <span className="text-yellow-25">{avgReviewCount}</span>
                <RatingStars Review_Count={avgReviewCount} Star_Size={24} />
                <span>{`(${ratingAndReviews?.length} reviews)`}</span>
                <span>{`${studentsEnrolled?.length} students enrolled`}</span>
              </div>
              <div>
                <p className="">
                  Created By {`${instructor?.firstName} ${instructor?.lastName}`}
                </p>
              </div>
              <div className="flex flex-wrap gap-5 text-lg">
                <p className="flex items-center gap-2">
                  {" "}
                  <BiInfoCircle /> Created at {formatDate(createdAt)}
                </p>
                <p className="flex items-center gap-2">
                  {" "}
                  <HiOutlineGlobeAlt /> English
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-4 border-y border-y-richblack-500 py-4 lg:hidden">
              <p className="space-x-3 pb-4 text-3xl font-semibold text-richblack-5">
                Rs. {price}
              </p>
              <button className="yellowButton" onClick={handleBuyCourse}>
                Buy Now
              </button>
              <button className="blackButton">Add to Cart</button>
            </div>
          </div>
          {/* Courses Card */}
          <div className="right-[1rem] top-[60px] mx-auto hidden min-h-[600px] w-1/3 max-w-[410px] translate-y-24 md:translate-y-0 lg:absolute  lg:block">
            <CourseDetailsCard
              course={response?.data?.courseDetails}
              setConfirmationModal={setConfirmationModal}
              handleBuyCourse={handleBuyCourse}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto box-content px-4 text-start text-richblack-5 lg:w-[1260px]">
        <div className="mx-auto max-w-maxContentTab lg:mx-0 xl:max-w-[810px]">
          {/* What will you learn section */}
          <div className="my-8 border border-richblack-600 p-8">
            <p className="text-3xl font-semibold">What you'll learn</p>
            <div className="mt-5">
              <defaultUrlTransform>{whatYouWillLearn}</defaultUrlTransform>
            </div>
          </div>

          {/* Course Content Section */}
          <div className="max-w-[830px] ">
            <div className="flex flex-col gap-3">
              <p className="text-[28px] font-semibold">Course Content</p>
              <div className="flex flex-wrap justify-between gap-2">
                <div className="flex gap-2">
                  <span>
                    {courseContent?.length} {`section(s)`}
                  </span>
                  <span>
                    {totalNoOfLectures} {`lecture(s)`}
                  </span>
                  <span>{response.data?.totalDuration} total length</span>
                </div>
                <div>
                  <button
                    className="text-yellow-25"
                    onClick={() => setIsActive([])}
                  >
                    Collapse all sections
                  </button>
                </div>
              </div>
            </div>

            {/* Course Details Accordion */}
            <div className="py-4">
              {courseContent?.map((course, index) => (
                <CourseAccordionBar
                  course={course}
                  key={index}
                  isActive={isActive}
                  handleActive={handleActive}
                />
              ))}
            </div>

            {/* Author Details */}
            <div className="mb-12 py-4">
              <p className="text-[28px] font-semibold">Author</p>
              <div className="flex items-center gap-4 py-4">
                <img
                  src={
                    instructor?.image
                      ? instructor?.image
                      : `https://api.dicebear.com/5.x/initials/svg?seed=${instructor?.firstName} ${instructor?.lastName}`
                  }
                  alt="Author"
                  className="h-14 w-14 rounded-full object-cover"
                />
                <p className="text-lg">{`${instructor?.firstName} ${instructor?.lastName}`}</p>
              </div>
              <p className="text-richblack-50">
                {instructor?.additionalDetails?.about}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  )
}

export default CourseDetails

```

---

## `src\pages\Dashboard.jsx`

```javascript
import { useState } from "react";
import Spinner from "../components/common/Spinner";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/core/Dashboard/Sidebar";
import { MdSpaceDashboard } from "react-icons/md";
import useOnClickOutsideProfile from "../hooks/useOnClickOutsideProfile";
import { useRef } from "react";

const Dashboard=()=>{
  const {loading:authLoading}=useSelector((state)=>state.auth);
  const {loading:profileLoading}=useSelector((state)=>state.profile);
  const [show,setShow]=useState(false);
  const showRef=useRef();
  const stickRef=useRef();


  const showHandler=()=>{
    setShow(false);
  }
  

  useOnClickOutsideProfile(showRef,stickRef,showHandler);

  
 
  if(profileLoading || authLoading){
    return (
      <div>
        <Spinner/>
      </div>
    )
  }
  

  return (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      <div ref={showRef} className={`z-30 ${show?`left-0`:`-left-96`} sm:relative sm:left-0 absolute transition-all duration-500 `}>
        <Sidebar/>
      </div>
      <button onClick={()=>{
        setShow(!show);
      }} 
      ref={stickRef}
      className=" fixed bottom-4 right-10  shadow-2xl  hover:scale-95 transition-all duration-200  z-40 p-5 rounded-full  bg-yellow-50 sm:hidden">
        <MdSpaceDashboard fontSize={20}/>
      </button>
      <div className="h-[calc(100vh-3.5rem)] w-full overflow-auto">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
```

---

## `src\pages\Error.jsx`

```javascript
const Error=()=>{
  return(
    <div className="flex text-white text-3xl justify-center items-center">
      Error - 404 Not found
    </div>
  );
}

export default Error;
```

---

## `src\pages\ForgotPassword.jsx`

```javascript
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPasswordResetToken } from "../services/operations/authAPI";
import { IoIosArrowRoundBack } from "react-icons/io";
import Spinner from "../components/common/Spinner";
const ForgotPassword=()=>{
  const [email,setEmail]=useState("");
  const [emailSent,setEmailSent]=useState(false);
  const {loading}=useSelector((state)=>state.auth);
  const dispatch=useDispatch();
  const handleOnSubmit=(e)=>{
    e.preventDefault();
    dispatch(getPasswordResetToken(email,setEmailSent));
  }
  return (
<div className="text-white font-inter flex justify-center items-center w-full h-[calc(100vh-56px)]  ">
      {
        loading?
        (<Spinner/>)
        :(
          <div className=" max-w-[330px]  flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">
              {
                !emailSent?
                ("Reset your password")
                :(
                  "Check Your Email"
                )
              }
            </h1>

            <p className="text-[13px] leading-1 text-[#9e9ea0]">
              {
                !emailSent?
                (
                  "Have no fear. We'll email you instructions to reset your password. If your dont have access to your email , we can try account recovery."
                )
                :(
                  `We have sent the reset email to ${email}`
                )
              }
            </p>

            <form  className="mt-4" onSubmit={handleOnSubmit}>
              {
                !emailSent && (
                  <label> 
                    <p className="text-xs">Email Address <sup  className="text-[#ff1515] text-xsm">*</sup></p>
                    <input
                    required
                    type="email"
                    name="email"
                    value={email}
                    style={{
                      boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Enter Your Email Address"
                    className="bg-[#161D29]  text-xs mt-1 w-full p-3 rounded-xl"
                    />
                  </label>
                )
              }

              <button className={`w-full hover:bg-[#f4d744] active:scale-[0.95] transition-all duration-200 bg-[#FFD60A] text-richblack-900 ${emailSent?("mt-0"):("mt-8")} rounded-lg font-semibold text-xs p-3`} type="submit" >
                {
                  !emailSent?
                  ("Reset Password")
                  :("Resend Email")
                }
              </button>
            </form>
              
            <div className="flex mt-2 justify-start items-center ">
                <Link className="flex text-richblack-25 justify-center items-center " to="/login">
                  <IoIosArrowRoundBack fontSize={25} />
                  <p className="text-xs font-semibold">Back to login</p>
                </Link>
            </div>

          </div>
        )
      }
    </div>
  );
}


export default ForgotPassword;

```

---

## `src\pages\Home.jsx`

```javascript
// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

// Image and Video Import
import Banner from "../assets/Images/banner.mp4"
// Component Imports
import Footer from "../components/common/Footer"
import ReviewSlider from "../components/common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/Timeline"
import { useEffect, useState } from "react"
import ConfirmationModal from "../components/common/ConfirmationModal"
function Home() {
  
  const [confirmationModal,setConfirmationModal]=useState(null);
  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        {/* Become a Instructor Button */}
        <Link to={"/signup"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Heading */}
        <div className="text-center text-4xl font-semibold">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        {/* Sub Heading */}
        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        {/* Video */}
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighlightText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        {/* Explore Section */}
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Catagory Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="">Learn More</div>
              </CTAButton>
            </div>
          </div>

          {/* Timeline Section - Section 2 */}
          <TimelineSection />

          {/* Learning Language Section - Section 3 */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Become a instructor section */}
        <InstructorSection />

        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>

      {/* Footer */}
      <Footer />

       {
        confirmationModal &&
        <ConfirmationModal
        modalData={confirmationModal} 
       />
      }
    </div>
  )
}

export default Home

```

---

## `src\pages\Login.jsx`

```javascript
import loginImg from "../assets/Images/login.webp"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login
```

---

## `src\pages\Signup.jsx`

```javascript
import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
```

---

## `src\pages\UpdatePassword.jsx`

```javascript
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../services/operations/authAPI";
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Spinner from "../components/common/Spinner";
const UpdatePassword=()=>{
  const [formData,setFormData]=useState({
    password:"",
    confirmPassword:"",
  });
  const navigate=useNavigate();
  const location=useLocation();
  const {password,confirmPassword}=formData;
  const {loading}=useSelector((state)=>state.auth);
  const [showPassword,setShowPassword]=useState(false);
  const [showConfirmPassword,setShowConfirmPassword]=useState(false);
  const dispatch=useDispatch();

  const handleOnChange=(e)=>{
    setFormData((prevData)=>(
      {
      ...prevData, 
      [e.target.name] : e.target.value
      }
    )
    )
  }
  
  const handleOnSubmit=(e)=>{
    e.preventDefault();
    const token=location.pathname.split("/").at(-1);
    dispatch(resetPassword(password,confirmPassword,token,navigate));
   
  }
  return (
    <div className="text-white font-inter flex justify-center items-center w-full h-[calc(100vh-56px)]">
      {
        loading?(
          <Spinner/>
        )
        :(
          <div className=" max-w-[330px] flex flex-col gap-2" >

            <h1 className="text-2xl font-semibold">Choose new Password</h1>
            
            <p className="text-[13px] leading-1 text-[#9e9ea0]">Almost done. Enter your new password and you're all set.</p>
            
            <form onSubmit={handleOnSubmit}>
              
              
              <label className="relative">
                <p className="text-xs">New Password<sup className="text-[#ff1515] text-xsm"> *</sup></p>
                <input
                 style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                required
                type={showPassword?"text":"password"}
                name='password'
                value={password}
                className="bg-[#161D29] text-xs mt-1 w-full p-3 rounded-xl"
                onChange={handleOnChange}
                placeholder="Enter your new Password"
                />
                <span className="absolute top-7 right-3" onClick={()=>{setShowPassword((prev)=>!prev)}}>
                  {
                    showPassword?(<AiFillEyeInvisible fontSize={24} />):(<AiFillEye  fontSize={24}/>)
                  }
                </span>
              </label>


              <label className=" relative">
                <p className="text-xs mt-4">Confirm New Password<sup  className="text-[#ff1515] text-xsm"> *</sup></p>
                <input
                required
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="bg-[#161D29] text-xs mt-1 w-full p-3 rounded-xl"
                type={showConfirmPassword?"text":"password"}
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleOnChange}
                placeholder="Confirm New Password"
                />
                <span className="absolute top-[74px] right-3" onClick={()=>{setShowConfirmPassword((prev)=>!prev)}}>
                  {
                    showConfirmPassword?(<AiFillEyeInvisible  fontSize={24} />):(<AiFillEye  fontSize={24}/>)
                  }
                </span>
              </label>


                  <button className={`w-full hover:bg-[#f4d744] active:scale-[0.95] transition-all duration-200 bg-[#FFD60A] text-richblack-900 mt-8 rounded-lg font-semibold text-xs p-3`} type="submit">
                    Reset Password
                  </button>


            </form>

               
            <div className="flex mt-2 justify-start items-center ">
                <Link className="flex text-richblack-25 justify-center items-center " to="/login">
                <IoIosArrowRoundBack fontSize={25} />
                  <p className="text-xs font-semibold">Back to Login</p>
                </Link>
            </div>

          </div>
        )
      }
    </div>
  );
}

export default UpdatePassword
```

---

## `src\pages\VerifyEmail.jsx`

```javascript
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from "../services/operations/authAPI";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaClockRotateLeft } from "react-icons/fa6";
import Spinner from "../components/common/Spinner";


const VerifyEmail=()=>{
  const {loading,signupData}=useSelector((state)=>state.auth);
  const dispatch=useDispatch();
  const [otp,setOtp]=useState("");
  const navigate=useNavigate();


  useEffect(()=>{
    if(!signupData){
      navigate("/signup");
    }
  });

  const handleOnSubmit=(e)=>{
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;
    dispatch(signUp(accountType,firstName,lastName,email,password,confirmPassword,otp,navigate));
  }
  return (
    <div class="text-white flex items-center justify-center flex-col h-[calc(100vh-56px)]">
      {
        loading?
        (
          <Spinner/>
        )
        :(
          <div className="max-w-[330px]  flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Verify Email</h1>
            <p className="mb-4 text-[13px] leading-1 text-[#9e9ea0]">A verification code has been sent to you. Enter the code below.</p>
            <form  onSubmit={handleOnSubmit}>
              <OTPInput
               className=" w-full p-6 bg-richblack-600 text-white"
              value={otp}
              onChange={setOtp}
              numInputs={6}
              
              renderSeparator={<span className="text-richblack-900">-</span>}
              renderInput={(props) => <span className="rounded-xl mx-auto px-[16px] py-[8px]   bg-richblack-800"><input   {...props} className=" bg-richblack-800  "/></span>}
              />
              <button className={`w-full hover:bg-[#f4d744] active:scale-[0.95] transition-all duration-200 bg-[#FFD60A] text-richblack-900 mt-8 rounded-lg font-semibold text-xs p-3`}  type="submit">
                Verify Email
              </button>    
            </form>

            <div  className="flex mt-2 justify-between items-center ">
              
                <Link className="flex text-richblack-25 justify-center items-center " to="/login">
                  <IoIosArrowRoundBack fontSize={25} />
                  <p className="text-xs font-semibold">Back to login</p>
                </Link>
              


                <button  className="flex gap-1 text-[#47A5C5] justify-center items-center " onClick={()=>dispatch(sendOtp(signupData.email,navigate))}>
                <FaClockRotateLeft fontSize={15}/>
                <p  className="text-xs font-semibold">Resend it</p> 
                </button>
            </div>
          </div>
        )

      }
    </div>
  );
}
export default VerifyEmail;
```

---

## `src\pages\ViewCourse.jsx`

```javascript
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useParams } from "react-router-dom"
import CourseReviewModal from "../components/core/ViewCourse/CourseReviewModal"
import VideoDetailsSidebar from "../components/core/ViewCourse/VideoDetailsSidebar"
import { getFullDetailsOfCourse } from "../services/operations/courseDetailsAPI"
import {
  setCompletedLectures,
  setCourseSectionData,
  setEntireCourseData,
  setTotalNoOfLectures,
} from "../slices/viewCourseSlice"
import useOnClickOutsideProfile from "../hooks/useOnClickOutsideProfile"
import { MdSpaceDashboard } from "react-icons/md"

export default function ViewCourse() {
  const { courseId } = useParams()
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [reviewModal, setReviewModal] = useState(false)
  const [show,setShow]=useState(false);
  const stickRef=useRef();
  const showRef=useRef();


  
  const showHandler=()=>{
    setShow(false);
  }


  useEffect(() => {
    ;(async () => {
      const courseData = await getFullDetailsOfCourse(courseId, token)
      // console.log("Course Data here... ", courseData.courseDetails)
      dispatch(setCourseSectionData(courseData.courseDetails.courseContent))
      dispatch(setEntireCourseData(courseData.courseDetails))
      dispatch(setCompletedLectures(courseData.completedVideos))
      let lectures = 0
      courseData?.courseDetails?.courseContent?.forEach((sec) => {
        lectures += sec.subSection.length
      })
      dispatch(setTotalNoOfLectures(lectures))
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useOnClickOutsideProfile(showRef,stickRef,showHandler);
  return (
    <div className="relative flex">
      <div  ref={showRef} className={`z-50 ${show?`left-0 `:`-left-[320px] absolute`} flex min-h-[calc(100vh-3.5rem)]  sm:relative sm:left-0 absolute transition-all duration-500 `}>
        <VideoDetailsSidebar  setReviewModal={setReviewModal} />
      </div>
        <button onClick={()=>{
        setShow(!show);
      }} 
      ref={stickRef}
      className=" fixed bottom-4 right-10  shadow-2xl  hover:scale-95 transition-all duration-200  z-40 p-5 rounded-full  bg-yellow-50 sm:hidden">
        <MdSpaceDashboard fontSize={20}/>
      </button>
        <div className="h-[calc(100vh-3.5rem)] relative flex-1 overflow-auto">
          <div className="mx-6 ">
            <Outlet />
          </div>
        </div>
     
      {reviewModal && <CourseReviewModal setReviewModal={setReviewModal} />}
    </div>
  )
}
```

---

## `src\reducer\index.js`

```javascript
import {combineReducers} from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice";
import cartReducer from "../slices/cartSlice";
import courseReducer from "../slices/courseSlice";
import viewReducer from "../slices/viewCourseSlice";
const rootReducer=combineReducers({
    auth:authReducer,
    profile:profileReducer,
    cart:cartReducer,
    course:courseReducer,
    viewCourse:viewReducer,
})

export default rootReducer;
```

---

## `src\services\api.js`

```javascript
const BASE_URL=process.env.REACT_APP_BASE_URL

export const categories={
  CATEGORIES_API:BASE_URL + "/course/showAllCategories", 
}
```

---

## `src\services\apiconnector.js`

```javascript
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

// Add request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      // Remove quotes if token is stored as JSON string
      const cleanToken = token.replace(/^"|"$/g, '');
      config.headers.Authorization = `Bearer ${cleanToken}`;
      console.log("Token being sent:", cleanToken.substring(0, 20) + "...");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// REMOVE the response interceptor that auto-redirects to login
// This was causing the login loop
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("API Error:", error.response?.status, error.response?.data);
    return Promise.reject(error);
  }
);

export const apiConnector = (method, url, data, extraHeaders, params) => {
  const config = {
    method,
    url,
    withCredentials: true,
  };
  
  if (data) config.data = data;
  if (params) config.params = params;
  if (extraHeaders) {
    config.headers = { ...config.headers, ...extraHeaders };
  }

  return axiosInstance(config);
};
```

---

## `src\services\apis.js`

```javascript
import { axiosInstance } from "../services/apiconnector";

const BASE_URL = process.env.REACT_APP_BASE_URL;

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/update-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/update-password",
}

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
  GET_INSTRUCTOR_DATA_API:BASE_URL+ "/profile/instructorDashboard",

}

// STUDENTS ENDPOINTS
export const studentEndpoints = {
  COURSE_PAYMENT_API: BASE_URL + "/payment/capturePayment",
  COURSE_VERIFY_API: BASE_URL + "/payment/verifySignature",
  SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL + "/payment/sendPaymentSuccessEmail",
}

// COURSE ENDPOINTS
export const courseEndpoints = {
  GET_ALL_COURSE_API: BASE_URL + "/course/getAllCourses",
  COURSE_DETAILS_API: BASE_URL + "/course/getCourseDetails",
  EDIT_COURSE_API: BASE_URL + "/course/editCourse",
  COURSE_CATEGORIES_API: BASE_URL + "/course/showAllCategories",
  CREATE_COURSE_API: BASE_URL + "/course/createCourse",
  CREATE_SECTION_API: BASE_URL + "/course/addSection",
  CREATE_SUBSECTION_API: BASE_URL + "/course/addSubSection",
  UPDATE_SECTION_API: BASE_URL + "/course/updateSection",
  UPDATE_SUBSECTION_API: BASE_URL + "/course/updateSubSection",
  GET_ALL_INSTRUCTOR_COURSES_API: BASE_URL + "/course/getInstructorCourses",
  DELETE_SECTION_API: BASE_URL + "/course/deleteSection",
  DELETE_SUBSECTION_API: BASE_URL + "/course/deleteSubSection",
  DELETE_COURSE_API: BASE_URL + "/course/deleteCourse",
  GET_FULL_COURSE_DETAILS_AUTHENTICATED:
    BASE_URL + "/course/getFullCourseDetails",
  LECTURE_COMPLETION_API: BASE_URL + "/course/updateCourseProgress",
  CREATE_RATING_API: BASE_URL + "/course/createRating",
}

// RATINGS AND REVIEWS
export const ratingsEndpoints = {
  REVIEWS_DETAILS_API: BASE_URL + "/course/getReviews",
}

// CATAGORIES API
export const categories = {
  CATEGORIES_API: BASE_URL + "/course/showAllCategories",
}

// CATALOG PAGE DATA
export const catalogData = {
  CATALOGPAGEDATA_API: BASE_URL + "/course/getCategoryPageDetails",
}
// CONTACT-US API
export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "/reach/contact",
}

// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
 
}
```

---

## `src\services\formatDate.js`

```javascript
export const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    const date = new Date(dateString)
    const formattedDate = date.toLocaleDateString("en-US", options)
  
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const period = hour >= 12 ? "PM" : "AM"
    const formattedTime = `${hour % 12}:${minutes
      .toString()
      .padStart(2, "0")} ${period}`
  
    return `${formattedDate} | ${formattedTime}`
  }
```

---

## `src\services\operations\SettingsAPI.js`

```javascript
import { toast } from "react-hot-toast"

import { setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiconnector"
import { settingsEndpoints } from "../apis"
import { logout } from "./authAPI"



const {
  UPDATE_DISPLAY_PICTURE_API,
  UPDATE_PROFILE_API,
  CHANGE_PASSWORD_API,
  DELETE_PROFILE_API,
} = settingsEndpoints

export function updateDisplayPicture(token, formData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector(
        "PUT",
        UPDATE_DISPLAY_PICTURE_API,
        formData,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      )
      console.log(
        "UPDATE_DISPLAY_PICTURE_API API RESPONSE............",
        response
      )

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Display Picture Updated Successfully")
      dispatch(setUser(response.data.data))
    } catch (error) {
      console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", error)
      toast.error("Could Not Update Display Picture")
    }
    toast.dismiss(toastId)
  }
}

export function updateProfile(token, formData) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("PUT", UPDATE_PROFILE_API, formData, {
        Authorization: `Bearer ${token}`,
      })
      console.log("UPDATE_PROFILE_API API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      const userImage = response.data.updatedDetails.image
        ? response.data.updatedUserDetails.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.updatedDetails.firstName} ${response.data.updatedDetails.lastName}`
      dispatch(
        setUser({ ...response.data.updatedDetails, image: userImage })
      )
      toast.success("Profile Updated Successfully")
    } catch (error) {
      console.log("UPDATE_PROFILE_API API ERROR............", error)
      toast.error("Could Not Update Profile")
    }
    toast.dismiss(toastId)
  }
}

export async function changePassword(token, formData) {
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", CHANGE_PASSWORD_API, formData, {
      Authorization: `Bearer ${token}`,
    })
    console.log("CHANGE_PASSWORD_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    toast.success("Password Changed Successfully")
  } catch (error) {
    console.log("CHANGE_PASSWORD_API API ERROR............", error)
    toast.error(error.response.data.message)
  }
  toast.dismiss(toastId)
}

export function deleteProfile(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("DELETE", DELETE_PROFILE_API, null, {
        Authorization: `Bearer ${token}`,
      })
      console.log("DELETE_PROFILE_API API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Profile Deleted Successfully")
      dispatch(logout(navigate))
    } catch (error) {
      console.log("DELETE_PROFILE_API API ERROR............", error)
      toast.error("Could Not Delete Profile")
    }
    toast.dismiss(toastId)
  }
}
```

---

## `src\services\operations\authAPI.js`

```javascript
import { toast } from "react-hot-toast"

import { setLoading, setToken } from "../../slices/authSlice"
import { resetCart } from "../../slices/cartSlice"
import { setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiconnector"
import { endpoints } from "../apis"

const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = endpoints

export function sendOtp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
        checkUserPresent: true,
      })
      console.log("SENDOTP API RESPONSE............", response)

      console.log(response.data.success)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("OTP Sent Successfully")
      navigate("/verify-email")
    } catch (error) {
      console.log("SENDOTP API ERROR............", error)
      toast.error("Could Not Send OTP")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function signUp(
  accountType,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
      })

      console.log("SIGNUP API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Signup Successful")
      navigate("/login")
    } catch (error) {
      console.log("SIGNUP API ERROR............", error)
      toast.error("Signup Failed")
      navigate("/signup")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

// In the login function, fix token storage:
export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      })

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Login Successful")
      
      // Store token without JSON.stringify
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("user", JSON.stringify(response.data.user))
      
      dispatch(setToken(response.data.token))
      
      const userImage = response.data?.user?.image
        ? response.data.user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
      
      dispatch(setUser({ ...response.data.user, image: userImage }))
      
      navigate("/dashboard/my-profile")
    } catch (error) {
      console.log("LOGIN API ERROR............", error)
      toast.error(error?.response?.data?.message || "Login Failed")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

// export function getPasswordResetToken(email, setEmailSent) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...")
//     dispatch(setLoading(true))
//     try {
//       const response = await apiConnector("POST", RESETPASSTOKEN_API, {
//         email,
//       })

//       console.log("RESETPASSTOKEN RESPONSE............", response)

//       if (!response.data.success) {
//         throw new Error(response.data.message)
//       }

//       toast.success("Reset Email Sent")
//       setEmailSent(true)
//     } catch (error) {
//       console.log("RESETPASSTOKEN ERROR............", error)
//       toast.error("Failed To Send Reset Email")
//     }
//     toast.dismiss(toastId)
//     dispatch(setLoading(false))
//   }
// }

export function resetPassword(password, confirmPassword, token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
      })

      console.log("RESETPASSWORD RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Password Reset Successfully")
      navigate("/login")
    } catch (error) {
      console.log("RESETPASSWORD ERROR............", error)
      toast.error("Failed To Reset Password")
    }
    toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null))
    dispatch(setUser(null))
    dispatch(resetCart())
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}


export function getPasswordResetToken(email,setEmailSent){
  return async(dispatch)=>{
    dispatch(setLoading(true));
    try{
      const response=await apiConnector("POST",RESETPASSTOKEN_API,{
        email
      });
      console.log("RESET PASSWORD TOKEN RESPONSE....",response);
      if(!response.data.success){
        throw new Error(response.data.message);
      }

      toast.success("Reset Email Sent");
      setEmailSent(true);
    }
    catch(error){
      console.log("Reset password token error",error);
      toast.error("Failed to send email for resetting password");
    }
    dispatch(setLoading(false));
  }
}
```

---

## `src\services\operations\courseDetailsAPI.js`

```javascript
import { toast } from "react-hot-toast"

import { updateCompletedLectures } from "../../slices/viewCourseSlice"
// import { setLoading } from "../../slices/profileSlice";
import { apiConnector } from "../apiconnector"
import { courseEndpoints } from "../apis"

const {
  COURSE_DETAILS_API,
  COURSE_CATEGORIES_API,
  GET_ALL_COURSE_API,
  CREATE_COURSE_API,
  EDIT_COURSE_API,
  CREATE_SECTION_API,
  CREATE_SUBSECTION_API,
  UPDATE_SECTION_API,
  UPDATE_SUBSECTION_API,
  DELETE_SECTION_API,
  DELETE_SUBSECTION_API,
  GET_ALL_INSTRUCTOR_COURSES_API,
  DELETE_COURSE_API,
  GET_FULL_COURSE_DETAILS_AUTHENTICATED,
  CREATE_RATING_API,
  LECTURE_COMPLETION_API,
} = courseEndpoints

export const getAllCourses = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_ALL_COURSE_API)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Course Categories")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("GET_ALL_COURSE_API API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const fetchCourseDetails = async (courseId) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST", COURSE_DETAILS_API, {
      courseId,
    })
    console.log("COURSE_DETAILS_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data
  } catch (error) {
    console.log("COURSE_DETAILS_API API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}

// fetching the available course categories
export const fetchCourseCategories = async () => {
  let result = []
  try {
    const response = await apiConnector("GET", COURSE_CATEGORIES_API)
    console.log("COURSE_CATEGORIES_API API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Course Categories")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("COURSE_CATEGORY_API API ERROR............", error)
    toast.error(error.message)
  }
  return result
}

// add the course details
export const addCourseDetails = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", CREATE_COURSE_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("CREATE COURSE API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Add Course Details")
    }
    toast.success("Course Details Added Successfully")
    result = response?.data?.data
  } catch (error) {
    console.log("CREATE COURSE API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// edit the course details
export const editCourseDetails = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", EDIT_COURSE_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("EDIT COURSE API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Course Details")
    }
    toast.success("Course Details Updated Successfully")
    result = response?.data?.data
  } catch (error) {
    console.log("EDIT COURSE API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// create a section
export const createSection = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", CREATE_SECTION_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("CREATE SECTION API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Create Section")
    }
    console.log("RESOPONSE KO KRE LOG:",response);
    toast.success("Course Section Created")
    result = response?.data?.updatedCourseDetails
  } catch (error) {
    console.log("CREATE SECTION API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// create a subsection
export const createSubSection = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", CREATE_SUBSECTION_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("CREATE SUB-SECTION API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Add Lecture")
    }
    toast.success("Lecture Added")
    result = response?.data?.data
  } catch (error) {
    console.log("CREATE SUB-SECTION API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// update a section
export const updateSection = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", UPDATE_SECTION_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("UPDATE SECTION API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Section")
    }
    toast.success("Course Section Updated")
    result = response?.data?.data
  } catch (error) {
    console.log("UPDATE SECTION API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// update a subsection
export const updateSubSection = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", UPDATE_SUBSECTION_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("UPDATE SUB-SECTION API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Update Lecture")
    }
    toast.success("Lecture Updated")
    result = response?.data?.data
  } catch (error) {
    console.log("UPDATE SUB-SECTION API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// delete a section
export const deleteSection = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", DELETE_SECTION_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("DELETE SECTION API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Section")
    }
    toast.success("Course Section Deleted")
    result = response?.data?.data
  } catch (error) {
    console.log("DELETE SECTION API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}
// delete a subsection
export const deleteSubSection = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", DELETE_SUBSECTION_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("DELETE SUB-SECTION API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Lecture")
    }
    toast.success("Lecture Deleted")
    result = response?.data?.data
  } catch (error) {
    console.log("DELETE SUB-SECTION API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// fetching all courses under a specific instructor
export const fetchInstructorCourses = async (token) => {
  let result = []
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector(
      "GET",
      GET_ALL_INSTRUCTOR_COURSES_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    )
    console.log("INSTRUCTOR COURSES API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Instructor Courses")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("INSTRUCTOR COURSES API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// delete a course
export const deleteCourse = async (data, token) => {
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", DELETE_COURSE_API, data, {
      Authorization: `Bearer ${token}`
    })
    console.log("DELETE COURSE API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Course")
    }
    toast.success("Course Deleted")
  } catch (error) {
    console.log("DELETE COURSE API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
}

// get full details of a course
// Fix the getFullDetailsOfCourse function
export const getFullDetailsOfCourse = async (courseId, token) => {
  const toastId = toast.loading("Loading...")
  let result = null
  try {
    const response = await apiConnector(
      "POST", 
      GET_FULL_COURSE_DETAILS_AUTHENTICATED,
      { courseId }, // Send courseId in body
      {
        Authorization: `Bearer ${token}`
      }
    );
    
    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response?.data?.data
  } catch (error) {
    console.log("COURSE_FULL_DETAILS_API API ERROR............", error)
    result = error.response?.data
  }
  toast.dismiss(toastId)
  return result
}

// mark a lecture as complete
export const markLectureAsComplete = async (data, token) => {
  let result = null
  console.log("mark complete data", data)
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", LECTURE_COMPLETION_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log(
      "MARK_LECTURE_AS_COMPLETE_API API RESPONSE............",
      response
    )

    if (!response.data.message) {
      throw new Error(response.data.error)
    }
    toast.success("Lecture Completed")
    result = true
  } catch (error) {
    console.log("MARK_LECTURE_AS_COMPLETE_API API ERROR............", error)
    toast.error(error.message)
    result = false
  }
  toast.dismiss(toastId)
  return result
}

// create a rating for course
export const createRating = async (data, token) => {
  const toastId = toast.loading("Loading...")
  let success = false
  try {
    const response = await apiConnector("POST", CREATE_RATING_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("CREATE RATING API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Create Rating")
    }
    toast.success("Rating Created")
    success = true
  } catch (error) {
    success = false
    console.log("CREATE RATING API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return success
}
```

---

## `src\services\operations\myCourseAPI.js`

```javascript
import { toast } from "react-hot-toast"

import { setUser,setLoading } from "../../slices/profileSlice"
import { apiConnector } from "../apiconnector"
import { courseEndpoints } from "../apis"
import { logout } from "./authAPI"


const {
  GET_ALL_INSTRUCTOR_COURSES_API,
  COURSE_DETAILS_API
}= endpoints;


export const getCourseDetails=()=>{
  return async(dispatch)=>{
    const toastId=toast.loading("Loading...");
    dispatch(setLoading(true));
    try{
      const response=await apiConnector();
      console.log(response);

    }
    catch(err){
      console.log(err);
      console.log(err.message);
      toast.error("");
    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
  }
}
```

---

## `src\services\operations\pageAndComponentData.js`

```javascript
import React from 'react'
import {toast} from 'react-hot-toast';
import { apiConnector } from '../apiconnector';
import { catalogData } from '../apis';



export const getCatalogPageData=async(categoryId)=>{
  let result=[];
  const toastId=toast.loading("Loading...");
  try{
    const response=await apiConnector("POST",catalogData.CATALOGPAGEDATA_API,{categoryId:categoryId});
    if(!response?.data?.success){
      throw new Error("Could not Fetch Category Page Data");
    }
     result=response?.data;
  
  }
  catch(error){
    console.log("CATALOG PAGE DATA API ERROR:",error);
    toast.error(error.message);
    result=error?.response?.data;
  }
  toast.dismiss(toastId);
  return result;
}
```

---

## `src\services\operations\profileAPI.js`

```javascript
import { toast } from "react-hot-toast"

import { setLoading, setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiconnector"
import { profileEndpoints } from "../apis"
import { logout } from "./authAPI"

const { GET_USER_DETAILS_API, GET_USER_ENROLLED_COURSES_API,GET_INSTRUCTOR_DATA_API } = profileEndpoints

export function getUserDetails(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
        Authorization: `Bearer ${token}`,
      })
      console.log("GET_USER_DETAILS API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      const userImage = response.data.data.image
        ? response.data.data.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`
      dispatch(setUser({ ...response.data.data, image: userImage }))
    } catch (error) {
      dispatch(logout(navigate))
      console.log("GET_USER_DETAILS API ERROR............", error)
      toast.error("Could Not Get User Details")
    }
    toast.dismiss(toastId)
    dispatch(setLoading(false))
  }
}

export async function getUserEnrolledCourses(token) {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    console.log("BEFORE Calling BACKEND API FOR ENROLLED COURSES");
    const response = await apiConnector(
      "GET",
      GET_USER_ENROLLED_COURSES_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    )
   
    console.log("AFTER Calling BACKEND API FOR ENROLLED COURSES");
    // console.log(
    //   "GET_USER_ENROLLED_COURSES_API API RESPONSE............",
    //   response
    // )

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    
    result = response.data.data
  } catch (error) {
    console.log("GET_USER_ENROLLED_COURSES_API API ERROR............", error)
    toast.error("Could Not Get Enrolled Courses")
  }
  toast.dismiss(toastId);
  
  return result;
}


export async function getInstructorData(token){
  const toastId=toast.loading("Loading...");
  let result=[];
  try{
    const response=await apiConnector("GET",GET_INSTRUCTOR_DATA_API,null,{
      Authorization: `Bearer ${token}`
    });
    console.log(" GET_INSTRUCTOR_DATA_API_RESPONSE",response);
    result=response?.data?.courses;
    
  }
  catch(error){
    console.log("GET_INSTRUCTOR_API ERROR:",error);
    toast.error("Could not get instructor Data");

  }
  toast.dismiss(toastId);
  return result;

}
```

---

## `src\services\operations\studentFeaturesAPI.js`

```javascript
import toast from "react-hot-toast";
import {studentEndpoints} from "../apis";
import { apiConnector } from "../apiconnector";
import rzpLogo from "../../assets/Logo/rzp_logo.png";
import {setPaymentLoading} from "../../slices/courseSlice";
import {resetCart} from "../../slices/cartSlice";

const {COURSE_PAYMENT_API,COURSE_VERIFY_API,SEND_PAYMENT_SUCCESS_EMAIL_API}= studentEndpoints;

// creating script and appending it 
function loadScript(src){
    return new Promise((resolve)=>{
        const script=document.createElement("script");
        script.src=src;

        script.onload=()=>{
            resolve(true);
        }
        script.onerror=()=>{
            resolve(false);
        }
        document.body.appendChild(script);

    })

}



export async function buyCourse(token, courses, userDetails, navigate, dispatch) {
    const toastId = toast.loading("Loading....")
    try {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

        if (!res) {
            toast.error("RazorPay SDK failed to load")
            return
        }

        const orderResponse = await apiConnector("POST", COURSE_PAYMENT_API, 
            { courses },
            { Authorization: `Bearer ${token}` }
        )

        if (!orderResponse.data.success) {
            throw new Error(orderResponse.data.message)
        }

        const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY, // Fix environment variable name
            currency: orderResponse?.data?.data.currency,
            amount: `${orderResponse?.data?.data?.amount}`,
            order_id: orderResponse?.data?.data.id,
            name: "EduFy",
            description: "Thank you for Purchasing the Course",
            image: rzpLogo,
            prefill: {
                name: `${userDetails?.firstName} ${userDetails?.lastName}`,
                email: userDetails.email,
            },
            handler: function(response) {
                sendPaymentSuccessEmail(response, orderResponse.data.data.amount, token)
                verifyPayment({...response, courses}, token, navigate, dispatch)
            }
        }

        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
        paymentObject.on("payment.failed", function(response) {
            toast.error("Oops, payment failed")
            console.log(response.error)
        })

    } catch(error) {
        console.log("PAYMENT API ERROR", error)
        toast.error(error?.response?.data?.message || "Could not make Payment")
    }
    toast.dismiss(toastId)
}

async function sendPaymentSuccessEmail(response,amount,token){
    try{
        await apiConnector("POST",SEND_PAYMENT_SUCCESS_EMAIL_API,{
            orderId:response.razorpay_order_id,
            paymentId:response.razorpay_payment_id,
            amount,
        },{
            Authorization: `Bearer ${token}`
        })
    }
    catch(error){
        console.log("Payment success email error",error);
    }
}



//verify payment
async function verifyPayment(bodyData,token,navigate,dispatch){
    const toastId=toast.loading("Verifying Payment...");
    dispatch(setPaymentLoading(true));
    console.log(typeof(dispatch));
    console.log(dispatch);
    try{
        const response=await apiConnector("POST",COURSE_VERIFY_API,bodyData,{
            Authorization: `Bearer ${token}`,
        })

        if(!response?.data?.success){
            throw new Error(response?.data?.message);
        }
        toast.success("Payment Successful, you are added to the course");
        navigate("/dashboard/enrolled-courses");
        dispatch(resetCart());
    }
    catch(error){
        console.log("Payment verify error",error);
        toast.error("Could not verify Payment");

    }
    toast.dismiss(toastId);
    dispatch(setPaymentLoading(false));
}
```

---

## `src\slices\authSlice.js`

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,
  loading: false,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
  },
});

export const { setSignupData, setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;
```

---

## `src\slices\cartSlice.js`

```javascript
import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  total: localStorage.getItem("total")
    ? JSON.parse(localStorage.getItem("total"))
    : 0,
  totalItems: localStorage.getItem("totalItems")
    ? JSON.parse(localStorage.getItem("totalItems"))
    : 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const course = action.payload
      const index = state.cart.findIndex((item) => item._id === course._id)

      if (index >= 0) {
        // If the course is already in the cart, do not modify the quantity
        toast.error("Course already in cart")
        return
      }
      // If the course is not in the cart, add it to the cart
      state.cart.push(course)
      // Update the total quantity and price
      state.totalItems++
      state.total += course.price
      // Update to localstorage
      localStorage.setItem("cart", JSON.stringify(state.cart))
      localStorage.setItem("total", JSON.stringify(state.total))
      localStorage.setItem("totalItems", JSON.stringify(state.totalItems))
      // show toast
      toast.success("Course added to cart")
    },
    removeFromCart: (state, action) => {
      const courseId = action.payload
      const index = state.cart.findIndex((item) => item._id === courseId)

      if (index >= 0) {
        // If the course is found in the cart, remove it
        state.totalItems--
        state.total -= state.cart[index].price
        state.cart.splice(index, 1)
        // Update to localstorage
        localStorage.setItem("cart", JSON.stringify(state.cart))
        localStorage.setItem("total", JSON.stringify(state.total))
        localStorage.setItem("totalItems", JSON.stringify(state.totalItems))
        // show toast
        toast.success("Course removed from cart")
      }
    },
    resetCart: (state) => {
      state.cart = []
      state.total = 0
      state.totalItems = 0
      // Update to localstorage
      localStorage.removeItem("cart")
      localStorage.removeItem("total")
      localStorage.removeItem("totalItems")
    },
  },
})

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions

export default cartSlice.reducer
```

---

## `src\slices\courseSlice.js`

```javascript
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  step: 1,
  course: null,
  editCourse: false,
  paymentLoading: false,
}

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload
    },
    setCourse: (state, action) => {
      state.course = action.payload
    },
    setEditCourse: (state, action) => {
      state.editCourse = action.payload
    },
    setPaymentLoading: (state, action) => {
      state.paymentLoading = action.payload
    },
    resetCourseState: (state) => {
      state.step = 1
      state.course = null
      state.editCourse = false
    },
  },
})

export const {
  setStep,
  setCourse,
  setEditCourse,
  setPaymentLoading,
  resetCourseState,
} = courseSlice.actions

export default courseSlice.reducer
```

---

## `src\slices\profileSlice.js`

```javascript
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    loading: false,
};

const profileSlice = createSlice({
    name:"profile",
    initialState: initialState,
    reducers: {
        setUser(state, value) {
            state.user = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
          },
    },
});

export const {setUser, setLoading} = profileSlice.actions;
export default profileSlice.reducer;
```

---

## `src\slices\viewCourseSlice.js`

```javascript
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  courseSectionData: [],
  courseEntireData: [],
  completedLectures: [],
  totalNoOfLectures: 0,
}

const viewCourseSlice = createSlice({
  name: "viewCourse",
  initialState,
  reducers: {
    setCourseSectionData: (state, action) => {
      state.courseSectionData = action.payload
    },
    setEntireCourseData: (state, action) => {
      state.courseEntireData = action.payload
    },
    setTotalNoOfLectures: (state, action) => {
      state.totalNoOfLectures = action.payload
    },
    setCompletedLectures: (state, action) => {
      state.completedLectures = action.payload
    },
    updateCompletedLectures: (state, action) => {
      state.completedLectures = [...state.completedLectures, action.payload]
    },
  },
})

export const {
  setCourseSectionData,
  setEntireCourseData,
  setTotalNoOfLectures,
  setCompletedLectures,
  updateCompletedLectures,
} = viewCourseSlice.actions

export default viewCourseSlice.reducer
```

---

## `src\utils\avgRating.js`

```javascript
export default function GetAvgRating(ratingArr) {
    if (ratingArr?.length === 0) return 0
    const totalReviewCount = ratingArr?.reduce((acc, curr) => {
      acc += curr.rating
      return acc
    }, 0)
  
    const multiplier = Math.pow(10, 1)
    const avgReviewCount =
      Math.round((totalReviewCount / ratingArr?.length) * multiplier) / multiplier
  
    return avgReviewCount
  }
```

---

## `src\utils\constants.js`

```javascript
export const ACCOUNT_TYPE = {
    STUDENT: "Student",
    INSTRUCTOR: "Instructor",
    ADMIN: "Admin",
  }
  
  export const COURSE_STATUS = {
    DRAFT: "Draft",
    PUBLISHED: "Published",
  }
```

---

