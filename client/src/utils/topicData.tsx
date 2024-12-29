
  
// export const topics = [
//     {
//         name: 'Business',
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
//             </svg>
//         ),
//         words: 150,
//         difficulty: 'Intermediate',
//         categories: ['Office', 'Finance', 'Marketing'],
//         description: 'Essential business vocabulary for professional communication'
//     },
//     {
//         name: 'Technology',
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="2" x2="22" y1="20" y2="20" /><line x1="7" x2="7" y1="23" y2="20" /><line x1="17" x2="17" y1="23" y2="20" />
//             </svg>
//         ),
//         words: 200,
//         difficulty: 'Advanced',
//         categories: ['Software', 'Hardware', 'Internet'],
//         description: 'Modern tech terms and digital vocabulary'
//     },
//     {
//         name: 'Travel',
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
//             </svg>
//         ),
//         words: 120,
//         difficulty: 'Beginner',
//         categories: ['Transportation', 'Accommodation', 'Tourism'],
//         description: 'Useful words for your travel adventures'
//     },
//     {
//         name: 'Food & Dining',
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
//             </svg>
//         ),
//         words: 180,
//         difficulty: 'Beginner',
//         categories: ['Cuisine', 'Restaurants', 'Cooking'],
//         description: 'Culinary vocabulary for food enthusiasts'
//     },
//     {
//         name: 'Education',
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="m2 7 8-4 8 4" /><path d="m2 17 8 4 8-4" /><path d="m2 12 8 4 8-4" />
//             </svg>
//         ),
//         words: 160,
//         difficulty: 'Intermediate',
//         categories: ['Academic', 'School Life', 'Subjects'],
//         description: 'Academic and educational terminology'
//     },
//     {
//         name: 'Fashion',
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M6.5 14.5A6.5 6.5 0 0 0 13 8h2a6.5 6.5 0 0 0 0-13H9a6.5 6.5 0 0 0-6.5 6.5v6a6.5 6.5 0 0 0 6.5 6.5h4a6.5 6.5 0 0 0 0-13H9" />
//             </svg>
//         ),
//         words: 140,
//         difficulty: 'Intermediate',
//         categories: ['Clothing', 'Accessories', 'Style'],
//         description: 'Fashion and style-related vocabulary'
//     },
//     {
//         name: 'Health & Medicine',
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
//             </svg>
//         ),
//         words: 190,
//         difficulty: 'Advanced',
//         categories: ['Medical Terms', 'Wellness', 'Anatomy'],
//         description: 'Vocabulary related to healthcare and well-being'
//     },
//     {
//         name: 'Sports',
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <circle cx="12" cy="12" r="10" /><path d="M12 6v12" /><path d="M8 12h8" />
//             </svg>
//         ),
//         words: 130,
//         difficulty: 'Beginner',
//         categories: ['Team Sports', 'Individual Sports', 'Equipment'],
//         description: 'Essential vocabulary for sports enthusiasts'
//     },
//     {
//         name: 'Arts & Entertainment',
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//             </svg>
//         ),
//         words: 170,
//         difficulty: 'Intermediate',
//         categories: ['Music', 'Cinema', 'Literature'],
//         description: 'Vocabulary for discussing various forms of art and entertainment'
//     },
//     {
//         name: 'Science',
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M10 2v7.31" /><path d="M14 9.3V1.99" /><path d="M8.5 2h7" /><path d="M14 9.3a6.5 6.5 0 1 1-4 0" /><path d="M5.52 16h12.96" />
//             </svg>
//         ),
//         words: 210,
//         difficulty: 'Advanced',
//         categories: ['Physics', 'Chemistry', 'Biology'],
//         description: 'Scientific terminology for various branches of science'
//     },
//     {
//         name: 'Environment',
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M12 3a9 9 0 1 0 9 9" /><path d="M12 2v4" /><path d="M2 12h4" /><path d="M12 18v4" /><path d="M18 12h4" />
//             </svg>
//         ),
//         words: 160,
//         difficulty: 'Intermediate',
//         categories: ['Ecology', 'Climate', 'Conservation'],
//         description: 'Vocabulary related to environmental issues and sustainability'
//     },
//     {
//         name: 'Law & Politics',
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M12 22v-5" /><path d="M9 7V2h6v5" /><path d="M3 11h18" /><path d="M3 15h18" /><path d="M5 22h14" />
//             </svg>
//         ),
//         words: 220,
//         difficulty: 'Advanced',
//         categories: ['Legal Terms', 'Government', 'International Relations'],
//         description: 'Vocabulary for understanding legal and political contexts'
//     },
//     {
//         name: 'Psychology',
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <circle cx="12" cy="12" r="10" /><path d="M12 18a6 6 0 0 0 0-12" /><circle cx="12" cy="12" r="2" />
//             </svg>
//         ),
//         words: 180,
//         difficulty: 'Advanced',
//         categories: ['Mental Health', 'Behavior', 'Cognitive Processes'],
//         description: 'Psychological terms for understanding human behavior and mental processes'
//     },
//     {
//         name: 'Social Media',
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
//             </svg>
//         ),
//         words: 140,
//         difficulty: 'Beginner',
//         categories: ['Platforms', 'Content Creation', 'Engagement'],
//         description: 'Modern vocabulary for navigating social media platforms'
//     },
//     {
//         name: 'Economics',
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
//             </svg>
//         ),
//         words: 200,
//         difficulty: 'Advanced',
//         categories: ['Microeconomics', 'Macroeconomics', 'Financial Markets'],
//         description: 'Economic terms for understanding global and local economies'
//     },
//     {
//         name: 'Nature & Wildlife',
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M12 2s-5 5-5 9a5 5 0 0 0 10 0c0-4-5-9-5-9Z" /><path d="M12 14c-1.1 0-2-.9-2-2 0-.4.1-.7.3-1" /><path d="m16 17 4 4" /><path d="m8 17-4 4" />
//             </svg>
//         ),
//         words: 150,
//         difficulty: 'Intermediate',
//         categories: ['Flora', 'Fauna', 'Ecosystems'],
//         description: 'Vocabulary for describing the natural world and its inhabitants'
//     },
//     {
//         name: 'History',
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
//             </svg>
//         ),
//         words: 190,
//         difficulty: 'Advanced',
//         categories: ['Ancient History', 'Modern History', 'Historical Figures'],
//         description: 'Terms for discussing historical events, periods, and concepts'
//     },
//     {
//         name: 'Philosophy',
//         icon: (
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
//             </svg>
//         ),
//         words: 170,
//         difficulty: 'Advanced',
//         categories: ['Ethics', 'Metaphysics', 'Logic'],
//         description: 'Philosophical concepts and terminology for deep thinkers'
//     },
// ]

