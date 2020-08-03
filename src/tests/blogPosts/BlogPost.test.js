import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from 'react-router-dom';

import BlogPost from '../../components/blogPosts/BlogPost';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('render blog post', () => {
  const post = {
    id: 12,
    authorNickname: 'ivan',
    likes: [],
    text: 'some text'
  };

  it('short post', () => {

    const likePost = jest.fn();
    const deletePost = jest.fn();
    act(() => {
      render(
        <BrowserRouter>
          <BlogPost
            post={post}
            userPicture={''}
            visiblePostHeightProp={150}
            currentUserNickname={'test'}
            likePost={likePost}
            deletePost={deletePost}
          />
        </BrowserRouter>,
        container);
    });
    expect(container.querySelector('.post-author__nickname').textContent).toBe('ivan');
    expect(container.querySelector('.post__open-btn')).toBeNull();

    const likeAmount = container.querySelector('.post-like__amount');
    expect(likeAmount.textContent).toBe('Likes: 0');

    //like post
    const likeBtn = container.querySelector('.post-like__button');

    act(() => {
      likeBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(likePost).toHaveBeenCalled();
    expect(likePost).toHaveBeenCalledTimes(1);

    //no delete button
    expect(container.querySelector('.post__delete-btn')).toBeNull();

  });

  it('post author can delete post', () => {

    const deletePost = jest.fn();
    act(() => {
      render(
        <BrowserRouter>
          <BlogPost
            post={post}
            userPicture={''}
            visiblePostHeightProp={150}
            currentUserNickname={'ivan'}
            likePost={jest.fn()}
            deletePost={deletePost}
          />
        </BrowserRouter>,
        container);
    });

    const deleteBtn = container.querySelector('.post__delete-btn');
    expect(deleteBtn).not.toBeNull();

    act(() => {
      deleteBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(deletePost).toHaveBeenCalled();
    expect(deletePost).toHaveBeenCalledWith(12);

  });

})
