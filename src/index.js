import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Index() {
    return (
        <div className='tweet'>
            <Avatar />
            <div className='flex'>
                <div className='content'>
                    <Author /> <Time />
                    <Message />
                </div>
                <div className='buttons'>
                    <ReplyButton />
                    <RetweetButton />
                    <LikeButton />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    )
}

function Avatar() {
    return (
        <img src="https://avatars.githubusercontent.com/u/49276225?v=4"
            className='avatar'
            alt="avatar"
        />
    )

}



function Message() {
    return (
        <div className="message">
            This is less than 140 characters.
        </div>
    );
}

function Author() {
    return (
        <span className='author'>
            <span className="name">Muhammad Shoaib Tahir</span>
            <span className="handle">@yourhandle</span>
        </span>
    );
}

// Transition from Normal function to Arrow Function

// 1).
// Here's a normal function component:
function Time() {
    return (
        <span className='time'>3h ago</span>
    )
}


// 2).
// It can be rewritten as an
// anonymous function and stored in a
// (constant) variable:
const ReplyButton = function () {
    <i className="fa fa-reply reply-button" />
}


// 3).
// The anonymous function can be
// turned into an arrow function:
const RetweetButton = () => {
    return (
        <i className="fa fa-retweet retweet-button" />
    )
}


// 4).
// It can be simplified by removing
// the braces and the `return`:
const LikeButton = () => (
    <i className="fa fa-heart like-button" />
)


// 5).
// And if it's really simple,
// you can even write it on one line:
const MoreOptionsButton = () => <i className='fa fa-ellipsis-h more-options-button' />


ReactDOM.render(
    <Index />,
    document.querySelector("#root")
)