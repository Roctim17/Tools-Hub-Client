import React from 'react';

const Blog = () => {
    return (
        <div>
            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    1 How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content">
                    <p>Keeping component state local where necessary.</p>
                    <p>optimization the large picture </p>
                    <p>Memoizing React components to prevent unnecessary re-renders.</p>
                    <p>Windowing or list virtualization in React.</p>
                </div>
            </div>
            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    2 What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>Local state.</p>
                    <p>Global state.</p>
                    <p>Server state.</p>
                    <p>URL state.</p>
                </div>
            </div>
            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    3 How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>
                </div>
            </div>
            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                </div>
                <div className="collapse-content">
                    <p>One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.</p>
                </div>
            </div>
            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div className="collapse-content">
                    <p></p>
                </div>
            </div>
            <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    6 What is a unit test? Why should write unit tests?
                </div>
                <div className="collapse-content">
                    <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;