import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="grid lg:grid-cols-2 w-5/6 mx-auto gap-5 ">
      {/* question no - 01 */}
      <div className="border border-red-600 bg-gray-700 text-white p-5 rounded-xl">
        <h1 className="text-2xl font-bold mb-7 text-lime-400">
          Difference between SQL and NoSQL
        </h1>
        {/* anser - 1 */}
        <div>
          <h1 className="font-bold text-xl text-orange-500">SQL</h1>

          <p>
            SQL databases defines and manipulates data based structured query
            language (SQL). Seeing from a side this language is extremely
            powerful. SQL is one of the most versatile and widely-used options
            available which makes it a safe choice especially for great complex
            queries. But from other side it can be restrictive. SQL requires you
            to use predefined schemas to determine the structure of your data
            before you work with it. Also all of your data must follow the same
            structure. This can require significant up-front preparation which
            means that a change in the structure would be both difficult and
            disruptive to your whole system.
          </p>
          <h1 className="font-bold text-xl mt-2 text-orange-500">NoSQL</h1>
          <p>
            NoSQL databases. Apache CouchDB, like MongoDB, is a
            document-oriented database with JSON schemata and querying over
            JavaScript. CouchDB’s scaling capabilities stand out, employing a
            multi-master architecture over the typical single-master distributed
            design. Redis (Remote Dictionary Server), is the most popular
            key-value database. It is open-source, with a fast and distributed
            in-memory implementation, and supports many abstract data structures
            (some rarely found in other NoSQL). InfinityDB and Amazon’s DynamoDB
            implement two other key-value stores. Columnar stores like
            Cassandra, MariaDB, and Scylla scale well horizontally, and popular
            graph databases include ArangoDB, InfiniteGraph, and Neo4j.
          </p>
        </div>
      </div>

      {/* question no - 02 */}
      <div className="border border-red-600 bg-gray-700 text-white p-5 rounded-xl">
        <h1 className="text-2xl font-bold mb-7 text-lime-400">
          What is JWT, and how does it work?
        </h1>
        <div>
          <p>
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued.
            <br />
            JSONs differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted. A JWT is a string
            made up of three parts, separated by dots (.), and serialized using
            base64. In the most common serialization format, compact
            serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
          </p>
        </div>
      </div>

      {/* question no - 03 */}

      <div className="border border-red-600 bg-gray-700 text-white p-5 rounded-xl">
        <h1 className="text-2xl font-bold mb-7 text-lime-400">
          What is the difference between javascript and NodeJS?
        </h1>
        <div>
          <p>
            {" "}
            <span className="font-bold text-xl text-orange-500">
              Javascript
            </span>{" "}
            <br />
            1. JavaScript is a client-side scripting language that is
            lightweight, cross-platform, and interpreted. Both Java and HTML
            include it. Node.js, on the other hand, is a V8-based server-side
            programming language. As a result, it is used to create
            network-centric applications. It's a networked system made for
            data-intensive real-time applications. If we compare node js vs.
            python, it is clear that node js will always be the preferred
            option.
            <br /> <br />
            <span className="font-bold text-xl text-orange-500">NodeJs</span>
            <br />
            NodeJS is a cross-platform and opensource Javascript runtime
            environment that allows the javascript to be run on the server-side.
            Nodejs allows Javascript code to run outside the browser. Nodejs
            comes with a lot of modules and mostly used in web development and
            NodeJS is a Javascript runtime environment. We can run Javascript
            outside the browser with the help of NodeJS.
          </p>
        </div>
      </div>
      {/* question no - 04 */}
      <div className="border border-red-600 bg-gray-700 text-white p-5 rounded-xl">
        <h1 className="text-2xl font-bold mb-7 text-lime-400">
          How does NodeJS handle multiple requests at the same time?
        </h1>
        <div>
          <p>
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module. <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