import { Topic } from "../type/topicType";


  
export const topics : Topic[] = [
    {
        name: 'Business',
        // icon: (
        //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //         <rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        //     </svg>
        // ),
        words: 150,
        difficulty: 'Intermediate',
        categories: ['Office', 'Finance', 'Marketing'],
        description: 'Essential business vocabulary for professional communication'
    },
    {
        name: 'Technology',
        // icon: (
        //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //         <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="2" x2="22" y1="20" y2="20" /><line x1="7" x2="7" y1="23" y2="20" /><line x1="17" x2="17" y1="23" y2="20" />
        //     </svg>
        // ),
        words: 200,
        difficulty: 'Advanced',
        categories: ['Software', 'Hardware', 'Internet'],
        description: 'Modern tech terms and digital vocabulary'
    },
    {
        name: 'Travel',
        // icon: (
        //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //         <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
        //     </svg>
        // ),
        words: 120,
        difficulty: 'Beginner',
        categories: ['Transportation', 'Accommodation', 'Tourism'],
        description: 'Useful words for your travel adventures'
    },
    {
        name: 'Food & Dining',
        // icon: (
        //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //         <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        //     </svg>
        // ),
        words: 180,
        difficulty: 'Beginner',
        categories: ['Cuisine', 'Restaurants', 'Cooking'],
        description: 'Culinary vocabulary for food enthusiasts'
    },
    {
        name: 'Education',
        // icon: (
        //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //         <path d="m2 7 8-4 8 4" /><path d="m2 17 8 4 8-4" /><path d="m2 12 8 4 8-4" />
        //     </svg>
        // ),
        words: 160,
        difficulty: 'Intermediate',
        categories: ['Academic', 'School Life', 'Subjects'],
        description: 'Academic and educational terminology'
    },
    {
        name: 'Fashion',
        // icon: (
        //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //         <path d="M6.5 14.5A6.5 6.5 0 0 0 13 8h2a6.5 6.5 0 0 0 0-13H9a6.5 6.5 0 0 0-6.5 6.5v6a6.5 6.5 0 0 0 6.5 6.5h4a6.5 6.5 0 0 0 0-13H9" />
        //     </svg>
        // ),
        words: 140,
        difficulty: 'Intermediate',
        categories: ['Clothing', 'Accessories', 'Style'],
        description: 'Fashion and style-related vocabulary'
    },
    {
        name: 'Health & Medicine',
        // icon: (
        //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //         <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        //     </svg>
        // ),
        words: 190,
        difficulty: 'Advanced',
        categories: ['Medical Terms', 'Wellness', 'Anatomy'],
        description: 'Vocabulary related to healthcare and well-being'
    },
    {
        name: 'Sports',
        // icon: (
        //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //         <circle cx="12" cy="12" r="10" /><path d="M12 6v12" /><path d="M8 12h8" />
        //     </svg>
        // ),
        words: 130,
        difficulty: 'Beginner',
        categories: ['Team Sports', 'Individual Sports', 'Equipment'],
        description: 'Essential vocabulary for sports enthusiasts'
    },
    {
        name: 'Arts & Entertainment',
        // icon: (
        //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //         <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        //     </svg>
        // ),
        words: 170,
        difficulty: 'Intermediate',
        categories: ['Music', 'Cinema', 'Literature'],
        description: 'Vocabulary for discussing various forms of art and entertainment'
    },
    {
        name: 'Science',
        // icon: (
        //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //         <path d="M10 2v7.31" /><path d="M14 9.3V1.99" /><path d="M8.5 2h7" /><path d="M14 9.3a6.5 6.5 0 1 1-4 0" /><path d="M5.52 16h12.96" />
        //     </svg>
        // ),
        words: 210,
        difficulty: 'Advanced',
        categories: ['Physics', 'Chemistry', 'Biology'],
        description: 'Scientific terminology for various branches of science'
    },
    {
        name: 'Environment',
        // icon: (
        //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //         <path d="M12 3a9 9 0 1 0 9 9" /><path d="M12 2v4" /><path d="M2 12h4" /><path d="M12 18v4" /><path d="M18 12h4" />
        //     </svg>
        // ),
        words: 160,
        difficulty: 'Intermediate',
        categories: ['Ecology', 'Climate', 'Conservation'],
        description: 'Vocabulary related to environmental issues and sustainability'
    },
    {
        name: 'Law & Politics',
        // icon: (
        //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //         <path d="M12 22v-5" /><path d="M9 7V2h6v5" /><path d="M3 11h18" /><path d="M3 15h18" /><path d="M5 22h14" />
        //     </svg>
        // ),
        words: 220,
        difficulty: 'Advanced',
        categories: ['Legal Terms', 'Government', 'International Relations'],
        description: 'Vocabulary for understanding legal and political contexts'
    },
    {
        name: 'Psychology',
        // icon: (
        //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //         <circle cx="12" cy="12" r="10" /><path d="M12 18a6 6 0 0 0 0-12" /><circle cx="12" cy="12" r="2" />
        //     </svg>
        // ),
        words: 180,
        difficulty: 'Advanced',
        categories: ['Mental Health', 'Behavior', 'Cognitive Processes'],
        description: 'Psychological terms for understanding human behavior and mental processes'
    },
    {
        name: 'Social Media',
        // icon: (
        //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //         <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
        //     </svg>
        // ),
        words: 140,
        difficulty: 'Beginner',
        categories: ['Platforms', 'Content Creation', 'Engagement'],
        description: 'Modern vocabulary for navigating social media platforms'
    },
    {
        name: 'Economics',
        // icon: (
        //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //         <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        //     </svg>
        // ),
        words: 200,
        difficulty: 'Advanced',
        categories: ['Microeconomics', 'Macroeconomics', 'Financial Markets'],
        description: 'Economic terms for understanding global and local economies'
    },
    {
        name: 'Nature & Wildlife',
        // icon: (
        //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //         <path d="M12 2s-5 5-5 9a5 5 0 0 0 10 0c0-4-5-9-5-9Z" /><path d="M12 14c-1.1 0-2-.9-2-2 0-.4.1-.7.3-1" /><path d="m16 17 4 4" /><path d="m8 17-4 4" />
        //     </svg>
        // ),
        words: 150,
        difficulty: 'Intermediate',
        categories: ['Flora', 'Fauna', 'Ecosystems'],
        description: 'Vocabulary for describing the natural world and its inhabitants'
    },
    {
        name: 'History',
        // icon: (
        //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //         <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        //     </svg>
        // ),
        words: 190,
        difficulty: 'Advanced',
        categories: ['Ancient History', 'Modern History', 'Historical Figures'],
        description: 'Terms for discussing historical events, periods, and concepts'
    },
    {
        name: 'Philosophy',
        // icon: (
        //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //         <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
        //     </svg>
        // ),
        words: 170,
        difficulty: 'Advanced',
        categories: ['Ethics', 'Metaphysics', 'Logic'],
        description: 'Philosophical concepts and terminology for deep thinkers'
    },
]
