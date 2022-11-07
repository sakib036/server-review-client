import React from 'react';

const Blog = () => {
    return (
        <div className='border-0'>
            <div className="card w-full backdrop-contrast-25 shadow-2xl text-white">
                <div className="card-body">
                    <h2 className="card-title">Difference between SQL and NoSQL</h2>
                    <h3>SQL:</h3>
                    
                        <ul className='list-disc '>
                            <li>SQL databases are a type of system software that supports management, analysis, capturing and querying the structured data in a relational format.</li>
                            <li>A language used to communicate with databases for storage, deletion, updation, insertion and retrieval of data.</li>
                            <li>SQL was developed in the year 1970 for flat file storage problems.</li>
                            <li>SQL databases support Structured Query Languages.</li>
                            <li>Supports table based data type.</li>
                            <li>Vertically Scalable  (Add resources to increase the capacity of the existing hardware and software).</li>
                            <li>SQL supports predefined schemas, making the storage of data restrictive to structured type only.</li>
                            <li>SQL is relational.</li>
                            <li>SQL is best suitable for complex queries, multi-row transactions.</li>
                            <li>Databases that support SQL require powerful hardware to support vertical scaling.</li>
                            <li>SQL enables ACID(atomicity, consistency, isolation, and durability) properties</li>
                            <li>SQL does not support hierarchical storage of data.</li>
                            <li>SQL databases can only be run on a single system and hence, does not follow distribution of data.</li>
                            <li>Microsoft, Dell, Cognizant, etc.</li>
                            <li>SQL supports databases like MySQL, SQL Server, Oracle, etc.</li>
                            <li>Secure,Cross Platform Support,Free.</li>
                        </ul>
                   
                    <h3>NoSQL:</h3>
                    
                        <ul className='list-disc '>
                            <li>NoSQL databases are a type of software that allows to maintain and retrieve structured, unstructured, polymorphic data for different purposes.</li>
                            <li>A software to retrieve, store and manage scalability of databases.</li>
                            <li>NoSQL was developed in 2000 as an enhanced version for SQL databases for unstructured and semi-structured data.</li>
                            <li>NonSQL does not have any declarative query language.</li>
                            <li>Supports document oriented, graph databases, key value pair-based.</li>
                            <li>Horizontally Scalable (Changing small nodes with larger nodes to increase the capacity of the existing hardware and software).</li>
                            <li>Nosql supports dynamic schemas to store different forms of data.</li>
                            <li>Non-SQL is non relational.</li>
                            <li>NoSQL is best suited for unstructured data or documents. Not ideal for complex queries.</li>
                            <li>NonSQL databases require commodity hardware for horizontal scaling.</li>
                            <li>NonSQL follows CAP (consistency, availability, partition tolerance) properties.</li>
                            <li>NoSQL is best suited for hierarchical storage of data.</li>
                            <li>NoSQL databases are designed to follow data distribution features like repetition, partition.</li>
                            <li>Amazon, Capgemini, Adobe, etc.</li>
                            <li>Nosql databases are Hbase, MongoDB, Redis, etc.</li>
                            <li>High Performance,Flexible,Easy to use.</li>
                        </ul>

                    
                </div>
            </div>
            <div className="card w-full backdrop-contrast-50 shadow-2xl text-white my-10">
                <div className="card-body">
                    <h2 className="card-title">What is JWT, and how does it work?</h2>
                    <h3>What is JWT</h3>
                    <p>
                    standards for securing APIs to and from the server. But what exactly is JWT? How does it work? Let us understand it more in detail.JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                    </p>
                    <h3>How does JWT work</h3>
                    <p>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.User sign-in using username and password or google/facebook.Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                    <h4>Security</h4>
                    <p>Just like any other authentication mechanism, JWT also has its own pros and cons.Must use HTTPS to secure the Authorization headerValidate algorithm name explicitly. Do not completely rely on the algorithm mentioned in the header of JWT. There are a few known attacks based on the header like algo none attack, header stripping.Revoking the session of a user from backend server is difficult. Since a JWT is set to automatically expire, If an attacker gets the token before it expires It leads to various exploits. Building a token revocation list on your server to invalidate tokens could be best way to mitigate.If JWT is persisted on cookies, we need to create HttpOnly cookie. This will restrict third party javascripts from reading jwt token from cookie. XSS backend servers must always sanitize user generated data. CSRF If JWT in persisted on cookies, CSRF attacks are possible. We can mitigate CSRF by using origin of request and special request headers.</p>
                </div>
            </div>
            <div className="card w-full backdrop-contrast-25 shadow-2xl text-white">
                <div className="card-body">
                    <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>
                    <h3>Javascript</h3>
                   
                    <ul className='list-disc '>
                        <li>Javascript is a programming language that is used for writing scripts on the website. </li>
                        <li>Javascript can only be run in the browsers.</li>
                        <li>It is basically used on the client-side.</li>
                        <li>Javascript is capable enough to add HTML and play with the DOM.</li>
                        <li>	Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </li>
                        <li>Javascript is used in frontend development.</li>
                        <li>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </li>
                        <li>It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++</li>

                    </ul>
                     
                     <h3>NodeJS</h3>
                     
                     <ul className='list-disc '>
                        <li>NodeJS is a Javascript runtime environment.</li>
                        <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                        <li>It is mostly used on the server-side.</li>
                        <li>Nodejs does not have capability to add HTML tags.</li>
                        <li>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </li>
                        <li>Nodejs is used in server-side development.</li>
                        <li>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. </li>
                        <li>Nodejs is written in C, C++ and Javascript.</li>

                        </ul>
                    
                </div>
            </div>
            <div className="card w-full backdrop-contrast-50 shadow-2xl text-white my-10">
                <div className="card-body">
                    <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>                   
                    <p>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. 
                    </p>
                    <h3>How NodeJS handle multiple client requests?</h3>
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. </p>
                    <p>If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                    <p>A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.The cluster module allows easy creation of child processes that all share the same server ports.</p>
                    <p>NodeJS server uses an EventQueue, which queues incoming client requests and an EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded and acts as a listener for the EventQueue which processes incoming requests based on FIFO policy.</p>
                    <p>When a new request comes in, NodeJS checks if it requires any blocking IO operations, if not, the EventLoop processes it and sends the response back to the client directly. If yes, then the request is forwarded to the thread manager, which then based on an algorithm, picks up an idle thread from the pool and lets it process the request. After completion of the request processing operation, the thread, returns the response back to the EventLoop which is then forwarded to the client. Thus, even if an incoming request needs blocking IO, the thread pool allows it to run asynchronously in the background without blocking the EventLoop and it gives a seamless experience of NodeJS handling multiple incoming requests concurrently without any persistent delays or bottlenecks.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;