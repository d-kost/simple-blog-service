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
    act(() => {
      render(
        <BrowserRouter>
          <BlogPost
            post={post}
            userPicture={''}
            visiblePostVolume={550}
            currentUserNickname={'test'}
            likePost={likePost}
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

  });

  it('long post with clicks', () => {
    act(() => {
      render(
        <BrowserRouter>
          <BlogPost
            post={post}
            userPicture={''}
            visiblePostVolume={5}
            currentUserNickname={'test'}
            likePost={jest.fn()}
          />
        </BrowserRouter>,
        container);
    });
    expect(container.querySelector('.post__hiding-text').textContent).toBe('text');

    const openButton = document.querySelector('.post__open-btn');
    expect(openButton.innerHTML).toBe('Show more');

    act(() => {
      openButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(openButton.innerHTML).toBe("Hide text");
  })
})
