"use client"

import React, { useState } from "react";
import SiteLoader from "../modules/SiteLoader";
import Image from "next/image";
import Modal from "../modules/Modal";


// const works = [
//   {
//     name : "matrix-store(next js)",
//     des : "",

//   }
// ]




function WorksPage() {

  const [activeModal, setActiveModal] = useState(0)



  return (
    <>
      {/* matrix */}
      <Modal show={activeModal === 1} setShow={setActiveModal}>
        <div className="text-white">
          <p className="my-4">
            <span>Next js : </span>
            A Next.js-powered e-commerce website utilizes the techniques of SSG
            (Static Site Generation), SSR (Server Side Rendering), and ISR
            (Incremental Static Regeneration).
          </p>
          <p className="my-4">
            <span>SSG : </span>
            SSG refers to generating static pages during the website build
            process. This means that when the update frequency is not high, the
            pages are automatically generated and cached. On the next request,
            the server uses the cached version of the pages. This approach
            provides faster and more efficient performance.
          </p>
          <p className="my-4">
            <span>SSR : </span>

            SSR, on the other hand, generates HTML on each request, which allows
            the server to render React components and send the fully rendered
            page to the client. This ensures that the content is always up to
            date.
          </p>
          <p className="my-4">
            <span>ISR : </span>

            Finally, ISR brings the best of both SSG and SSR. With ISR, you can
            statically generate parts of your page while also specifying a time
            interval for them to be regenerated. This allows you to have dynamic
            content on your static pages, ensuring both performance and
            freshness.
          </p>

          <p className="my-4">
            <span>PAGES : </span>

            Overall, the combination of SSG, SSR, and ISR in a Next.js
            e-commerce website helps achieve fast loading times, better SEO, and
            a great user experience. In a similar fashion to Next.js, MongoDB is
            commonly used with the MERN stack. MongoDB is a NoSQL database that
            works well with JavaScript and is used for storing data and
            information generated by websites.
          </p>

          <p className="my-4">
            <span>TAILWIND : </span>

            In addition to that, Tailwind CSS has been used. Tailwind CSS is a
            utility-first CSS framework that enables rapid development by
            providing a set of ready-to-use CSS classes. It allows developers to
            build UI components quickly and efficiently by applying these
            classes directly in their markup. Tailwind CSS also promotes a
            highly customizable approach, enabling developers to easily create
            unique designs without writing custom CSS code.
          </p>

          <p className="my-4">
            <span>REDUX : </span>

            In addition, Redux has been used as a state management tool. Redux
            is a predictable state container for JavaScript apps that helps
            manage the application state in a more structured and organized way.
            It provides a single source of truth, making it easier to track
            changes and manage the state across different components.
          </p>

          <p className="my-4">
            <span>TIPTAP : </span>

            Tiptap is a modern and extensible rich text editor framework built
            with Vue.js. It provides a set of customizable and reusable
            components for creating and editing rich text content. Tiptap
            supports various features like formatting, embedding media, and
            handling user input, making it a great choice for implementing a
            rich text editing functionality in an application.
          </p>

          <p className="my-4">
            <span>NEXT AUTH : </span>

            The phrase I have used indicates that you have utilized a specific tool or technology in this project. In this particular case, NextAuth.js is mentioned as the tool that has been used. NextAuth.js is a developer-friendly web development library that provides easy-to-use authentication features in React and Next.js applications.
          </p>
          <p className="my-4">
            <span>AXIOS : </span>

            Axios is a popular JavaScript library used for making HTTP requests
            from a web client to a server. It provides a simple and intuitive
            API for sending asynchronous HTTP requests and handling responses.
            Axios can be used with any JavaScript framework or library,
            including Vue.js, and it offers features like automatic JSON
            parsing, request cancellation, and response interceptors, making it
            a powerful tool for managing API calls in a web application.
          </p>

        </div>
      </Modal>
      {/* matrix */}


      {/* store (react) */}
      <Modal show={activeModal === 2} setShow={setActiveModal}>
        <div className="text-white">




          <p className="my-4">
            <span>REACT : </span>

            React is a popular JavaScript library for building user interfaces. It allows developers to create interactive and reusable components that can update efficiently and smoothly. React uses a virtual DOM (document object model) to efficiently update only the parts of the UI that need to be changed, resulting in faster and more responsive applications.

            One key concept in React is the component-based architecture, where the UI is broken down into smaller, reusable components that can be combined to build complex user interfaces. These components can have their own state and lifecycle methods, making it easier to manage the UIs state and behavior.

            React also promotes a declarative programming style, where developers describe what the UI should look like based on its current state, rather than imperatively defining each step of the UIs update. This makes the code more predictable and easier to reason about.

            React is widely used for building single-page applications, as well as mobile applications using React Native. It has a large and active community, with many resources and libraries available to help developers build robust and efficient applications.


          </p>
          <p className="my-4">
            <span>REACT ROUTER DOM : </span>

            React Router Dom is a popular library for handling routing in React applications. It provides a set of components that allow developers to define different routes and render different components based on the current URL. With React Router Dom, developers can easily create single-page applications with multiple views and navigation between them. It also provides features like nested routing, dynamic routing, and URL parameters, allowing for more advanced navigation and routing. React Router Dom is widely used and well-documented, making it a reliable choice for managing routing in React applications.


          </p>

          <p className="my-4">
            <span>MATERIAL UI  : </span>

            Mui is a popular library for building user interfaces in React. It provides a set of pre-designed components that can be easily customized and styled to create beautiful and responsive UIs. Mui follows the Material Design guidelines, offering a modern and clean design aesthetic. It also includes features like responsive layouts, accessibility support, and smooth animations. With Mui, developers can quickly prototype and build high-quality UIs for web and mobile applications.

          </p>

          <p className="my-4">
            <span>REDUX : </span>

            In addition, Redux has been used as a state management tool. Redux
            is a predictable state container for JavaScript apps that helps
            manage the application state in a more structured and organized way.
            It provides a single source of truth, making it easier to track
            changes and manage the state across different components.
          </p>


          <p className="my-4">
            <span>AXIOS : </span>

            Axios is a popular JavaScript library used for making HTTP requests
            from a web client to a server. It provides a simple and intuitive
            API for sending asynchronous HTTP requests and handling responses.
            Axios can be used with any JavaScript framework or library,
            including Vue.js, and it offers features like automatic JSON
            parsing, request cancellation, and response interceptors, making it
            a powerful tool for managing API calls in a web application.
          </p>

        </div>
      </Modal>
      {/* store (react) */}

      {/* packages */}
      <Modal show={activeModal === 3} setShow={setActiveModal}>
        <div className="text-white">
          <p className="my-4">
            <span>REACT : </span>
            React is a popular JavaScript library for building user interfaces. It allows developers to create interactive and reusable components that can update efficiently and smoothly. React uses a virtual DOM (document object model) to efficiently update only the parts of the UI that need to be changed, resulting in faster and more responsive applications.

            One key concept in React is the component-based architecture, where the UI is broken down into smaller, reusable components that can be combined to build complex user interfaces. These components can have their own state and lifecycle methods, making it easier to manage the UIs state and behavior.

            React also promotes a declarative programming style, where developers describe what the UI should look like based on its current state, rather than imperatively defining each step of the UIs update. This makes the code more predictable and easier to reason about.

            React is widely used for building single-page applications, as well as mobile applications using React Native. It has a large and active community, with many resources and libraries available to help developers build robust and efficient applications.


          </p>
          <p className="my-4">
            <span>REACT ROUTER DOM : </span>
            React Router Dom is a popular library for handling routing in React applications. It provides a set of components that allow developers to define different routes and render different components based on the current URL. With React Router Dom, developers can easily create single-page applications with multiple views and navigation between them. It also provides features like nested routing, dynamic routing, and URL parameters, allowing for more advanced navigation and routing. React Router Dom is widely used and well-documented, making it a reliable choice for managing routing in React applications.


          </p>

          <p className="my-4">
            <span>MATERIAL UI : </span>
            Mui is a popular library for building user interfaces in React. It provides a set of pre-designed components that can be easily customized and styled to create beautiful and responsive UIs. Mui follows the Material Design guidelines, offering a modern and clean design aesthetic. It also includes features like responsive layouts, accessibility support, and smooth animations. With Mui, developers can quickly prototype and build high-quality UIs for web and mobile applications.

          </p>
          <p className="my-4">
            <span>GRAPHQL : </span>
            GraphQL is a query language and runtime for APIs that was developed by Facebook. It provides a more efficient and flexible approach to fetching and manipulating data compared to traditional RESTful APIs.

          </p>
          <p className="my-4">
            <span>HYGRAPH : </span>
            Hygraph is a ready-to-use backend framework for building and developing websites and web applications. Based on GraphQL, it offers powerful features of GraphQL to simplify and expedite the creation and management of your web services. With Hygraph, you can easily build scalable, efficient, and flexible backend systems for your websites and apps.


          </p>




        </div>
      </Modal>
      {/* packages */}

      {/* form */}
      <Modal show={activeModal === 4} setShow={setActiveModal}>
        <div className="text-white">
          <p className="my-4">
            <span>REACT : </span>

            React is a popular JavaScript library for building user interfaces. It allows developers to create interactive and reusable components that can update efficiently and smoothly. React uses a virtual DOM (document object model) to efficiently update only the parts of the UI that need to be changed, resulting in faster and more responsive applications.

            One key concept in React is the component-based architecture, where the UI is broken down into smaller, reusable components that can be combined to build complex user interfaces. These components can have their own state and lifecycle methods, making it easier to manage the UIs state and behavior.

            React also promotes a declarative programming style, where developers describe what the UI should look like based on its current state, rather than imperatively defining each step of the UIs update. This makes the code more predictable and easier to reason about.

            React is widely used for building single-page applications, as well as mobile applications using React Native. It has a large and active community, with many resources and libraries available to help developers build robust and efficient applications.
          </p>
        </div>
      </Modal>
      {/* form */}

      {/* resume */}
      <Modal show={activeModal === 5} setShow={setActiveModal}>
        <div className="text-white">
          <p className="my-4">
            <span>Next js : </span>
            A Next.js-powered e-commerce website utilizes the techniques of SSG
            (Static Site Generation), SSR (Server Side Rendering), and ISR
            (Incremental Static Regeneration).
          </p>
          <p className="my-4">
            <span>SSG : </span>
            SSG refers to generating static pages during the website build
            process. This means that when the update frequency is not high, the
            pages are automatically generated and cached. On the next request,
            the server uses the cached version of the pages. This approach
            provides faster and more efficient performance.
          </p>
          <p className="my-4">
            <span>TAILWIND : </span>

            In addition to that, Tailwind CSS has been used. Tailwind CSS is a
            utility-first CSS framework that enables rapid development by
            providing a set of ready-to-use CSS classes. It allows developers to
            build UI components quickly and efficiently by applying these
            classes directly in their markup. Tailwind CSS also promotes a
            highly customizable approach, enabling developers to easily create
            unique designs without writing custom CSS code.
          </p>
        </div>
      </Modal>
      {/* resume */}

      {/* amlak */}
      <Modal show={activeModal === 6} setShow={setActiveModal}>
        <div className="text-white">
          <p className="my-4">
            <span>Next js : </span>
            A Next.js-powered e-commerce website utilizes the techniques of SSG
            (Static Site Generation), SSR (Server Side Rendering), and ISR
            (Incremental Static Regeneration).
          </p>
          <p className="my-4">
            <span>SSR : </span>

            SSR, on the other hand, generates HTML on each request, which allows
            the server to render React components and send the fully rendered
            page to the client. This ensures that the content is always up to
            date.
          </p>
          <p className="my-4">
            <span>LAST VERSION NEXT : </span>
            The latest version of Next.js is 13.4.13, released on August 8, 2023. This version includes a number of new features and improvements, including:

            Built-in SEO support for the App Router. This makes it easy to add SEO metadata to your pages, such as title, description, and Open Graph tags.
            Route handlers. This allows you to define custom logic for handling routes, such as authentication or authorization.
            MDX for Server Components. This makes it easy to use MDX, a popular format for combining Markdown and React, in your server components.
            Rust MDX parser. This provides a faster and more efficient MDX parser for Next.js.
            Improved error overlay. The error overlay has been improved to provide more information about errors, such as the stack trace and the line number where the error occurred.
            Statically typed links (beta). This allows you to statically type links in your code, which can help to prevent errors.
            Turbopack improvements (alpha). Turbopack is Next.jss new rendering engine, and this version includes a number of improvements, such as better performance and support for dynamic imports.
            Next.js Cache (beta). This new feature allows you to cache the output of your Next.js application, which can improve performance and reduce bandwidth usage.
          </p>
          <p className="my-4">
            <span>NEXT AUTH : </span>

            The latest version of NextAuth.js is 4.23.0, released on August 12, 2023. This version includes a number of new features and improvements, including:

            Passage by 1Password integration: NextAuth.js now supports the Passage by 1Password authentication provider. This allows users to sign in to your application using their 1Password credentials.
            Improved TypeScript support: The TypeScript support in NextAuth.js has been improved in this version. This makes it easier to use NextAuth.js with TypeScript projects.
            Bug fixes: A number of bugs have been fixed in this version, including a bug that prevented users from signing in using the Apple provider.
            Overall, NextAuth.js 4.23.0 is a significant release that includes a number of new features and improvements. If you are using NextAuth.js, I recommend upgrading to this version.
          </p>
          <p className="my-4">
            <span>GENERATE META DATA : </span>

            The generateMetadata function in Next.js is used to define dynamic metadata for a page or layout. Metadata is information about a page that is used by search engines and other applications to index and display the page. It can include things like the title, description, keywords, and canonical URL.
          </p>
          <p className="my-4">
            <span>MONGO DB: </span>


            MongoDB is a document-oriented database management system (DBMS) that uses JSON-like documents with dynamic schemas. This makes it very flexible and scalable, and it is a popular choice for modern web applications.

            MongoDB stores data in collections, which are similar to tables in traditional relational databases. However, documents in a MongoDB collection can have different schemas, which means that they do not need to have the same columns. This makes it very easy to store and query semi-structured and unstructured data.

            MongoDB is also horizontally scalable, which means that it can be easily scaled by adding more servers. This makes it a good choice for applications that need to handle large amounts of data.
          </p>
        </div>
      </Modal>
      {/* amlak */}




      <SiteLoader />
      <header>
        <div className="flex justify-between items-center gap-2  sm:w-8/12 mx-auto">
          <Image
            width={400}
            height={400}
            alt="star"
            src={"/star-2.png"}
            className="w-16"
          />
          <p className="uppercase text-white font-bold big-text">
            all-projects
          </p>
          <Image
            width={400}
            height={400}
            alt="star"
            src={"/star-2.png"}
            className="w-16"
          />
        </div>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4    gap-4        ">
        <div className="card card-project ">
          <div className="image-box__project">
            <Image
              src="/project1.png"
              width={400}
              height={400}
              alt="sign"
              className="w-full rounded-3xl"
            />
          </div>

          <div className="flex justify-between items-start gap-2 mt-2">
            <div className="flex justify-between items-start flex-col gap-2">
              <p className="uppercase text-xs font-bold">show case</p>
              <p className="text-white text-xl font-bold capitalize">
                matrix store (nextjs)
              </p>
            </div>
          </div>
          <div >
            <button
              type="button"
              className="btn btn-primary text-center w-full"
              onClick={() => setActiveModal(1)}
            >
              Details
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <a
              href="https://matrixstore-zangiabadi.iran.liara.run/"
              className="btn-sm btn-secondary text-center"
              rel="noreferrer"
              target="_blank"
            >
              Live
            </a>
            <a
              rel="noreferrer"
              target="_blank"

              href="https://github.com/amirzangi31/ecommerce_next"
              className="btn-sm btn-secondary text-center"
            >
              Source
            </a>
          </div>
        </div>
        <div className="card card-project ">
          <div className="image-box__project">
            <Image
              src="/project2.png"
              width={400}
              height={400}
              alt="sign"
              className="w-full rounded-3xl"
            />
          </div>

          <div className="flex justify-between items-start gap-2 mt-2">
            <div className="flex justify-between items-start flex-col gap-2">
              <p className="uppercase text-xs font-bold">show case</p>
              <p className="text-white text-xl font-bold capitalize">
                store (react js)
              </p>
            </div>
          </div>
          <div >
            <button
              type="button"
              className="btn btn-primary text-center w-full"
              onClick={() => setActiveModal(2)}

            >
              Details
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <a
              href="https://zangiabadi-shop.netlify.app"
              className="btn-sm btn-secondary text-center"
              rel="noreferrer"
              target="_blank"
            >
              Live
            </a>
            <a
              rel="noreferrer"
              target="_blank"

              href="https://github.com/amirzangi31/sore_redux"
              className="btn-sm btn-secondary text-center"
            >
              Source
            </a>
          </div>
        </div>
        <div className="card card-project ">
          <div className="image-box__project">
            <Image
              src="/project3.png"
              width={400}
              height={400}
              alt="sign"
              className="w-full rounded-3xl"
            />
          </div>

          <div className="flex justify-between items-start gap-2 mt-2">
            <div className="flex justify-between items-start flex-col gap-2">
              <p className="uppercase text-xs font-bold">show case</p>
              <p className="text-white text-xl font-bold capitalize">
                packages (react js)
              </p>
            </div>
          </div>
          <div >
            <button
              type="button"
              className="btn btn-primary text-center w-full"
              onClick={() => setActiveModal(3)}

            >
              Details
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <a
              href="https://zangiabadi-packages.netlify.app/"
              className="btn-sm btn-secondary text-center"
              rel="noreferrer"
              target="_blank"
            >
              Live
            </a>
            <a
              rel="noreferrer"
              target="_blank"

              href="https://zangiabadi-packages.netlify.app/"
              className="btn-sm btn-secondary text-center"
            >
              Source
            </a>
          </div>
        </div>
        <div className="card card-project ">
          <div className="image-box__project">
            <Image
              src="/project4.png"
              width={400}
              height={400}
              alt="sign"
              className="w-full rounded-3xl"
            />
          </div>

          <div className="flex justify-between items-start gap-2 mt-2">
            <div className="flex justify-between items-start flex-col gap-2">
              <p className="uppercase text-xs font-bold">show case</p>
              <p className="text-white text-xl font-bold capitalize">
                form (react js)
              </p>
            </div>
          </div>
          <div >
            <button
              type="button"
              className="btn btn-primary text-center w-full"
              onClick={() => setActiveModal(4)}

            >
              Details
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <a
              href="https://github.com/amirzangi31/form_project"
              rel="noreferrer"
              target="_blank"
              className="btn-sm btn-secondary text-center"
            >
              Live
            </a>
            <a
              href="https://github.com/amirzangi31/form_project"
              className="btn-sm btn-secondary text-center"
            >
              Source
            </a>
          </div>
        </div>
        <div className="card card-project ">
          <div className="image-box__project">
            <Image
              src="/project5.png"
              width={400}
              height={400}
              alt="sign"
              className="w-full rounded-3xl"
            />
          </div>

          <div className="flex justify-between items-start gap-2 mt-2">
            <div className="flex justify-between items-start flex-col gap-2">
              <p className="uppercase text-xs font-bold">show case</p>
              <p className="text-white text-xl font-bold capitalize">
                resume (next js)
              </p>
            </div>
          </div>
          <div >
            <button
              type="button"
              className="btn btn-primary text-center w-full"
              onClick={() => setActiveModal(5)}

            >
              Details
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <a
              href="https://resume-zangiabadi.iran.liara.run"
              rel="noreferrer"
              target="_blank"
              className="btn-sm btn-secondary text-center"
            >
              Live
            </a>
            <a
              href="https://github.com/amirzangi31/resume"
              rel="noreferrer"
              target="_blank"
              className="btn-sm btn-secondary text-center"
            >
              Source
            </a>
          </div>
        </div>
        <div className="card card-project ">
          <div className="image-box__project">
            <Image
              src="/project6.png"
              width={400}
              height={400}
              alt="sign"
              className="w-full rounded-3xl"
            />
          </div>

          <div className="flex justify-between items-start gap-2 mt-2">
            <div className="flex justify-between items-start flex-col gap-2">
              <p className="uppercase text-xs font-bold">show case</p>
              <p className="text-white text-xl font-bold capitalize">
                Amlak (next js)
              </p>
            </div>
          </div>
          <div >
            <button
              type="button"
              className="btn btn-primary text-center w-full"
              onClick={() => setActiveModal(6)}

            >
              Details
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <a
              href="https://amlak-zangiabadi.iran.liara.run"
              rel="noreferrer"
              target="_blank"
              className="btn-sm btn-secondary text-center"
            >
              Live
            </a>
            <a
              href="https://github.com/amirzangi31/amlak_project"
              rel="noreferrer"
              target="_blank"
              className="btn-sm btn-secondary text-center"
            >
              Source
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorksPage;
