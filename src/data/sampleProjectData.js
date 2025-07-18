// Sample Appwrite Database Structure for Projects Collection

/**
 * Database: portfolio_db
 * Collection: projects
 * 
 * Required Attributes:
 * - title (string, required) - Project title
 * - description (string, required) - Project description
 * - category (string, required) - Project category (e.g., "Web Development", "App Development")
 * - image (string, optional) - Main project image URL
 * - imageUrl (string, optional) - Alternative image URL field
 * - video (string, optional) - Project video URL
 * - videoUrl (string, optional) - Alternative video URL field
 * - technologies (array, optional) - Array of technology strings
 * - features (array, optional) - Array of feature strings
 * - links (object, optional) - Object containing project links
 * - duration (string, optional) - Project duration
 * - status (string, optional) - Project status (e.g., "Completed", "In Progress")
 * - progress (string, optional) - Project progress status
 * - priority (number, optional) - Project priority for sorting
 * - isActive (boolean, optional) - Whether project should be displayed
 * - createdAt (datetime, auto) - Creation timestamp
 * - updatedAt (datetime, auto) - Last update timestamp
 */

export const sampleProjectData = {
  title: "BlissCamp",
  description: "A comprehensive website for tourists and travelers to discover amazing destinations and plan their perfect trips.",
  category: "Web Development",
  image: "https://picsum.photos/seed/project1/600/400",
  video: "https://res.cloudinary.com/ddgk3lkhq/video/upload/v1752667274/SampleVideo_1280x720_1mb_o2st8t.mp4",
  technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
  features: [
    "User Authentication & Authorization",
    "Destination Search & Filtering",
    "Trip Planning Tools",
    "User Reviews & Ratings",
    "Responsive Design",
    "Real-time Weather Integration"
  ],
  links: {
    live: "https://nk2552003.github.io/BlissCampIndia/",
    github: "https://github.com/NK2552003/BlissCampIndia",
    codepen: "https://github.com/NK2552003/BlissCampIndia"
  },
  duration: "3 months",
  status: "Completed",
  progress: "Completed",
  priority: 1,
  isActive: true
};

export const sampleProjectData2 = {
  title: "HostelEase",
  description: "A comprehensive management application for hostel students, wardens, and administrators to enable seamless communication and efficient hostel operations.",
  category: "App Development",
  image: "https://picsum.photos/seed/project6/600/400",
  video: "https://videos.pexels.com/video-files/15832152/15832152-hd_1920_1080_30fps.mp4",
  technologies: ["Flutter", "Dart", "Firebase", "Node.js", "Express"],
  features: [
    "Student Registration & Profile Management",
    "Room Allocation System",
    "Complaint Management",
    "Mess Menu & Feedback",
    "Visitor Management",
    "Push Notifications"
  ],
  links: {
    live: "https://github.com/NK2552003/Hostel_Management_App",
    github: "https://github.com/NK2552003/Hostel_Management_App",
    codepen: "https://github.com/NK2552003/Hostel_Management_App"
  },
  duration: "4 months",
  status: "In Progress",
  progress: "Working on it",
  priority: 2,
  isActive: true
};

/**
 * Instructions to set up Appwrite Database:
 * 
 * 1. Create a new database named "portfolio_db"
 * 2. Create a collection named "projects"
 * 3. Add the following attributes:
 *    - title (string, size: 255, required: true)
 *    - description (string, size: 1000, required: true)
 *    - category (string, size: 100, required: true)
 *    - image (string, size: 500, required: false)
 *    - imageUrl (string, size: 500, required: false)
 *    - video (string, size: 500, required: false)
 *    - videoUrl (string, size: 500, required: false)
 *    - technologies (string array, required: false)
 *    - features (string array, required: false)
 *    - links (string, size: 2000, required: false) - Store as JSON string
 *    - duration (string, size: 100, required: false)
 *    - status (string, size: 50, required: false)
 *    - progress (string, size: 50, required: false)
 *    - priority (integer, required: false, default: 0)
 *    - isActive (boolean, required: false, default: true)
 * 
 * 4. Set up indexes:
 *    - category (ascending)
 *    - priority (descending)
 *    - isActive (ascending)
 *    - $createdAt (descending)
 * 
 * 5. Configure permissions:
 *    - Read: Any (for public access)
 *    - Create/Update/Delete: Users or Admin roles (for content management)
 */
