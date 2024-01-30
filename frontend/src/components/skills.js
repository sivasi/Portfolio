import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5} from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faAws } from '@fortawesome/free-brands-svg-icons';
const skills = () => {
  return (
    <section id="skills" className="m-4 md:m-8 bg-gray-100 text-gray-800">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-5xl font-bold">My Skills</h2>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Feature 1 */}
        <div className="flex flex-col items-center p-4">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-blue-600">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
          </svg>
          <h3 className="my-3 text-3xl font-semibold">C++</h3>
          <div className="space-y-1 leadi text-justify">
            <p>C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center p-4">
          <FontAwesomeIcon icon={faHtml5} className="w-8 h-8 text-blue-600" />
          <h3 className="my-3 text-3xl font-semibold">HTML</h3>
          <div className="space-y-1 leadi text-justify">
            <p>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser</p>
          </div>
        </div>

        <div className="flex flex-col items-center p-4">
        <FontAwesomeIcon icon={faCss3} className="w-8 h-8 text-blue-600" />
          <h3 className="my-3 text-3xl font-semibold">CSS</h3>
          <div className="space-y-1 leadi text-justify">
            <p>Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document </p>
          </div>
        </div>

        <div className="flex flex-col items-center p-4">
        <FontAwesomeIcon icon={faReact} className="w-8 h-8 text-blue-600" />
          <h3 className="my-3 text-3xl font-semibold">REACT</h3>
          <div className="space-y-1 leadi text-justify">
            <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components</p>
          </div>
        </div>

        <div className="flex flex-col items-center p-4">
        <FontAwesomeIcon icon={faNodeJs} className="w-8 h-8 text-blue-600" />
          <h3 className="my-3 text-3xl font-semibold">NODEJS</h3>
          <div className="space-y-1 leadi text-justify">
            <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine</p>
          </div>
        </div>

        <div className="flex flex-col items-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-blue-600">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
          </svg>
          <h3 className="my-3 text-3xl font-semibold">EXPRESSJS</h3>
          <div className="space-y-1 leadi text-justify">
            <p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications</p>
          </div>
        </div>

        <div className="flex flex-col items-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-blue-600">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
          </svg>
          <h3 className="my-3 text-3xl font-semibold">MONGODB</h3>
          <div className="space-y-1 leadi text-justify">
            <p>MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product</p>
          </div>
        </div>
        {/* Continue this pattern for Feature 3 to Feature 6 */}
        
        <div className="flex flex-col items-center p-4">
        <FontAwesomeIcon icon={faAws} className="w-8 h-8 text-blue-600" />
          <h3 className="my-3 text-3xl font-semibold">AWS</h3>
          <div className="space-y-1 leadi text-justify">
            <p>Amazon Web Services (AWS) is the world's most comprehensive cloud platform, with services supported by data centers globally.</p>
          </div>
        </div>

        <div className="flex flex-col items-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-blue-600">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
          </svg>
          <h3 className="my-3 text-3xl font-semibold">Machine learning</h3>
          <div className="space-y-1 leadi text-justify">
            <p>ML is a field of study in artificial intelligence concerned with the development and study of statistical algorithms </p>
          </div>
        </div>

      </div>
    </section>
  );
};
export default skills;