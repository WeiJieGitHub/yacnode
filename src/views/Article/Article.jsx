import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import highlight from 'highlight.js';
import 'highlight.js/styles/github.css';
import Container from 'components/Container/Container';
import Loading from 'components/Loading/Loading';
import CSSModules from 'react-css-modules';
import icons from 'styles/icons.scss';
import { timeFlies } from 'utils/utils';
import { fetchArticleContent, initialState } from './ArticleRedux';
import styles from './Article.scss';

function createMarkup(markup) {
  return { __html: markup };
}

highlight.configure({
  tabReplace: '  ', // 2 spaces
});

export class Article extends Component {
  componentDidMount() {
    const { history } = this.props;
    const { id } = this.props.match.params;
    console.log(this.props.article);
    if (history.action === 'PUSH' || this.props.article.id.length === 0) {
      this.fetchData(id);
    } else if (history.action === 'POP' && this.props.article.id !== id) {
      this.fetchData(id);
    }
  }

  componentDidUpdate() {
    Array.prototype.slice.call(document.querySelectorAll('pre code')).forEach((block) => {
      highlight.highlightBlock(block);
    });
  }

  fetchData(id) {
    this.props.fetchArticleContent({ id });
  }

  render() {
    const { article, loadState } = this.props;
    let result;

    if (loadState === 'READY') {
      const comments = article.replies.map((comment, i) => (
        <div styleName="comment" key={comment.id}>
          <div styleName="comment__avatar">
            <img
              src={comment.author.avatar_url}
              alt={comment.author.loginname}
            />
            <div styleName="comment__loginname">{comment.author.loginname}</div>
          </div>
          <div styleName="comment__content">
            <div
              dangerouslySetInnerHTML={createMarkup(comment.content)}
            />
            <div styleName="comment__info">{timeFlies(comment.create_at)}</div>
          </div>
          <div styleName="comment__floor">
            <span>#{i + 1}</span>
          </div>
        </div>
      ));
      result = (
        <Container>
          <div styleName="header">
            <div styleName="avatar">
              <img src={article.author.avatar_url} alt={article.author.loginname} />
              <div styleName="loginname">{article.author.loginname}</div>
            </div>
            <div styleName="title-wrapper">
              <div styleName="title">{article.title}</div>
              <div styleName="info">
                <span>{timeFlies(article.create_at)}</span>
                <span styleName="data">
                  <span>
                    <i className={icons['icon-eye']} /> {article.visit_count}
                  </span>
                  <span>
                    <i className={icons['icon-chat']} /> {article.reply_count}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <article styleName="wrapper" dangerouslySetInnerHTML={createMarkup(article.content)} />
          <div styleName="comment-wrapper">
            <h3>评论</h3>
            {comments.length > 0 ? comments : <span>暂无评论</span>}
          </div>
        </Container>
      );
    } else {
      result = <Loading />;
    }
    return result;
  }
}

Article.propTypes = {
  loadState: PropTypes.string,
  article: PropTypes.shape({
    id: PropTypes.string,
    author_id: PropTypes.string,
    tab: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.shape({
      avatar_url: PropTypes.string,
      loginname: PropTypes.string,
    }),
    replies: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.shape({
          avatar_url: PropTypes.string,
          loginname: PropTypes.string,
        }),
        content: PropTypes.string,
        id: PropTypes.string,
      }),
    ),
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  fetchArticleContent: PropTypes.func,
  history: PropTypes.shape({
    action: PropTypes.string,
  }),
};

Article.defaultProps = Object.assign({
  match: {
    params: {
      id: '',
    },
  },
  fetchArticleContent: () => null,
  history: {
    action: '',
  },
}, initialState);

export default connect(
  state => state.article,
  dispatch => ({ fetchArticleContent: bindActionCreators(fetchArticleContent, dispatch) }),
)(CSSModules(Article, styles));
