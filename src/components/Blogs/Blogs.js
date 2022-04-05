import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h3>Question:What is Context API?</h3>
            <p><b>Answer:</b> Context API in react is a way to pass data around other components. This is a way of avoiding props drilling. Meaning : We can pass data from grand parent to children with out involving parent. Through context API data can be shared which considered 'global among react tree.
                COntext API can be very usefull in creating  theme, or managing preferred language</p>
            <h3><b>Question: </b>Differences between inline, block and inline-block element?</h3>
            <p><b>Answer:</b><br />
                <b>Block Element:</b> An block type element start on a new line. <br />
                An block type element contains full width <br />
                Exaple: P tag, div tag <br />
                We can set height and width properties <br />

                <b>Inline Element:</b> <br />
                An inline element does not start on a new line. <br />
                An inline element does not contains full width.<br />
                Any height and width properties will have no effect on inline element
                Exaple: span tag <br />
                <b>Inline-block Element:</b> <br />
                An inline-block element does not start on a new line. <br />
                An inline-block element does not contains full width.<br />
                height and width properties will have effect on inline-block element
                 <br />
            </p>
        </div>
    );
};

export default Blogs;