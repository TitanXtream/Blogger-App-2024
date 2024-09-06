import robotImg from '../assets/ai-robot.webp';
import blockChainImg from '../assets/blockchain.jpg';
import uiuxImg from '../assets/ui-ux.jpg';

export const blogPosts = [
  {
    _id: 'bp1',
    authId: 'p1',
    link: 'sfa',
    title:
      'The age of robotics is here with most modurn technologies , especially smart AI.',
    createdAt: new Date(),
    thumbnailImg: '/ai-robot.webp',
    author: {
      name: 'Devid Jones',
    },
    description:
      'The age of robotics has arrived, ushering in a new era of advanced technology, particularly intelligent AI systems. With the rapid advancements in the field of robotics, we witness the integration of cutting-edge technologies that have revolutionized various industries. Smart AI, with its ability to learn, adapt, and make informed decisions, has become a driving force behind this transformation',
    commentsCount: 0,
    likesCount: 10,
    content:
      'The age of robotics has arrived, ushering in a new era of advanced technology, particularly intelligent AI systems. With the rapid advancements in the field of robotics, we witness the integration of cutting-edge technologies that have revolutionized various industries. Smart AI, with its ability to learn, adapt, and make informed decisions, has become a driving force behind this transformation. From autonomous vehicles to virtual assistants, robotics has penetrated numerous aspects of our lives, enhancing efficiency, productivity, and convenience. As we embrace this era, the potential for further innovation and development seems boundless, offering exciting prospects for a future where humans and intelligent machines collaborate harmoniously.',
  },
  {
    _id: 'bp1',
    authId: 'p2',
    link: 'sfa',
    title: 'The Blockchain trained is not for developers but for investers',
    createdAt: new Date(),
    updatedAt: new Date(),
    thumbnailImg: '/blockchain.jpg',
    author: {
      name: 'Stephen Parker',
      link: 'https://www.ibm.com/topics/blockchain',
    },
    description:
      'The age of robotics has arrived, ushering in a new era of advanced technology, particularly intelligent AI systems. With the rapid advancements in the field of robotics, we witness the integration of cutting-edge technologies that have revolutionized various industries',
    commentsCount: 10,
    likesCount: 50,
    content:
      'The age of robotics has arrived, ushering in a new era of advanced technology, particularly intelligent AI systems. With the rapid advancements in the field of robotics, we witness the integration of cutting-edge technologies that have revolutionized various industries. Smart AI, with its ability to learn, adapt, and make informed decisions, has become a driving force behind this transformation. From autonomous vehicles to virtual assistants, robotics has penetrated numerous aspects of our lives, enhancing efficiency, productivity, and convenience. As we embrace this era, the potential for further innovation and development seems boundless, offering exciting prospects for a future where humans and intelligent machines collaborate harmoniously.',
  },
  {
    _id: 'bp1',
    authId: 'p3',
    link: 'sfa',
    title: 'The 2023 mobile UI UX triends',
    createdAt: new Date(),
    thumbnailImg: '/ui-ux.jpg',
    author: {
      name: 'Devid Jones',
    },
    description:
      'In 2023, mobile UI/UX trends are witnessing a shift towards emphasizing microinteractions. These subtle yet impactful animations and feedback mechanisms greatly enhance the user experience. From button hover effects to smooth transitions, microinteractions provide visual delight and reinforce user actions, making interactions more engaging and intuitive',
    commentsCount: 0,
    likesCount: 10,
    content:
      'In 2023, mobile UI/UX trends are witnessing a shift towards emphasizing microinteractions. These subtle yet impactful animations and feedback mechanisms greatly enhance the user experience. From button hover effects to smooth transitions, microinteractions provide visual delight and reinforce user actions, making interactions more engaging and intuitive. These small details not only improve usability but also create a sense of responsiveness and interactivity within mobile applications. By focusing on enhancing microinteractions, designers are able to create more immersive and enjoyable experiences, ultimately leading to higher user satisfaction and retention in the ever-evolving landscape of mobile UI/UX design.',
  },
];

export const userProfile = {
  _id: 'p1',
  thumbnail: '/blockchain.jpg',
  profileImage: '/ai-robot.webp',
  name: 'Stephen Parker',
  posts: blogPosts,
  savedPosts: blogPosts,
  headline: 'Softare and Tech development | Web3 development | Enterprenior',
  description: `HI I am Tamojit ,

  An expert inovative freelancer. My goal is to help people, specially to start up companies to grow up there business through internet . I do this by making websites or applications for there business . I have grown up  a team "TitanXtream" which has expert level developers and designer with all latest technologies to increase and manage trafic to the websites and so the business . 
  
  We make any kind of website / web application , integrate payment systems and build Rest APIs . Our speciality is that we always provide a resonable and sort deadline and achieve it . 
  
  I have 2 years of experience in web development and so on freelancing . I love to serve people and I with my team do this with quality work and innovative Ideas . We do not follow older aspects , we create new but fruitfull logics to achieve same thing each time and thus we create difference but we never compromise perfection .`,
};
